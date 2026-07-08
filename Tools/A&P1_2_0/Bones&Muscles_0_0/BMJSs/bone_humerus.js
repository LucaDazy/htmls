svgDataStore['bone_humerus'] = `<svg viewBox="0 0 400 850" xmlns="http://www.w3.org/2000/svg">
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
            <path d="M 125,120 C 145,135 145,170 125,190 C 100,195 70,210 50,260 L 30,250 C 50,190 80,130 100,110 Z" />
            <path d="M 115,125 C 130,90 160,80 170,100 C 160,110 140,110 125,125 Z" /> <path d="M 160,75 C 190,65 220,75 230,90 C 210,95 180,85 160,90 Z" /> <path d="M 195,720 C 220,720 225,725 220,740 L 210,810 L 180,810 L 185,740 Z" />
            <path d="M 185,760 C 170,765 170,780 183,785 Z" />
            
            <path d="M 140,710 C 160,710 180,720 180,740 L 175,810 L 135,810 Z" />
            <path d="M 140,710 C 130,715 125,730 135,745 Z" />
        </g>
        
        <g id="region-layer" class="interactive-layer">
            <path d="M 140,140
                     C 135,105 175,90 200,110
                     C 210,105 235,115 240,140
                     C 245,170 230,190 225,220
                     C 220,300 240,350 225,420
                     C 215,500 215,600 240,650
                     C 255,670 245,695 230,690
                     C 220,685 220,705 205,710
                     C 195,715 190,705 180,705
                     C 175,720 155,725 145,710
                     C 135,700 135,690 145,680
                     C 120,680 105,660 120,645
                     C 140,625 155,580 155,500
                     C 155,400 170,300 170,220
                     C 170,190 145,175 140,140 Z"
                  fill="url(#bone-shading)" />
                  
            <g stroke="#475569" stroke-width="2" fill="none" opacity="0.5">
                <path d="M 140,140 C 160,155 190,145 205,120" />
                <path d="M 185,135 C 175,145 175,165 190,170 C 200,165 200,145 185,135 Z" fill="url(#bone-shading)" />
                <path d="M 190,170 C 185,200 185,230 190,260" />
                <path d="M 210,145 C 205,180 200,210 205,250" />
                <path d="M 225,310 C 235,330 235,350 225,370" />
                <path d="M 155,550 C 145,600 120,645 120,645" />
                <path d="M 215,550 C 225,600 240,650 240,650" />
                <path d="M 165,650 C 155,660 160,675 175,675 C 185,670 185,655 175,650 Z" />
                <path d="M 195,660 C 190,665 190,675 205,675 C 215,670 215,660 205,655 Z" />
                <path d="M 175,680 C 170,700 170,710 180,725" stroke-width="1.5" />
                <path d="M 150,685 C 145,695 145,710 165,720" stroke-width="1.5" />
                <path d="M 205,675 C 195,685 195,705 205,710" />
            </g>
        </g>
        
        <g id="landmarks-layer" class="interactive-layer">
            <circle cx="170" cy="115" r="7" fill="var(--accent)" />
            
            <ellipse cx="175" cy="138" rx="8" ry="3" transform="rotate(-20 175 138)" fill="var(--accent)" />
            
            <ellipse cx="195" cy="205" rx="16" ry="4" fill="var(--accent)" opacity="0.8" />
            
            <circle cx="225" cy="125" r="6" fill="var(--accent)" />
            
            <circle cx="187" cy="152" r="5" fill="var(--accent)" />
            
            <ellipse cx="197" cy="190" rx="3" ry="16" fill="var(--accent)" />
            
            <circle cx="192" cy="420" r="8" fill="var(--accent)" />
            
            <ellipse cx="230" cy="340" rx="4" ry="12" fill="var(--accent)" />
            
            <circle cx="120" cy="655" r="6" fill="var(--accent)" />
            
            <circle cx="240" cy="682" r="5" fill="var(--accent)" />
            
            <ellipse cx="170" cy="662" rx="6" ry="4" fill="var(--accent)" />
            
            <circle cx="205" cy="700" r="6" fill="var(--accent)" />
            
            <circle cx="165" cy="710" r="6" fill="var(--accent)" />
        </g>
        
    </svg>`;
