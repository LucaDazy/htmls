svgDataStore['bone_tibia'] = `<svg viewBox="0 0 350 850" xmlns="http://www.w3.org/2000/svg">
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
            <path d="M 100,50 C 100,100 120,130 140,140 C 150,145 160,140 165,130 C 170,140 180,145 190,140 C 210,130 230,100 230,50 Z" />
            
            <path d="M 210,165 
                     C 230,165 235,185 225,210 
                     C 215,250 215,500 220,680 
                     C 225,720 235,745 225,755 
                     C 215,765 205,730 205,680 
                     C 200,500 200,250 210,210 
                     C 215,190 200,175 210,165 Z" />
                     
            <path d="M 125,735 C 150,710 190,710 215,735 C 230,750 200,780 170,780 C 140,780 110,750 125,735 Z" />
        </g>
        
        <g id="region-layer" class="interactive-layer">
            <path d="M 115,150 
                     C 125,142 150,142 158,132 
                     C 163,145 167,145 172,132 
                     C 180,142 205,142 215,150 
                     C 225,160 225,175 210,205 
                     C 195,230 190,300 190,450 
                     C 190,600 200,670 200,685 
                     C 200,705 175,705 155,700 
                     C 150,715 145,745 130,740 
                     C 120,735 115,720 120,700 
                     C 125,680 135,600 140,450 
                     C 145,300 130,230 115,200 
                     C 100,175 105,160 115,150 Z" 
                  fill="url(#bone-shading)" />
                  
            <g stroke="#475569" stroke-width="2" opacity="0.4" fill="none">
                <path d="M 115,165 C 130,170 145,170 155,160" />
                
                <path d="M 215,165 C 200,170 185,170 175,160" />
                
                <path d="M 150,210 C 160,225 170,225 180,210" />
                <path d="M 155,190 C 165,200 175,190 175,190" stroke-width="1.5" />
                
                <path d="M 165,220 Q 175,450 150,680" stroke-width="2.5" />
                
                <path d="M 195,240 C 185,450 190,600 195,670" stroke-width="1.5" />
                
                <path d="M 140,700 C 135,715 135,725 145,730" stroke-width="1.5" />
            </g>
        </g>
        
        <g id="landmarks-layer" class="interactive-layer">
            <ellipse cx="135" cy="155" rx="16" ry="8" fill="var(--accent)" />
            
            <ellipse cx="195" cy="155" rx="16" ry="8" fill="var(--accent)" />
            
            <path d="M 156,140 L 160,132 L 165,138 L 170,132 L 174,140 C 165,145 160,145 156,140 Z" fill="var(--accent)" />
            
            <ellipse cx="165" cy="195" rx="12" ry="18" fill="var(--accent)" />
            
            <path d="M 165,220 Q 175,450 150,670" fill="none" stroke="var(--accent)" stroke-width="5" opacity="0.8" stroke-linecap="round" />
            
            <circle cx="132" cy="722" r="8" fill="var(--accent)" />
            <circle cx="132" cy="722" r="3" fill="#ffffff" opacity="0.4" />
        </g>
        
    </svg>`;
