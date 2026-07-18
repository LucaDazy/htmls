svgDataStore['bone_vomer'] = `<svg viewBox="20 20 360 340" xmlns="http://www.w3.org/2000/svg">
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
            <path d="M 220,40 C 170,40 130,60 110,100 L 100,130 L 115,150 L 80,230 L 75,270 L 80,280" fill="none" stroke="#475569" stroke-width="3" stroke-linecap="round"/>
            
            <path d="M 235,175 L 240,140 C 250,110 290,100 320,120 C 350,140 360,190 340,240 C 320,280 290,280 260,280 Q 248,230 235,175 Z" stroke="#475569" stroke-width="1"/>
            
            <path d="M 260,150 Q 280,140 295,160 Q 305,190 280,200 Q 260,210 255,180 Z" fill="#221924" stroke="#475569" stroke-width="1.5" opacity="0.6"/>
            
            <path d="M 90,280 L 260,280 C 270,280 280,285 280,290 C 280,295 270,300 260,300 L 90,300 C 80,300 70,295 70,290 C 70,285 80,280 90,280 Z" stroke="#475569" stroke-width="1"/>
            
            <path d="M 85,300 L 100,300 L 95,330 C 90,330 85,320 85,300 Z" stroke="#475569" stroke-width="1"/>
            
            <path d="M 140,150 L 220,120 L 240,140 L 235,175 Q 220,185 200,200 Q 170,175 140,150 Z" stroke="#475569" stroke-width="1"/>
            
            <path d="M 90,230 C 100,180 120,160 140,150 Q 170,175 200,200 Q 170,240 140,280 L 90,280 Z" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4 4"/>

            <path d="M 150,180 Q 180,180 200,210 Q 220,210 240,230 Q 210,220 150,180 Z" fill="#334155" opacity="0.3" />
            <path d="M 120,230 Q 150,230 180,250 Q 220,250 250,260 Q 200,255 120,230 Z" fill="#334155" opacity="0.3" />
        </g>
        
        <g id="region-layer" class="interactive-layer">
            <path d="M 235,175 Q 248,230 260,280 L 140,280 Q 170,240 200,200 Q 220,185 235,175 Z" fill="url(#bone-shading)" stroke="#475569" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M 200,200 Q 210,240 230,270" fill="none" stroke="#64748b" stroke-width="1" opacity="0.5"/>
            <path d="M 220,185 Q 230,220 245,260" fill="none" stroke="#64748b" stroke-width="1" opacity="0.5"/>
        </g>

        <g id="landmarks-layer" class="interactive-layer">
            <path d="M 235,175 Q 248,230 260,280 L 253,280 Q 241,230 228,178 Z" fill="var(--accent)" />
            <path d="M 140,280 L 260,280 L 255,275 L 145,275 Z" fill="var(--accent)" />
        </g>
    </svg>`;
