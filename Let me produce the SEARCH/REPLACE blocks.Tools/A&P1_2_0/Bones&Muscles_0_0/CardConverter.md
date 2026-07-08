# Prompt for AI: HTML-to-JS SVG Card Converter

## 1. Objective
Your task is to convert a standalone HTML file, which contains an anatomical SVG preview, into a single-line JavaScript module file. This module will be used to dynamically load the SVG data in a web application.

## 2. Input
You will receive a single HTML file (e.g., `99_Semimembranosus.html`). This file contains standard HTML boilerplate, CSS, and one crucial `<svg>` element.

## 3. Output Requirements

### A. Filename
-   First, identify the `svg_id` from the HTML content. It is located in a `<p>` tag, inside a `<strong>` tag (e.g., `<p>SVG ID: <strong>muscle_semimembranosus</strong></p>`).
-   The output filename **must** be this `svg_id` with a `.js` extension.
-   Example: `muscle_semimembranosus.js`

### B. File Content
-   The output file must contain **only one line of JavaScript**.
-   The format is: `svgDataStore['THE_SVG_ID'] = \`<svg>...</svg>\`;`
-   Replace `THE_SVG_ID` with the ID you extracted.
-   The entire `<svg>...</svg>` block from the input HTML file must be placed inside the backticks (` `` `).
-   **Crucially, use backticks (template literals), not single or double quotes**, to allow for a multi-line SVG string.

## 4. Conversion Process

1.  **Extract `svg_id`**: Find the `svg_id` from the HTML content as described above.
2.  **Isolate SVG Block**: Extract the *entire* `<svg>` element, from its opening `<svg ...>` tag to its closing `</svg>` tag.
3.  **Discard Everything Else**: All other HTML content must be discarded. This includes `<!DOCTYPE>`, `<html>`, `<head>`, `<body>`, `<style>`, `<h1>`, `<p>`, `<div>`, etc. You only need the SVG code itself.
4.  **Do Not Optimize Internals**: **Do not remove or alter the contents of the `<svg>` block.** The `<defs>` block, including gradients and filters, is essential for the application and must be preserved exactly as it is.
5.  **Construct JS File**: Combine the `svg_id` and the SVG string into the required single-line JavaScript format.

## 5. Strict Rules & Common Pitfalls
To ensure the output is machine-readable and correct, you must adhere to the following rules without deviation:

-   **One Line Of Code:** The final `.js` file must contain *exactly one line* of executable JavaScript code. Do not add any extra JavaScript statements, comments, or explanations.
-   **No SVG Modification:** Do not "clean," "optimize," or alter the SVG code in any way. The `id`s, `class`es, and `<defs>` are critical for interactivity and styling and must be preserved.
-   **Use Template Literals Correctly:** The entire SVG string must be wrapped in backticks (` `` `). The JavaScript statement itself (`svgDataStore[...] = ...;`) must be on a single line, but the string content *inside* the backticks should retain its original multi-line formatting for readability.

## 6. Example

### Input Snippet (from `99_Semimembranosus.html`):
```html
...
<body>
    <h1>Preview: Semimembranosus</h1>
    <p>SVG ID: <strong>muscle_semimembranosus</strong></p>
    <svg viewBox="0 20 300 700" xmlns="http://www.w3.org/2000/svg">
        <defs>
            ...
        </defs>
        ...
    </svg>
</body>
...
```

### Required Output (`muscle_semimembranosus.js`):
```javascript
svgDataStore['muscle_semimembranosus'] = `<svg viewBox="0 20 300 700" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="bone-shading" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#94a3b8" />
                <stop offset="25%" stop-color="#f1f5f9" />
                <stop offset="75%" stop-color="#cbd5e1" />
                <stop offset="100%" stop-color="#475569" />
            </linearGradient>
            <linearGradient id="muscle-shading" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#7f1d1d" />
                <stop offset="35%" stop-color="#ef4444" />
                <stop offset="80%" stop-color="#b91c1c" />
                <stop offset="100%" stop-color="#450a0a" />
            </linearGradient>
            <linearGradient id="tendon-shading" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#64748b" />
                <stop offset="50%" stop-color="#f8fafc" />
                <stop offset="100%" stop-color="#334155" />
            </linearGradient>
            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
        
        <g class="svg-bg" fill="url(#bone-shading)" opacity="0.4">
            <path d="M 90,40 C 130,20 180,50 185,90 C 180,120 160,115 150,130 C 140,160 110,155 105,130 C 85,150 75,100 90,40 Z" />
            
            <path d="M 150,130 C 170,120 190,110 200,130 C 205,150 180,170 170,190 L 165,430 C 175,450 190,470 180,490 C 170,510 140,490 145,470 L 135,470 C 140,490 110,510 100,490 C 90,470 105,450 115,430 L 135,190 C 130,170 130,140 150,130 Z" />
            
            <path d="M 100,505 C 120,500 160,500 170,510 C 175,520 165,540 160,550 L 155,680 L 120,680 L 125,550 C 120,540 105,520 100,505 Z" />
            
            <path d="M 170,515 C 185,510 195,530 185,545 L 180,680 L 165,680 L 170,545 Z" />
        </g>
        
        <g id="origin-layer" class="interactive-layer">
            <ellipse cx="125" cy="142" rx="8" ry="12" transform="rotate(-15 125 142)" fill="var(--success)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            <g id="action-belly">
                <path d="M 118, 280 C 105, 340 100, 400 108, 460 C 115, 465 125, 465 130, 460 C 145, 400 145, 330 138, 270 C 130, 285 125, 285 118, 280 Z" fill="url(#muscle-shading)" />
                
                <g stroke="#450a0a" stroke-width="1.2" opacity="0.4" fill="none">
                    <path d="M 116, 290 Q 106, 370 110, 455" />
                    <path d="M 124, 285 Q 116, 370 120, 458" />
                    <path d="M 132, 280 Q 126, 370 128, 455" />
                    <path d="M 138, 285 Q 136, 350 132, 400" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 120, 142 C 110, 200 115, 250 118, 280 C 125, 285 130, 285 138, 270 C 135, 220 130, 180 130, 142 Z" fill="url(#tendon-shading)" />
                
                <path d="M 108, 460 C 102, 485 100, 505 103, 518 C 105, 523 110, 520 111, 515 C 113, 500 118, 485 130, 460 C 125, 465 115, 465 108, 460 Z" fill="url(#tendon-shading)" />
                
                <path d="M 123, 145 Q 118, 200 123, 270" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" opacity="0.3" />
                <path d="M 127, 145 Q 125, 200 132, 260" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" opacity="0.3" />
                <path d="M 109, 465 Q 106, 490 106, 512" fill="none" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" opacity="0.4" />
            </g>
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <ellipse cx="106" cy="517" rx="6" ry="4" transform="rotate(10 106 517)" fill="var(--accent)" />
        </g>
    </svg>`;
```
