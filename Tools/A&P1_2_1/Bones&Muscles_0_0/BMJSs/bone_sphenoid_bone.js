svgDataStore['bone_sphenoid_bone'] = `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
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
            <path d="M 20,150 C 50,30 350,30 380,150 C 300,100 100,100 20,150 Z" />
            
            <path d="M 150,250 C 180,380 220,380 250,250 C 220,290 180,290 150,250 Z" />
            
            <path d="M 40,200 C 30,300 100,340 160,280 C 110,320 60,250 80,180 Z" />
            
            <path d="M 360,200 C 370,300 300,340 240,280 C 290,320 340,250 320,180 Z" />
        </g>
        
        <g id="region-layer" class="interactive-layer">
            <path d="M 200,115 
                     C 180,115 150,110 110,105 
                     C 130,125 140,145 150,155 
                     C 120,160 80,150 40,180 
                     C 30,220 50,260 90,280 
                     C 130,290 160,270 170,260 
                     C 185,280 215,280 230,260 
                     C 240,270 270,290 310,280 
                     C 350,260 370,220 360,180 
                     C 320,150 280,160 250,155 
                     C 260,145 270,125 290,105 
                     C 250,110 220,115 200,115 Z" 
                  fill="url(#bone-shading)" />
                  
            <g stroke="#475569" stroke-width="2" fill="none" opacity="0.6">
                <path d="M 180,195 C 180,180 220,180 220,195 C 220,210 230,235 200,235 C 170,235 180,210 180,195 Z" />
                <path d="M 170,165 Q 200,155 230,165" />
                <path d="M 160,185 C 130,180 100,210 100,240 C 100,260 120,270 140,270" />
                <path d="M 240,185 C 270,180 300,210 300,240 C 300,260 280,270 260,270" />
            </g>
        </g>
        
        <g id="landmarks-layer" class="interactive-layer">
            <ellipse cx="200" cy="210" rx="18" ry="14" fill="var(--accent)" />
            
            <circle cx="168" cy="160" r="4.5" fill="var(--accent)" />
            <circle cx="232" cy="160" r="4.5" fill="var(--accent)" />
            
            <path d="M 145,162 Q 110,155 75,165 Q 110,172 140,172 Z" fill="var(--accent)" />
            <path d="M 255,162 Q 290,155 325,165 Q 290,172 260,172 Z" fill="var(--accent)" />
            
            <circle cx="155" cy="185" r="4" fill="var(--accent)" />
            <circle cx="245" cy="185" r="4" fill="var(--accent)" />
            
            <ellipse cx="135" cy="225" rx="5" ry="9" transform="rotate(-30 135 225)" fill="var(--accent)" />
            <ellipse cx="265" cy="225" rx="5" ry="9" transform="rotate(30 265 225)" fill="var(--accent)" />
            
            <circle cx="115" cy="250" r="3" fill="var(--accent)" />
            <circle cx="285" cy="250" r="3" fill="var(--accent)" />

            <circle cx="160" cy="210" r="8" fill="var(--bg-color)" stroke="var(--accent)" stroke-width="2" stroke-dasharray="3,3" />
            <circle cx="160" cy="210" r="4" fill="var(--accent)" />
            
            <circle cx="240" cy="210" r="8" fill="var(--bg-color)" stroke="var(--accent)" stroke-width="2" stroke-dasharray="3,3" />
            <circle cx="240" cy="210" r="4" fill="var(--accent)" />
        </g>
        
    </svg>`;
