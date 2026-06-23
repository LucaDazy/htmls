// A&P 1 Master SVG Database
// Provides modular, interactive SVG templates for the Bones & Muscles tool.
const svgDB = {
    "placeholder_muscle": `
<svg viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="bone-shading" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#94a3b8" /><stop offset="25%" stop-color="#f1f5f9" />
            <stop offset="75%" stop-color="#cbd5e1" /><stop offset="100%" stop-color="#475569" />
        </linearGradient>
        <linearGradient id="muscle-shading" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#7f1d1d" /><stop offset="35%" stop-color="#ef4444" />
            <stop offset="80%" stop-color="#b91c1c" /><stop offset="100%" stop-color="#450a0a" />
        </linearGradient>
        <linearGradient id="tendon-shading" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#64748b" /><stop offset="50%" stop-color="#f8fafc" />
            <stop offset="100%" stop-color="#334155" />
        </linearGradient>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
    </defs>
    <!-- Background Bones -->
    <path class="svg-bg" d="M 100,20 C 80,40 80,80 100,100 L 100,300 C 80,320 80,360 100,380 L 120,380 C 140,360 140,320 120,300 L 120,100 C 140,80 140,40 120,20 Z" fill="url(#bone-shading)" opacity="0.3"/>
    
    <!-- INTERACTIVE MUSCLE LAYERS -->
    <g id="origin-layer" class="interactive-layer" fill="var(--success)" style="transition: all 0.3s ease;">
        <circle cx="110" cy="80" r="15" />
    </g>
    <g id="insertion-layer" class="interactive-layer" fill="var(--accent)" style="transition: all 0.3s ease;">
        <circle cx="110" cy="320" r="15" />
    </g>
    <g id="action-layer" class="interactive-layer" style="transition: all 0.3s ease;">
        <path d="M 110,95 C 90,150 90,250 110,305 C 130,250 130,150 110,95 Z" fill="url(#muscle-shading)" />
        <path d="M 110,95 C 110,150 110,250 110,305" fill="none" stroke="url(#tendon-shading)" stroke-width="8" />
    </g>
</svg>`,
    "placeholder_bone": `
<svg viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="bone-shading" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#94a3b8" /><stop offset="25%" stop-color="#f1f5f9" />
            <stop offset="75%" stop-color="#cbd5e1" /><stop offset="100%" stop-color="#475569" />
        </linearGradient>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
    </defs>
    <!-- INTERACTIVE BONE LAYERS -->
    <g id="region-layer" class="interactive-layer" style="transition: all 0.3s ease;">
         <path d="M 100,20 C 80,40 80,80 100,100 L 100,300 C 80,320 80,360 100,380 L 120,380 C 140,360 140,320 120,300 L 120,100 C 140,80 140,40 120,20 Z" fill="url(#bone-shading)"/>
    </g>
    <g id="landmarks-layer" class="interactive-layer" fill="var(--accent)" style="transition: all 0.3s ease;">
        <circle cx="95" cy="40" r="8" />
        <rect x="90" y="150" width="40" height="15" rx="5" />
        <circle cx="125" cy="360" r="8" />
    </g>
</svg>`
};
