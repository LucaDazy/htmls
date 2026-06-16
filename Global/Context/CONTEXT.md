\# Study Hub Project Context & Style Guide

\#\# 1\. Project Goals & Architecture  
The objective is to build a centralized, interactive, client-side Study Hub hosted on GitHub Pages (\`htmls\` repository) to master prerequisite coursework (BI 112, STAT 243Z, BI 231\) for the Rogue Community College Dental Hygiene program. 

**Architectural Philosophy:**  
* **Optimized & Modular:** Prioritize best practices for code organization, efficiency, and performance. Employ a modular structure with shared global assets (CSS, JS) to ensure maintainability and reduce code duplication.  
* **Creative & Performant Solutions:** Implement functionality using the most effective methods available in modern Vanilla JS, avoiding unnecessary dependencies. Seek creative solutions to optimize performance and minimize AI development token consumption.  
* **Game-Dev Inspired Mechanics:** Utilizing interactive logic such as drag-and-drop snap-back penalties, procedural word-problem generation, scalable mathematical SVG drawing, and timed spaced-repetition algorithms.  
* **Local Persistence:** User progress, settings, and spaced-repetition data are strictly saved to the browser's `localStorage` to ensure privacy and persistence without a backend database.

\#\# 2\. Aesthetic & UI Style Guide  
The visual theme is a strict, minimalist, dark-mode aesthetic heavily inspired by "Monkeytype." It prioritizes low eye strain, high contrast for essential information, and clean, monospaced typography.

\*\*Color Palette (CSS Variables):\*\*  
\`\`\`css  
:root {  
    \--bg-color: \#323437;      /\* Deep gray background \*/  
    \--panel-bg: \#2c2e31;      /\* Slightly darker gray for elevated panels \*/  
    \--hover-bg: \#3a3d40;      /\* Lighter gray for hover states \*/  
    \--text-main: \#d1d0c5;     /\* Soft off-white for primary text \*/  
    \--text-muted: \#646669;    /\* Dimmed gray for secondary text/borders \*/  
    \--accent: \#e2b714;        /\* Signature yellow/gold for active elements & highlights \*/  
    \--error: \#ca4754;         /\* Soft red for incorrect feedback \*/  
    \--success: \#8cc84b;       /\* Soft green for correct feedback \*/  
    \--hard: \#e27d60;          /\* Orange for SRS 'Hard' rating \*/  
}  
# 3. Asset Guidelines
* **SVG Preference:** Use Scalable Vector Graphics (SVGs) for all icons, logos, and illustrative diagrams to ensure scalability and performance.
* **Fallback SVG:** If a required SVG asset has not yet been created, use `Global/SVGs/wip.svg` as a placeholder to maintain layout integrity.
