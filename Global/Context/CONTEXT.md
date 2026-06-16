\# Study Hub Project Context & Style Guide

\#\# 1\. Project Goals & Architecture  
The objective is to build a centralized, interactive, client-side Study Hub hosted on GitHub Pages (\`htmls\` repository) to master prerequisite coursework (BI 112, STAT 243Z, BI 231\) for the Rogue Community College Dental Hygiene program. 

**Architectural Philosophy:**  
* **Optimized & Modular:** Prioritize best practices for code organization, efficiency, and performance. Employ a modular structure with shared global assets (CSS, JS) to ensure maintainability and reduce code duplication.  
* **Creative & Performant Solutions:** Implement functionality using the most effective methods available in modern Vanilla JS, avoiding unnecessary dependencies. Seek creative solutions to optimize performance and minimize AI development token consumption.  
* **Manifest-Driven Hub:** The main `index.html` page is built from a static `Global/tool-manifest.json` file. This file is **automatically generated** by a GitHub Action every time code is pushed to the `main` branch. This provides a fully automated hub that is also fast and reliable.
* **Game-Dev Inspired Mechanics:** Utilizing interactive logic such as drag-and-drop snap-back penalties, procedural word-problem generation, scalable mathematical SVG drawing, and timed spaced-repetition algorithms.  
* **Local Persistence:** User progress, settings, and spaced-repetition data are strictly saved to the browser's `localStorage` to ensure privacy and persistence without a backend database.

\#\# 2\. Aesthetic & UI Style Guide  
The visual theme is a strict, minimalist, dark-mode aesthetic heavily inspired by "Monkeytype." It prioritizes low eye strain, high contrast for essential information, and clean, monospaced typography.

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

# 3. Asset Guidelines
* **SVG Preference:** Use Scalable Vector Graphics (SVGs) for all icons, logos, and illustrative diagrams to ensure scalability and performance.
* **Fallback SVG:** If a required SVG asset has not yet been created, use `Global/SVGs/wip.svg` as a placeholder to maintain layout integrity.
