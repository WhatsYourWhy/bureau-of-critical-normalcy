# Bureau of Critical Normalcy

> The system is working. We're concerned.

Satirical cybersecurity advisories for perfectly ordinary behavior. All findings, scanners, threat scores and agency claims are fictional.

## Live site

https://bureau-of-critical-normalcy.normalcybureau.workers.dev/

## Project

This is a simple, client-side website. The original source is in `index.html`. It contains the HTML, CSS, and JavaScript for nine fictional advisories, search, the fake threat scanner and bulletin generator. No user accounts, backend, tracking scripts or payments are required.

- `index.html`: website
- `favicon.svg`: browser icon
- `cloudflare.config.ts`: Cloudflare Worker name and account
- `vite.config.ts`: Cloudflare/Vite static asset build
- `package.json`: local and CI commands

## Local development

Requires Node.js 22.18+ for the Cloudflare CLI.

```bash
npm install
npm run dev
```

Open the URL printed by Vite. To build the static site:

```bash
npm run build
```

## Connect GitHub to the existing Cloudflare Worker

**The Worker already exists. Do not create a new one.**

1. Sign in to the **personal Cloudflare account** (the account containing the Worker named `bureau-of-critical-normalcy`).
2. Open **Workers & Pages > bureau-of-critical-normalcy > Settings > Builds > Connect**.
3. Authorize the **Cloudflare Workers and Pages** GitHub App if prompted. Grant access to the `WhatsYourWhy/bureau-of-critical-normalcy` repository.
4. Set GitHub source to `WhatsYourWhy/bureau-of-critical-normalcy`, production branch `main`, and root directory `/`.
5. Set build command to `npm run build` and deploy command to `npx cf deploy` (or `npm run deploy`). No custom environment secrets are needed by the site code.
6. Save the integration, run an initial deployment or make a small test commit, and confirm the published site and its interactions.

Cloudflare may require a Workers Builds deployment token during setup. Use Cloudflare's own authorization flow. Never commit access tokens to GitHub.

### Publishing changes

After Git integration is enabled, push website changes to `main`. Check the Workers Builds log and test the live site.

## Status on November 10, 2026

- Website deployed on personal Cloudflare Worker: **yes**
- GitHub repository and site source: **yes**
- Cloudflare automatic builds connected: **awaiting GitHub App/build token authorization**
- Custom domain: **none**
- Paid features: **none**

## Privacy and satire

This is independent satire, unaffiliated with any cybersecurity vendor or government agency. No real CVEs or vulnerabilities are being reported.
