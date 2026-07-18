svgDataStore['bone_radius'] = `<svg viewBox="0 0 300 800" xmlns="http://www.w3.org/2000/svg">
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
            <path d="M 60,50 C 60,110 80,130 90,140 C 105,150 120,145 130,140 C 150,130 170,145 180,140 C 200,130 210,90 210,50 Z" />
            
            <path d="M 130,145 
                     C 145,135 165,135 175,145 
                     C 185,155 185,175 175,185 
                     C 170,200 160,250 155,350 
                     C 150,450 155,550 160,630 
                     C 165,650 165,665 160,675 
                     C 155,675 150,670 145,660 
                     C 135,655 125,650 125,640 
                     C 120,600 135,450 135,350 
                     C 135,250 120,180 115,160 
                     C 112,150 120,150 130,145 Z" />
                     
            <path d="M 60,685 C 80,675 105,670 125,675 C 135,690 125,710 100,710 C 75,710 55,700 60,685 Z" />
            <path d="M 130,670 C 145,665 155,665 160,675 C 160,695 145,705 130,705 C 120,705 115,690 130,670 Z" />
        </g>
        
        <g id="region-layer" class="interactive-layer">
            <path d="M 90,160 
                     C 100,155 110,155 120,160 
                     C 120,170 120,175 115,185 
                     C 112,190 115,200 125,215 
                     C 130,225 125,250 115,350 
                     C 105,450 110,550 125,630 
                     C 128,640 128,645 122,650 
                     C 100,655 80,655 70,660 
                     C 65,670 60,675 58,675 
                     C 55,665 55,650 60,630 
                     C 75,550 80,450 75,350 
                     C 70,250 85,200 90,185 
                     C 87,175 87,170 90,160 Z" 
                  fill="url(#bone-shading)" />
                  
            <g stroke="#475569" stroke-width="1.5" fill="none" opacity="0.4">
                <path d="M 88,168 C 100,170 110,170 118,168" />
                <path d="M 88,175 C 100,178 110,178 116,175" />
                
                <path d="M 115,205 C 120,210 120,220 115,225" />
                
                <path d="M 118,230 C 105,250 90,270 85,320" />
                
                <path d="M 112,280 C 105,400 112,500 120,600" />
                
                <path d="M 70,640 C 85,645 110,640 120,635" />
            </g>
        </g>
        
        <g id="landmarks-layer" class="interactive-layer">
            <ellipse cx="105" cy="165" rx="18" ry="7" fill="var(--accent)" />
            <ellipse cx="105" cy="165" rx="6" ry="2" fill="#ffffff" opacity="0.4" />
            
            <ellipse cx="123" cy="215" rx="5" ry="12" fill="var(--accent)" />
            
            <circle cx="59" cy="672" r="5" fill="var(--accent)" />
            
            <ellipse cx="126" cy="643" rx="3" ry="12" fill="var(--accent)" />
        </g>
        
    </svg>`;
