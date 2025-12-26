# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static website clone** of TwitterDown (twitterdown.com) - a free Twitter/X video downloader. The site is built with Astro and Tailwind CSS as a single-page application.

## Development Commands

```bash
# Install dependencies (uses pnpm)
pnpm install

# Start development server (with host binding)
pnpm dev
# or
pnpm start

# Build for production
pnpm build

# Preview production build
pnpm preview
```

**Note**: The `--host` flag is included in dev/start/preview commands to allow network access.

## Architecture

### Tech Stack
- **Astro 5.16.6**: Static site generator with component-based architecture
- **Tailwind CSS 3.4.19**: Utility-first styling with custom design system
- **TypeScript**: Primary language
- **pnpm**: Package manager

### Project Structure

```
src/
├── components/        # Reusable Astro components (each page section)
│   ├── Header.astro    # Fixed navigation with mobile menu
│   ├── Hero.astro      # Main CTA with download input
│   ├── Features.astro  # Feature highlights (3-column grid)
│   ├── HowToUse.astro  # Step-by-step instructions
│   ├── Testimonials.astro # User reviews
│   ├── FAQ.astro       # Expandable Q&A
│   └── Footer.astro    # Site footer
├── layouts/
│   └── Layout.astro    # Main layout wrapper with SEO/OG tags
└── pages/
    └── index.astro     # Homepage composes all components
```

### Component Architecture

**Page Composition Pattern**:
- `src/pages/index.astro` imports and composes all components
- `src/layouts/Layout.astro` provides HTML structure, SEO meta tags, and global styles
- Components in `src/components/` are self-contained sections

**Client-side Hydration**:
- Components requiring interactivity use `client:load` directive: `<Header client:load />`, `<Hero client:load />`, `<FAQ client:load />`, `<Footer client:load />`
- Static components (Features, HowToUse, Testimonials) render server-side only

### Design System

**Color Scheme** (CSS variables defined in `Layout.astro`):
- Primary: Teal/cyan (`--primary: 180 70% 40%`, roughly `#0c7f79`)
- Uses HSL format with alpha values for theming
- shadcn/ui-inspired token system

**Custom Animations** (in `tailwind.config.mjs`):
- `fade-in`: 0.5s ease-in-out
- `slide-up`: 0.5s ease-out
- `pulse-slow`: 3s infinite pulse

**Global Utility Classes** (defined in `Layout.astro` `<style is:global>`):
- `.gradient-text`: Teal to purple gradient
- `.glass`: Backdrop blur with border
- `.focus-ring`: Custom focus outline

### Configuration Files

- `astro.config.mjs`: Static output mode, Tailwind integration, dev toolbar disabled
- `tailwind.config.mjs`: Custom theme colors, animations, border radius system
- Content pattern scans all Astro/JS/TS files in `src/`

## Current Functionality

This is a **frontend-only clone** with simulated functionality:
- Download button shows loading states and success messages
- No actual Twitter video downloading or API integration
- Interactive elements work (mobile menu, URL input, Enter key support, FAQ accordion)

## Page Capture Tool

The repository includes `capture.ts` which uses Playwright to scrape/capture pages. This was likely used to clone the original TwitterDown site's content and styling.
