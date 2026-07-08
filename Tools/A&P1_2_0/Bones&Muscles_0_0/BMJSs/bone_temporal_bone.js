svgDataStore['bone_temporal_bone'] = `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="bone-shading" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#94a3b8" />
                <stop offset="25%" stop-color="#f1f5f9" />
                <stop offset="75%" stop-color="#cbd5e1" />
                <stop offset="100%" stop-color="#475569" />
            </linearGradient>
            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
        
        <g class="svg-bg" fill="url(#bone-shading)" opacity="0.4">
            <path d="M 170,120 C 160,70 190,30 250,30 C 320,30 360,100 340,180 C 330,220 290,240 270,230 C 280,180 260,140 270,150 C 230,100 170,120 170,120 Z" />
            <path d="M 170,120 C 140,120 140,160 160,190 L 100,190 C 100,140 130,110 170,120 Z" />
            
            <path d="M 270,230 C 290,240 310,280 270,330 C 240,350 200,320 230,240 Z" />
            
            <path d="M 100,190 L 100,210 C 60,220 40,180 70,160 C 85,170 95,180 100,190 Z" />
            
            <path d="M 165,210 C 150,240 140,280 150,310 C 160,340 100,360 60,340 C 40,330 40,300 60,290 C 80,280 100,300 110,290 C 120,280 120,240 115,210 Z" />
        </g>
        
        <g id="region-layer" class="interactive-layer">
            <path d="M 170,120 Q 230,100 270,150 Q 290,190 270,230 Q 250,280 230,240 Q 210,240 205,275 L 195,275 Q 195,240 185,225 Q 175,220 165,210 L 100,210 Q 90,200 100,190 L 160,190 Q 160,140 170,120 Z" fill="url(#bone-shading)" />
            
            <g stroke="#475569" stroke-width="2" opacity="0.4" fill="none">
                <path d="M 178,135 Q 220,118 255,155" />
                <path d="M 235,215 Q 245,235 238,255" />
                <path d="M 160,195 Q 130,195 105,195" />
            </g>
        </g>
        
        <g id="landmarks-layer" class="interactive-layer">
            <circle cx="220" cy="145" r="5" fill="var(--accent)" />
            
            <circle cx="130" cy="200" r="5" fill="var(--accent)" />
            
            <circle cx="173" cy="215" r="5" fill="var(--accent)" />
            
            <circle cx="205" cy="215" r="7" fill="var(--bg-color)" stroke="var(--accent)" stroke-width="2" />
            <circle cx="205" cy="215" r="3" fill="var(--accent)" />
            
            <circle cx="240" cy="255" r="6" fill="var(--accent)" />
            
            <circle cx="200" cy="265" r="4" fill="var(--accent)" />
        </g>
        
    </svg>`;
