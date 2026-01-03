const https = require('https');

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

function httpsRequest(options, postData) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        resolve({ statusCode: res.statusCode, body: data });
      });
    });
    req.on('error', reject);
    if (postData) req.write(postData);
    req.end();
  });
}

async function getAccessToken(tenantId, clientId, clientSecret) {
  const tokenData = `client_id=${encodeURIComponent(clientId)}&scope=${encodeURIComponent('https://graph.microsoft.com/.default')}&client_secret=${encodeURIComponent(clientSecret)}&grant_type=client_credentials`;

  const response = await httpsRequest({
    hostname: 'login.microsoftonline.com',
    path: `/${tenantId}/oauth2/v2.0/token`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(tokenData),
    },
  }, tokenData);

  if (response.statusCode !== 200) {
    throw new Error(`Token request failed: ${response.statusCode} - ${response.body}`);
  }

  const tokenResponse = JSON.parse(response.body);
  return tokenResponse.access_token;
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

  context.log('Acquiring access token...');
  const accessToken = await getAccessToken(tenantId, clientId, clientSecret);
  context.log('Access token acquired successfully');

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

  const messageBody = JSON.stringify(message);

  context.log('Sending email via Graph API...');
  const response = await httpsRequest({
    hostname: 'graph.microsoft.com',
    path: `/v1.0/users/${encodeURIComponent(fromEmail)}/sendMail`,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(messageBody),
    },
  }, messageBody);

  if (response.statusCode !== 202 && response.statusCode !== 200) {
    context.log.error('Graph API error:', response.statusCode, response.body);
    throw new Error(`Graph API error: ${response.statusCode} - ${response.body}`);
  }

  context.log('Email sent successfully');
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
