# Master Prompt: Anatomical SVG Generation

**Your Task:**
You will be provided with this prompt file, a second file named `AnatomicalDatabase.md`, and the name of a single anatomical item (e.g., "Temporal Bone"). Your objective is to generate a single, self-contained HTML file that provides a high-quality, anatomically representative, interactive SVG for the specified item.

**Core Instructions:**

1.  **Receive the Target Item Name:** The user will provide the name of the bone or muscle to generate.
2.  **Look Up Data:** Find the specified item in the provided `AnatomicalDatabase.md` file. This file is your single source of truth for all data (name, type, `svg_id`, landmarks, origins, insertions, actions).
3.  **Study the Gold Standard:** Carefully study the **"Gold Standard Example"** provided at the end of this prompt. Your output must precisely match its structure, aesthetic quality, and technical specifications.
4.  **Generate the SVG:** Create a new SVG that is anatomically accurate for the requested item, showing it in context with nearby structures.
5.  **Final Output:** Your entire response must be a single HTML file containing the preview and the complete SVG code, based on the Gold Standard template.

---

### Strict Technical Requirements:

1.  **Single File Output:** The entire response must be a single HTML file.
2.  **SVG Identification:** Look up the `svg_id` from the database and display it clearly as text in the HTML body for verification.
3.  **SVG `viewBox` & Namespace:** The root `<svg>` element must include the `xmlns="http://www.w3.org/2000/svg"` attribute and a `viewBox` that properly frames the anatomical subject.
4.  **Predefined `<defs>`:** The SVG **must** include the correct `<defs>` block for the item type. Do not change the `id`s.
    -   **For Bones:**
        ```xml
        <defs>
            <linearGradient id="bone-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#94a3b8" /><stop offset="25%" stop-color="#f1f5f9" /><stop offset="75%" stop-color="#cbd5e1" /><stop offset="100%" stop-color="#475569" /></linearGradient>
            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
        </defs>
        ```
    -   **For Muscles:**
        ```xml
        <defs>
            <linearGradient id="bone-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#94a3b8" /><stop offset="25%" stop-color="#f1f5f9" /><stop offset="75%" stop-color="#cbd5e1" /><stop offset="100%" stop-color="#475569" /></linearGradient>
            <linearGradient id="muscle-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#7f1d1d" /><stop offset="35%" stop-color="#ef4444" /><stop offset="80%" stop-color="#b91c1c" /><stop offset="100%" stop-color="#450a0a" /></linearGradient>
            <linearGradient id="tendon-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#64748b" /><stop offset="50%" stop-color="#f8fafc" /><stop offset="100%" stop-color="#334155" /></linearGradient>
            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
        </defs>
        ```
5.  **Strict Interactive Layer Structure:** The SVG **must** be structured with specific interactive layers using `<g>` elements with these exact `id`s. All visual paths for the main item must be placed inside these groups.
    -   **If Bone:**
        -   `<g id="region-layer">`: Contains the primary path(s) for the bone itself. Fill with `url(#bone-shading)`.
        -   `<g id="landmarks-layer">`: Contains shapes highlighting the key landmarks from the database.
    -   **If Muscle:**
        -   `<g id="origin-layer">`: Contains all paths/shapes representing the origin points.
        -   `<g id="insertion-layer">`: Contains all paths/shapes representing the insertion points.
        -   `<g id="action-layer">`: Contains all paths for the muscle belly, tendons, striations, and glints.
6.  **Background Context:** Include other nearby bones/structures as non-interactive elements to provide anatomical context. Place these in a `<g class="svg-bg">` tag and set their opacity to `0.4` so the main item stands out.
7.  **Static Preview Only:** **Do not include any `<script>` tags or `onmouseenter`/`onclick` attributes.** The provided CSS will create a simple hover effect on the layers for preview purposes.

---

### Gold Standard Example for "Peroneus (Fibularis) Longus"

**Re-create your next SVG with this level of quality and structure.** Study how the `fill` attributes are applied directly to the shapes within the interactive layers (`origin-layer` and `insertion-layer`). This is the correct and required method.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SVG Preview: Peroneus (Fibularis) Longus</title>
    <style>
        :root { /* Colors from the main project's CSS */
            --bg-color: #221924;      
            --panel-bg: #3d1c60;      
            --accent: #a5689d;        
            --success: #4db6ac;
            --text-main: #e0d0e3;     
            --text-muted: #9c82a1;
        }
        body { background-color: var(--bg-color); display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; color: var(--text-main); font-family: sans-serif; }
        svg { width: 400px; border: 1px dashed var(--text-muted); background-color: var(--panel-bg); }
        .interactive-layer { transition: filter 0.3s ease; }
        #origin-layer:hover, #insertion-layer:hover, #action-layer:hover, #region-layer:hover, #landmarks-layer:hover {
            filter: url(#glow);
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Preview: Peroneus (Fibularis) Longus</h1>
    <p>SVG ID: <strong>muscle_peroneus_fibularis_longus</strong></p>
    <svg viewBox="20 60 260 530" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="bone-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#94a3b8" /><stop offset="25%" stop-color="#f1f5f9" /><stop offset="75%" stop-color="#cbd5e1" /><stop offset="100%" stop-color="#475569" /></linearGradient>
            <linearGradient id="muscle-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#7f1d1d" /><stop offset="35%" stop-color="#ef4444" /><stop offset="80%" stop-color="#b91c1c" /><stop offset="100%" stop-color="#450a0a" /></linearGradient>
            <linearGradient id="tendon-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#64748b" /><stop offset="50%" stop-color="#f8fafc" /><stop offset="100%" stop-color="#334155" /></linearGradient>
            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
        </defs>
        
        <!-- Background Bones -->
        <g class="svg-bg" fill="url(#bone-shading)" opacity="0.4">
            <path d="M 160,80 C 140,150 145,300 140,460 C 140,480 150,490 165,490 L 175,490 L 180,80 Z"/>
            <path d="M 100,90 C 85,100 90,120 100,135 C 105,250 110,350 100,450 C 95,480 95,505 105,515 C 120,520 130,505 130,485 C 135,400 135,200 125,125 C 125,100 115,85 100,90 Z"/>
            <path d="M 105,510 C 80,515 50,530 55,560 C 60,580 90,580 120,575 C 160,570 230,585 260,580 C 270,575 250,555 200,545 C 150,535 130,505 105,510 Z"/>
        </g>
        
        <!-- INTERACTIVE LAYERS -->
        <g id="origin-layer" class="interactive-layer">
             <path d="M 100,90 C 92,112 101,122 101,122 C 112,122 124,115 124,102 C 116,92 108,88 100,90 Z" fill="var(--success)" />
             <path d="M 101,122 C 105,200 108,280 102,340 L 115,340 C 118,280 115,200 122,125 C 124,115 112,122 101,122 Z" fill="var(--success)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            <path d="M 98,105 C 70,180 75,280 95,350 C 100,380 115,400 120,400 C 135,320 135,180 120,115 C 115,100 105,100 98,105 Z" fill="url(#muscle-shading)" />
            <g stroke="#450a0a" stroke-width="1.5" opacity="0.4" fill="none">
                <path d="M 95,130 Q 105,160 120,140" /> <path d="M 90,180 Q 105,210 125,190" />
                <path d="M 85,230 Q 105,260 128,240" /> <path d="M 86,280 Q 105,310 125,290" />
                <path d="M 92,330 Q 105,350 118,335" />
            </g>
            <path d="M 112,350 C 115,400 105,450 90,490 C 80,520 90,545 110,550 C 130,555 160,555 190,565" fill="none" stroke="url(#tendon-shading)" stroke-width="9" stroke-linecap="round"/>
            <path d="M 112,350 C 115,400 105,450 90,490 C 80,520 90,545 110,550 C 130,555 160,555 190,565" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.3"/>
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <circle cx="190" cy="565" r="8" fill="var(--accent)" />
            <circle cx="215" cy="560" r="8" fill="var(--accent)" />
        </g>
    </svg>
</body>
</html>
```
