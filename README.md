# Joineazy Internship Task-1 — Frontend

A React + Vite + Tailwind scaffold for the Assignment & Review Dashboard (Admin + Student roles).
This scaffold includes:
- Role-based login screen (choose Student or Admin)
- Student sees only their assignments and can confirm submission via double verification
- Admin can create assignments (mock), attach Drive links, and view student submission progress
- Mock data stored in `localStorage` (no backend)

## How to run (locally)

1. Install dependencies:
```bash
npm install
```

2. Run dev server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
npm run preview
```

## Project structure
```
/src
  /components
    AssignmentCard.jsx
    ProgressBar.jsx
    Header.jsx
  /pages
    Login.jsx
    StudentDashboard.jsx
    AdminDashboard.jsx
  /data
    mockData.js
  main.jsx
  index.css
tailwind.config.cjs
postcss.config.cjs
vite.config.js
package.json
README.md
```

## Notes
- The project uses simulated data. Use the UI to create assignments — they persist to `localStorage`.
- The login simply selects a role and a user (no real auth) as required by the task.
- Ready to push to GitHub and deploy to Vercel/Netlify.

