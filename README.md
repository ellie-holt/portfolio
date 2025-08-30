# Personal Portfolio

A responsive, accessible front‑end web development portfolio built with Svelte 5, Vite, and Tailwind CSS v4. It showcases selected work and includes a short bio with a Netlify‑powered contact form. The interface blends neo-brutalist styling with hand-drawn Rough.js arrows, and is built on a clean Grid/Flexbox layout with clear focus rings for reliable keyboard navigation.

---

## Live Site

You can view the live site here: [Ellie Holt | Portfolio](https://ellieholt.dev/)

---

## Features

- Responsive, grid‑based layout across multiple breakpoints
- Accessible UI: semantic headings, strong focus rings, keyboard paths, labelled controls
- Sticky hero banner that reveals on scroll
- Animated, hand‑drawn arrows using Rough.js
- Contact form with Netlify Forms + honeypot and client‑side validation
- SEO & PWA touches: meta tags, Open Graph/Twitter tags, canonical URL, web manifest & favicons
- Component library powered by Storybook

---

## Technologies Used

### Core

- [Svelte 5](https://svelte.dev/)

### Styling

- [Tailwind CSS v4](https://tailwindcss.com/)
- [IBM Plex](https://www.ibm.com/plex/) font family ([Google fonts](https://fonts.google.com/))

### UI & Media

- [Rough.js](https://roughjs.com/) for sketchy arrows
- [Devicon](https://devicon.dev/) icon set (toolbox badges)

### Tooling & Deployment

- [Vite 6](https://vite.dev/)
- [Netlify](https://www.netlify.com/)
- [Storybook 9](https://storybook.js.org/)
- [npm](https://www.npmjs.com/)
- [Prettier](https://prettier.io/)

---

## Development

### Requirements

- **Node.js ≥ 18**
- **npm** (or a compatible package manager)

### Setup & Scripts

```bash
# Install
npm install

# Start local dev server (Vite)
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview

# Storybook (component docs)
npm run storybook

# Static Storybook export
npm run build-storybook
```

### Project Structure (high‑level)

```
├─ public/                 # web manifest & favicons
├─ src/
│  ├─ assets/              # images (WebP), project thumbs
│  ├─ lib/                 # icons, state, UI components (Arrow, Button, ...)
│  ├─ sections/            # page sections: Hero, HeroBanner, Navbar, About, Work, Contact, Footer
│  ├─ styles/              # tokens, base styles, utilities, Tailwind entry
│  ├─ App.svelte           # page composition & scroll reveal wiring
│  └─ main.js              # Svelte mount
├─ .storybook/             # Storybook config & global CSS
├─ netlify.toml            # build + forms processing
├─ vite.config.js          # Vite + Svelte + Tailwind plugins
└─ svelte.config.js        # Svelte (runes enabled outside node_modules)
```

---

## Accessibility Notes

- **Keyboard & focus**: clear, high‑contrast focus outlines; logical tab order
- **ARIA**: labelled interactive elements; `aria-hidden` used to avoid duplicate headings and to hide purely decorative elements
- **Forms**: semantic labels and validation

---

## SEO / Meta

- Canonical URL in `index.html`
- Descriptive `meta` description and Open Graph/Twitter tags
- `site.webmanifest` with app name/icons

---

## Deployment

This site is configured for **Netlify**:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Forms**: `[build.processing.forms] enabled = true` in `netlify.toml`
- Hidden fallback form in `index.html` to enable Netlify Forms detection

> After connecting the repo in Netlify, deployments will run the build and Forms submissions will appear under your site’s **Forms** tab.

---

## License

This project is licensed under the [MIT License](LICENSE).
