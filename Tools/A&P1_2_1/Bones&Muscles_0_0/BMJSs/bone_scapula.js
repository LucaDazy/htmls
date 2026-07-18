svgDataStore['bone_scapula'] = `<svg viewBox="0 0 450 450" xmlns="http://www.w3.org/2000/svg">
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
            <path d="M 50,140 C 90,120 150,110 200,120 L 200,140 C 150,130 90,140 50,160 Z" />
            <path d="M 40,180 C 90,160 160,150 220,160 L 220,180 C 160,170 90,180 40,200 Z" />
            <path d="M 30,230 C 90,210 170,200 230,210 L 230,230 C 170,220 90,230 30,250 Z" />
            <path d="M 30,280 C 90,260 170,250 230,260 L 230,280 C 170,270 90,280 30,300 Z" />
            <path d="M 40,330 C 90,310 160,300 210,310 L 210,330 C 160,320 90,330 40,350 Z" />

            <path d="M 40,100 C 120,120 180,120 250,100 C 260,95 270,110 260,120 C 180,140 120,140 40,120 Z" />

            <path d="M 270,160 C 290,150 320,170 310,200 L 290,400 C 285,410 255,410 250,400 L 250,220 C 240,190 250,170 270,160 Z" />
            <ellipse cx="275" cy="175" rx="22" ry="26" />
        </g>
        
        <g id="region-layer" class="interactive-layer">
            <path d="M 180,360 
                     C 150,270 120,200 110,150 
                     C 115,140 135,130 145,145 
                     C 150,155 160,155 165,140 
                     C 175,115 190,115 200,125 
                     C 195,145 200,150 215,145 
                     C 240,135 270,115 285,130 
                     C 295,145 295,175 275,185 
                     C 260,200 245,190 240,195 
                     C 230,240 210,300 180,360 Z" 
                  fill="url(#bone-shading)" />
            
            <path d="M 112,185 
                     C 150,175 210,155 240,135 
                     C 260,120 285,120 285,140 
                     C 285,160 260,170 240,155 
                     C 220,165 160,190 115,200 Z" 
                  fill="url(#bone-shading)" 
                  stroke="#475569" stroke-width="1.5" />
                  
            <g stroke="#475569" stroke-width="2" fill="none" opacity="0.4">
                <path d="M 140,230 C 160,260 190,280 200,240" />
                <path d="M 150,280 C 165,300 180,310 185,280" />
                <path d="M 130,160 C 160,155 200,140 220,130" />
            </g>
        </g>
        
        <g id="landmarks-layer" class="interactive-layer">
            <circle cx="180" cy="355" r="6" fill="var(--accent)" />
            
            <circle cx="115" cy="150" r="5" fill="var(--accent)" />
            
            <ellipse cx="260" cy="188" rx="6" ry="12" transform="rotate(-20 260 188)" fill="var(--accent)" opacity="0.8" />
            
            <circle cx="275" cy="140" r="7" fill="var(--accent)" />
            
            <circle cx="190" cy="125" r="5" fill="var(--accent)" />
            
            <path d="M 115,165 C 130,220 150,280 172,340" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" opacity="0.7" />
            
            <path d="M 235,210 C 220,250 205,300 187,340" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" opacity="0.7" />
            
            <path d="M 125,190 C 160,180 210,160 240,145" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" opacity="0.7" />
            
            <ellipse cx="180" cy="240" rx="30" ry="40" transform="rotate(15 180 240)" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="4,4" opacity="0.8" />
            <text x="180" y="244" fill="var(--accent)" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" opacity="0.9">Ant.</text>
        </g>
    </svg>`;
