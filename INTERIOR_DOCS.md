# Interior Page Documentation

This document provides a detailed breakdown of the `InteriorPage` (`/interior`) route, explaining the structure, components, and interactive functions of each section.

## Overview
The **Interior Page** serves as a dark-themed, highly animated showcase of interior design capabilities, projects, and clients. It is assembled using a sequence of lazy-loaded sections that animate into view.

File: `app/interior/page.tsx`

---

## Breakdown of Sections

### 1. `InteriorHeader`
- **Location**: `components/header/interior-header.tsx` (Inferred)
- **Function**: The main navigation bar, specifically styled for the dark theme (`#171412`) of the interior section, ensuring the logo and links contrast properly against the dark background.

### 2. `InteriorHeroPage`
- **Location**: `components/interior-page/interior-hero-page.tsx`
- **Function**: The full-screen introductory hero.
- **How it works**: It operates as an autonomous, continuous image slider using Framer Motion's `AnimatePresence`. It cycles through 4 high-quality interior images every 5 seconds. The transition features a premium "Ken Burns" effect—the incoming image fades in smoothly while slowly zooming out from `scale: 1.05` to `scale: 1`. It has no buttons or manual controls to maintain a purely cinematic aesthetic.

### 3. `InteriorHeroDescriptions`
- **Location**: `components/interior-page/interior-hero-descriptions.tsx`
- **Function**: The initial textual introduction right below the hero.
- **How it works**: Displays a large heading ("Spaces that work beautifully, long after the first day.") alongside a descriptive paragraph. It utilizes the global `TextReveal` component to animate the text word-by-word as the user scrolls. It also contains a link to `/interior/all-projects`.

### 4. `InteriorSection01` (Featured Projects 1-3)
- **Location**: `components/interior-page/interior-section-01.tsx`
- **Function**: Showcases the top 3 featured interior projects in a masonry-style grid (two side-by-side on desktop, followed by one full-width).
- **How it works**: This section receives the first 3 featured projects from the API. It uses a specialized `InteriorImageCard` component. 
- **Key Feature - Hover Gallery**: When a user hovers over an image card, it triggers a `setInterval`. If the project has `galleryImages`, the card will automatically cycle through those gallery images every 3000ms while the mouse is hovering. Moving the mouse away resets it to the main image. Clicking the card navigates to the specific project's detail page (`/interior/project/[slug]`).

### 5. `InteriorSection02`
- **Location**: `components/interior-page/interior-section-02.tsx`
- **Function**: A textual interlude to break up the image galleries.
- **How it works**: Similar to `InteriorHeroDescriptions`, it displays a massive, `TextReveal` animated heading ("Beautifully Designed Spaces for Work and Living") and a paragraph detailing the design philosophy, terminating with another link to view all projects.

### 6. `InteriorSection03` (Featured Projects 4-9)
- **Location**: `components/interior-page/interior-section-03.tsx`
- **Function**: A secondary, larger gallery grid for the next batch of featured projects.
- **How it works**: Receives the next slice of projects from the API. It renders them using a slightly simpler layout (1 full width, 2 side-by-side, 1 full width). It uses a local version of `InteriorImageCard` that provides a simple static image reveal on scroll, without the hover-carousel functionality of Section 1, focusing entirely on large format visual impact. Clicking navigates to the project page.

### 7. `InteriorClients`
- **Location**: `components/interior-page/interior-clients.tsx`
- **Function**: A marquee/carousel displaying logos of past clients (e.g., Hospitality groups, developers).
- **How it works**: It utilizes the `shadcn/ui` Carousel component. A `useEffect` hook sets up an auto-play interval that triggers `api.scrollNext()` every 2400ms. It runs continuously without pausing, and features clean, borderless client logos as requested by the client.

---

## Data Flow & Animations
- **Data Flow**: `app/interior/page.tsx` is a Server Component that calls `getInteriors()` to fetch the project data from the backend/mock data file. It maps it to the UI structure, filters out only the `isFeatured` projects, and passes slices of this array down to `InteriorSection01` and `InteriorSection03`.
- **Animations**: Every section from `InteriorHeroDescriptions` downwards is wrapped dynamically using `next/dynamic` and enclosed in a `LazyLoadSection` (to prevent layout shift) and an `AnimatedSection` (to apply scroll-triggered Framer Motion animations like `fade`, `slide-up`, and `scale`).
