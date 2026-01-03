# Claude prompt — generate the Big Travel website

Copy/paste the text below into Claude to (re)generate this project. It’s designed to produce a **simple, modern, responsive** bilingual (EN/ES) static site + an Azure Functions API for reservation requests.

---

## PROMPT START

You are a senior web developer. Create a production-ready project for a car rental company called **Big Travel**.

Goals:
- Simple, modern, responsive website (mobile-first).
- English and Spanish language support with a quick language toggle.
- Customers can browse categories and see the fleet list.
- Customers can submit a **reservation request** (not a confirmed booking). The request is emailed to the company.

Design constraints:
- Modern, clean, minimal.
- Smooth but subtle transitions.
- Keep UX simple: single page with sections (Hero, Fleet, How it works, Request).

Content requirements:
- Company name: Big Travel.
- Fleet models (displayed in a list; selection is by category/needs, not guaranteed exact model):
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

Form requirements:
- Name, email, phone/WhatsApp
- Pickup date, return date
- Pickup location, dropoff location
- Vehicle category (economy/compact/sedan/SUV/4x4)
- Transmission (either/automatic/manual)
- Passengers and luggage counts
- Optional notes
- Validation: required fields + return date after pickup.
- On success show a friendly confirmation toast.

Backend requirements:
- Add an Azure Function endpoint POST `/api/reservation`.
- Validate required fields.
- Send an email notification using SendGrid.
- Required environment variables:
  - SENDGRID_API_KEY
  - NOTIFY_TO_EMAIL
  - NOTIFY_FROM_EMAIL
- Reply with JSON `{ ok: true }` on success; JSON error on failures.

Deployment requirements:
- Use Azure Static Web Apps (SWA) with integrated API.
- Provide a GitHub Actions workflow using `Azure/static-web-apps-deploy@v1`.
- Provide Azure CLI instructions to:
  - create resource group
  - create static web app
  - set GitHub secret `AZURE_STATIC_WEB_APPS_API_TOKEN`
  - set SWA app settings for SendGrid vars

Project structure:
- `/index.html`, `/styles.css`, `/main.js` (no build step; plain HTML/CSS/JS)
- `/assets/logo.png` (assume logo will exist; reference it in header/footer/favicon)
- `/api/host.json`
- `/api/package.json` with `@sendgrid/mail`
- `/api/reservation/function.json`
- `/api/reservation/index.js`
- `/.github/workflows/azure-static-web-apps.yml`
- `/docs/DEPLOYMENT_AZURE.md`
- `/README.md`

Implementation notes:
- Implement the bilingual text with a simple in-file dictionary and `data-i18n` attributes.
- Categories should have short feature “pills” and example models.
- Make it look good on mobile.

Return:
- Create all files with full contents.
- Keep code clean and minimal.

## PROMPT END

---

Tip: After Claude generates files, place your real logo at `assets/logo.png`.
