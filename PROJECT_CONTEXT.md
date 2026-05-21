# Project Context: Verunia-01

## 1. Project Overview
**Verunia-01** (likely "Verunia Furniture Trading LLC") is a Next.js 16 web application for a high-end furniture and interior design business. It features a premium, animated UI with a focus on visual storytelling, showcasing furniture collections, and AI-driven interior design services ("AI Fotivo").

## 2. Tech Stack

### Core Framework
-   **Framework**: [Next.js v16.0.10](https://nextjs.org/) (App Router)
-   **Language**: TypeScript
-   **Runtime**: React 19.2.0

### Styling & UI
-   **CSS Engine**: [Tailwind CSS v4.1.9](https://tailwindcss.com/)
-   **Component Library**: [Radix UI](https://www.radix-ui.com/) primitives (Accordion, Dialog, Popover, etc.)
-   **UI Kit**: Likely [shadcn/ui](https://ui.shadcn.com/) based (confirmed by `components.json` and `components/ui` structure).
-   **Icons**: `lucide-react`
-   **Fonts**:
    -   `Instrument Sans` (Sans-serif, variable)
    -   `Helvetica` (Local font, variable)

### Animations & 3D
-   **Orchestration**: `framer-motion` (v12)
-   **High-performance**: `gsap` (GreenSock)
-   **3D/Canvas**: `@react-three/fiber`, `@react-three/drei`, `three.js`, `three-globe`
-   **Scroll**: `lenis` (smooth scrolling)

### State & Forms
-   **Forms**: `react-hook-form` + `zod` for validation
-   **State**: React Context (e.g., `LoadingContext`), `nuqs` (URL state - inferred if present, else standard React state)

## 3. Project Structure

```bash
verunia-01/
├── app/                  # Next.js App Router (Routes & Pages)
├── components/           # React Components
│   ├── ui/               # Reusable UI primitives (Buttons, Inputs, etc.)
│   ├── home/             # Homepage-specific components
│   ├── furniture-page/   # Furniture catalogue components
│   ├── header/           # Navigation & Header
│   ├── footer/           # Site footer
│   └── ...               # Other feature-specific folders
├── lib/                  # Utilities & Helper functions
├── hooks/                # Custom React Hooks
├── public/               # Static assets (images, fonts)
└── styles/               # Additional styles (though mostly in app/globals.css)
```

## 4. Routing & Pages

The application uses the Next.js App Router. Review `app/` for the source of truth.

| Route URL | File Path | Description |
| :--- | :--- | :--- |
| `/` | `app/page.tsx` | **Homepage**. Features animated sections (Hero, Sections 01-03, Globe Demo). |
| `/about` | `app/about/page.tsx` | **About Us**. Company information and story. |
| `/furniture` | `app/furniture/page.tsx` | **Furniture Main**. Landing for furniture collections. |
| `/furniture/[category]` | `app/furniture/[category]/page.tsx` | **Category Listing**. Dynamic route for furniture types (e.g., chairs, sofas). |
| `/furniture/product/[slug]` | `app/furniture/product/[slug]/page.tsx`| **Product Detail**. Single product view. |
| `/ai-fotivo` | `app/ai-fotivo/page.tsx` | **AI Service**. Specific page for "AI Fotivo" service/product. |
| `/interior` | `app/interior/page.tsx` | **Interior Design**. Showcase of interior projects. |
| `/contact` | `app/contact/page.tsx` | **Contact**. Enquiry forms and location. |
| `/enquiry` | `app/enquiry/page.tsx` | **Enquiry**. Specific enquiry flow. |

## 5. Design System & Global Styles

-   **Global CSS**: `app/globals.css`. Uses the `oklch()` color space for dynamic light/dark mode support.
-   **Theme**:
    -   `light` and `dark` classes control CSS variables.
    -   `@theme inline` block in CSS defines custom font variables (`--font-instrument`, `--font-helvetica`).
-   **Layout**: `app/layout.tsx`
    -   Wraps the app in `LoadingUIWrapper` (initial 3s loader).
    -   Wraps the app in `SmoothScroll` (Lenis).
    -   Applies global font variables.

## 6. Global UI Architecture & Key Components

### The Global Layout Shell (`app/layout.tsx`)
The entire application is wrapped in several global providers to ensure a consistent, premium experience:
1.  **`SmoothScroll`**: Initializes Lenis for global smooth scrolling.
2.  **`LoadingUIWrapper`**: Acts as a global splash screen. It blocks the UI for the first 3 seconds on initial load, displaying a `LoadingThumbnail` (often the brand logo or an animation) that fades out.
3.  **Fonts**: Sets up the CSS variables for the `Instrument Sans` and `Helvetica` fonts at the `<body>` level.

### UI Composition & Sections
-   **Section-Based Architecture**: Rather than building pages atomically within the route file, pages are composed of large, distinct sections (e.g., `Sections02`, `FurnitureBestProduct`).
-   **`LazyLoadSection`**: Almost all components "below the fold" are wrapped in this global utility (`components/ui/lazy-load-section.tsx`) combined with `next/dynamic`. It enforces a minimum height (`minHeightClass`) and uses an `animate-pulse` background color to serve as a skeleton loader, preventing Cumulative Layout Shift (CLS).

### Animation System
The project uses a hybrid animation approach:
-   **`AnimatedSection`**: A global wrapper (`components/home/animated-section.tsx`) used around lazily loaded sections. It leverages `framer-motion` to detect when a section enters the viewport (scroll-triggered) and applies standard `variant` animations such as `fade`, `slide-up`, or `scale`.
-   **GSAP**: Used for more complex, high-performance timeline animations or pinned scroll effects within specific sections.
-   **Micro-interactions**: Handled primarily through Tailwind CSS transitions on hover/focus states (e.g., button scales, color fades).

### Global Navigation & Footers
-   **Headers**: Context-aware. The general site uses `components/header/header.tsx`, while specific sections like Interior or Bespoke use specialized variants (`InteriorHeader`, `AiFotivaHeader`) that match their specific dark or premium themes.
-   **Footer**: A unified global footer (`components/footer/footer.tsx`) placed at the bottom of all main pages.

### Data Fetching
-   (Inferred) Data is likely fetched inside server components (`page.tsx`) or via specific hooks.
-   `lib/getData.ts`: Contains constants or fetchers (e.g., `frontendPoint`).

## 7. Instructions for AI Agents
When working on this project:
1.  **Respect the Design**: Maintain the "premium" feel. Use `AnimatedSection` for new content blocks.
2.  **Routing**: Use `next/link` for internal navigation. Respect the dynamic routes (`[category]`, `[slug]`).
3.  **Styling**: Use Tailwind utility classes. Avoid inline styles. Use the defined CSS variables for colors to ensure theme compatibility.
4.  **Components**: Check `components/ui` before building new primitives. Reuse existing `shadcn/ui` components.
5.  **Files**: Place new components in logical feature folders (e.g., `components/new-feature/`).
