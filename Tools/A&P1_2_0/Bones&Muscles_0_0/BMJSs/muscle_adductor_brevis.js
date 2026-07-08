svgDataStore['muscle_adductor_brevis'] = `<svg viewBox="0 0 450 700" xmlns="http://www.w3.org/2000/svg">
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
            
            <path d="M 100,290 C 130,290 150,300 160,320" fill="none" stroke="#475569" stroke-width="2" opacity="0.5"/> <path d="M 120,300 C 150,290 160,320 140,340 C 125,335 115,320 120,300 Z" fill="var(--bg-color)" opacity="0.9"/>

            <circle cx="220" cy="265" r="22" fill="url(#bone-shading)" />
            <path d="M 220,265 L 270,280 L 255,305 L 210,280 Z" fill="url(#bone-shading)" />
            <path d="M 260,260 C 280,260 290,280 285,300 C 280,310 265,315 255,305 Z" fill="url(#bone-shading)" />
            <path d="M 230,305 C 245,305 250,325 235,330 Z" fill="url(#bone-shading)" />
            <path d="M 245,310 L 205,620 C 200,640 240,640 245,620 L 285,310 Z" fill="url(#bone-shading)" />
            <path d="M 195,620 C 190,660 220,660 225,630 Z" fill="url(#bone-shading)" />
            <path d="M 225,630 C 230,660 260,660 255,620 Z" fill="url(#bone-shading)" />

            <path d="M 120,320 C 140,400 180,500 200,580 L 215,500 C 180,420 150,350 140,310 Z" fill="url(#muscle-shading)" opacity="0.3" />
            
            <path d="M 105,310 C 115,400 140,500 180,620 L 170,620 C 130,500 100,400 95,310 Z" fill="url(#muscle-shading)" opacity="0.25" />
            
        </g>

        <g id="origin-layer" class="interactive-layer">
            <polygon points="108,305 120,310 115,325 103,318" fill="var(--success)" />
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <path d="M 235,355 L 230,355 L 220,445 L 225,445 Z" fill="var(--accent)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-belly">
                <path d="M 112,310 
                         C 145,330 185,350 230,360 
                         L 220,445 
                         C 170,410 135,350 118,322 Z" 
                      fill="url(#muscle-shading)" />
                      
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.5" fill="none">
                    <path d="M 115,313 Q 165,340 228,370" />
                    <path d="M 116,316 Q 160,355 225,400" />
                    <path d="M 118,320 Q 155,365 222,430" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 108,305 
                         L 115,312 
                         L 120,325 
                         L 112,318 Z" 
                      fill="url(#tendon-shading)" opacity="0.95" />
                
                <path d="M 228,358 
                         C 232,365 228,420 220,445 
                         L 215,442 
                         C 225,400 225,365 225,355 Z" 
                      fill="url(#tendon-shading)" opacity="0.75" />
                      
                <g stroke="#f8fafc" stroke-width="1.2" opacity="0.5" fill="none">
                    <line x1="110" y1="310" x2="116" y2="315" />
                    <line x1="112" y1="316" x2="118" y2="321" />
                    
                    <path d="M 226,365 Q 224,400 219,435" />
                    <path d="M 229,380 Q 227,410 222,440" />
                </g>
            </g>
            
        </g>
        
        <path d="M 130,285 C 160,300 190,320 240,350 L 245,335 C 190,310 160,290 140,280 Z" fill="url(#muscle-shading)" opacity="0.5" style="pointer-events: none;" />
        <path d="M 130,285 C 160,300 190,320 240,350 L 245,335 C 190,310 160,290 140,280 Z" fill="none" stroke="#221924" stroke-width="1.5" opacity="0.6" style="pointer-events: none;" />
        
        <path d="M 115,295 C 140,320 180,360 232,410 L 218,510 C 170,450 140,360 125,305 Z" fill="url(#muscle-shading)" opacity="0.25" style="pointer-events: none;" />
        <path d="M 115,295 C 140,320 180,360 232,410 L 218,510 C 170,450 140,360 125,305 Z" fill="none" stroke="#9c82a1" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.7" style="pointer-events: none;" />
        <text x="165" y="420" fill="#9c82a1" font-size="10" opacity="0.7" font-family="sans-serif" style="pointer-events: none; text-shadow: 1px 1px 2px #000;">Adductor Longus (cut)</text>

    </svg>`;
