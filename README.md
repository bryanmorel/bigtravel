# Big Travel — Car Rental Website

Static bilingual (English/Spanish) website with a reservation request form. Submissions POST to `/api/reservation` (Azure Function) which sends an email notification.

## Local preview

Because this is plain HTML/CSS/JS, you can preview it with any static server.

Example:

```bash
cd /Users/bryanguti/Sites/BigTravel
python3 -m http.server 5173
```

Then open `http://localhost:5173`.

## Reservation notifications (email)

The Azure Function uses SendGrid.

Required app settings (environment variables):

- `SENDGRID_API_KEY`
- `NOTIFY_TO_EMAIL` (your inbox)
- `NOTIFY_FROM_EMAIL` (a SendGrid verified sender)

## Deployment

See docs:

- [docs/DEPLOYMENT_AZURE.md](docs/DEPLOYMENT_AZURE.md)
- [docs/CLAUDE_CREATE_PROMPT.md](docs/CLAUDE_CREATE_PROMPT.md)
