svgDataStore['bone_occipital_bone'] = `<svg viewBox="0 0 400 450" xmlns="http://www.w3.org/2000/svg">
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
            <path d="M 180,120 C 180,80 140,50 140,20 L 260,20 C 260,50 220,80 220,120 Z" /> 
            <path d="M 140,50 C 90,60 50,100 40,160 C 70,180 90,200 110,210 C 90,160 120,100 140,50 Z" />
            <path d="M 260,50 C 310,60 350,100 360,160 C 330,180 310,200 290,210 C 310,160 280,100 260,50 Z" />
            
            <path d="M 40,160 C 20,200 20,260 50,310 C 60,340 70,340 70,340 C 50,260 80,230 110,210 C 100,180 70,160 40,160 Z" />
            <path d="M 360,160 C 380,200 380,260 350,310 C 340,340 330,340 330,340 C 350,260 320,230 290,210 C 300,180 330,160 360,160 Z" />
        </g>
        
        <g id="region-layer" class="interactive-layer">
            <path d="M 180,120 
                     C 200,125 210,125 220,120 
                     C 240,150 260,180 290,210 
                     C 320,230 350,260 330,330 
                     C 310,390 260,420 200,420 
                     C 140,420 90,390 70,330 
                     C 50,260 80,230 110,210 
                     C 140,180 160,150 180,120 Z" 
                  fill="url(#bone-shading)" />
                  
            <g stroke="#475569" stroke-width="2" fill="none" opacity="0.6">
                <path d="M 100,330 Q 200,310 300,330" />
                <path d="M 125,290 Q 200,275 275,290" />
                <path d="M 200,260 L 200,320" />
                <path d="M 185,150 Q 200,160 215,150" />
            </g>
        </g>
        
        <g id="landmarks-layer" class="interactive-layer">
            <ellipse cx="200" cy="225" rx="35" ry="45" fill="var(--bg-color)" stroke="var(--accent)" stroke-width="4" />
            
            <ellipse cx="152" cy="210" rx="12" ry="26" transform="rotate(25 152 210)" fill="var(--accent)" />
            <ellipse cx="248" cy="210" rx="12" ry="26" transform="rotate(-25 248 210)" fill="var(--accent)" />
            
            <circle cx="200" cy="320" r="7" fill="var(--accent)" />
            <circle cx="200" cy="320" r="3" fill="#ffffff" opacity="0.4" />
        </g>
        
    </svg>`;
