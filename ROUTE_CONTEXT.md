# Route Context & Architecture: Verunia-01

This document outlines the detailed architecture and structure of each route within the Verunia Next.js application, explaining how pages are constructed, how data is fetched, and how performance and animations are handled.

## Core Page Architecture Pattern

Most pages in this application follow a highly optimized and structured pattern designed for performance, smooth user experience, and visual aesthetics:

1.  **Lazy Loading & Code Splitting (`next/dynamic`)**: Heavy sections of the page are imported dynamically using `next/dynamic`. This reduces the initial JavaScript bundle size, allowing the page to load faster.
2.  **Suspense & Fallbacks**: During the loading of dynamic components, a fallback UI (often a skeleton loader with a specific `minHeightClass` and `animate-pulse`) is displayed. This prevents cumulative layout shifts (CLS). The `LazyLoadSection` wrapper component is frequently used for this.
3.  **Scroll Animations (`AnimatedSection`)**: Once loaded, sections are typically wrapped in an `AnimatedSection` component. This component leverages Framer Motion to apply scroll-triggered animations (e.g., `fade`, `slide-up`, `scale`) as the user scrolls down the page.
4.  **Server Components & Data Fetching**: Pages are React Server Components by default. Data fetching (e.g., `getInteriors()`) happens on the server before the page is rendered, and the resulting data is mapped to UI props and passed down to the components.
5.  **Themed Navigation**: Different pages utilize different navigation headers to match their specific aesthetic (e.g., `Header` for general/light theme, `InteriorHeader` or `AiFotivaHeader` for dark/bespoke themes).
6.  **SEO Metadata**: Each page exports a `metadata` object containing title, description, keywords, and OpenGraph tags to ensure optimal search engine indexing and social sharing previews.

## Breakdown of Each Route

### 1. Root (`/`)
-   **File**: `app/page.tsx`
-   **Purpose**: The main landing page.
-   **Structure**: Features a general `Header` and `Hero` section. It dynamically loads several heavy sections (`Sections`, `Sections02`, `Sections03`, `Sections05`) and a complex 3D globe component (`GlobeDemo`).
-   **Data**: Fetches interior projects via `getInteriors()` and randomly selects 4 projects to display in `Sections03`.

### 2. Interior (`/interior`)
-   **File**: `app/interior/page.tsx`
-   **Purpose**: Showcases interior design projects. Uses a dark aesthetic (`bg-[#171412]`).
-   **Structure**: Uses `InteriorHeader` and `InteriorHeroPage`. Dynamically loads descriptions, multiple display sections (`InteriorSection01`, `02`, `03`), and a client logo section.
-   **Data**: Fetches interior projects using `getInteriors()`, filters for `isFeatured`, and passes specific slices of the array to different sections.

### 3. Interior Projects & Categories
-   **`/interior/all-projects`**: (`app/interior/all-projects/page.tsx`) Likely displays a grid/list of all interior projects.
-   **`/interior/project/[slug]`**: (`app/interior/project/[slug]/page.tsx`) The detailed view for a single interior project. Fetches project details based on the URL `slug` parameter.

### 4. Furniture (`/furniture`)
-   **File**: `app/furniture/page.tsx`
-   **Purpose**: The main hub for furniture collections.
-   **Structure**: Uses the standard `Header` and `FurniturePageHero`. Dynamically loads sections highlighting best products, design philosophies, planning ideas, and awards.

### 5. Furniture Categories & Products
-   **`/furniture/[category]`**: (`app/furniture/[category]/page.tsx`) Dynamic route for displaying lists of furniture items based on categories (e.g., sofas, tables).
-   **`/furniture/chairs`**: (`app/furniture/chairs/page.tsx`) Hardcoded category page specifically for chairs.
-   **`/furniture/desks`**: (`app/furniture/desks/page.tsx`) Hardcoded category page specifically for desks.
-   **`/furniture/silent-box`**: (`app/furniture/silent-box/page.tsx`) Specific product/category landing page for "Silent Box".
-   **`/furniture/product/[slug]`**: (`app/furniture/product/[slug]/page.tsx`) The detailed product page for individual furniture items. Uses the `slug` for data fetching.

### 6. Bespoke / AI Fotivo (`/bespoke`)
-   **File**: `app/bespoke/page.tsx`
-   **Purpose**: Showcases custom bespoke furniture services, branded internally as "AI Fotivo". Uses a dark/premium theme (`bg-[#171412]`).
-   **Structure**: Employs `AiFotivaHeader` and `AiFotivoHero`. Dynamically loads 5 sequential sections (`AiFotivoSection01` through `05`) and a client list. It uses a specific fallback styling with a subtle ring (`ring-1 ring-white/10`).

### 7. Bespoke Categories & Projects
-   **`/bespoke/category/[slug]`**: (`app/bespoke/category/[slug]/page.tsx`) Category page for bespoke offerings.
-   **`/bespoke/project/[slug]`**: (`app/bespoke/project/[slug]/page.tsx`) Detailed view of a specific bespoke project.

### 8. Informational & Utility Routes
-   **About** (`/about`): `app/about/page.tsx` - Company information, story, and values.
-   **Contact** (`/contact`): `app/contact/page.tsx` - Contact information, maps, and general forms.
-   **Enquiry** (`/enquiry`): `app/enquiry/page.tsx` - A dedicated, likely more complex form or multi-step process for customer enquiries.
-   **Coming Soon** (`/coming-soon`): `app/coming-soon/page.tsx` - A placeholder page for features in development.

## Implementation Details for New Routes

When creating new routes, adhere to these established patterns:
1.  **Define Metadata**: Always export a `metadata` object at the top of the file.
2.  **Use `next/dynamic`**: Wrap complex sections in `dynamic()` imports to maintain fast initial loads.
3.  **Provide Fallbacks**: Always provide a loading fallback that matches the intended height and background of the loaded section to prevent UI jumping.
4.  **Animate on Scroll**: Wrap the dynamically loaded component in `<AnimatedSection variant="...">` to maintain the consistent animated feel of the site.
5.  **Use the Right Header/Theme**: Ensure the header component matches the background color scheme of the new page.
