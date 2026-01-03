# Big Travel — UI/UX audit + Claude execution prompt (EN/ES)

Date: 2026-01-03

This document has two parts:

1) **UI/UX audit** of the current site structure and interactions (what’s good, what to improve).
2) A **Claude-ready build prompt** that tells Claude exactly what to generate (project files, layout, interactions, bilingual copy, and an image plan).

---

## 1) UI/UX audit (standpoint: UI/UX designer)

### What’s working
- **Clear single-page flow**: hero → fleet → how it works → request form.
- **Bilingual toggle**: fast language switch (EN/ES) is a strong requirement and is already conceptually correct.
- **Mobile-first baseline**: layout is responsive and avoids heavy UI complexity.
- **Form fields match the business goal**: a reservation request (not a confirmed booking) is correctly communicated.

### What’s holding the experience back (high impact)

#### A) “Trust & clarity” is too thin
Users need quick confidence before they fill the form.
- Missing “at a glance” trust signals: response time, what’s included, what’s required, how confirmation works.
- The “not guaranteed exact model” disclaimer exists but should be **more explicit** and repeated near selection.

#### B) Fleet is abstract (no photos) → lower conversion
Car rental is visual. Without real car images:
- Users can’t quickly anchor what “SUV” means for your business.
- Categories feel generic.

#### C) Mobile navigation + CTA could be stronger
- On mobile, the top nav is hidden; users rely on scrolling.
- There should be a **persistent primary action** to request a reservation (conversion optimization) without adding new pages.

#### D) Form UX can be significantly improved
- All fields are presented as one block; it feels longer than it is.
- Validation feedback is only a generic toast; users need field-level guidance.
- Date picking should prevent invalid ranges and guide return date.

### Recommended improvements (prioritized)

#### P0 — must have (conversion + clarity)
- Add a **Fleet gallery** with **real photos** per model (or per category) and micro specs.
- Make the “vehicle not guaranteed” rule explicit:
  - show “or similar” label on every model card,
  - repeat in the request section.
- Add a **mobile sticky CTA** (“Request reservation”) and keep nav accessible on mobile.
- Improve form UX:
  - group into clear sections (Trip / Car / Contact),
  - add inline validation messages,
  - disable invalid return dates and auto-suggest.

#### P1 — should have (polish)
- Use a tighter visual system: spacing scale, consistent card styles, stronger typography hierarchy.
- Replace emoji icons with consistent lightweight SVG icons.
- Add subtle motion but respect `prefers-reduced-motion`.
- Add a compact “What happens next” confirmation state after submit.

#### P2 — optional
- Add a “Contact” row in the footer (WhatsApp link + email) if you want inbound conversions outside the form.

---

## 2) Car image plan (non-copyright approach)

Important: Do **not** scrape or hotlink copyrighted images.

Best practice:
- Use **your own photos** of the cars or photos you have rights to use.
- Put them in `assets/cars/`.

Recommended file naming (4–5 images per model):

Use a numbered suffix so the UI can load a small gallery per model:

- `assets/cars/mazda-cx5-1.jpg`
- `assets/cars/mazda-cx5-2.jpg`
- `assets/cars/mazda-cx5-3.jpg`
- `assets/cars/mazda-cx5-4.jpg`

Repeat the pattern for each model slug:

- `assets/cars/kia-picanto-1.jpg` … `assets/cars/kia-picanto-4.jpg`
- `assets/cars/nissan-march-1.jpg` … `assets/cars/nissan-march-4.jpg`
- `assets/cars/chevrolet-onix-1.jpg` … `assets/cars/chevrolet-onix-4.jpg`
- `assets/cars/vw-golf-1.jpg` … `assets/cars/vw-golf-4.jpg`
- `assets/cars/chevrolet-onix-hatchback-1.jpg` … `assets/cars/chevrolet-onix-hatchback-4.jpg`
- `assets/cars/kia-rio-1.jpg` … `assets/cars/kia-rio-4.jpg`
- `assets/cars/nissan-versa-1.jpg` … `assets/cars/nissan-versa-4.jpg`
- `assets/cars/mazda-2-sedan-1.jpg` … `assets/cars/mazda-2-sedan-4.jpg`
- `assets/cars/mazda-4-sedan-1.jpg` … `assets/cars/mazda-4-sedan-4.jpg`
- `assets/cars/chevrolet-tracker-1.jpg` … `assets/cars/chevrolet-tracker-4.jpg`
- `assets/cars/kia-sportage-1.jpg` … `assets/cars/kia-sportage-4.jpg`
- `assets/cars/renault-koleos-1.jpg` … `assets/cars/renault-koleos-4.jpg`
- `assets/cars/toyota-fortuner-1.jpg` … `assets/cars/toyota-fortuner-4.jpg`
- `assets/cars/toyota-4runner-1.jpg` … `assets/cars/toyota-4runner-4.jpg`
- `assets/cars/toyota-txl-1.jpg` … `assets/cars/toyota-txl-4.jpg`
- `assets/cars/chevrolet-trailblazer-1.jpg` … `assets/cars/chevrolet-trailblazer-4.jpg`
- `assets/cars/renault-kwid-1.jpg` … `assets/cars/renault-kwid-4.jpg`

If you have 5 images for a model, add `-5`.

If images are missing:
- Use a clean fallback (category gradient + generated SVG silhouette + model name), not a broken image.
- If only some images exist, render only the available thumbnails.

Use image best practices:
- Prefer `webp` if possible.
- Use `loading="lazy"`.
- Provide descriptive `alt` text in both languages.

---

## 3) Claude execution prompt (copy/paste)

Use this prompt in Claude to generate a significantly improved version of the site.

---

### PROMPT START

You are a senior UI/UX-focused front-end developer.

Build a **modern, intuitive, conversion-focused** website for a car rental company named **Big Travel**.

Hard requirements:
- Single-page website (no extra pages).
- English + Spanish support with a visible language toggle (persist selection in localStorage).
- Default language should be **browser-detected**: if `navigator.language` starts with `es`, default to Spanish; otherwise English.
- Mobile-first responsive design.
- Smooth micro-interactions and transitions (respect `prefers-reduced-motion`).
- Customers can:
  1) browse categories and the fleet,
  2) submit a **reservation request** (NOT a confirmed reservation).
- Users select **category/features**; exact car model is **not guaranteed** (must be clearly communicated in multiple places).

Visual direction:
- Premium, clean, modern (think boutique car rental).
- Use a cohesive spacing/typography system.
- Use consistent SVG icon style (no emoji).
- Use the provided logo at `assets/logo.png`.
- Extract 1–2 accent colors from the logo (or choose tasteful, minimal accents) and implement as CSS variables.

Information architecture (sections on one page):
1) Header: logo, nav anchors, language toggle, primary CTA.
2) Hero: strong headline, subcopy, key trust highlights, primary CTA.
3) Fleet:
   - Category cards (economy/compact/sedan/SUV/4x4) with feature chips.
   - Fleet gallery grid showing **actual models** with photos and quick specs.
   - Every model card must be labeled “Example vehicle (or similar)” (EN/ES).
4) How it works: 3 steps.
5) Request form: grouped and easy to complete.
6) Footer: brand + small links.

Fleet models (show in gallery):
- Mazda CX5
- Kia picanto
- nissan march
- chevrolet onix
- vw golf
- chevrolet onix hatch back
- kia rio
- nissan versa
- mazda 2 sedan
- mazda 4 sedan
- checrolet tracker
- kia sportage
- renault koleos
- toyota fortuner sw
- toyora 4runner
- toyota txl
- chevrolet trailblazer
- renault kwid (manual)

Image requirements:
- Use images from `assets/cars/` (user-provided, licensed).
- For each model, support a small gallery of **4–5 images** using the naming scheme:
  - `assets/cars/<model-slug>-1.<ext>` … `-4.<ext>` (and `-5.<ext>` if available)
  - Extensions can be mixed per model; supported extensions must include: `webp`, `jpg`, `jpeg`, `png`.
  - Example: `Mazda CX5` → `assets/cars/mazda-cx5-1.webp` / `assets/cars/mazda-cx5-2.jpg` / etc.
- IMPORTANT: the site must **auto-discover which images exist**.
  - Do not hardcode exact extensions.
  - In `main.js`, implement an async `discoverImages(slug)` that probes URLs in priority order:
    - for `n = 1..5`, try `webp`, then `jpg`, then `jpeg`, then `png`.
    - use `new Image()` with `onload/onerror` (or `fetch` if you prefer) to detect which files exist.
    - return an array of working URLs; cache results per slug.
  - Render only images that successfully load.
- UI behavior (keep it single-page, no heavy UI):
  - Each model card shows one large cover image.
  - Show a row of small thumbnails (horizontal scroll on mobile).
  - Tapping a thumbnail swaps the cover image with a subtle fade.
  - Do NOT require a modal/lightbox.
- Add `loading="lazy"` and good `alt` text (EN/ES).
- If images are missing, render a polished fallback (gradient panel + SVG car silhouette + model name).
 - Visual consistency requirements:
   - All cover images must be displayed in a consistent aspect ratio (e.g., 16:10 or 4:3) using `object-fit: cover`.
   - Thumbnails must be consistent size and shape.
   - Keep the card layout stable while images load (use fixed-height media container + skeleton shimmer).

Category UX requirements:
- Clicking a category should:
  - visually select it,
  - optionally prefill the form category selector,
  - scroll to the request form when user clicks “Request this category”.

Form requirements (must be excellent UX):
- Group fields with headings (Trip details / Vehicle needs / Contact).
- Fields:
  - Name, email, phone/WhatsApp
  - Pickup date, return date
  - Pickup location, dropoff location
  - Vehicle category
  - Transmission (either/automatic/manual)
  - Passengers, luggage
  - Notes (optional)
  - Preferred language
- Validation:
  - Inline field errors (per-field) + a top summary message.
  - Return date must be after pickup date.
  - Improve date UX: when pickup date changes, adjust min return date.
- Submission:
  - POST JSON to `/api/reservation`.
  - Show a clear success state (toast + inline “What happens next” panel).

Tech constraints:
- No framework, no build step.
- Use plain HTML/CSS/JS.
- Use semantic HTML and accessible ARIA.
- Keep code clean, well-structured, and minimal.

Backend:
- Include an Azure Functions HTTP endpoint at `POST /api/reservation`.
- Validate request server-side and send email via SendGrid.
- Required environment variables:
  - `SENDGRID_API_KEY`
  - `NOTIFY_TO_EMAIL`
  - `NOTIFY_FROM_EMAIL`
- Return `{ ok: true }` JSON on success.

Deployment:
- Target Azure Static Web Apps (SWA) with integrated API.
- Include GitHub Actions workflow using `Azure/static-web-apps-deploy@v1`.
- Include Azure CLI instructions to create resources and set SWA app settings.

Files to generate (full content):
- `/index.html`
- `/styles.css`
- `/main.js`
- `/staticwebapp.config.json`
- `/assets/logo.png` (assume exists, do not generate)
- `/assets/cars/.gitkeep`
- `/api/host.json`
- `/api/package.json` (include `@sendgrid/mail`)
- `/api/reservation/function.json`
- `/api/reservation/index.js`
- `/.github/workflows/azure-static-web-apps.yml`
- `/docs/DEPLOYMENT_AZURE.md`
- `/README.md`

Acceptance criteria:
- Looks premium on mobile and desktop.
- Fleet gallery shows photos (or elegant fallbacks).
- Category selection is intuitive and helps complete the form.
- Language toggle works across the whole page.
- Form UX is clearly better than a basic form: grouped, guided, and validated.

Return only the full file contents.

### PROMPT END

---

## 4) Questions to answer (so Claude can tailor copy)

- What country/city are you targeting (so the site can use the right pickup/dropoff wording)?
- What WhatsApp number and support email should be shown in the footer (optional)?
- Confirm the max images per model you want to support (default: 5).
