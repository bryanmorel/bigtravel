/* ===== Fleet Data ===== */
const fleet = [
  { slug: 'corolla', name: 'Toyota Corolla', category: 'sedan', passengers: 5, doors: 4, ac: true, popular: true },
  { slug: 'camry', name: 'Toyota Camry', category: 'sedan', passengers: 5, doors: 4, ac: true },
  { slug: 'elantra', name: 'Hyundai Elantra', category: 'sedan', passengers: 5, doors: 4, ac: true },
  { slug: 'rav4', name: 'Toyota RAV4', category: 'suv', passengers: 5, doors: 4, ac: true, popular: true },
  { slug: 'crv', name: 'Honda CR-V', category: 'suv', passengers: 5, doors: 4, ac: true },
  { slug: 'tucson', name: 'Hyundai Tucson', category: 'suv', passengers: 5, doors: 4, ac: true },
  { slug: 'highlander', name: 'Toyota Highlander', category: 'suv', passengers: 7, doors: 4, ac: true },
  { slug: 'sienna', name: 'Toyota Sienna', category: 'minivan', passengers: 8, doors: 4, ac: true, popular: true },
  { slug: 'odyssey', name: 'Honda Odyssey', category: 'minivan', passengers: 8, doors: 4, ac: true },
  { slug: 'yaris', name: 'Toyota Yaris', category: 'compact', passengers: 5, doors: 4, ac: true },
  { slug: 'accent', name: 'Hyundai Accent', category: 'compact', passengers: 5, doors: 4, ac: true },
  { slug: 'hilux', name: 'Toyota Hilux', category: 'pickup', passengers: 5, doors: 4, ac: true },
  { slug: 'ranger', name: 'Ford Ranger', category: 'pickup', passengers: 5, doors: 4, ac: true }
];

const categories = {
  all:     { en: 'All Vehicles', es: 'Todos' },
  sedan:   { en: 'Sedans', es: 'Sedanes' },
  suv:     { en: 'SUVs', es: 'SUVs' },
  minivan: { en: 'Minivans', es: 'Minivanes' },
  compact: { en: 'Compact', es: 'Compactos' },
  pickup:  { en: 'Pickups', es: 'Pickups' }
};

/* ===== Translations ===== */
const i18n = {
  en: {
    // Header
    'nav.fleet': 'Fleet',
    'nav.howItWorks': 'How It Works',
    'nav.reserve': 'Reserve',
    'header.cta': 'Reserve Now',
    
    // Hero
    'hero.badge': 'Trusted since 2010',
    'hero.title': 'Car Rental in Heredia, Costa Rica',
    'hero.subtitle': 'Premium vehicles, transparent pricing, and exceptional service. Airport pickup available.',
    'hero.cta.primary': 'Reserve Your Vehicle',
    'hero.cta.secondary': 'View Fleet',
    'trust.airport': 'SJO Airport Service',
    'trust.airport.desc': 'Free pickup & drop-off',
    'trust.insurance': 'Full Insurance',
    'trust.insurance.desc': 'Comprehensive coverage included',
    'trust.support': '24/7 Support',
    'trust.support.desc': 'WhatsApp assistance anytime',
    
    // Fleet
    'fleet.title': 'Our Fleet',
    'fleet.subtitle': 'Select the perfect vehicle for your Costa Rica adventure',
    'fleet.note': 'Vehicle availability may vary. We\'ll confirm your specific vehicle after reviewing your request.',
    'fleet.popular': 'Popular',
    'fleet.passengers': 'passengers',
    'fleet.doors': 'doors',
    'fleet.ac': 'A/C',
    
    // Steps
    'steps.title': 'How It Works',
    'steps.subtitle': 'Three simple steps to get on the road',
    'step1.title': 'Submit Request',
    'step1.desc': 'Fill out the reservation form with your dates and vehicle preference.',
    'step2.title': 'Get Confirmation',
    'step2.desc': 'We\'ll review availability and send you a confirmation within 24 hours.',
    'step3.title': 'Pick Up & Drive',
    'step3.desc': 'Meet us at the airport or office to get your keys and hit the road.',
    
    // Form
    'form.title': 'Reserve Your Vehicle',
    'form.subtitle': 'Complete the form below and we\'ll confirm availability',
    'form.section.trip': 'Trip Details',
    'form.section.vehicle': 'Vehicle Preference',
    'form.section.contact': 'Your Information',
    'form.pickup': 'Pickup Date',
    'form.return': 'Return Date',
    'form.pickupLoc': 'Pickup Location',
    'form.returnLoc': 'Return Location',
    'form.loc.airport': 'SJO Airport',
    'form.loc.office': 'Heredia Office',
    'form.vehicle': 'Preferred Vehicle',
    'form.vehicle.any': 'Any Available',
    'form.name': 'Full Name',
    'form.email': 'Email',
    'form.phone': 'Phone / WhatsApp',
    'form.notes': 'Additional Notes',
    'form.notes.placeholder': 'Flight number, special requests, questions...',
    'form.submit': 'Send Reservation Request',
    'form.submitting': 'Sending...',
    'form.privacy': 'We respect your privacy and will only use this information for your reservation.',
    'form.required': 'This field is required',
    'form.invalidEmail': 'Please enter a valid email',
    'form.invalidDate': 'Return date must be after pickup date',
    
    // Sidebar
    'sidebar.whatsIncluded': 'What\'s Included',
    'sidebar.inc.insurance': 'Comprehensive insurance',
    'sidebar.inc.mileage': 'Unlimited mileage',
    'sidebar.inc.support': '24/7 roadside assistance',
    'sidebar.inc.delivery': 'Airport delivery/pickup',
    'sidebar.inc.cleaning': 'Sanitized vehicle',
    'sidebar.nextSteps': 'What Happens Next',
    'sidebar.next.1': 'We\'ll review your request',
    'sidebar.next.2': 'Confirm vehicle availability',
    'sidebar.next.3': 'Send you a quote via email',
    'sidebar.next.4': 'Confirm pickup details',
    'sidebar.note': 'Most requests are confirmed within 2-4 hours during business hours.',
    
    // Success Modal
    'success.title': 'Request Received!',
    'success.message': 'Thank you for choosing Big Travel. We\'ve received your reservation request and will contact you shortly.',
    'success.steps.title': 'What\'s Next?',
    'success.step.1': 'Check your email for confirmation',
    'success.step.2': 'We\'ll verify vehicle availability',
    'success.step.3': 'Receive your final quote within 24 hours',
    'success.step.4': 'Confirm your booking',
    'success.close': 'Close',
    
    // Footer
    'footer.tagline': 'Premium car rental in Costa Rica',
    'footer.copy': '© 2024 Big Travel Rent A Car. All rights reserved.',
    
    // Mobile CTA
    'mobile.cta': 'Reserve Now'
  },
  es: {
    // Header
    'nav.fleet': 'Flota',
    'nav.howItWorks': 'Cómo Funciona',
    'nav.reserve': 'Reservar',
    'header.cta': 'Reservar',
    
    // Hero
    'hero.badge': 'Confianza desde 2010',
    'hero.title': 'Alquiler de Autos en Heredia, Costa Rica',
    'hero.subtitle': 'Vehículos premium, precios transparentes y servicio excepcional. Servicio de aeropuerto disponible.',
    'hero.cta.primary': 'Reserva Tu Vehículo',
    'hero.cta.secondary': 'Ver Flota',
    'trust.airport': 'Servicio Aeropuerto SJO',
    'trust.airport.desc': 'Entrega y recogida gratis',
    'trust.insurance': 'Seguro Completo',
    'trust.insurance.desc': 'Cobertura completa incluida',
    'trust.support': 'Soporte 24/7',
    'trust.support.desc': 'Asistencia por WhatsApp',
    
    // Fleet
    'fleet.title': 'Nuestra Flota',
    'fleet.subtitle': 'Selecciona el vehículo perfecto para tu aventura',
    'fleet.note': 'La disponibilidad puede variar. Confirmaremos tu vehículo después de revisar tu solicitud.',
    'fleet.popular': 'Popular',
    'fleet.passengers': 'pasajeros',
    'fleet.doors': 'puertas',
    'fleet.ac': 'A/C',
    
    // Steps
    'steps.title': 'Cómo Funciona',
    'steps.subtitle': 'Tres simples pasos para ponerte en camino',
    'step1.title': 'Envía Solicitud',
    'step1.desc': 'Completa el formulario con tus fechas y preferencia de vehículo.',
    'step2.title': 'Recibe Confirmación',
    'step2.desc': 'Revisaremos disponibilidad y te enviaremos confirmación en 24 horas.',
    'step3.title': 'Recoge y Conduce',
    'step3.desc': 'Encuéntranos en el aeropuerto u oficina para recibir tus llaves.',
    
    // Form
    'form.title': 'Reserva Tu Vehículo',
    'form.subtitle': 'Completa el formulario y confirmaremos disponibilidad',
    'form.section.trip': 'Detalles del Viaje',
    'form.section.vehicle': 'Preferencia de Vehículo',
    'form.section.contact': 'Tu Información',
    'form.pickup': 'Fecha de Recogida',
    'form.return': 'Fecha de Devolución',
    'form.pickupLoc': 'Lugar de Recogida',
    'form.returnLoc': 'Lugar de Devolución',
    'form.loc.airport': 'Aeropuerto SJO',
    'form.loc.office': 'Oficina Heredia',
    'form.vehicle': 'Vehículo Preferido',
    'form.vehicle.any': 'Cualquier Disponible',
    'form.name': 'Nombre Completo',
    'form.email': 'Correo Electrónico',
    'form.phone': 'Teléfono / WhatsApp',
    'form.notes': 'Notas Adicionales',
    'form.notes.placeholder': 'Número de vuelo, solicitudes especiales, preguntas...',
    'form.submit': 'Enviar Solicitud de Reserva',
    'form.submitting': 'Enviando...',
    'form.privacy': 'Respetamos tu privacidad y solo usaremos esta información para tu reserva.',
    'form.required': 'Este campo es requerido',
    'form.invalidEmail': 'Por favor ingresa un email válido',
    'form.invalidDate': 'La fecha de devolución debe ser posterior a la de recogida',
    
    // Sidebar
    'sidebar.whatsIncluded': '¿Qué Incluye?',
    'sidebar.inc.insurance': 'Seguro completo',
    'sidebar.inc.mileage': 'Kilometraje ilimitado',
    'sidebar.inc.support': 'Asistencia en carretera 24/7',
    'sidebar.inc.delivery': 'Entrega/recogida en aeropuerto',
    'sidebar.inc.cleaning': 'Vehículo sanitizado',
    'sidebar.nextSteps': '¿Qué Sigue?',
    'sidebar.next.1': 'Revisaremos tu solicitud',
    'sidebar.next.2': 'Confirmaremos disponibilidad',
    'sidebar.next.3': 'Te enviaremos cotización por email',
    'sidebar.next.4': 'Confirmaremos detalles de recogida',
    'sidebar.note': 'La mayoría de solicitudes se confirman en 2-4 horas en horario laboral.',
    
    // Success Modal
    'success.title': '¡Solicitud Recibida!',
    'success.message': 'Gracias por elegir Big Travel. Hemos recibido tu solicitud y te contactaremos pronto.',
    'success.steps.title': '¿Qué Sigue?',
    'success.step.1': 'Revisa tu email para confirmación',
    'success.step.2': 'Verificaremos disponibilidad',
    'success.step.3': 'Recibirás tu cotización en 24 horas',
    'success.step.4': 'Confirma tu reserva',
    'success.close': 'Cerrar',
    
    // Footer
    'footer.tagline': 'Alquiler de autos premium en Costa Rica',
    'footer.copy': '© 2024 Big Travel Rent A Car. Todos los derechos reservados.',
    
    // Mobile CTA
    'mobile.cta': 'Reservar Ahora'
  }
};

/* ===== State ===== */
let currentLang = localStorage.getItem('lang') || (navigator.language.startsWith('es') ? 'es' : 'en');
let currentCategory = 'all';
let carImages = {}; // Cache for discovered images

/* ===== Translation Helper ===== */
function t(key) {
  return i18n[currentLang]?.[key] || i18n['en']?.[key] || key;
}

/* ===== DOM Ready ===== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  renderCategoryTabs();
  renderFleet();
  populateVehicleSelect();
  initForm();
  initDatePickers();
  updateAllText();
});

/* ===== Theme ===== */
function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

/* ===== Language ===== */
function initLanguage() {
  document.documentElement.lang = currentLang;
  const btn = document.getElementById('langBtn');
  if (btn) {
    btn.textContent = currentLang === 'en' ? 'ES' : 'EN';
  }
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'es' : 'en';
  localStorage.setItem('lang', currentLang);
  document.documentElement.lang = currentLang;
  
  const btn = document.getElementById('langBtn');
  if (btn) {
    btn.textContent = currentLang === 'en' ? 'ES' : 'EN';
  }
  
  updateAllText();
  renderCategoryTabs();
  renderFleet();
  populateVehicleSelect();
}

function updateAllText() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t(key);
    } else {
      el.textContent = t(key);
    }
  });
}

/* ===== Category Tabs ===== */
function renderCategoryTabs() {
  const container = document.getElementById('categoryTabs');
  if (!container) return;
  
  container.innerHTML = Object.entries(categories).map(([key, labels]) => `
    <button class="category-tab ${key === currentCategory ? 'active' : ''}" 
            data-category="${key}"
            onclick="filterCategory('${key}')">
      ${labels[currentLang]}
    </button>
  `).join('');
}

function filterCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.category-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === cat);
  });
  renderFleet();
}

/* ===== Image Discovery ===== */
async function discoverImages(slug) {
  if (carImages[slug]) return carImages[slug];
  
  const images = [];
  const extensions = ['webp', 'jpg', 'png'];
  
  // Try main image
  for (const ext of extensions) {
    const url = `assets/cars/${slug}.${ext}`;
    if (await imageExists(url)) {
      images.push(url);
      break;
    }
  }
  
  // Try numbered variants (slug-1, slug-2, etc.)
  for (let i = 1; i <= 5; i++) {
    for (const ext of extensions) {
      const url = `assets/cars/${slug}-${i}.${ext}`;
      if (await imageExists(url)) {
        images.push(url);
        break;
      }
    }
  }
  
  carImages[slug] = images;
  return images;
}

function imageExists(url) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

/* ===== Fleet Rendering ===== */
async function renderFleet() {
  const container = document.getElementById('fleetGrid');
  if (!container) return;
  
  const filtered = currentCategory === 'all' 
    ? fleet 
    : fleet.filter(car => car.category === currentCategory);
  
  container.innerHTML = '';
  
  for (const car of filtered) {
    const images = await discoverImages(car.slug);
    const card = createCarCard(car, images);
    container.appendChild(card);
  }
}

function createCarCard(car, images) {
  const div = document.createElement('div');
  div.className = 'car-card';
  div.setAttribute('role', 'article');
  div.setAttribute('aria-label', car.name);
  
  const categoryLabel = categories[car.category]?.[currentLang] || car.category;
  
  let imageHTML = '';
  if (images.length > 0) {
    imageHTML = `
      <div class="car-image">
        <img src="${images[0]}" alt="${car.name}" loading="lazy" />
      </div>
      ${images.length > 1 ? `
        <div class="car-thumbnails">
          ${images.map((img, i) => `
            <img src="${img}" alt="" class="car-thumb ${i === 0 ? 'active' : ''}" 
                 onclick="switchCarImage(this, '${img}')" />
          `).join('')}
        </div>
      ` : ''}
    `;
  } else {
    imageHTML = `
      <div class="car-image">
        <div class="car-image-placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2.9-5.2A2 2 0 0013.4 4H10a2 2 0 00-1.7.8L5.5 10H3c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h2"/>
            <circle cx="7" cy="17" r="2"/>
            <circle cx="17" cy="17" r="2"/>
          </svg>
        </div>
      </div>
    `;
  }
  
  div.innerHTML = `
    ${imageHTML}
    <div class="car-info">
      <div class="car-name">${car.name}</div>
      <div class="car-category">${categoryLabel}</div>
      ${car.popular ? `<span class="car-badge">${t('fleet.popular')}</span>` : ''}
      <div class="car-specs">
        <span class="car-spec">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          ${car.passengers} ${t('fleet.passengers')}
        </span>
        <span class="car-spec">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          ${car.doors} ${t('fleet.doors')}
        </span>
        ${car.ac ? `
          <span class="car-spec">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 3v18M5.3 7.5l13.4 9M5.3 16.5l13.4-9"/>
            </svg>
            ${t('fleet.ac')}
          </span>
        ` : ''}
      </div>
    </div>
  `;
  
  return div;
}

function switchCarImage(thumb, src) {
  const card = thumb.closest('.car-card');
  const mainImg = card.querySelector('.car-image img');
  if (mainImg) {
    mainImg.src = src;
    card.querySelectorAll('.car-thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  }
}

/* ===== Vehicle Select ===== */
function populateVehicleSelect() {
  const select = document.getElementById('vehicleSelect');
  if (!select) return;
  
  select.innerHTML = `<option value="">${t('form.vehicle.any')}</option>`;
  fleet.forEach(car => {
    const opt = document.createElement('option');
    opt.value = car.name;
    opt.textContent = car.name;
    select.appendChild(opt);
  });
}

/* ===== Date Pickers ===== */
function initDatePickers() {
  const pickupInput = document.getElementById('pickupDate');
  const returnInput = document.getElementById('returnDate');
  
  if (!pickupInput || !returnInput) return;
  
  // Set min date to today
  const today = new Date().toISOString().split('T')[0];
  pickupInput.min = today;
  returnInput.min = today;
  
  // Update return min when pickup changes
  pickupInput.addEventListener('change', () => {
    if (pickupInput.value) {
      const pickupDate = new Date(pickupInput.value);
      pickupDate.setDate(pickupDate.getDate() + 1);
      returnInput.min = pickupDate.toISOString().split('T')[0];
      
      // If return is before new min, clear it
      if (returnInput.value && returnInput.value < returnInput.min) {
        returnInput.value = '';
      }
    }
  });
}

/* ===== Form Validation ===== */
function initForm() {
  const form = document.getElementById('reservationForm');
  if (!form) return;
  
  // Inline validation
  const requiredFields = form.querySelectorAll('[required]');
  requiredFields.forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) {
        validateField(field);
      }
    });
  });
  
  // Form submit
  form.addEventListener('submit', handleSubmit);
}

function validateField(field) {
  const errorEl = field.parentElement.querySelector('.field-error');
  let error = '';
  
  if (field.required && !field.value.trim()) {
    error = t('form.required');
  } else if (field.type === 'email' && field.value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) {
      error = t('form.invalidEmail');
    }
  }
  
  // Date validation
  if (field.id === 'returnDate' && field.value) {
    const pickupInput = document.getElementById('pickupDate');
    if (pickupInput && pickupInput.value && field.value <= pickupInput.value) {
      error = t('form.invalidDate');
    }
  }
  
  field.classList.toggle('error', !!error);
  if (errorEl) errorEl.textContent = error;
  
  return !error;
}

async function handleSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const errorBox = document.getElementById('formErrors');
  const toast = document.getElementById('formToast');
  
  // Validate all fields
  let isValid = true;
  const errors = [];
  
  form.querySelectorAll('[required]').forEach(field => {
    if (!validateField(field)) {
      isValid = false;
      const label = field.parentElement.querySelector('label');
      if (label) errors.push(label.textContent);
    }
  });
  
  if (!isValid) {
    if (errorBox) {
      errorBox.innerHTML = `
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <div>
          <strong>Please fix the following:</strong>
          <ul>${errors.map(e => `<li>${e}</li>`).join('')}</ul>
        </div>
      `;
      errorBox.style.display = 'flex';
      errorBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }
  
  if (errorBox) errorBox.style.display = 'none';
  
  // Collect form data
  const data = {
    pickupDate: form.pickupDate.value,
    returnDate: form.returnDate.value,
    pickupLocation: form.pickupLocation.value,
    returnLocation: form.returnLocation.value,
    vehicle: form.vehicle.value || 'Any Available',
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    notes: form.notes?.value || ''
  };
  
  // Submit
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
      <circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="12"/>
    </svg>
    ${t('form.submitting')}
  `;
  
  try {
    const res = await fetch('/api/reservation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (!res.ok) throw new Error('Submission failed');
    
    // Show success modal
    const modal = document.getElementById('successModal');
    if (modal) {
      modal.hidden = false;
      modal.focus();
    }
    
    form.reset();
    
  } catch (err) {
    console.error('Submission error:', err);
    if (toast) {
      toast.className = 'toast error show';
      toast.textContent = 'There was an error submitting your request. Please try again or contact us directly.';
    }
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = `
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="22" y1="2" x2="11" y2="13"/>
        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
      </svg>
      ${t('form.submit')}
    `;
  }
}

function closeSuccessModal() {
  const modal = document.getElementById('successModal');
  if (modal) modal.hidden = true;
}

// Close modal on escape or backdrop click
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSuccessModal();
});

document.addEventListener('click', (e) => {
  if (e.target.id === 'successModal') closeSuccessModal();
});

/* ===== Spinner Animation ===== */
const style = document.createElement('style');
style.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
document.head.appendChild(style);

/* ===== Expose Functions ===== */
window.toggleTheme = toggleTheme;
window.toggleLanguage = toggleLanguage;
window.filterCategory = filterCategory;
window.switchCarImage = switchCarImage;
window.closeSuccessModal = closeSuccessModal;
