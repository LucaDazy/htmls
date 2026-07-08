svgDataStore['muscle_peroneus_fibularis_brevis'] = `<svg viewBox="0 0 450 850" xmlns="http://www.w3.org/2000/svg">
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
            
            <path d="M 150,50 L 210,50 L 220,130 C 210,150 160,150 150,130 Z" fill="url(#bone-shading)"/>
            
            <path d="M 160,140 
                     C 180,135 200,140 210,155 
                     C 205,180 195,250 185,400 
                     C 175,550 165,610 170,630 
                     C 160,640 140,630 135,610 
                     C 130,550 140,350 150,200 
                     C 150,170 155,150 160,140 Z" 
                  fill="url(#bone-shading)" />
            <path d="M 135,180 C 145,190 145,210 135,220" fill="none" stroke="#475569" stroke-width="2" opacity="0.6"/>

            <path d="M 205,165 
                     C 225,160 235,175 225,195 
                     C 215,205 205,200 200,180 Z" 
                  fill="url(#bone-shading)" /> <path d="M 212,190 
                     C 220,300 230,500 225,600 
                     C 230,630 225,660 210,650 
                     C 200,630 205,600 210,580 
                     C 210,450 200,300 200,190 Z" 
                  fill="url(#bone-shading)" /> <path d="M 205,620 C 220,630 220,650 210,660" fill="url(#bone-shading)" /> <path d="M 155,615 C 180,605 205,620 200,645 C 185,660 165,655 150,640 Z" fill="url(#bone-shading)" />
            <path d="M 195,635 C 225,640 245,670 235,720 C 225,740 180,740 160,725 C 150,700 165,660 180,640 Z" fill="url(#bone-shading)" />
            <path d="M 180,680 C 190,690 190,700 180,710" fill="none" stroke="#475569" stroke-width="1.5" opacity="0.5"/> <path d="M 140,645 C 160,655 175,680 165,705 C 145,710 125,690 120,670 C 125,655 135,650 140,645 Z" fill="url(#bone-shading)" />
            <path d="M 125,680 C 110,685 110,705 130,705 C 130,705 60,730 60,740 L 55,720 Z" fill="url(#bone-shading)" /> <path d="M 130,665 L 50,690 L 50,710 L 125,685 Z" fill="url(#bone-shading)" opacity="0.7"/> <path d="M 170,180 C 190,200 180,400 145,550 L 135,540 C 160,400 150,200 170,180 Z" fill="url(#muscle-shading)" opacity="0.15" />
            
            <path d="M 195,180 C 210,220 200,400 160,550 L 155,540 C 190,400 195,220 195,180 Z" fill="url(#muscle-shading)" opacity="0.2" />

            <path d="M 225,180 C 270,220 280,350 250,500 C 240,550 235,600 235,650 L 225,650 C 225,600 230,550 240,500 C 265,380 260,250 225,180 Z" fill="url(#muscle-shading)" opacity="0.25" />

        </g>

        <g id="origin-layer" class="interactive-layer">
            <path d="M 215,360 C 225,420 228,500 222,580 L 210,580 C 210,500 205,420 215,360 Z" fill="var(--success)" />
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <ellipse cx="120" cy="693" rx="5" ry="8" transform="rotate(-20 120 693)" fill="var(--accent)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-belly">
                <path d="M 215,360 
                         C 235,420 235,500 220,590 
                         C 215,600 205,600 208,590 
                         C 200,500 200,420 215,360 Z" 
                      fill="url(#muscle-shading)" />
                      
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.45" fill="none" stroke-linecap="round">
                    <path d="M 212,380 Q 225,430 215,480" />
                    <path d="M 210,400 Q 228,450 213,500" />
                    <path d="M 208,420 Q 225,470 211,520" />
                    <path d="M 206,440 Q 225,490 209,540" />
                    <path d="M 206,460 Q 220,510 208,560" />
                    <path d="M 206,480 Q 215,530 208,580" />
                    <path d="M 207,500 Q 215,550 208,585" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 210,580 
                         C 215,620 220,640 215,655 
                         C 205,670 160,685 125,695 
                         C 118,698 116,688 122,685 
                         C 150,675 200,655 208,635 
                         C 210,610 205,580 210,580 Z" 
                      fill="url(#tendon-shading)" opacity="0.95" />
                      
                <g stroke="#f8fafc" stroke-width="1.2" opacity="0.5" fill="none">
                    <path d="M 210,600 Q 213,625 210,650" />
                    <path d="M 212,620 Q 215,655 190,670" />
                    <path d="M 180,675 Q 150,685 130,692" />
                </g>
            </g>
            
        </g>
        
        <g style="pointer-events: none;" opacity="0.7">
            <path d="M 205,160 C 230,160 245,220 235,350 C 230,400 220,410 212,405 C 205,400 210,250 205,160 Z" fill="none" stroke="#9c82a1" stroke-width="1.5" stroke-dasharray="4,4" />
            <text x="238" y="280" fill="#9c82a1" font-size="11" font-family="sans-serif" style="text-shadow: 1px 1px 2px #000;">Peroneus Longus (cut)</text>
            
            <path d="M 220,405 C 225,500 225,640 220,660 C 210,680 180,690 145,710 L 140,700 C 180,680 210,670 215,640 C 218,500 215,405 220,405 Z" fill="none" stroke="#9c82a1" stroke-width="1" stroke-dasharray="2,2" opacity="0.6" />
        </g>

        <g style="pointer-events: none;" opacity="0.5">
            <path d="M 205,620 C 220,625 235,635 225,660 C 215,650 200,640 205,620 Z" fill="#94a3b8"/>
            <path d="M 208,625 C 220,632 225,645 220,655" fill="none" stroke="#cbd5e1" stroke-width="1.5" opacity="0.7"/>
            
            <path d="M 180,660 C 195,655 210,670 195,695 C 185,685 170,675 180,660 Z" fill="#94a3b8"/>
            <path d="M 183,663 C 195,662 202,675 192,690" fill="none" stroke="#cbd5e1" stroke-width="1.5" opacity="0.7"/>
        </g>

    </svg>`;
