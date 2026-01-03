# Azure deployment (CLI + GitHub Actions)

This project is designed for **Azure Static Web Apps** (SWA) with an integrated **Azure Functions** API.

## 1) Prereqs

- Azure CLI installed and logged in: `az login`
- GitHub CLI installed and logged in: `gh auth login`
- A SendGrid account + verified sender email

## 2) Create repo + push

From the project folder:

```bash
git init

git add -A
git commit -m "Initial Big Travel site"

# Create the GitHub repo (pick your org/user)
gh repo create bigtravel --source . --public --remote origin

git branch -M main
git push -u origin main
```

## 3) Create Azure Static Web App

Set variables:

```bash
RG="bigtravel-rg"
LOC="eastus2"
SWA_NAME="bigtravel-swa"
```

Create resource group:

```bash
az group create -n "$RG" -l "$LOC"
```

Create the Static Web App:

```bash
az staticwebapp create \
  -n "$SWA_NAME" \
  -g "$RG" \
  -l "$LOC" \
  --source "https://github.com/<YOUR_ORG_OR_USER>/bigtravel" \
  --branch "main" \
  --app-location "/" \
  --api-location "api" \
  --output-location "" \
  --login-with-github
```

Notes:
- The `--login-with-github` flow wires GitHub <-> Azure and can create a workflow automatically.
- If Azure creates its own workflow, you can keep it or replace it with [./.github/workflows/azure-static-web-apps.yml](../.github/workflows/azure-static-web-apps.yml).

## 4) Configure GitHub Actions secret

If you’re using the workflow in this repo, add this GitHub Actions secret:

- `AZURE_STATIC_WEB_APPS_API_TOKEN`

Get the token:

```bash
az staticwebapp secrets list -n "$SWA_NAME" -g "$RG"
```

Copy the `properties.apiKey` value and set it in GitHub:

```bash
gh secret set AZURE_STATIC_WEB_APPS_API_TOKEN --body "<PASTE_API_KEY>"
```

## 5) Configure API app settings (SendGrid + notification emails)

```bash
az staticwebapp appsettings set \
  -n "$SWA_NAME" -g "$RG" \
  --setting-names \
    SENDGRID_API_KEY="<YOUR_SENDGRID_KEY>" \
    NOTIFY_TO_EMAIL="<YOUR_INBOX_EMAIL>" \
    NOTIFY_FROM_EMAIL="<VERIFIED_SENDGRID_SENDER_EMAIL>"
```

## 6) Trigger deployment

Push to main:

```bash
git push
```

Then check Actions in GitHub and the SWA URL in Azure.

## Troubleshooting

- If form submissions fail, confirm the SWA app settings exist and SendGrid sender is verified.
- If you see a 404 for `/api/reservation`, confirm `api/reservation/function.json` route is `reservation`.
