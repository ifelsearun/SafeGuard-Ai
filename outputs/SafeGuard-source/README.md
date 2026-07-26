# SafeGuard

SafeGuard is a cybersecurity web application for analyzing URLs and uploaded files through VirusTotal API v3. It provides clear risk summaries, vendor detections, and local browser-based scan history without requiring user accounts for the MVP.

## Planned stack

- Frontend: React, Vite, Tailwind CSS, React Router, Axios
- Backend: Node.js, Express, Axios
- Security analysis: VirusTotal API v3
- Deployment: Vercel (frontend) and Render (backend)

## Development approach

The application is being built incrementally. Each phase is verified before the next begins:

1. Project setup
2. Folder structure
3. Backend setup
4. VirusTotal integration
5. Frontend setup
6. Landing page
7. URL scanner
8. File scanner
9. Result page
10. Local scan history
11. Responsive design review
12. Testing
13. Deployment preparation

## Prerequisites

- Node.js 20 or newer
- npm 10 or newer
- A VirusTotal API v3 key for backend development

## Security note

The VirusTotal API key will be configured only in backend environment variables. It must never be committed to source control or sent to the browser.

## Getting started

The frontend and backend workspaces will be created in the next phase. Once they exist, install their dependencies from the repository root with `npm install`.
