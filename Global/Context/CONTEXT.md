# Study Hub Project Context & Style Guide

## 1. Project Goals & Architecture
The objective is to build a centralized, interactive, client-side Study Hub hosted on GitHub Pages (`htmls` repository) to master prerequisite coursework (BI 112, STAT 243Z, BI 231) for the Rogue Community College Dental Hygiene program. 

**Architectural Philosophy:**  
*   **Hyper-Modularity:** The project's foundation is modularity. All assets (CSS, JS, SVGs) should be separated and reusable. Global stylesheets like `main.css` and `animations.css` provide a single source of truth for the site's look, feel, and behavior, ensuring maintainability and reducing code duplication.
*   **Optimized & Performant:** Prioritize best practices for code organization, efficiency, and performance. Implement functionality using the most effective methods available in modern Vanilla JS, avoiding unnecessary dependencies. Seek creative solutions to optimize performance and minimize AI development token consumption.  
*   **Manifest-Driven Hub:** The main `index.html` page is built from a static `Global/tool-manifest.json` file. This file is **automatically generated** by a GitHub Action every time code is pushed to the `main` branch. This provides a fully automated hub that is also fast and reliable.
*   **Game-Dev Inspired Mechanics:** Utilizing interactive logic such as drag-and-drop snap-back penalties, procedural word-problem generation, scalable mathematical SVG drawing, and timed spaced-repetition algorithms.  
*   **Local Persistence:** User progress, settings, and spaced-repetition data are strictly saved to the browser's `localStorage` to ensure privacy and persistence without a backend database.
*   **Offline-First with Service Workers:** A dedicated service worker (`service-worker.js`) provides a robust offline experience by implementing a dual caching strategy:
    *   **Network-First for App Shell:** Critical assets like `index.html`, CSS files, and core JavaScript are handled with a "network-first" approach. The service worker always tries to fetch the latest version from the network. If the network is unavailable, it serves the last-known-good version from the cache. This ensures users always have the freshest content when online, preventing stale UI issues.
    *   **Cache-First for Static Assets:** All other assets, such as SVGs and images, are handled with a "cache-first" strategy. They are served instantly from the cache for maximum performance, with network requests only made if the asset isn't already cached.

## 2. Aesthetic & UI Style Guide
The visual theme is a strict, minimalist, dark-mode aesthetic heavily inspired by "Monkeytype." It prioritizes low eye strain, high contrast for essential information, and clean, readable typography.

**Color Palette (CSS Variables located in `Global/Css/main.css`):**  
```css
:root {
    --bg-color: #221924;      /* Site Background */
    --panel-bg: #3d1c60;      /* Dark purple for main containers */
    --accent: #a5689d;        /* Muted pink/purple for interactive elements */
    --minimal-white: #ffffff; /* Strictly used for the main title */
    --text-main: #e0d0e3;     /* Pale lavender for readable body text */
    --text-muted: #9c82a1;    /* Dimmer mauve for subtitles and hints */
    --hover-bg: #512b7a;      /* Lighter purple for hover states */
    --error: #e05e75;         /* Soft warm coral/red */
    --success: #4db6ac;       /* Bioluminescent teal/green */
}
```

**Typography:**
*   **Main Body & Titles:** `Atkinson Hyperlegible` is used for all primary reading text, including titles, subtitles, and paragraphs for maximum readability.
*   **Interactive & Data:** `Fira Code` is used for interactive elements like buttons, dates, and other data-centric text to provide a clean, "terminal-like" feel.

**Animation & Motion Design:**
*   **Philosophy:** All animations should be "subtle and juicy." They must enhance the user experience by providing satisfying feedback and smooth transitions, without being distracting or slow.
*   **Implementation:** All animation logic is centralized in `Global/Css/animations.css`. This modular approach allows for reusable keyframes and animation classes that can be applied consistently across the hub and all individual tools.

## 3. Asset Guidelines
*   **SVG Preference:** Use Scalable Vector Graphics (SVGs) for all icons, logos, and illustrative diagrams to ensure scalability and performance.
*   **Fallback SVG:** If a required SVG asset has not yet been created, use `Global/SVGs/wip.svg` as a placeholder to maintain layout integrity.

## 4. Development Best Practices & Lessons Learned
To maintain a high-quality and consistent user experience, the following solutions to previously encountered problems should be applied:

*   **View Transitions:** To avoid layout shifts when transitioning between views (e.g., main menu to sub-menu), use **CSS Grid**. Wrap the views in a container with `display: grid` and assign both views to the same `grid-area`. Toggle visibility by changing `opacity` and `transform` on the views. This is superior to using `position: absolute` or `display: none`, which cause content jumps.
*   **Animating Dynamic Lists:** When a new list of items is rendered inside a transitioning view, use a brief `setTimeout` (e.g., 50ms) before calling the render function. This ensures the container is ready, allowing staggered item entrance animations to play reliably.
*   **Preventing Page Jumps:** When transitioning between views that have different heights, the page can "jump" as the document's total height changes. To prevent this, **temporarily lock the height of the view's wrapper**. Before the transition, set the wrapper's `min-height` to its current `offsetHeight`. After the CSS transition completes, clear the `min-height` style to allow the wrapper to resize to its new content.
*   **Button Hover Effects:** Avoid using `transform: translateX()` for hover effects on bordered elements, as this can cause the border to be clipped. Instead, **modify the element's padding** to create the illusion of a shift without affecting its layout box.
*   **Offline Asset Caching & Animation:** To enable offline functionality, a service worker (`service-worker.js`) caches all core assets. A previous technique for SVG animation involved appending a cache-busting query string (`?v=...`) to image URLs. **This practice is incompatible with offline caching**, as the service worker cannot find the versioned URL in its cache. The correct approach is to:
    1.  Ensure the service worker caches the base asset URLs (e.g., `logo.svg`).
    2.  Modify animation scripts to request the original, un-versioned asset URLs. Preloading images into `new Image()` objects and then setting the `<img>` tag's `src` from the preloaded object's `src` is an effective way to achieve this and ensure the browser uses its memory cache, which is then backed by the service worker's cache for offline access.
*   **SVG Filter Rendering:** When using an SVG with complex animated filters (e.g., `feTurbulence`) inside an `<img>` tag, the browser may fail to render the image despite loading it correctly. This is a known rendering bug. To prevent this, the root `<svg>` element **must have explicit `width` and `height` attributes**. These attributes provide the necessary intrinsic dimensions for the browser to allocate a drawing surface before applying the filter, thus avoiding the bug. Do not remove these attributes for "flexibility" when complex filters are in use.
*   **Dynamic SVG Optimization:** When loading SVGs into scripts for dynamic rendering (e.g., on a `<canvas>`), programmatically strip any unnecessary elements like `<defs>` blocks or `filter` attributes that are only intended for standalone viewing. This reduces the in-memory size of the SVG assets and improves parsing performance, especially when handling many assets, as demonstrated in `background-animation.js`.
