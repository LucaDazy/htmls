svgDataStore['bone_patella'] = `<svg viewBox="0 0 350 450" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="bone-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#94a3b8" /><stop offset="25%" stop-color="#f1f5f9" /><stop offset="75%" stop-color="#cbd5e1" /><stop offset="100%" stop-color="#475569" /></linearGradient>
            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
        </defs>
        
        <g class="svg-bg" fill="url(#bone-shading)" opacity="0.4">
            <path d="M 125,-20 
                     C 125,40 90,80 90,140 
                     C 90,200 120,230 150,230 
                     C 165,230 170,210 175,200 
                     C 180,210 185,230 200,230 
                     C 230,230 260,200 260,140 
                     C 260,80 225,40 225,-20 Z" />
            <path d="M 160,210 C 170,180 180,180 190,210" fill="none" stroke="#475569" stroke-width="2" />
        </g>
        
        <g id="region-layer" class="interactive-layer">
            <path d="M 175,130 
                     C 235,120 270,160 260,215 
                     C 250,285 195,345 175,370 
                     C 155,345 100,285 90,215 
                     C 80,160 115,120 175,130 Z" 
                  fill="url(#bone-shading)" />
                  
            <g stroke="#475569" stroke-width="2" opacity="0.5" fill="none">
                <path d="M 175,138 Q 185,245 175,355" stroke-width="2.5" />
                
                <path d="M 110,145 Q 175,135 240,145" />
                
                <path d="M 160,340 C 170,355 180,355 190,340" />
            </g>
        </g>
        
        <g id="landmarks-layer" class="interactive-layer">
            <path d="M 183,148 
                     C 220,142 245,170 240,215 
                     C 235,265 200,315 180,342 
                     Q 188,245 183,148 Z" 
                  fill="var(--accent)" opacity="0.85" />
                  
            <path d="M 167,148 
                     C 130,142 105,170 110,215 
                     C 115,265 150,315 170,342 
                     Q 162,245 167,148 Z" 
                  fill="var(--accent)" opacity="0.85" />
        </g>
        
    </svg>`;
