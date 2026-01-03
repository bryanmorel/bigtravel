# Big Travel — Design + implementation audit (v2) and Claude build spec

Date: 2026-01-03

You asked for:
- A **new audit** (read all files, find errors).
- A **modern, intuitive, elegant** redesign.
- **Car photos not loading** → fix image strategy.
- Fleet page feels like **infinite scroll** → reduce initial content and guide users.
- Form is overwhelming → switch to a **guided step-by-step flow** (still one page).

This doc has two parts:
1) Audit findings (what’s broken + why).
2) A Claude-ready build spec that fixes everything.

---

## 1) Audit findings (current repo)

### A) i18n is broken (why you see `nav.how`, `cta.request`, etc.)
Symptoms (from screenshots): UI shows translation keys instead of real text.

Root causes:
- **Key mismatch** between HTML and dictionary.
  - Example: HTML uses `data-i18n="nav.how"` but JS only defines `nav.howItWorks`.
  - HTML uses `cta.request`, `cta.viewFleet`, `fleet.disclaimer`, etc. but JS dictionary mostly uses different key names.
- **Translation system overwrites text with the key** when missing.
  - `t(key)` returns `key` when not found, so you literally see `cta.request`.

Fix requirements:
- Define a single canonical set of keys and use them consistently.
- Add a runtime “missing i18n key” detector that logs missing keys in dev.

### B) Language/theme toggle doesn’t work
Root causes:
- HTML uses `id="langToggle"` and `id="themeToggle"`, but JS looks for `langBtn` and never binds click handlers to the actual elements.

Fix requirements:
- Use event listeners, not mismatched IDs.
- Use consistent localStorage keys (e.g. `bt_lang`, `bt_theme`).

### C) Images don’t load
Root causes:
- `assets/cars/` is empty in the repo (only `.gitkeep` exists).
- The current discovery logic only checks `assets/cars/<slug>.webp` (no numbered variants), while your requirement is **4–5 images per model** with **mixed extensions**.

Fix requirements:
- Support `assets/cars/<slug>-1..5.(webp|jpg|jpeg|png)` with auto-discovery.
- Make discovery **lazy** so it doesn’t trigger hundreds of requests at once.

### D) Fleet feels like “infinite scroll”
Root cause:
- The grid renders **all vehicles at once** for the selected tab.

Fix requirements:
- Show a **curated first screen** (e.g., 6 vehicles) with a simple **“Show more”** button.
- Keep category tabs, but don’t dump the whole fleet immediately.

### E) Form is overwhelming and mismatched to API
Root causes:
- The form shows everything at once (even though it’s grouped).
- **Front-end field names do not match the API contract**:
  - JS posts `returnLocation` and `vehicle`.
  - API expects `dropoffLocation`, `category`, `transmission`, `passengers`, `luggage`, etc.

Fix requirements:
- Replace the “big form” with a **stepper**:
  1) Choose vehicle (required)
  2) Trip dates + locations
  3) Contact info
  4) Review + submit
- On submit, send JSON exactly matching the API:
  - `pickupDate`, `returnDate`, `pickupLocation`, `dropoffLocation`, `category`, `transmission`, `passengers`, `luggage`, `name`, `email`, `phone`, `language`, `notes`, `createdAt`.

### F) Backend mismatch in docs
Your docs mention SendGrid in some places, but the current API implementation uses **Microsoft Graph**.

Fix requirement:
- The Claude spec should match what you’re actually using (Graph), with correct env vars.

---

## 2) Claude build spec (UI/UX + technical)

Copy/paste the prompt below into Claude.

---

### PROMPT START

You are a senior UI/UX designer and front-end engineer.

Build a **modern, elegant, intuitive** single-page website for a car rental company named **Big Travel**.

Absolute constraints:
- Single page only (no separate pages).
- Bilingual EN/ES with a language toggle.
- Default language is browser-detected: if `navigator.language` starts with `es`, default Spanish; otherwise English.
- Mobile-first, highly responsive.
- Smooth micro-interactions; respect `prefers-reduced-motion`.

Primary UX goal:
- The user must be **guided**, not overwhelmed.
- They should **select a vehicle first**, then be guided through dates/locations, then contact.

### A) Page structure (sections)
1) Header (sticky): logo, small nav links, language toggle, theme toggle, primary CTA.
2) Hero: premium headline, subheadline, trust highlights.
3) Fleet (selection-first UX):
   - Category tabs.
   - Vehicle cards with photos.
   - Selecting a vehicle starts the reservation flow.
4) Reservation stepper (guided form): step 1–4.
5) How it works: 3 steps.
6) Footer: minimal brand + WhatsApp link.

### B) Visual design requirements (make it “100x better”)
- Use a refined spacing system (8px grid) and clear type hierarchy.
- Increase perceived quality via:
  - better whitespace,
  - cleaner card design,
  - consistent icon set (inline SVG, same stroke width),
  - subtle shadow + border system,
  - premium hero composition.
- Use CSS variables for theme tokens.
- Pull 1–2 tasteful accent colors inspired by the logo at `assets/logo.png`.

### C) Fleet UI requirements (avoid “infinite scroll”)
- Keep category tabs: All / Compact / Sedans / SUVs / 4x4.
- Default view:
  - show only **6 vehicles** initially.
  - add a **Show more** button that reveals +6 at a time.
  - no infinite scrolling.
- Vehicle card must include:
  - cover image + thumbnail strip (4–5 images if available)
  - name, category label
  - short spec row (passengers, doors, A/C)
  - a clear tag: “Example vehicle (or similar)” / “Vehículo de referencia (o similar)”
- Selecting a vehicle:
  - visually marks it selected,
  - opens the stepper and takes the user to Step 2 (Trip details),
  - stores selected vehicle name and category.

### D) Car photos (mixed extensions, auto-discovery, consistent style)
Your photos are user-provided and stored locally (no hotlinking).

Folder: `assets/cars/`

Naming scheme:
- 4–5 images per model:
  - `assets/cars/<slug>-1.<ext>` … `assets/cars/<slug>-5.<ext>`
  - extensions can be mixed: `webp`, `jpg`, `jpeg`, `png`.

Auto-discovery requirement:
- Implement `discoverImages(slug)`:
  - Max images per model: **5**.
  - For n = 1..5, try ext order: webp → jpg → jpeg → png.
  - Detect existence by loading with `new Image()`.
  - Cache results.
  - IMPORTANT: do this lazily (only when the card enters viewport) using IntersectionObserver.

Consistency requirements:
- Fixed aspect ratio media container.
- `object-fit: cover`.
- Show skeleton shimmer while loading.
- If no images exist, show a premium fallback (gradient + SVG silhouette + model name).

### E) Guided reservation stepper (core UX change)
Replace the current “all fields at once” approach.

Stepper steps:
1) Vehicle
   - show selected vehicle and category
   - if none selected, show a short prompt and a button to jump to Fleet section
2) Trip
   - pickup date, return date
   - pickup location, dropoff location
3) Preferences
   - transmission
   - passengers, luggage
4) Contact + Review
   - name, email, phone/WhatsApp, preferred language, notes
   - show a compact review summary before submit

Stepper UX:
- Progress indicator (Step 1/4 etc.)
- Next/Back buttons
- Validate only the fields for the current step (inline errors)
- Prevent invalid date ranges by updating min return date based on pickup date
- Keep it fast on mobile: one-column layout with clear spacing

### F) i18n requirements (prevent “raw keys” issue)
- Use `data-i18n` across the page.
- Define a canonical dictionary for EN/ES.
- Every `data-i18n` key used in HTML **must exist** in the dictionary.
- Implement a dev-only console warning listing missing keys.
- Default HTML text should be English so the page is still readable if JS fails.

### G) API contract (must match backend)
The site submits a reservation request to:
- `POST /api/reservation`

Send JSON with these exact fields:
- `name`, `email`, `phone`, `language`
- `pickupDate`, `returnDate`, `pickupLocation`, `dropoffLocation`
- `category`, `transmission`, `passengers`, `luggage`
- `notes`, `createdAt`
- (optional) `selectedVehicleName` (for internal reference)

### H) Backend (Azure Functions) — Microsoft Graph email
Implement the Azure Function at `api/reservation`:
- Validate required fields.
- Send a notification email via Microsoft Graph `sendMail`.

Environment variables:
- `AZURE_TENANT_ID`
- `AZURE_CLIENT_ID`
- `AZURE_CLIENT_SECRET`
- `NOTIFY_TO_EMAIL`
- `NOTIFY_FROM_EMAIL` (a real mailbox user principal name used in Graph `/users/{id}/sendMail`)

### I) Project structure (no framework)
Generate full contents for:
- `/index.html`
- `/styles.css`
- `/main.js`
- `/staticwebapp.config.json`
- `/assets/logo.png` (assume exists)
- `/assets/cars/.gitkeep`
- `/api/host.json`
- `/api/package.json`
- `/api/reservation/function.json`
- `/api/reservation/index.js`
- `/.github/workflows/azure-static-web-apps.yml`
- `/docs/DEPLOYMENT_AZURE.md`
- `/README.md`

Acceptance criteria:
- No i18n keys visible anywhere.
- Car images render when present; fallback looks premium.
- Fleet does not dump all cards at once (Show more pattern).
- Reservation is guided via stepper, with validation per step.
- UI feels premium and polished on mobile.

Return only the full file contents.

### PROMPT END

---

## 3) Action checklist for you (so images work)

- Add your photos to `assets/cars/` following the slug pattern Claude will use.
- If your filenames differ, update the slug mapping in `main.js`.

Recommended slug mapping (examples):
- `Kia Picanto` → `kia-picanto`
- `Nissan March` → `nissan-march`
- `Mazda CX-5` → `mazda-cx5`

---
