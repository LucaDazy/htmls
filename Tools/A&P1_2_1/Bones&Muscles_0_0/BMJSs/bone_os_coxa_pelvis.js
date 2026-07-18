svgDataStore['bone_os_coxa_pelvis'] = `<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
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
            <path d="M 100,110 C 130,140 135,170 100,250 C 85,280 65,300 45,290 C 35,280 40,240 60,160 C 70,130 80,110 100,110 Z" />
            <path d="M 60,125 C 80,125 90,145 80,165 C 60,165 50,145 60,125 Z" />
            <path d="M 55,85 C 75,85 85,105 75,125 C 55,125 45,105 55,85 Z" />
            
            <path d="M 220,235 C 190,210 160,230 185,270 L 140,430 L 195,430 L 235,290 C 255,275 250,245 220,235 Z" />
            <circle cx="215" cy="245" r="23" fill="none" stroke="#475569" stroke-width="2" />
        </g>
        
        <g id="region-layer" class="interactive-layer">
            <path d="M 320, 110 
                     C 310, 130 300, 160 310, 190 
                     C 290, 210 270, 230 290, 260 
                     C 320, 270 340, 290 330, 310 
                     C 300, 340 260, 360 220, 380 
                     C 190, 400 150, 360 140, 300 
                     C 120, 290 115, 270 130, 250 
                     C 140, 210 120, 180 85, 170 
                     C 85, 160 90, 130 100, 110 
                     C 140, 50 250, 40 320, 110 
                     Z
                     M 230, 280
                     C 210, 280 200, 320 220, 340
                     C 240, 350 270, 340 280, 310
                     C 280, 290 250, 280 230, 280
                     Z" 
                  fill="url(#bone-shading)" fill-rule="evenodd" />
                  
            <g stroke="#475569" stroke-width="2" opacity="0.4" fill="none">
                <path d="M 140, 100 Q 160, 140 140, 180" /> <path d="M 200, 80 Q 200, 140 160, 190" />  <path d="M 280, 120 Q 230, 160 190, 200" /> <circle cx="220" cy="235" r="28" />
                <path d="M 198, 253 A 22 22 0 1 1 242, 253" stroke-width="6" stroke="#cbd5e1" opacity="0.7" stroke-linecap="round"/>
                
                <path d="M 240, 355 Q 260, 335 285, 335" stroke-width="1.5" />
                <path d="M 145, 305 Q 160, 325 180, 345" stroke-width="1.5" />
            </g>
        </g>
        
        <g id="landmarks-layer" class="interactive-layer">
            <path d="M 100,110 C 140,50 250,40 320,110" fill="none" stroke="var(--accent)" stroke-width="6" opacity="0.8" />
            
            <circle cx="320" cy="110" r="7" fill="var(--accent)" />
            <circle cx="310" cy="190" r="6" fill="var(--accent)" />
            
            <circle cx="100" cy="110" r="7" fill="var(--accent)" />
            <circle cx="85" cy="170" r="6" fill="var(--accent)" />
            
            <path d="M 85,170 C 120,180 140,210 130,250" fill="none" stroke="var(--accent)" stroke-width="5" opacity="0.8" />
            <circle cx="130" cy="250" r="6" fill="var(--accent)" />
            <path d="M 130,250 C 115,270 120,290 140,300" fill="none" stroke="var(--accent)" stroke-width="4" opacity="0.8" />
            
            <ellipse cx="170" cy="360" rx="22" ry="12" transform="rotate(-20 170 360)" fill="var(--accent)" />
            
            <circle cx="220" cy="235" r="28" fill="none" stroke="var(--accent)" stroke-width="4" opacity="0.9" />
            
            <circle cx="295" cy="250" r="8" fill="var(--accent)" />
            <ellipse cx="330" cy="305" rx="6" ry="14" transform="rotate(15 330 305)" fill="var(--accent)" />
            <circle cx="280" cy="345" r="7" fill="var(--accent)" />
            
            <path d="M 230,280 C 210,280 200,320 220,340 C 240,350 270,340 280,310 C 280,290 250,280 230,280 Z" fill="var(--bg-color)" stroke="var(--accent)" stroke-width="3" opacity="0.9" />
            
            <path d="M 130,250 C 180,230 240,200 290,190" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="6,4" opacity="0.6" />
        </g>
        
    </svg>`;
