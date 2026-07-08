svgDataStore['muscle_sartorius'] = `<svg viewBox="0 0 450 750" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="bone-shading" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#94a3b8" />
                <stop offset="25%" stop-color="#f1f5f9" />
                <stop offset="75%" stop-color="#cbd5e1" />
                <stop offset="100%" stop-color="#475569" />
            </linearGradient>
            <linearGradient id="muscle-shading" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#7f1d1d" />
                <stop offset="35%" stop-color="#ef4444" />
                <stop offset="80%" stop-color="#b91c1c" />
                <stop offset="100%" stop-color="#450a0a" />
            </linearGradient>
            <linearGradient id="tendon-shading" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#64748b" />
                <stop offset="50%" stop-color="#f8fafc" />
                <stop offset="100%" stop-color="#334155" />
            </linearGradient>
            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>

        <g class="svg-bg" opacity="0.4">
            
            <path d="M 80,50 L 80,700" stroke="#475569" stroke-width="2" stroke-dasharray="5,5" opacity="0.3" />
            
            <path d="M 80,340 C 65,340 45,330 55,300 C 65,290 75,290 80,290 Z" fill="url(#bone-shading)" opacity="0.3"/>

            <path d="M 80,340 
                     L 80,120 
                     C 130,100 200,100 230,130 
                     C 250,150 260,165 260,180 
                     C 260,195 240,210 230,225 
                     C 220,240 230,255 220,270 
                     C 210,290 160,330 140,350 
                     C 120,360 90,350 80,340 Z" 
                  fill="url(#bone-shading)"/>
                  
            <path d="M 80,290 C 110,290 130,300 140,320" fill="none" stroke="#475569" stroke-width="2" opacity="0.5"/> <path d="M 100,300 C 130,290 140,320 120,340 C 105,335 95,320 100,300 Z" fill="var(--bg-color)" opacity="0.9"/>
            <path d="M 260,165 C 270,175 270,185 260,195" fill="none" stroke="#475569" stroke-width="2" opacity="0.6"/>

            <circle cx="205" cy="265" r="22" fill="url(#bone-shading)" /> <path d="M 205,265 L 255,280 L 240,305 L 195,280 Z" fill="url(#bone-shading)" /> <path d="M 245,260 C 265,260 280,280 275,300 C 270,310 255,315 245,305 Z" fill="url(#bone-shading)" /> <path d="M 215,305 C 230,305 235,325 220,330 Z" fill="url(#bone-shading)" /> <path d="M 230,310 L 205,620 C 200,640 240,640 245,620 L 270,310 Z" fill="url(#bone-shading)" /> <path d="M 175,620 C 165,660 220,660 225,630 Z" fill="url(#bone-shading)" /> <path d="M 225,630 C 230,660 275,660 265,620 Z" fill="url(#bone-shading)" /> <path d="M 220,625 C 250,625 255,645 235,655 C 225,660 215,645 220,625 Z" fill="url(#bone-shading)" opacity="0.8" />

            <path d="M 170,655 C 215,655 265,655 260,680 L 250,740 L 180,740 L 165,680 Z" fill="url(#bone-shading)" />
            <path d="M 225,680 C 245,680 240,700 230,700 C 220,700 215,680 225,680 Z" fill="none" stroke="#475569" stroke-width="2" opacity="0.6" />
            <path d="M 235,655 C 240,670 240,670 235,685 C 225,685 225,670 230,655 Z" fill="url(#tendon-shading)" opacity="0.5" />

            <path d="M 265,660 C 275,660 280,680 270,690 L 265,740 L 255,740 L 260,690 Z" fill="url(#bone-shading)" />

            <path d="M 235,215 C 255,250 265,350 250,550 L 230,550 C 245,350 235,250 225,215 Z" fill="url(#muscle-shading)" opacity="0.25" />
            
            <path d="M 215,380 C 180,450 160,550 205,615 L 235,615 C 225,550 220,450 225,380 Z" fill="url(#muscle-shading)" opacity="0.2" />

            <path d="M 260,300 C 305,330 330,420 305,530 C 290,580 275,610 255,620 C 255,550 255,430 245,320 Z" fill="url(#muscle-shading)" opacity="0.2" />

            <path d="M 105,295 C 130,320 170,360 220,410 L 205,510 C 160,450 130,360 115,305 Z" fill="url(#muscle-shading)" opacity="0.15" />
            
            <path d="M 95,315 C 95,420 128,520 158,595 C 160,600 168,600 170,595 C 142,510 108,420 102,312 Z" fill="url(#muscle-shading)" opacity="0.15" />

        </g>

        <g id="origin-layer" class="interactive-layer">
            <ellipse cx="254" cy="177" rx="8" ry="12" transform="rotate(-20 254 177)" fill="var(--success)" />
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <path d="M 165,680 C 175,685 185,700 185,720 C 185,725 170,715 160,705 C 155,695 160,680 165,680 Z" fill="var(--accent)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-belly">
                <path d="M 245,170 
                         C 255,160 265,170 262,185 
                         C 260,250 230,350 205,450 
                         C 190,510 175,570 175,620 
                         L 155,615 
                         C 155,570 170,510 185,450 
                         C 210,350 240,250 245,170 Z" 
                      fill="url(#muscle-shading)" />
                      
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.45" fill="none">
                    <path d="M 248,172 C 250,250 220,350 195,450 C 180,510 165,570 165,615" />
                    <path d="M 252,175 C 255,250 225,350 200,450 C 185,510 170,570 170,617" />
                    <path d="M 257,180 C 260,250 230,350 205,450 C 190,510 175,570 175,618" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 155,615 
                         L 175,620 
                         C 175,660 185,690 190,720 
                         C 180,725 170,720 165,710 
                         C 155,680 155,650 155,615 Z" 
                      fill="url(#tendon-shading)" opacity="0.95" />
                      
                <g stroke="#f8fafc" stroke-width="1.2" opacity="0.5" fill="none">
                    <path d="M 160,625 Q 165,670 172,705" />
                    <path d="M 164,625 Q 169,670 176,705" />
                    <path d="M 168,625 Q 173,670 180,705" />
                </g>
                
                <path d="M 165,690 C 180,700 195,710 200,725 C 190,725 170,715 160,700 Z" fill="#f8fafc" opacity="0.3" />
            </g>
            
        </g>

    </svg>`;
