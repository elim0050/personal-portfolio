# Personal Portfolio Website – Detailed Plan

---

## Tech Stack

- **Next.js** (App Router) – single-page layout, fast navigation, easy deployment
- **React** – UI components
- **Tailwind CSS** – styling, responsive layout, minimalist palette

---

## Project Setup

1. **Scaffold Next.js app** with TypeScript, Tailwind, ESLint, `src/` directory, and App Router (e.g. `npx create-next-app@latest` with the above options).
2. **Confirm Tailwind** is configured in `tailwind.config.ts` (or `.js`) and that global styles live in `src/app/globals.css`. Use Tailwind's responsive breakpoints (`sm:`, `md:`, `lg:`, `xl:`) for all layout changes across screen sizes.
3. **Optional**: Add a shared layout in `src/app/layout.tsx` (metadata, font, body wrapper) so the single page is the only route under `src/app/page.tsx`.

---

## Page Structure (Single Page, Four Sections)

One route: **`/`** (e.g. `src/app/page.tsx`). The page will contain:

| Section          | Purpose                                                                                  |
| ---------------- | ---------------------------------------------------------------------------------------- |
| **Header**       | Fixed/sticky nav with four anchor links (Introduction, About Me, Projects, Contact Me).  |
| **Introduction** | Split layout: left half = name + Download Resume + Contact Me buttons; right half = profile picture. |
| **About Me**     | Short bio, skills, or background.                                                        |
| **Projects**     | Card listing with position, project title, description, skills; minimalist B&W/grey.      |
| **Contact Me**   | Download Resume button + contact form and/or links (email, LinkedIn, GitHub, etc.).       |

Use semantic HTML: `<header>`, `<main>`, `<section>` with stable `id`s for anchor links (e.g. `#intro`, `#about`, `#projects`, `#contact`).

---

## Header and Navigation

- **Fixed or sticky header** so nav is always visible.
- **Four nav links** that scroll to the corresponding section (no full-page reload).
- **Smooth scroll**: use `href="#intro"` (etc.) and ensure smooth scroll is enabled (e.g. `scroll-behavior: smooth` in `globals.css` on `html`).
- **Optional**: Active section highlighting (e.g. change link style when a section is in view) via `IntersectionObserver` or a small hook; keep it minimal to match the design.

**Suggested section IDs**

- `id="intro"` – Introduction
- `id="about"` – About Me
- `id="projects"` – Projects
- `id="contact"` – Contact Me

---

## Section-by-Section Design

### 1. Introduction (Two-Half Layout)

- **Left half (e.g. 50% width on desktop)**:
  - Your name (e.g. `h1`).
  - **Download Resume** button – links to a PDF file (e.g. in `public/resume.pdf` or external URL).
  - **Contact Me** button – scrolls to `#contact` (smooth scroll).
- **Right half (e.g. 50% width on desktop)**:
  - Your profile picture (e.g. Next.js `Image` from `public/` or a hosted URL).
- Full-viewport or near full-viewport height; use a two-column grid/flex (e.g. `grid-cols-1 md:grid-cols-2` or `flex flex-col md:flex-row`) so it stacks on small screens and sits side-by-side on tablet/desktop. On mobile: single column, name + buttons first, then picture; ensure buttons and text are tap-friendly (min touch target ~44px).
- Background: white or very light grey; text black/dark grey. Minimal decoration.

### 2. About Me

- Block of text (paragraphs or short bullets).
- Optional: small list of skills or "What I do" in a simple grid/list.
- Typography-focused; keep spacing and line-height readable. Same B&W/grey palette.

### 3. Projects (Card Listing – Minimalist B&W/Grey)

- **Palette**: Only black, white, and greys (e.g. `gray-100` to `gray-900`). No other colors.
- **Layout**: Card listing (vertical list or grid of cards). Use responsive grid (e.g. `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`) so mobile shows one column, tablet two, desktop two or three. Each card displays:
  - **Position** – e.g. "Software Engineer", "Frontend Developer" (role/position for that project).
  - **Project title** – name of the project.
  - **Description** – short project description.
  - **Skills** – tags or list of skills used (e.g. React, TypeScript, Node.js).
- **Style**: Clean cards (white or light grey background, subtle grey border or shadow). Optional: "View" / "Code" links per card.
- **Typography**: Clear hierarchy (position, title, description, skills) in black/dark grey on light grey/white.
- **Data**: e.g. `src/data/projects.ts` with `{ position, title, description, skills[] }` per project.

### 4. Contact Me

- **Download Resume** button – same as in Introduction (link to PDF in `public/` or external URL), so visitors can download from the bottom of the page too.
- **Plus** one or both of:
  - **Links**: Email (mailto), LinkedIn, GitHub, etc., as icon + text links.
  - **Simple form**: Name, Email, Message, Submit button (client-side `mailto:` or API later).
- Styling: same B&W/grey system; buttons in grey/black.

---

## File and Component Structure (Suggested)

- **`src/app/page.tsx`** – Single page that imports and renders all sections and the header.
- **`src/app/layout.tsx`** – Root layout (metadata, fonts, `<html>`, `<body>`).
- **`src/app/globals.css`** – Tailwind directives; `scroll-behavior: smooth` on `html`.
- **Components** (e.g. under `src/components/`):
  - `Header.tsx` – Fixed header and nav links.
  - `IntroSection.tsx` – Two-half hero (name + buttons left, picture right).
  - `AboutSection.tsx` – About content.
  - `ProjectsSection.tsx` – Project cards with position, title, description, skills.
  - `ContactSection.tsx` – Download Resume button + contact links and/or form.
- **Data**: `src/data/projects.ts` with array of `{ position, title, description, skills[] }` (and optional `link`, `repo`) for project cards. Store resume PDF path/URL in one place (e.g. constant or env) and reuse for both Intro and Contact "Download Resume" buttons.

---

## Tailwind and Minimal Palette

- In **Projects** (and optionally globally), restrict to:
  - **Backgrounds**: `white`, `gray-50`, `gray-100`, `gray-200`.
  - **Text**: `black`, `gray-900`, `gray-700`, `gray-600`.
  - **Borders / dividers**: `gray-200`, `gray-300`.
  - **Hover / buttons**: `gray-800`, `gray-700` for text or fill.
- Use Tailwind's spacing (`py-16`, `px-6`, `gap-6`, etc.) for consistent section padding and card spacing.

---

## Responsive Design & Screen Sizes

The site must work well on **mobile phones**, **tablets**, and **desktop** (different viewport widths). Use a **mobile-first** approach: base styles for small screens, then `sm:`, `md:`, `lg:` (and `xl:` if needed) to adjust for larger screens.

**Breakpoint reference (Tailwind default):**
- **Mobile**: default, no prefix (&lt; 640px)
- **sm**: 640px+
- **md**: 768px+
- **lg**: 1024px+
- **xl**: 1280px+

**Per section:**

- **Header**: On mobile, use either (a) a compact horizontal nav that wraps or shrinks font/space, or (b) a hamburger menu that opens a drawer/sheet with the four section links. Ensure tap targets are at least ~44px for touch. On tablet/desktop, show all four links in a row.
- **Introduction**: Mobile = single column, full width; name and two buttons stacked first, then profile image below (e.g. `flex-col` / `grid-cols-1`). Tablet/desktop = two columns (e.g. `md:grid-cols-2`). Profile image should scale (e.g. `max-w-full h-auto` or `object-cover` with constrained aspect ratio) so it doesn’t overflow on narrow screens.
- **About Me**: Single column at all sizes; adjust padding (e.g. `px-4 md:px-6 lg:px-8`) and possibly font size so text is readable on small screens without horizontal scroll.
- **Projects**: Mobile = one card per row (`grid-cols-1`). Tablet = two columns (`md:grid-cols-2`). Desktop = two or three columns (`lg:grid-cols-3`). Cards should not overflow; text and skill tags wrap. Avoid tiny text on mobile.
- **Contact Me**: Single column on mobile (Download Resume button, then links or form stacked). Same on larger screens with optional horizontal arrangement for links. Form inputs full width on mobile, optionally constrained on desktop.

**General:**
- No horizontal scrolling on any viewport; use `overflow-x-hidden` on body if needed and ensure images/text use `max-w-full` or flexible widths.
- Test at 320px (narrow phone), 375px, 768px (tablet), and 1024px+ (desktop).
- Use `meta viewport` in `layout.tsx` (Next.js includes this by default) so mobile browsers don’t zoom out and show a tiny desktop layout.

---

## Optional Enhancements (Post–MVP)

- Light/dark mode (still B&W/grey).
- Simple animations (e.g. fade-in on scroll) via CSS or a small library.
- SEO: set `title` and `description` in `layout.tsx` metadata.
- Favicon and basic meta tags.

---

## Implementation Order

1. Create Next.js app with Tailwind and TypeScript.
2. Configure `globals.css` (Tailwind + smooth scroll) and `layout.tsx` (metadata, font).
3. Build `Header` with anchor links and fixed positioning.
4. Build `IntroSection` (two halves: name + Download Resume + Contact Me left, profile picture right).
5. Build `AboutSection`, `ProjectsSection` (cards with position, title, description, skills), `ContactSection` (with Download Resume button).
6. Compose everything in `page.tsx` with correct section IDs.
7. Apply minimalist B&W/grey styling to Projects (and optionally whole page).
8. Add real or placeholder project data, resume PDF, and contact links.
9. Implement responsive layout for all sections (mobile, tablet, desktop) using Tailwind breakpoints; test at 320px, 375px, 768px, 1024px and ensure no horizontal scroll. Test smooth scroll.
