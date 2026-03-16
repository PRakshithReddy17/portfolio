# Engineering Student Portfolio

A modern, responsive portfolio website for an engineering student with a machine learning focus. The site is built with `React`, `Vite`, and `Tailwind CSS`, and includes reusable sections for introduction, about, skills, projects, social links, resume access, and contact details.

## Features

- Modern blue-themed UI
- Fully responsive layout for mobile, tablet, and desktop
- Smooth scrolling navigation
- Dark and light mode toggle
- Reusable React components
- Project cards with GitHub and live demo links
- Contact section with social links
- GitHub Actions workflow for CI builds

## Tech Stack

- React
- Vite
- Tailwind CSS
- Lucide React

## Project Structure

```text
.
├── .github/workflows/ci.yml
├── index.html
├── package.json
├── postcss.config.js
├── src
│   ├── App.jsx
│   ├── components
│   ├── data/portfolioData.js
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Customization

Update your personal information in:

- `src/data/portfolioData.js`

You can replace the placeholder:

- name
- branch and college
- GitHub, LinkedIn, and email
- resume link
- skills
- projects
- hero tagline and about section

## CI Workflow

The repository includes a GitHub Actions workflow at `.github/workflows/ci.yml` that:

- installs dependencies
- builds the app on pushes and pull requests

## License

This repository includes the Apache 2.0 license in `LICENSE`.