# Study Hub Project Context & Style Guide

## 1. Project Goals & Architecture
The objective is to build a centralized, interactive, client-side Study Hub hosted on GitHub Pages (`htmls` repository) to master prerequisite coursework (BI 112, STAT 243Z, BI 231) for the Rogue Community College Dental Hygiene program. 

**Architectural Philosophy:**  
*   **Hyper-Modularity:** The project's foundation is modularity. All assets (CSS, JS, SVGs) should be separated and reusable. Global stylesheets like `main.css` and `animations.css` provide a single source of truth for the site's look, feel, and behavior, ensuring maintainability and reducing code duplication.
*   **Optimized & Performant:** Prioritize best practices for code organization, efficiency, and performance. Implement functionality using the most effective methods available in modern Vanilla JS, avoiding unnecessary dependencies. Seek creative solutions to optimize performance and minimize AI development token consumption.  
*   **Manifest-Driven Hub:** The main `index.html` page is built from a static `Global/tool-manifest.json` file. This file is **automatically generated** by a GitHub Action every time code is pushed to the `main` branch. This provides a fully automated hub that is also fast and reliable.
*   **Game-Dev Inspired Mechanics:** Utilizing interactive logic such as drag-and-drop snap-back penalties, procedural word-problem generation, scalable mathematical SVG drawing, and timed spaced-repetition algorithms.  
*   **Local Persistence:** User progress, settings, and spaced-repetition data are strictly saved to the browser's `localStorage` to ensure privacy and persistence without a backend database.

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
*   **Button Hover Effects:** Avoid using `transform: translateX()` for hover effects on bordered elements, as this can cause the border to be clipped. Instead, **modify the element's padding** to create the illusion of a shift without affecting its layout box.
*   **SVG Frame-by-Frame Animation:** When animating SVGs by rapidly swapping the `src` attribute of an `<img>` tag, browsers may aggressively cache the files. To prevent this and ensure smooth animation, append a **cache-busting query string** (e.g., `image.svg?v=${new Date().getTime()}`) to the URL during each frame update.
