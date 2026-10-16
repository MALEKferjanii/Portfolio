# Malek Ferjani — Portfolio

React, TypeScript and Vite portfolio, with a downloadable two-page CV.

## Content

Edit `src/data/profile.json` for experience, projects, strengths, skills, education, contact information and credentials. Both the rendered portfolio and PDF generator use this content.

## Interactive experience

The welcome screen introduces the profile with a boot sequence and can be entered or skipped at any point. Replay it from the footer or floating action bar. The original Three.js sphere, rings, particles and pointer interaction are restored, alongside the scanline and scrolling technology strip.

The terminal supports commands, shortcuts, command history, CV preview (`resume`) and download (`download`). The nav, hero, contact section and floating bar open the CV in a popup viewer (`src/components/CvViewer.tsx`) that also offers new-tab and download actions; browsers without an inline PDF viewer get open/download buttons instead. The architecture explorer has selectable Maximo and Kubernetes layers. Visual effects can be paused in the footer and respect reduced-motion preferences. Browsers without WebGL2 retain the working content and interactions.

The current content is based on the supplied August 2026 résumé. The SUEZ France assignment (2023–2025) and internal Sinorfi role (2025–present) are separate. SecureGitOps is in progress. Credentials with July 2026 expiry dates are historical achievements. No unverified performance metrics or skill percentages are published.

## Local development

- `npm install`
- `npm run dev`
- `npm run build` produces `dist/`
- `npm run lint`

## CV

The published PDF (October 2026) is a supplied file, copied from `/root/portfolio/Malek_Ferjani_resume.pdf` on the server into `public/` and the repository root. Running the generator below overwrites it.

Run `python scripts/build_cv.py` with ReportLab installed. The generator currently uses Arial fonts from `C:/Windows/Fonts`. It updates `public/Malek_Ferjani_resume.pdf` and the root `Malek_Ferjani_resume.pdf`. Rebuild the site after generating the PDF.

Render for visual review with `pdftoppm -scale-to 1200 -png public/Malek_Ferjani_resume.pdf qa/cv`.

## Browser checks

With the development server on port 5173, run `python scripts/check_portfolio.py` (Python Playwright and Chrome required). To test a production preview or the live site, pass its URL as the first argument. Checks cover five viewport widths, welcome/skip/replay, the WebGL2 renderer, terminal commands and downloads, architecture layers, filters, project details, navigation and reduced motion. Screenshots and reports go in ignored `qa/`.

## Deployment

- Host: `root@100.109.183.118`
- Live URL: https://cloud.tail07adef.ts.net/
- Static root: `/mnt/hdd/portfolio`
- Kubernetes namespace/deployment: `portfolio/portfolio`
- Nginx reads the host directory through a read-only volume.

Package the verified contents of `dist/` into a tar.gz, copy it and `scripts/deploy_portfolio.sh` to a release directory on the server, then run the script with the archive path. It validates paths, creates a full backup, copies assets before replacing the index, preserves server configuration and old hashed assets, and checks the served page and PDF.

Backups are outside the web root at `/mnt/hdd/portfolio-backups/`. To roll back, extract the chosen backup into the existing static root (the original directory must remain in place because it is mounted in Kubernetes). No restart is required.
