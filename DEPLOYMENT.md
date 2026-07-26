# SafeGuard deployment

## Backend: Render

Deploy the repository with `backend` as the service root directory, or use `render.yaml`. Set `VIRUSTOTAL_API_KEY` and `CORS_ALLOWED_ORIGINS` in Render. The latter must be the exact Vercel production URL, without a trailing slash.

Confirm the deployed health endpoint responds at `/api/health` before connecting the frontend.

## Frontend: Vercel

Set the Vercel project root directory to `frontend`. Configure `VITE_API_BASE_URL` as the deployed Render URL plus `/api`, for example `https://safeguard-api.onrender.com/api`. The included rewrite configuration supports direct navigation to React routes.

## Production checks

1. Verify the browser can call the health endpoint through the configured backend URL.
2. Confirm the VirusTotal key is configured only on Render, never in Vercel.
3. Update Render CORS after each Vercel domain change.
4. Run `npm run check` and `npm test` before release.
