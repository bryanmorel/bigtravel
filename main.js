const fleetModels = [
  'Mazda CX-5',
  'Kia Picanto',
  'Nissan March',
  'Chevrolet Onix',
  'VW Golf',
  'Chevrolet Onix Hatchback',
  'Kia Rio',
  'Nissan Versa',
  'Mazda 2 Sedan',
  'Mazda 4 Sedan',
  'Chevrolet Tracker',
  'Kia Sportage',
  'Renault Koleos',
  'Toyota Fortuner SW',
  'Toyota 4Runner',
  'Toyota TXL',
  'Chevrolet Trailblazer',
  'Renault Kwid (Manual)',
];

const categories = [
  {
    id: 'economy',
    name: { en: 'Economy / City', es: 'Económico / Ciudad' },
    desc: {
      en: 'Great for city driving and fuel savings.',
      es: 'Ideal para ciudad y ahorro de combustible.',
    },
    features: {
      en: ['4 seats', 'Compact size', 'Easy parking'],
      es: ['4 asientos', 'Tamaño compacto', 'Fácil de estacionar'],
    },
    examples: ['Kia Picanto', 'Nissan March', 'Renault Kwid'],
  },
  {
    id: 'compact',
    name: { en: 'Compact', es: 'Compacto' },
    desc: {
      en: 'Comfortable for 2–4 people with luggage.',
      es: 'Cómodo para 2–4 personas con maletas.',
    },
    features: {
      en: ['Air conditioning', 'Bluetooth / USB', 'Good trunk'],
      es: ['Aire acondicionado', 'Bluetooth / USB', 'Buen maletero'],
    },
    examples: ['Chevrolet Onix', 'Chevrolet Onix Hatchback', 'Kia Rio', 'VW Golf'],
  },
  {
    id: 'sedan',
    name: { en: 'Sedan', es: 'Sedán' },
    desc: {
      en: 'More space and comfort for longer trips.',
      es: 'Más espacio y comodidad para viajes largos.',
    },
    features: {
      en: ['5 seats', 'Comfort ride', 'Bigger trunk'],
      es: ['5 asientos', 'Conducción cómoda', 'Maletero amplio'],
    },
    examples: ['Nissan Versa', 'Mazda 2 Sedan', 'Mazda 4 Sedan'],
  },
  {
    id: 'suv',
    name: { en: 'SUV', es: 'SUV' },
    desc: {
      en: 'Higher ride and extra cargo room.',
      es: 'Mayor altura y más espacio de carga.',
    },
    features: {
      en: ['5 seats', 'More ground clearance', 'Great for families'],
      es: ['5 asientos', 'Mayor altura al suelo', 'Ideal para familias'],
    },
    examples: ['Mazda CX-5', 'Chevrolet Tracker', 'Kia Sportage', 'Renault Koleos'],
  },
  {
    id: '4x4',
    name: { en: 'SUV / 4x4 (Large)', es: 'SUV / 4x4 (Grande)' },
    desc: {
      en: 'Bigger vehicles for groups, comfort, and routes that need it.',
      es: 'Vehículos grandes para grupos, comodidad y rutas exigentes.',
    },
    features: {
      en: ['7 seats (varies)', 'Large cargo', 'Power & comfort'],
      es: ['7 asientos (según modelo)', 'Gran capacidad', 'Potencia y confort'],
    },
    examples: ['Toyota Fortuner', 'Toyota 4Runner', 'Toyota TXL', 'Chevrolet Trailblazer'],
  },
];

const i18n = {
  en: {
    'nav.fleet': 'Fleet',
    'nav.how': 'How it works',
    'nav.request': 'Request',

    'cta.request': 'Request reservation',
    'cta.viewFleet': 'View fleet',

    'hero.badge': 'Simple, fast reservation requests',
    'hero.title': 'Car rental for your next trip',
    'hero.subtitle':
      'Choose the car size and features you need, share your dates, and we’ll confirm availability and pricing.',
    'hero.disclaimer': 'Vehicles shown are examples. Exact model depends on availability.',

    'stats.support': 'Fast response',
    'stats.supportDesc': 'We reply within business hours',
    'stats.fleet': 'Mixed fleet',
    'stats.fleetDesc': 'City cars to SUVs / 4x4',
    'stats.mobile': 'Mobile-first',
    'stats.mobileDesc': 'Easy booking from your phone',

    'fleet.title': 'Fleet & examples',
    'fleet.subtitle':
      'Pick a category (size & features). We’ll match you with the closest available vehicle from our fleet.',
    'fleet.seeModels': 'See our current fleet models',

    'how.title': 'How it works',
    'how.step1Title': '1) Tell us your needs',
    'how.step1Desc': 'Dates, pickup/dropoff, category, passengers, and transmission.',
    'how.step2Title': '2) We confirm options',
    'how.step2Desc': 'We’ll reply with availability and price for the closest match in our fleet.',
    'how.step3Title': '3) Finalize reservation',
    'how.step3Desc': 'We’ll collect the remaining details to complete the booking.',

    'request.title': 'Request a reservation',
    'request.subtitle': 'Fill out the form and we’ll get back to you.',

    'form.name': 'Full name',
    'form.email': 'Email',
    'form.phone': 'Phone / WhatsApp',
    'form.language': 'Preferred language',
    'form.pickupDate': 'Pickup date',
    'form.returnDate': 'Return date',
    'form.pickupLocation': 'Pickup location',
    'form.dropoffLocation': 'Dropoff location',
    'form.category': 'Vehicle category',
    'form.transmission': 'Transmission',
    'form.transEither': 'Either',
    'form.transAuto': 'Automatic',
    'form.transManual': 'Manual',
    'form.passengers': 'Passengers',
    'form.luggage': 'Luggage',
    'form.notes': 'Notes (optional)',
    'form.submit': 'Send request',
    'form.hint': 'We’ll contact you to confirm availability and finalize.',

    'side.title': 'What we need',
    'side.item1': 'Dates and locations',
    'side.item2': 'Category and transmission',
    'side.item3': 'Passengers and luggage',
    'side.disclaimer': 'Your request is not a confirmed booking until we reply.',

    'footer.meta': 'Car rental reservation requests',
    'footer.request': 'Request',
    'footer.fleet': 'Fleet',

    'toast.ok': 'Thanks! Your request was sent. We’ll contact you soon.',
    'toast.err': 'Sorry — we could not send your request. Please try again.',
    'toast.validation': 'Please fill out all required fields.',
    'toast.dateOrder': 'Return date must be after pickup date.',
  },
  es: {
    'nav.fleet': 'Flota',
    'nav.how': 'Cómo funciona',
    'nav.request': 'Solicitud',

    'cta.request': 'Solicitar reserva',
    'cta.viewFleet': 'Ver flota',

    'hero.badge': 'Solicitudes de reserva simples y rápidas',
    'hero.title': 'Renta de autos para tu próximo viaje',
    'hero.subtitle':
      'Elige el tamaño y las características que necesitas, comparte tus fechas y confirmaremos disponibilidad y precio.',
    'hero.disclaimer': 'Los vehículos mostrados son ejemplos. El modelo exacto depende de la disponibilidad.',

    'stats.support': 'Respuesta rápida',
    'stats.supportDesc': 'Respondemos en horario laboral',
    'stats.fleet': 'Flota variada',
    'stats.fleetDesc': 'Autos urbanos hasta SUVs / 4x4',
    'stats.mobile': 'Diseño móvil',
    'stats.mobileDesc': 'Solicitud fácil desde tu teléfono',

    'fleet.title': 'Flota y ejemplos',
    'fleet.subtitle':
      'Elige una categoría (tamaño y características). Te asignaremos el vehículo más cercano disponible en nuestra flota.',
    'fleet.seeModels': 'Ver modelos actuales de la flota',

    'how.title': 'Cómo funciona',
    'how.step1Title': '1) Cuéntanos lo que necesitas',
    'how.step1Desc': 'Fechas, lugar de entrega/devolución, categoría, pasajeros y transmisión.',
    'how.step2Title': '2) Confirmamos opciones',
    'how.step2Desc': 'Te responderemos con disponibilidad y precio del vehículo más similar en nuestra flota.',
    'how.step3Title': '3) Finalizamos la reserva',
    'how.step3Desc': 'Solicitaremos los datos restantes para completar la reservación.',

    'request.title': 'Solicitar una reserva',
    'request.subtitle': 'Completa el formulario y te contactaremos.',

    'form.name': 'Nombre completo',
    'form.email': 'Correo',
    'form.phone': 'Teléfono / WhatsApp',
    'form.language': 'Idioma preferido',
    'form.pickupDate': 'Fecha de entrega',
    'form.returnDate': 'Fecha de devolución',
    'form.pickupLocation': 'Lugar de entrega',
    'form.dropoffLocation': 'Lugar de devolución',
    'form.category': 'Categoría de vehículo',
    'form.transmission': 'Transmisión',
    'form.transEither': 'Cualquiera',
    'form.transAuto': 'Automática',
    'form.transManual': 'Manual',
    'form.passengers': 'Pasajeros',
    'form.luggage': 'Maletas',
    'form.notes': 'Notas (opcional)',
    'form.submit': 'Enviar solicitud',
    'form.hint': 'Te contactaremos para confirmar disponibilidad y finalizar.',

    'side.title': 'Qué necesitamos',
    'side.item1': 'Fechas y ubicaciones',
    'side.item2': 'Categoría y transmisión',
    'side.item3': 'Pasajeros y maletas',
    'side.disclaimer': 'Tu solicitud no es una reserva confirmada hasta que respondamos.',

    'footer.meta': 'Solicitudes de reserva de renta de autos',
    'footer.request': 'Solicitud',
    'footer.fleet': 'Flota',

    'toast.ok': '¡Gracias! Enviamos tu solicitud. Te contactaremos pronto.',
    'toast.err': 'Lo sentimos — no pudimos enviar tu solicitud. Inténtalo de nuevo.',
    'toast.validation': 'Completa los campos requeridos.',
    'toast.dateOrder': 'La devolución debe ser después de la entrega.',
  },
};

function getLang() {
  const stored = localStorage.getItem('bt_lang');
  if (stored === 'en' || stored === 'es') return stored;
  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return browser === 'es' ? 'es' : 'en';
}

function setLang(lang) {
  localStorage.setItem('bt_lang', lang);
  document.documentElement.lang = lang;
  document.querySelector('#langLabel').textContent = lang === 'en' ? 'ES' : 'EN';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = i18n[lang][key];
    if (typeof value === 'string') el.textContent = value;
  });

  renderCategories(lang);
  renderModels();

  const languageSelect = document.querySelector('select[name="language"]');
  if (languageSelect) languageSelect.value = lang;
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('bt_theme', next);
}

function renderModels() {
  const el = document.getElementById('modelList');
  el.innerHTML = '';

  const sorted = [...fleetModels].sort((a, b) => a.localeCompare(b));
  for (const model of sorted) {
    const tag = document.createElement('span');
    tag.className = 'model-tag';
    tag.textContent = model;
    el.appendChild(tag);
  }
}

function renderCategories(lang) {
  const grid = document.getElementById('categoryGrid');
  const select = document.getElementById('categorySelect');

  grid.innerHTML = '';
  select.innerHTML = '';

  for (const c of categories) {
    const card = document.createElement('div');
    card.className = 'card category';

    const top = document.createElement('div');
    top.className = 'category-top';

    const titleWrap = document.createElement('div');

    const h3 = document.createElement('h3');
    h3.textContent = c.name[lang];

    const p = document.createElement('p');
    p.style.margin = '8px 0 0';
    p.style.color = 'var(--muted)';
    p.textContent = c.desc[lang];

    titleWrap.appendChild(h3);
    titleWrap.appendChild(p);

    const pickBtn = document.createElement('button');
    pickBtn.className = 'btn btn-secondary';
    pickBtn.type = 'button';
    pickBtn.textContent = lang === 'es' ? 'Elegir' : 'Choose';
    pickBtn.addEventListener('click', () => {
      select.value = c.id;
      document.querySelector('#request').scrollIntoView({ behavior: 'smooth' });
      select.focus();
    });

    top.appendChild(titleWrap);
    top.appendChild(pickBtn);

    const pills = document.createElement('div');
    pills.className = 'pills';

    for (const f of c.features[lang]) {
      const pill = document.createElement('span');
      pill.className = 'pill';
      pill.textContent = f;
      pills.appendChild(pill);
    }

    // Examples (always as model names)
    const ex = document.createElement('div');
    ex.className = 'pills';
    for (const e of c.examples.slice(0, 3)) {
      const pill = document.createElement('span');
      pill.className = 'pill';
      pill.textContent = e;
      ex.appendChild(pill);
    }

    const exLabel = document.createElement('div');
    exLabel.style.marginTop = '10px';
    exLabel.style.color = 'var(--muted)';
    exLabel.textContent = lang === 'es' ? 'Ejemplos:' : 'Examples:';

    card.appendChild(top);
    card.appendChild(pills);
    card.appendChild(exLabel);
    card.appendChild(ex);

    grid.appendChild(card);

    const opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = c.name[lang];
    select.appendChild(opt);
  }
}

function showToast(kind, message) {
  const toast = document.getElementById('formToast');
  toast.className = `toast show ${kind}`;
  toast.textContent = message;
  window.clearTimeout(showToast._t);
  showToast._t = window.setTimeout(() => {
    toast.className = 'toast';
    toast.textContent = '';
  }, 5200);
}

async function submitReservation(form, lang) {
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  // Normalize numbers
  payload.passengers = Number(payload.passengers);
  payload.luggage = Number(payload.luggage);
  payload.createdAt = new Date().toISOString();
  payload.siteLang = lang;

  const res = await fetch('/api/reservation', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    let msg = 'Request failed';
    try {
      const data = await res.json();
      if (data && data.error) msg = data.error;
    } catch {
      // ignore
    }
    throw new Error(msg);
  }
}

function init() {
  const lang = getLang();

  document.getElementById('langToggle').addEventListener('click', () => {
    const next = getLang() === 'en' ? 'es' : 'en';
    setLang(next);
  });

  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  // Render initial
  setLang(lang);

  const form = document.getElementById('reservationForm');
  const submitBtn = document.getElementById('submitBtn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!form.checkValidity()) {
      showToast('err', i18n[getLang()]['toast.validation']);
      return;
    }

    const pickup = form.querySelector('input[name="pickupDate"]').value;
    const ret = form.querySelector('input[name="returnDate"]').value;
    if (pickup && ret && ret <= pickup) {
      showToast('err', i18n[getLang()]['toast.dateOrder']);
      return;
    }

    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    try {
      await submitReservation(form, getLang());
      form.reset();
      // Keep language selection aligned
      form.querySelector('select[name="language"]').value = getLang();
      showToast('ok', i18n[getLang()]['toast.ok']);
    } catch {
      showToast('err', i18n[getLang()]['toast.err']);
    } finally {
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
    }
  });
}

init();
