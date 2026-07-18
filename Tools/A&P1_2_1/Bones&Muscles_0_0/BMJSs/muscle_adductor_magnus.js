svgDataStore['muscle_adductor_magnus'] = `<svg viewBox="0 0 450 700" xmlns="http://www.w3.org/2000/svg">
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
            
            <path d="M 100,50 L 100,360" stroke="#475569" stroke-width="2" stroke-dasharray="5,5" opacity="0.5" />
            
            <path d="M 100,340 C 85,340 65,330 75,300 C 85,290 95,290 100,290 Z" fill="url(#bone-shading)" opacity="0.3"/>

            <path d="M 100,340 
                     L 100,120 
                     C 150,100 220,100 250,130 
                     C 260,140 265,155 260,170 
                     C 255,185 245,200 240,215 
                     C 235,230 240,245 230,260 
                     C 220,280 180,330 160,350 
                     C 140,360 110,350 100,340 Z" 
                  fill="url(#bone-shading)"/>
            
            <path d="M 110,345 C 120,380 145,385 155,360 C 140,360 120,360 110,345 Z" fill="url(#bone-shading)"/>

            <path d="M 100,290 C 130,290 150,300 160,320" fill="none" stroke="#475569" stroke-width="2" opacity="0.5"/> <path d="M 120,300 C 150,290 160,320 140,350 C 125,345 115,320 120,300 Z" fill="var(--bg-color)" opacity="0.9"/>

            <circle cx="220" cy="265" r="22" fill="url(#bone-shading)" />
            <path d="M 220,265 L 270,280 L 255,305 L 210,280 Z" fill="url(#bone-shading)" />
            <path d="M 260,260 C 280,260 290,280 285,300 C 280,310 265,315 255,305 Z" fill="url(#bone-shading)" />
            <path d="M 230,305 C 245,305 250,325 235,330 Z" fill="url(#bone-shading)" />
            <path d="M 245,310 L 205,620 C 200,640 240,640 245,620 L 285,310 Z" fill="url(#bone-shading)" />
            <path d="M 195,620 C 185,660 220,660 225,630 Z" fill="url(#bone-shading)" />
            <path d="M 225,630 C 230,660 265,660 255,620 Z" fill="url(#bone-shading)" />
            <path d="M 195,605 C 188,610 188,615 195,620 Z" fill="url(#bone-shading)" /> </g>

        <g id="origin-layer" class="interactive-layer">
            <path d="M 105,300 L 118,305 L 140,365 L 128,370 Z" fill="var(--success)" />
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <path d="M 233,355 L 228,355 L 213,540 L 218,540 Z" fill="var(--accent)" />
            <ellipse cx="194" cy="605" rx="4" ry="7" transform="rotate(-10 194 605)" fill="var(--accent)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-belly">
                <path d="M 112,305 
                         C 150,315 190,335 230,360 
                         L 215,530 
                         C 205,535 195,550 200,560 
                         C 185,500 150,420 135,365 
                         L 112,305 Z" 
                      fill="url(#muscle-shading)" />
                      
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.45" fill="none">
                    <path d="M 115,315 Q 160,330 225,380" />
                    <path d="M 118,325 Q 165,350 220,430" />
                    <path d="M 122,335 Q 160,380 217,480" />
                    
                    <path d="M 128,345 Q 165,450 198,555" />
                    <path d="M 132,355 Q 155,440 185,510" />
                    <path d="M 135,360 Q 148,420 170,470" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 108,300 
                         L 115,307 
                         L 138,365 
                         L 130,370 Z" 
                      fill="url(#tendon-shading)" opacity="0.85" />
                
                <path d="M 228,360 
                         C 232,365 220,450 215,530 
                         L 210,530 
                         C 215,450 225,365 225,360 Z" 
                      fill="url(#tendon-shading)" opacity="0.75" />
                      
                <path d="M 200,560 
                         C 196,575 195,595 194,605 
                         C 197,605 200,595 204,560 Z" 
                      fill="url(#tendon-shading)" opacity="0.95" />
                      
                <g stroke="#f8fafc" stroke-width="1.2" opacity="0.5" fill="none">
                    <path d="M 225,370 Q 220,420 213,480" />
                    <path d="M 227,390 Q 222,440 215,500" />
                    
                    <path d="M 197,565 Q 196,585 195,600" />
                    <path d="M 201,565 Q 199,585 197,600" />
                </g>
            </g>
            
        </g>
        
        <path d="M 105,310 C 115,400 140,500 180,620 L 170,620 C 130,500 100,400 95,310 Z" fill="url(#muscle-shading)" opacity="0.15" style="pointer-events: none;" />
        
        <path d="M 115,295 C 140,320 180,360 232,410 L 218,510 C 170,450 140,360 125,305 Z" fill="url(#muscle-shading)" opacity="0.1" style="pointer-events: none;" />
        <path d="M 115,295 C 140,320 180,360 232,410 L 218,510 C 170,450 140,360 125,305 Z" fill="none" stroke="#9c82a1" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.7" style="pointer-events: none;" />
        <text x="165" y="440" fill="#9c82a1" font-size="10" opacity="0.7" font-family="sans-serif" style="pointer-events: none; text-shadow: 1px 1px 2px #000;">Adductor Longus (cut)</text>
        
        <path d="M 112,310 C 145,330 185,350 230,360 L 220,445 C 170,410 135,350 118,322 Z" fill="none" stroke="#9c82a1" stroke-width="1.5" stroke-dasharray="2,4" opacity="0.5" style="pointer-events: none;" />

        <path d="M 215,550 L 250,550" stroke="#9c82a1" stroke-width="1" opacity="0.6" style="pointer-events: none;"/>
        <text x="255" y="553" fill="#9c82a1" font-size="10" opacity="0.7" font-family="sans-serif" style="pointer-events: none; text-shadow: 1px 1px 2px #000;">Adductor Hiatus</text>

    </svg>`;
