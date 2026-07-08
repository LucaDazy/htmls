svgDataStore['muscle_extensor_digitorum'] = `<svg viewBox="0 0 450 750" xmlns="http://www.w3.org/2000/svg">
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
            
            <path d="M 180,30 
                     L 230,30 
                     L 230,80 
                     C 260,110 270,140 255,150 
                     C 225,160 185,160 160,150 
                     C 140,135 150,110 180,80 Z" 
                  fill="url(#bone-shading)" />
            <path d="M 185,130 C 195,115 215,115 225,130 C 220,145 190,145 185,130 Z" fill="var(--bg-color)" opacity="0.5" />
            <path d="M 250,150 C 265,160 270,140 255,130" fill="url(#bone-shading)" />
            <path d="M 160,150 C 145,160 140,140 155,130" fill="url(#bone-shading)" />

            <path d="M 220,160 L 260,160 L 265,180 L 215,180 Z" fill="url(#bone-shading)" />
            <path d="M 215,180 
                     C 220,250 220,350 225,450 
                     L 265,450 
                     C 270,350 265,250 265,180 Z" 
                  fill="url(#bone-shading)" />
            <path d="M 220,160 Q 240,155 260,160" fill="none" stroke="#475569" stroke-width="1.5" />

            <path d="M 160,140 C 180,130 200,130 220,140 L 215,160 L 165,160 Z" fill="url(#bone-shading)" />
            <path d="M 160,155 C 180,155 200,160 215,160 L 210,180 L 160,180 Z" fill="url(#bone-shading)" />
            <path d="M 160,180 
                     C 170,250 180,350 190,450 
                     L 220,450 
                     C 215,350 210,250 210,180 Z" 
                  fill="url(#bone-shading)" />

            <rect x="185" y="455" width="85" height="30" rx="10" fill="url(#bone-shading)" opacity="0.8" />

            <g fill="url(#bone-shading)">
                <path d="M 270,470 L 310,540 L 300,550 L 265,480 Z" />
                <path d="M 305,545 L 330,590 L 320,600 L 295,555 Z" />
                
                <path d="M 255,490 L 270,580 L 255,585 L 240,490 Z" /> <path d="M 255,585 L 265,640 L 255,645 L 245,590 Z" /> <path d="M 255,645 L 260,680 L 250,682 L 245,647 Z" /> <path d="M 255,682 L 258,705 L 248,707 L 245,684 Z" /> <path d="M 230,490 L 235,590 L 220,590 L 215,490 Z" /> <path d="M 220,590 L 225,650 L 215,650 L 210,590 Z" /> <path d="M 215,650 L 220,690 L 210,690 L 205,650 Z" /> <path d="M 210,690 L 215,715 L 205,715 L 200,690 Z" /> <path d="M 205,490 L 195,580 L 180,580 L 190,490 Z" /> <path d="M 180,580 L 170,640 L 160,635 L 170,580 Z" /> <path d="M 160,635 L 150,675 L 140,670 L 150,630 Z" /> <path d="M 140,670 L 135,695 L 125,690 L 130,665 Z" /> <path d="M 180,485 L 155,550 L 140,545 L 165,485 Z" /> <path d="M 140,545 L 120,595 L 110,590 L 130,540 Z" /> <path d="M 110,590 L 95,625 L 85,620 L 100,585 Z" /> <path d="M 85,620 L 75,640 L 65,635 L 75,615 Z" /> </g>

            <path d="M 235,80 C 275,110 290,200 270,300 C 265,350 250,440 250,440 L 260,440 C 270,350 285,250 285,150 C 275,100 250,70 235,80 Z" fill="url(#muscle-shading)" opacity="0.3" />
            <path d="M 160,150 C 145,220 170,350 185,440 L 175,440 C 160,350 135,220 150,140 Z" fill="url(#muscle-shading)" opacity="0.25" />

        </g>

        <g id="origin-layer" class="interactive-layer">
            <ellipse cx="250" cy="142" rx="7" ry="12" transform="rotate(20 250 142)" fill="var(--success)" />
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <path d="M 245,647 L 260,645 L 262,705 L 245,707 Z" fill="var(--accent)" />
            <path d="M 205,650 L 220,650 L 220,715 L 205,715 Z" fill="var(--accent)" />
            <path d="M 145,632 L 160,637 L 140,695 L 125,690 Z" fill="var(--accent)" />
            <path d="M 105,587 L 115,595 L 85,640 L 70,635 Z" fill="var(--accent)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-belly">
                <path d="M 250,142 
                         C 265,180 260,250 240,320 
                         C 220,380 200,380 200,380 
                         L 180,380 
                         C 180,380 170,250 210,180 
                         C 220,160 230,140 250,142 Z" 
                      fill="url(#muscle-shading)" />
                      
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.45" fill="none">
                    <path d="M 245,150 Q 255,200 235,320" />
                    <path d="M 240,155 Q 245,220 220,350" />
                    <path d="M 235,160 Q 230,240 205,370" />
                    <path d="M 225,170 Q 215,260 190,370" />
                    <path d="M 215,185 Q 200,270 185,360" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 238,320 C 240,380 250,450 255,590 L 250,590 C 245,450 235,380 233,320 Z" fill="url(#tendon-shading)" opacity="0.95" />
                <path d="M 220,350 C 225,400 225,480 220,590 L 215,590 C 220,480 220,400 215,350 Z" fill="url(#tendon-shading)" opacity="0.95" />
                <path d="M 205,370 C 205,420 195,480 170,580 L 165,580 C 190,480 200,420 200,370 Z" fill="url(#tendon-shading)" opacity="0.95" />
                <path d="M 190,370 C 185,410 165,480 120,545 L 116,541 C 160,475 180,410 185,370 Z" fill="url(#tendon-shading)" opacity="0.95" />
                
                <g stroke="url(#tendon-shading)" stroke-width="3" opacity="0.85" stroke-linecap="round">
                    <path d="M 183,520 Q 200,530 218,525" fill="none" />
                    <path d="M 180,535 Q 165,540 142,520" fill="none" />
                    <path d="M 220,540 Q 235,535 252,545" fill="none" opacity="0.6"/>
                </g>

                <path d="M 255,590 L 265,645 L 245,645 Z" fill="url(#tendon-shading)" opacity="0.7" />
                <path d="M 220,590 L 225,650 L 205,650 Z" fill="url(#tendon-shading)" opacity="0.7" />
                <path d="M 170,580 L 165,635 L 145,630 Z" fill="url(#tendon-shading)" opacity="0.7" />
                <path d="M 120,545 L 105,595 L 90,585 Z" fill="url(#tendon-shading)" opacity="0.7" />

                <g stroke="#f8fafc" stroke-width="1.2" opacity="0.5" fill="none">
                    <path d="M 235,330 Q 240,400 252,580" />
                    <path d="M 218,360 Q 222,420 218,580" />
                    <path d="M 203,380 Q 200,440 168,570" />
                    <path d="M 188,380 Q 180,430 118,538" />
                </g>
            </g>
            
        </g>
        
        <path d="M 175,445 Q 225,435 275,450 L 278,465 Q 225,450 170,465 Z" fill="#94a3b8" opacity="0.5" style="pointer-events: none;" />
        <g stroke="#cbd5e1" stroke-width="1.5" opacity="0.6" fill="none" style="pointer-events: none;">
            <path d="M 174,450 Q 225,440 276,455" />
            <path d="M 172,455 Q 225,445 277,460" />
            <path d="M 170,460 Q 225,448 277,463" />
        </g>

    </svg>`;
