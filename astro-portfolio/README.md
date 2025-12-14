# Astro Portfolio - David Breuer

A modern, fast portfolio website built with Astro and Tailwind CSS.

## 🚀 Quick Start

```bash
cd astro-portfolio
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view the site.

## 📁 Project Structure

```
astro-portfolio/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ContentCard.astro
│   │   ├── FilterNav.astro
│   │   ├── Footer.astro
│   │   ├── ProjectCard.astro
│   │   ├── ServiceCard.astro
│   │   └── SkillBar.astro
│   ├── data/
│   │   └── content.ts   # Content data (migrated from content.json)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       └── index.astro  # Main page
├── public/
│   └── images/          # Copy your images here
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🎨 Customization

### Update Content

Edit `src/data/content.ts` to update:

- Profile information
- Skills and percentages
- Portfolio projects
- Services

### Styling

- Colors defined in `tailwind.config.mjs`
- Global styles in `src/pages/index.astro`

### Images

Copy your project images from the legacy `images/` folder to `astro-portfolio/public/images/`

## 🏗️ Build & Deploy

```bash
npm run build    # Creates static files in dist/
npm run preview  # Preview the built site
```

### GitHub Pages

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:

1. Build the site on push to `main`
2. Deploy to GitHub Pages

## 🔧 Commands

| Command           | Action                                 |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start dev server at `localhost:4321`   |
| `npm run build`   | Build production site to `./dist/`     |
| `npm run preview` | Preview build locally before deploying |

## 🌟 Features

- ⚡ **Lightning fast** - Static HTML, zero JavaScript by default
- 📱 **Fully responsive** - Mobile-first design with Tailwind
- 🎨 **Modern design** - Clean, professional portfolio layout
- 🔍 **SEO optimized** - Proper meta tags and Open Graph
- 🌙 **Dark theme** - Elegant dark color scheme
- 🏷️ **Project filtering** - Filter projects by technology
- 📊 **Animated skill bars** - Visual skill representation

## 📦 Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) - Type safety
