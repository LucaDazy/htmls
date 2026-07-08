svgDataStore['muscle_adductor_longus'] = `<svg viewBox="0 0 450 700" xmlns="http://www.w3.org/2000/svg">
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

            <path d="M 130,285 C 160,300 190,320 240,350 L 245,335 C 190,310 160,290 140,280 Z" fill="url(#muscle-shading)" opacity="0.3" />
            
            <path d="M 105,310 C 115,400 140,500 180,620 L 170,620 C 130,500 100,400 95,310 Z" fill="url(#muscle-shading)" opacity="0.3" />
            
            <path d="M 120,320 C 140,400 180,500 200,580 L 215,500 C 180,420 150,350 140,310 Z" fill="url(#muscle-shading)" opacity="0.2" />
            
            <path d="M 260,170 C 270,180 260,250 240,350 C 220,450 190,550 180,620 L 195,620 C 210,550 240,450 260,350 C 280,250 280,180 260,170 Z" fill="url(#muscle-shading)" opacity="0.25" />
            
            <path d="M 240,215 C 260,250 270,350 250,550 L 230,550 C 250,350 240,250 230,215 Z" fill="url(#muscle-shading)" opacity="0.15" />

            <path d="M 260,170 Q 200,240 120,290" fill="none" stroke="url(#tendon-shading)" stroke-width="4" opacity="0.7" />
            <path d="M 260,170 Q 200,240 120,290" fill="none" stroke="#f8fafc" stroke-width="1" opacity="0.5" />

        </g>

        <g id="origin-layer" class="interactive-layer">
            <ellipse cx="118" cy="298" rx="6" ry="10" transform="rotate(-30 118 298)" fill="var(--success)" />
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <path d="M 233,408 L 228,408 L 215,512 L 220,512 Z" fill="var(--accent)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-belly">
                <path d="M 115,295 
                         C 140,320 180,360 232,410 
                         L 218,510 
                         C 170,450 140,360 125,305 
                         C 120,300 115,295 115,295 Z" 
                      fill="url(#muscle-shading)" />
                      
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.5" fill="none">
                    <path d="M 118,298 Q 160,340 230,415" />
                    <path d="M 119,301 Q 160,350 227,440" />
                    <path d="M 121,304 Q 160,360 224,460" />
                    <path d="M 123,307 Q 160,370 221,485" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 110,292 
                         C 115,300 120,310 125,315 
                         C 120,310 115,302 112,298 
                         C 110,295 108,293 110,292 Z" 
                      fill="url(#tendon-shading)" opacity="0.95" />
                
                <path d="M 228,405 
                         C 235,410 230,460 218,510 
                         L 214,505 
                         C 225,460 228,415 228,405 Z" 
                      fill="url(#tendon-shading)" opacity="0.75" />
                      
                <g stroke="#f8fafc" stroke-width="1.2" opacity="0.5" fill="none">
                    <line x1="112" y1="295" x2="118" y2="303" />
                    <line x1="114" y1="298" x2="120" y2="306" />
                    
                    <path d="M 225,415 Q 223,460 215,500" />
                    <path d="M 228,425 Q 226,460 218,495" />
                </g>
            </g>
            
        </g>
    </svg>`;
