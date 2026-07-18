svgDataStore['bone_frontal_bone'] = `<svg viewBox="0 0 400 450" xmlns="http://www.w3.org/2000/svg">
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
            <path d="M 60,190 C 50,220 50,250 80,260 C 100,260 120,240 120,220 C 100,220 80,210 60,190 Z" />
            
            <path d="M 340,190 C 350,220 350,250 320,260 C 300,260 280,240 280,220 C 300,220 320,210 340,190 Z" />
            
            <path d="M 120,220 C 120,260 140,310 200,310 C 260,310 280,260 280,220 C 260,200 240,180 220,170 C 215,220 185,220 180,170 C 160,180 140,200 120,220 Z" />
            
            <path d="M 180,170 C 185,190 195,190 200,190 C 205,190 215,190 220,170 L 210,210 L 190,210 Z" />
            
            <path d="M 90,250 C 80,320 120,400 200,400 C 280,400 320,320 310,250 C 290,290 250,310 200,310 C 150,310 110,290 90,250 Z" />
        </g>
        
        <g id="region-layer" class="interactive-layer">
            <path d="M 60,190 
                     C 60,20 340,20 340,190 
                     C 310,130 250,130 220,170 
                     C 215,190 185,190 180,170 
                     C 150,130 90,130 60,190 Z" 
                  fill="url(#bone-shading)" />
                  
            <g stroke="#475569" stroke-width="2" opacity="0.4" fill="none">
                <path d="M 100,160 Q 140,145 170,165" />
                <path d="M 300,160 Q 260,145 230,165" />
                <path d="M 75,170 Q 75,100 120,60" />
                <path d="M 325,170 Q 325,100 280,60" />
            </g>
        </g>
        
        <g id="landmarks-layer" class="interactive-layer">
            <circle cx="150" cy="148" r="4.5" fill="var(--accent)" />
            <circle cx="250" cy="148" r="4.5" fill="var(--accent)" />
        </g>
        
    </svg>`;
