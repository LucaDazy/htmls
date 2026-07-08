svgDataStore['bone_ulna'] = `<svg viewBox="0 0 300 800" xmlns="http://www.w3.org/2000/svg">
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
            <path d="M 70,50 
                     C 70,100 100,120 120,135 
                     C 130,145 140,145 145,135 
                     C 150,120 160,105 170,105 
                     C 180,105 190,120 200,130 
                     C 210,140 220,120 220,90 
                     C 220,60 210,50 200,50 Z" />
                     
            <path d="M 120,135 C 130,145 140,145 145,135" fill="none" stroke="#475569" stroke-width="2" />
            <path d="M 170,105 C 180,125 190,130 200,130" fill="none" stroke="#475569" stroke-width="2" />
            
            <path d="M 120,150 
                     C 135,150 135,160 120,160 
                     C 125,180 115,200 100,220 
                     C 80,400 70,600 50,680 
                     C 45,690 100,695 125,680 
                     C 125,660 115,600 115,400 
                     C 115,250 135,180 135,160 
                     C 135,150 125,145 120,150 Z" />
                     
            <path d="M 50,690 C 80,680 110,680 130,690 C 140,710 120,730 80,720 C 60,710 40,700 50,690 Z" />
            <path d="M 140,690 C 160,680 180,685 190,700 C 200,720 170,730 150,715 Z" />
        </g>
        
        <g id="region-layer" class="interactive-layer">
            <path d="M 165,95
                     C 175,85 195,90 195,110
                     C 195,130 185,150 185,170
                     C 185,250 180,450 178,630
                     C 177,650 188,660 190,670
                     C 192,675 195,680 195,685
                     C 192,688 188,688 185,685
                     C 170,680 160,675 160,665
                     C 158,630 155,450 150,250
                     C 147,200 145,170 140,160
                     C 138,155 138,150 142,145
                     C 150,140 162,142 165,145
                     C 175,130 170,110 160,105
                     C 158,103 160,98 165,95 Z" 
                  fill="url(#bone-shading)" />
                  
            <g stroke="#475569" fill="none" opacity="0.5">
                <path d="M 162,104 C 175,115 175,135 162,145" stroke-width="2" opacity="0.8" />
                
                <path d="M 142,150 C 150,152 160,152 170,147" stroke-width="1.5" />
                
                <path d="M 155,160 C 160,170 175,170 180,160" stroke-width="1.5" />
                <path d="M 160,165 C 165,175 170,175 175,165" stroke-width="1" />
                
                <path d="M 150,180 C 155,250 160,450 165,600" stroke-width="1.5" />
                
                <path d="M 163,655 C 170,660 180,660 185,655" stroke-width="1.5" />
            </g>
        </g>
        
        <g id="landmarks-layer" class="interactive-layer">
            <circle cx="178" cy="100" r="6" fill="var(--accent)" />
            <circle cx="178" cy="100" r="2.5" fill="#ffffff" opacity="0.4" />
            
            <circle cx="165" cy="125" r="5" fill="var(--accent)" />
            
            <circle cx="162" cy="148" r="4.5" fill="var(--accent)" />
            
            <ellipse cx="140" cy="153" rx="3.5" ry="6" fill="var(--accent)" />
            
            <circle cx="175" cy="668" r="6" fill="var(--accent)" />
            <circle cx="175" cy="668" r="2.5" fill="#ffffff" opacity="0.4" />
            
            <circle cx="191" cy="682" r="4" fill="var(--accent)" />
        </g>
        
    </svg>`;
