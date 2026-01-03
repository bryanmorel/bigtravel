/* ===== Fleet Data ===== */
const fleet = [
  { slug: 'kia-picanto', name: 'Kia Picanto', category: 'compact', passengers: 4, doors: 4, ac: true },
  { slug: 'nissan-march', name: 'Nissan March', category: 'compact', passengers: 5, doors: 4, ac: true },
  { slug: 'renault-kwid', name: 'Renault Kwid', category: 'compact', passengers: 5, doors: 4, ac: true, manual: true },
  { slug: 'chevrolet-onix-hb', name: 'Chevrolet Onix HB', category: 'compact', passengers: 5, doors: 4, ac: true },
  { slug: 'vw-golf', name: 'Volkswagen Golf', category: 'compact', passengers: 5, doors: 4, ac: true, popular: true },
  { slug: 'chevrolet-onix', name: 'Chevrolet Onix', category: 'sedan', passengers: 5, doors: 4, ac: true },
  { slug: 'kia-rio', name: 'Kia Rio', category: 'sedan', passengers: 5, doors: 4, ac: true, popular: true },
  { slug: 'nissan-versa', name: 'Nissan Versa', category: 'sedan', passengers: 5, doors: 4, ac: true },
  { slug: 'mazda-2', name: 'Mazda 2 Sedan', category: 'sedan', passengers: 5, doors: 4, ac: true },
  { slug: 'mazda-4', name: 'Mazda 4 Sedan', category: 'sedan', passengers: 5, doors: 4, ac: true },
  { slug: 'mazda-cx5', name: 'Mazda CX-5', category: 'suv', passengers: 5, doors: 4, ac: true, popular: true },
  { slug: 'chevrolet-tracker', name: 'Chevrolet Tracker', category: 'suv', passengers: 5, doors: 4, ac: true },
  { slug: 'kia-sportage', name: 'Kia Sportage', category: 'suv', passengers: 5, doors: 4, ac: true },
  { slug: 'renault-koleos', name: 'Renault Koleos', category: 'suv', passengers: 5, doors: 4, ac: true },
  { slug: 'toyota-fortuner', name: 'Toyota Fortuner SW4', category: '4x4', passengers: 7, doors: 4, ac: true, popular: true },
  { slug: 'toyota-4runner', name: 'Toyota 4Runner', category: '4x4', passengers: 7, doors: 4, ac: true },
  { slug: 'toyota-txl', name: 'Toyota TXL', category: '4x4', passengers: 7, doors: 4, ac: true },
  { slug: 'chevrolet-trailblazer', name: 'Chevrolet Trailblazer', category: '4x4', passengers: 7, doors: 4, ac: true }
];

const categories = {
  all: { en: 'All', es: 'Todos' },
  compact: { en: 'Compact', es: 'Compactos' },
  sedan: { en: 'Sedans', es: 'Sedanes' },
  suv: { en: 'SUVs', es: 'SUVs' },
  '4x4': { en: '4x4', es: '4x4' }
};

/* ===== i18n Dictionary ===== */
const i18n = {
  en: {
    'nav.fleet': 'Fleet',
    'nav.how': 'How it works',
    'nav.reserve': 'Reserve',
    'nav.cta': 'Reserve Now',
    'hero.badge': 'Eje Cafetero, Colombia',
    'hero.title': 'Premium Car Rental in Colombia\'s Coffee Region',
    'hero.subtitle': 'Explore the Eje Cafetero with our premium fleet. Airport pickup available in Pereira, Armenia & Manizales.',
    'hero.cta': 'Browse Fleet',
    'trust.airports': '3 Airports',
    'trust.airports.desc': 'Pereira · Armenia · Manizales',
    'trust.insurance': 'Full Insurance',
    'trust.insurance.desc': 'Comprehensive coverage included',
    'trust.response': 'Fast Response',
    'trust.response.desc': 'Confirmation within 2-4 hours',
    'fleet.title': 'Our Fleet',
    'fleet.subtitle': 'Select a vehicle to start your reservation',
    'fleet.showMore': 'Show More Vehicles',
    'fleet.note': 'Vehicles shown are examples. Exact model depends on availability.',
    'fleet.tag': 'Example vehicle (or similar)',
    'fleet.passengers': 'passengers',
    'fleet.doors': 'doors',
    'fleet.ac': 'A/C',
    'fleet.manual': 'Manual',
    'stepper.title': 'Reserve Your Vehicle',
    'stepper.subtitle': 'Complete the steps below to request a reservation',
    'step.vehicle': 'Vehicle',
    'step.trip': 'Trip',
    'step.prefs': 'Preferences',
    'step.contact': 'Contact',
    'step1.title': 'Select Your Vehicle',
    'step1.noVehicle': 'No vehicle selected yet',
    'step1.browse': 'Browse Fleet',
    'step2.title': 'Trip Details',
    'step3.title': 'Vehicle Preferences',
    'step4.title': 'Your Information',
    'form.pickupDate': 'Pickup Date',
    'form.returnDate': 'Return Date',
    'form.pickupLocation': 'Pickup Location',
    'form.dropoffLocation': 'Drop-off Location',
    'form.transmission': 'Transmission',
    'form.automatic': 'Automatic',
    'form.manual': 'Manual',
    'form.any': 'No preference',
    'form.passengers': 'Passengers',
    'form.luggage': 'Luggage',
    'form.luggage.small': 'Small (1-2 bags)',
    'form.luggage.medium': 'Medium (3-4 bags)',
    'form.luggage.large': 'Large (5+ bags)',
    'form.name': 'Full Name',
    'form.email': 'Email',
    'form.phone': 'Phone / WhatsApp',
    'form.language': 'Preferred Language',
    'form.notes': 'Notes (flight number, special requests)',
    'form.required': 'This field is required',
    'form.invalidEmail': 'Please enter a valid email',
    'form.invalidDate': 'Return date must be after pickup',
    'review.title': 'Review Your Request',
    'review.vehicle': 'Vehicle',
    'review.dates': 'Dates',
    'review.pickup': 'Pickup',
    'review.dropoff': 'Drop-off',
    'stepper.back': 'Back',
    'stepper.next': 'Next',
    'stepper.submit': 'Send Request',
    'stepper.submitting': 'Sending...',
    'how.title': 'How It Works',
    'how.subtitle': 'Three simple steps to get on the road',
    'how.step1.title': 'Choose & Request',
    'how.step1.desc': 'Browse our fleet, select your vehicle, and submit a reservation request.',
    'how.step2.title': 'Get Confirmation',
    'how.step2.desc': 'We\'ll verify availability and send you pricing within 2-4 hours.',
    'how.step3.title': 'Pick Up & Drive',
    'how.step3.desc': 'Meet us at your chosen location and hit the road!',
    'success.title': 'Request Sent!',
    'success.message': 'Thank you! We\'ll review your request and contact you within 2-4 hours.',
    'success.close': 'Close',
    'footer.tagline': 'Premium car rental',
    'footer.rights': 'All rights reserved.'
  },
  es: {
    'nav.fleet': 'Flota',
    'nav.how': 'Cómo funciona',
    'nav.reserve': 'Reservar',
    'nav.cta': 'Reservar Ahora',
    'hero.badge': 'Eje Cafetero, Colombia',
    'hero.title': 'Alquiler de Autos Premium en el Eje Cafetero',
    'hero.subtitle': 'Explora el Eje Cafetero con nuestra flota premium. Recogida disponible en Pereira, Armenia y Manizales.',
    'hero.cta': 'Ver Flota',
    'trust.airports': '3 Aeropuertos',
    'trust.airports.desc': 'Pereira · Armenia · Manizales',
    'trust.insurance': 'Seguro Completo',
    'trust.insurance.desc': 'Cobertura completa incluida',
    'trust.response': 'Respuesta Rápida',
    'trust.response.desc': 'Confirmación en 2-4 horas',
    'fleet.title': 'Nuestra Flota',
    'fleet.subtitle': 'Selecciona un vehículo para iniciar tu reserva',
    'fleet.showMore': 'Ver Más Vehículos',
    'fleet.note': 'Los vehículos mostrados son ejemplos. El modelo exacto depende de disponibilidad.',
    'fleet.tag': 'Vehículo de referencia (o similar)',
    'fleet.passengers': 'pasajeros',
    'fleet.doors': 'puertas',
    'fleet.ac': 'A/C',
    'fleet.manual': 'Manual',
    'stepper.title': 'Reserva Tu Vehículo',
    'stepper.subtitle': 'Completa los pasos para solicitar una reserva',
    'step.vehicle': 'Vehículo',
    'step.trip': 'Viaje',
    'step.prefs': 'Preferencias',
    'step.contact': 'Contacto',
    'step1.title': 'Selecciona Tu Vehículo',
    'step1.noVehicle': 'Ningún vehículo seleccionado',
    'step1.browse': 'Ver Flota',
    'step2.title': 'Detalles del Viaje',
    'step3.title': 'Preferencias del Vehículo',
    'step4.title': 'Tu Información',
    'form.pickupDate': 'Fecha de Recogida',
    'form.returnDate': 'Fecha de Devolución',
    'form.pickupLocation': 'Lugar de Recogida',
    'form.dropoffLocation': 'Lugar de Devolución',
    'form.transmission': 'Transmisión',
    'form.automatic': 'Automática',
    'form.manual': 'Manual',
    'form.any': 'Sin preferencia',
    'form.passengers': 'Pasajeros',
    'form.luggage': 'Equipaje',
    'form.luggage.small': 'Pequeño (1-2 maletas)',
    'form.luggage.medium': 'Mediano (3-4 maletas)',
    'form.luggage.large': 'Grande (5+ maletas)',
    'form.name': 'Nombre Completo',
    'form.email': 'Correo Electrónico',
    'form.phone': 'Teléfono / WhatsApp',
    'form.language': 'Idioma Preferido',
    'form.notes': 'Notas (número de vuelo, solicitudes especiales)',
    'form.required': 'Este campo es requerido',
    'form.invalidEmail': 'Por favor ingresa un email válido',
    'form.invalidDate': 'La fecha de devolución debe ser posterior',
    'review.title': 'Revisa Tu Solicitud',
    'review.vehicle': 'Vehículo',
    'review.dates': 'Fechas',
    'review.pickup': 'Recogida',
    'review.dropoff': 'Devolución',
    'stepper.back': 'Atrás',
    'stepper.next': 'Siguiente',
    'stepper.submit': 'Enviar Solicitud',
    'stepper.submitting': 'Enviando...',
    'how.title': 'Cómo Funciona',
    'how.subtitle': 'Tres simples pasos para ponerte en camino',
    'how.step1.title': 'Elige y Solicita',
    'how.step1.desc': 'Explora nuestra flota, selecciona tu vehículo y envía una solicitud de reserva.',
    'how.step2.title': 'Recibe Confirmación',
    'how.step2.desc': 'Verificamos disponibilidad y te enviamos cotización en 2-4 horas.',
    'how.step3.title': 'Recoge y Conduce',
    'how.step3.desc': '¡Encuéntranos en tu ubicación elegida y sal a la carretera!',
    'success.title': '¡Solicitud Enviada!',
    'success.message': '¡Gracias! Revisaremos tu solicitud y te contactaremos en 2-4 horas.',
    'success.close': 'Cerrar',
    'footer.tagline': 'Alquiler de autos premium',
    'footer.rights': 'Todos los derechos reservados.'
  }
};

/* ===== State ===== */
let lang = localStorage.getItem('bt_lang') || (navigator.language.startsWith('es') ? 'es' : 'en');
let currentCategory = 'all';
let visibleCount = 6;
let selectedVehicle = null;
let currentStep = 1;
const imageCache = {};

/* ===== Translation ===== */
function t(key) {
  const val = i18n[lang]?.[key] ?? i18n['en']?.[key];
  if (val === undefined) {
    console.warn(`[i18n] Missing key: ${key}`);
    return key;
  }
  return val;
}

function updateAllText() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = text;
    } else {
      el.textContent = text;
    }
  });
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  renderCategoryTabs();
  setupObserver();
  renderFleet();
  initStepper();
  initDatePickers();
  updateAllText();
});

/* ===== Theme ===== */
function initTheme() {
  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme;
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('bt_theme', next);
  });
}

/* ===== Language ===== */
function initLang() {
  document.documentElement.lang = lang;
  const label = document.getElementById('langLabel');
  if (label) label.textContent = lang === 'en' ? 'ES' : 'EN';

  document.getElementById('langToggle')?.addEventListener('click', () => {
    lang = lang === 'en' ? 'es' : 'en';
    localStorage.setItem('bt_lang', lang);
    document.documentElement.lang = lang;
    if (label) label.textContent = lang === 'en' ? 'ES' : 'EN';
    updateAllText();
    renderCategoryTabs();
    renderFleet();
    updateSelectedVehicleUI();
    updateReviewSummary();
  });
}

/* ===== Category Tabs ===== */
function renderCategoryTabs() {
  const container = document.getElementById('categoryTabs');
  if (!container) return;
  container.innerHTML = Object.entries(categories).map(([key, labels]) => `
    <button class="category-tab ${key === currentCategory ? 'active' : ''}" data-cat="${key}">
      ${labels[lang]}
    </button>
  `).join('');

  container.querySelectorAll('.category-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.dataset.cat;
      visibleCount = 6;
      container.querySelectorAll('.category-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFleet();
    });
  });
}

/* ===== Fleet Rendering ===== */
function renderFleet() {
  const grid = document.getElementById('fleetGrid');
  const showMoreBtn = document.getElementById('showMoreBtn');
  if (!grid) return;

  const filtered = currentCategory === 'all' ? fleet : fleet.filter(c => c.category === currentCategory);
  const toShow = filtered.slice(0, visibleCount);
  
  grid.innerHTML = toShow.map(car => createCarCard(car)).join('');

  // Show more button visibility
  if (showMoreBtn) {
    showMoreBtn.style.display = visibleCount < filtered.length ? 'inline-flex' : 'none';
    showMoreBtn.onclick = () => {
      visibleCount += 6;
      renderFleet();
    };
  }

  // Card click handlers
  grid.querySelectorAll('.car-card').forEach(card => {
    card.addEventListener('click', () => selectVehicle(card.dataset.slug));
  });

  // Lazy load images
  grid.querySelectorAll('.car-card').forEach(card => {
    observeCard(card);
  });
}

function createCarCard(car) {
  const catLabel = categories[car.category]?.[lang] || car.category;
  return `
    <div class="car-card ${selectedVehicle?.slug === car.slug ? 'selected' : ''}" data-slug="${car.slug}" data-name="${car.name}" data-category="${car.category}">
      <div class="car-image loading" id="img-${car.slug}">
        <div class="car-placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2.9-5.2A2 2 0 0013.4 4H10a2 2 0 00-1.7.8L5.5 10H3c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h2"/>
            <circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>
          </svg>
        </div>
      </div>
      <div class="car-info">
        <div class="car-name">${car.name}</div>
        <div class="car-category">${catLabel}</div>
        <div class="car-tag">${t('fleet.tag')}</div>
        <div class="car-specs">
          <span class="car-spec">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
            ${car.passengers} ${t('fleet.passengers')}
          </span>
          <span class="car-spec">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            ${car.doors} ${t('fleet.doors')}
          </span>
          ${car.ac ? `<span class="car-spec">${t('fleet.ac')}</span>` : ''}
          ${car.manual ? `<span class="car-spec">${t('fleet.manual')}</span>` : ''}
        </div>
      </div>
    </div>
  `;
}

/* ===== Lazy Image Loading ===== */
let observer;
function setupObserver() {
  if (typeof window === 'undefined') return;
  if (!('IntersectionObserver' in window)) {
    observer = null;
    return;
  }
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const slug = card.dataset.slug;
        loadCarImages(slug);
        observer.unobserve(card);
      }
    });
  }, { rootMargin: '100px' });
}

function observeCard(card) {
  if (observer) {
    observer.observe(card);
    return;
  }

  // Fallback: if IntersectionObserver isn't available, load immediately.
  if (card?.dataset?.slug) loadCarImages(card.dataset.slug);
}

async function loadCarImages(slug) {
  if (imageCache[slug]) {
    applyImages(slug, imageCache[slug]);
    return;
  }

  const images = await discoverImages(slug);
  imageCache[slug] = images;
  applyImages(slug, images);
}

async function discoverImages(slug) {
  const images = [];
  const extensions = ['webp', 'jpg', 'jpeg', 'png', 'svg'];

  // Also support a single non-numbered image (e.g., kia-picanto.webp)
  for (const ext of extensions) {
    const url = `assets/cars/${slug}.${ext}`;
    if (await imageExists(url)) {
      images.push(url);
      break;
    }
  }

  for (let i = 1; i <= 5; i++) {
    for (const ext of extensions) {
      const url = `assets/cars/${slug}-${i}.${ext}`;
      if (await imageExists(url)) {
        images.push(url);
        break;
      }
    }
  }
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

function applyImages(slug, images) {
  const container = document.getElementById(`img-${slug}`);
  if (!container) return;
  container.classList.remove('loading');

  if (images.length === 0) return; // Keep placeholder

  container.innerHTML = `<img src="${images[0]}" alt="" loading="lazy">`;
  
  if (images.length > 1) {
    const thumbs = document.createElement('div');
    thumbs.className = 'car-thumbs';
    thumbs.innerHTML = images.map((img, i) => `
      <img src="${img}" class="car-thumb ${i === 0 ? 'active' : ''}" data-src="${img}">
    `).join('');
    container.after(thumbs);

    thumbs.querySelectorAll('.car-thumb').forEach(thumb => {
      thumb.addEventListener('click', (e) => {
        e.stopPropagation();
        container.querySelector('img').src = thumb.dataset.src;
        thumbs.querySelectorAll('.car-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  }
}

/* ===== Vehicle Selection ===== */
function selectVehicle(slug) {
  const car = fleet.find(c => c.slug === slug);
  if (!car) return;

  selectedVehicle = car;
  
  // Update UI
  document.querySelectorAll('.car-card').forEach(c => {
    c.classList.toggle('selected', c.dataset.slug === slug);
  });

  // Update form hidden fields
  document.getElementById('selectedVehicleName').value = car.name;
  document.getElementById('selectedCategory').value = car.category;

  // Update stepper display
  updateSelectedVehicleUI();

  // Go to stepper and step 2
  goToStep(2);
  document.getElementById('reserve').scrollIntoView({ behavior: 'smooth' });
}

function updateSelectedVehicleUI() {
  const container = document.getElementById('selectedVehicle');
  if (!container) return;

  if (!selectedVehicle) {
    container.classList.remove('has-vehicle');
    container.innerHTML = `
      <p class="no-vehicle" data-i18n="step1.noVehicle">${t('step1.noVehicle')}</p>
      <a href="#fleet" class="btn btn-secondary" data-i18n="step1.browse">${t('step1.browse')}</a>
    `;
    return;
  }

  const catLabel = categories[selectedVehicle.category]?.[lang] || selectedVehicle.category;
  const images = imageCache[selectedVehicle.slug] || [];
  const thumbSrc = images[0] || '';

  container.classList.add('has-vehicle');
  container.innerHTML = `
    ${thumbSrc ? `<img class="vehicle-thumb" src="${thumbSrc}" alt="">` : `<div class="vehicle-thumb"></div>`}
    <div class="vehicle-info">
      <div class="vehicle-name">${selectedVehicle.name}</div>
      <div class="vehicle-cat">${catLabel}</div>
    </div>
    <span class="change-btn" onclick="document.getElementById('fleet').scrollIntoView({behavior:'smooth'})">Change</span>
  `;
}

/* ===== Stepper ===== */
function initStepper() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const submitBtn = document.getElementById('submitBtn');
  const form = document.getElementById('reservationForm');

  prevBtn?.addEventListener('click', () => goToStep(currentStep - 1));
  nextBtn?.addEventListener('click', () => {
    if (validateCurrentStep()) {
      goToStep(currentStep + 1);
    }
  });

  form?.addEventListener('submit', handleSubmit);

  // Set initial preferred language based on current lang
  const langSelect = document.getElementById('language');
  if (langSelect) langSelect.value = lang;
}

function goToStep(step) {
  if (step < 1 || step > 4) return;
  currentStep = step;

  // Update panels
  document.querySelectorAll('.step-panel').forEach(p => {
    p.classList.toggle('active', parseInt(p.dataset.step) === step);
  });

  // Update indicators
  document.querySelectorAll('.step-indicator').forEach(ind => {
    const s = parseInt(ind.dataset.step);
    ind.classList.remove('active', 'completed');
    if (s === step) ind.classList.add('active');
    else if (s < step) ind.classList.add('completed');
  });

  // Update buttons
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const submitBtn = document.getElementById('submitBtn');

  prevBtn.disabled = step === 1;
  nextBtn.hidden = step === 4;
  submitBtn.hidden = step !== 4;

  // Update review on final step
  if (step === 4) updateReviewSummary();
}

function validateCurrentStep() {
  const panel = document.querySelector(`.step-panel[data-step="${currentStep}"]`);
  if (!panel) return true;

  let valid = true;
  const fields = panel.querySelectorAll('[required]');

  fields.forEach(field => {
    const error = field.parentElement.querySelector('.field-error');
    field.classList.remove('error');
    if (error) error.textContent = '';

    if (!field.value.trim()) {
      valid = false;
      field.classList.add('error');
      if (error) error.textContent = t('form.required');
    } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
      valid = false;
      field.classList.add('error');
      if (error) error.textContent = t('form.invalidEmail');
    }
  });

  // Date validation on step 2
  if (currentStep === 2) {
    const pickup = document.getElementById('pickupDate');
    const ret = document.getElementById('returnDate');
    if (pickup.value && ret.value && ret.value <= pickup.value) {
      valid = false;
      ret.classList.add('error');
      const error = ret.parentElement.querySelector('.field-error');
      if (error) error.textContent = t('form.invalidDate');
    }
  }

  return valid;
}

function updateReviewSummary() {
  const container = document.getElementById('reviewSummary');
  if (!container) return;

  const form = document.getElementById('reservationForm');
  const pickup = form.pickupDate.value;
  const ret = form.returnDate.value;
  const pickupLoc = form.pickupLocation.value;
  const dropoffLoc = form.dropoffLocation.value;

  container.innerHTML = `
    <h4 data-i18n="review.title">${t('review.title')}</h4>
    <div class="review-row"><span>${t('review.vehicle')}</span><span>${selectedVehicle?.name || '-'}</span></div>
    <div class="review-row"><span>${t('review.dates')}</span><span>${pickup || '-'} → ${ret || '-'}</span></div>
    <div class="review-row"><span>${t('review.pickup')}</span><span>${pickupLoc || '-'}</span></div>
    <div class="review-row"><span>${t('review.dropoff')}</span><span>${dropoffLoc || '-'}</span></div>
  `;
}

/* ===== Date Pickers ===== */
function initDatePickers() {
  const pickup = document.getElementById('pickupDate');
  const ret = document.getElementById('returnDate');
  if (!pickup || !ret) return;

  const today = new Date().toISOString().split('T')[0];
  pickup.min = today;
  ret.min = today;

  pickup.addEventListener('change', () => {
    if (pickup.value) {
      const next = new Date(pickup.value);
      next.setDate(next.getDate() + 1);
      ret.min = next.toISOString().split('T')[0];
      if (ret.value && ret.value < ret.min) ret.value = '';
    }
  });
}

/* ===== Form Submit ===== */
async function handleSubmit(e) {
  e.preventDefault();
  if (!validateCurrentStep()) return;

  const form = e.target;
  const submitBtn = document.getElementById('submitBtn');
  
  submitBtn.disabled = true;
  submitBtn.textContent = t('stepper.submitting');

  const data = {
    selectedVehicleName: form.selectedVehicleName.value,
    category: form.category.value || (selectedVehicle?.category || ''),
    pickupDate: form.pickupDate.value,
    returnDate: form.returnDate.value,
    pickupLocation: form.pickupLocation.value,
    dropoffLocation: form.dropoffLocation.value,
    transmission: form.transmission.value,
    passengers: form.passengers.value,
    luggage: form.luggage.value,
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    language: form.language.value,
    notes: form.notes.value,
    createdAt: new Date().toISOString()
  };

  try {
    const res = await fetch('/api/reservation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error('Failed');

    // Show success modal
    document.getElementById('successModal').hidden = false;
    form.reset();
    selectedVehicle = null;
    currentStep = 1;
    goToStep(1);
    updateSelectedVehicleUI();

  } catch (err) {
    console.error('Submit error:', err);
    alert('There was an error. Please try again or contact us via WhatsApp.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = t('stepper.submit');
  }
}

// Close modal
document.getElementById('closeModal')?.addEventListener('click', () => {
  document.getElementById('successModal').hidden = true;
});

document.getElementById('successModal')?.addEventListener('click', (e) => {
  if (e.target.id === 'successModal') {
    document.getElementById('successModal').hidden = true;
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('successModal').hidden = true;
  }
});
