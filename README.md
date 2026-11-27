# Ahmed Badawy | Portfolio

**Personal portfolio of Ahmed Badawy, Data Engineer and web developer: projects, skills, journey, certificates and leadership, with a calm light design, brand-colour tech icons and a subtle data-pipeline animation.**

[**Live site**](https://ahmed-badawy-portfolio.vercel.app) · ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)

## Highlights

- Light, dense-card layout with a hero (portrait, badges), animated splash screen and a golden accent.
- Projects page with category filters, GitHub and live-demo links and a detail modal for each project (problem, solution, role, lessons).
- Brand-colour technology icons and a small animated "DataFlow" graphic that reflects the data-engineering focus.
- Pages for About, Skills, Journey, Certificates, Leadership and Contact. Hash routing (`/#/projects`) so it works on any static host.
- Respects `prefers-reduced-motion`. Responsive on phones and desktops.

## Tech stack

React 19, TypeScript, Vite 6, Tailwind CSS 4, Motion (animation), React Router 7.

## Run locally

```bash
git clone https://github.com/ahmedbadawix77x-gif/ahmed-badawy-portfolio.git
cd ahmed-badawy-portfolio
npm install
npm run dev        # http://localhost:3000
npm run build      # production build in dist/
```

## Project structure

```
src/
  components/   Hero, Projects, ProjectCard, DataFlow, BrandIcon, ...
  pages/        one component per route
  data/         projects.ts, skills.ts, journey.ts, certificates.ts, achievements.ts
```

To add a project, add an entry to `src/data/projects.ts`.

## Deployment

Vercel deploys the `main` branch automatically. Changes go through a branch and a pull request, so every update is one revertible commit. The branch `backup-original-design` keeps the original design as a restore point.
