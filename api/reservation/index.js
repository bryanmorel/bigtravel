const { ConfidentialClientApplication } = require('@azure/msal-node');
const fetch = require('node-fetch');

function json(res, status, body) {
  res.status = status;
  res.headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store',
  };
  res.body = body;
  return res;
}

function requireString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function sanitize(value, maxLen = 500) {
  if (value == null) return '';
  const s = String(value).trim();
  return s.length > maxLen ? s.slice(0, maxLen) : s;
}

function asInt(value, fallback) {
  const n = Number(value);
  if (!Number.isFinite(n)) return fallback;
  return Math.round(n);
}

function parseBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return null;
    }
  }
  return null;
}

function formatEmailHtml(data) {
  return `
    <h2>New Reservation Request - Big Travel</h2>
    <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
      <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.name}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Phone/WhatsApp</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.phone}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Language</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.language}</td></tr>
      <tr><td colspan="2" style="padding: 8px; border: 1px solid #ddd; background: #e9e9e9;"><strong>Rental Details</strong></td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Pickup Date</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.pickupDate}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Return Date</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.returnDate}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Pickup Location</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.pickupLocation}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Dropoff Location</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.dropoffLocation}</td></tr>
      <tr><td colspan="2" style="padding: 8px; border: 1px solid #ddd; background: #e9e9e9;"><strong>Vehicle Preferences</strong></td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Category</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.category}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Transmission</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.transmission}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Passengers</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.passengers}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Luggage</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.luggage}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Notes</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.notes || '-'}</td></tr>
    </table>
    <p style="color: #666; font-size: 12px; margin-top: 20px;">Request submitted: ${data.createdAt || new Date().toISOString()}</p>
  `;
}

function formatEmailText(data) {
  const lines = [
    'New reservation request (Big Travel)',
    '',
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone/WhatsApp: ${data.phone}`,
    `Preferred language: ${data.language}`,
    '',
    `Pickup date: ${data.pickupDate}`,
    `Return date: ${data.returnDate}`,
    `Pickup location: ${data.pickupLocation}`,
    `Dropoff location: ${data.dropoffLocation}`,
    '',
    `Category: ${data.category}`,
    `Transmission: ${data.transmission}`,
    `Passengers: ${data.passengers}`,
    `Luggage: ${data.luggage}`,
    '',
    `Notes: ${data.notes || '-'}`,
    '',
    `CreatedAt: ${data.createdAt || '-'}`
  ];

  return lines.join('\n');
}

async function sendMailWithGraph(toEmail, fromEmail, replyTo, subject, htmlBody, textBody, context) {
  const tenantId = process.env.AZURE_TENANT_ID;
  const clientId = process.env.AZURE_CLIENT_ID;
  const clientSecret = process.env.AZURE_CLIENT_SECRET;

  if (!tenantId || !clientId || !clientSecret) {
    throw new Error('Missing Azure AD credentials (AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_CLIENT_SECRET)');
  }

  const msalConfig = {
    auth: {
      clientId,
      clientSecret,
      authority: `https://login.microsoftonline.com/${tenantId}`,
    },
  };

  const cca = new ConfidentialClientApplication(msalConfig);
  const tokenResponse = await cca.acquireTokenByClientCredential({
    scopes: ['https://graph.microsoft.com/.default'],
  });

  if (!tokenResponse || !tokenResponse.accessToken) {
    throw new Error('Failed to acquire access token');
  }

  const message = {
    message: {
      subject,
      body: {
        contentType: 'HTML',
        content: htmlBody,
      },
      toRecipients: [
        {
          emailAddress: { address: toEmail },
        },
      ],
      replyTo: [
        {
          emailAddress: { address: replyTo },
        },
      ],
    },
    saveToSentItems: false,
  };

  const response = await fetch(
    `https://graph.microsoft.com/v1.0/users/${fromEmail}/sendMail`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${tokenResponse.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    context.log.error('Graph API error:', response.status, errorText);
    throw new Error(`Graph API error: ${response.status}`);
  }
}

module.exports = async function (context, req) {
  try {
    const body = parseBody(req);
    if (!body) return json(context.res, 400, { error: 'Invalid JSON body' });

    const data = {
      name: sanitize(body.name, 120),
      email: sanitize(body.email, 180),
      phone: sanitize(body.phone, 80),
      language: sanitize(body.language, 8) || 'en',

      pickupDate: sanitize(body.pickupDate, 30),
      returnDate: sanitize(body.returnDate, 30),
      pickupLocation: sanitize(body.pickupLocation, 180),
      dropoffLocation: sanitize(body.dropoffLocation, 180),

      category: sanitize(body.category, 40),
      transmission: sanitize(body.transmission, 20),
      passengers: asInt(body.passengers, 0),
      luggage: asInt(body.luggage, 0),
      notes: sanitize(body.notes, 1200),

      createdAt: sanitize(body.createdAt, 40),
    };

    const requiredOk =
      requireString(data.name) &&
      requireString(data.email) &&
      requireString(data.phone) &&
      requireString(data.pickupDate) &&
      requireString(data.returnDate) &&
      requireString(data.pickupLocation) &&
      requireString(data.dropoffLocation) &&
      requireString(data.category) &&
      requireString(data.transmission) &&
      data.passengers > 0 &&
      data.luggage >= 0;

    if (!requiredOk) return json(context.res, 400, { error: 'Missing required fields' });

    if (data.returnDate <= data.pickupDate) {
      return json(context.res, 400, { error: 'Invalid date range' });
    }

    const toEmail = process.env.NOTIFY_TO_EMAIL;
    const fromEmail = process.env.NOTIFY_FROM_EMAIL;

    if (!toEmail || !fromEmail) {
      context.log.warn('Missing email env vars. Set NOTIFY_TO_EMAIL, NOTIFY_FROM_EMAIL.');
      return json(context.res, 500, { error: 'Server email configuration missing' });
    }

    const subject = `Big Travel reservation request — ${data.pickupDate} → ${data.returnDate}`;

    await sendMailWithGraph(
      toEmail,
      fromEmail,
      data.email,
      subject,
      formatEmailHtml(data),
      formatEmailText(data),
      context
    );

    return json(context.res, 200, { ok: true });
  } catch (err) {
    context.log.error('Reservation handler failed:', err.message, err.stack);
    return json(context.res, 500, { error: 'Internal server error' });
  }
};
