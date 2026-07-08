svgDataStore['muscle_extensor_carpi_ulnaris'] = `<svg viewBox="0 0 450 650" xmlns="http://www.w3.org/2000/svg">
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
                     C 260,110 270,140 250,155 
                     C 225,165 185,165 160,155 
                     C 140,140 150,110 180,80 Z" 
                  fill="url(#bone-shading)" />
            <path d="M 185,130 C 195,115 215,115 225,130 C 220,145 190,145 185,130 Z" fill="var(--bg-color)" opacity="0.5" />
            <path d="M 250,155 C 265,165 275,145 260,135" fill="url(#bone-shading)" />
            <path d="M 160,155 C 145,165 135,145 150,135" fill="url(#bone-shading)" />

            <path d="M 220,160 
                     L 260,160 
                     L 265,180 
                     L 215,180 Z" 
                  fill="url(#bone-shading)" />
            <path d="M 215,180 
                     C 220,250 220,350 225,450 
                     L 265,450 
                     C 270,350 265,250 265,180 Z" 
                  fill="url(#bone-shading)" />
            <path d="M 220,160 Q 240,155 260,160" fill="none" stroke="#475569" stroke-width="1.5" />

            <path d="M 160,140 
                     C 180,130 200,130 220,140 
                     L 215,160 
                     L 165,160 Z" 
                  fill="url(#bone-shading)" />
            <path d="M 160,155 
                     C 180,155 200,160 215,160 
                     L 210,180 
                     L 160,180 Z" 
                  fill="url(#bone-shading)" />
            <path d="M 160,180 
                     C 170,250 180,350 185,450 
                     L 215,450 
                     C 210,350 205,250 210,180 Z" 
                  fill="url(#bone-shading)" />
            <path d="M 185,450 L 190,465 L 205,450 Z" fill="url(#bone-shading)" />

            <rect x="180" y="455" width="90" height="30" rx="10" fill="url(#bone-shading)" opacity="0.8" />

            <path d="M 270,470 L 310,540 L 300,550 L 265,480 Z" fill="url(#bone-shading)" />
            <path d="M 250,490 L 265,590 L 250,595 L 235,490 Z" fill="url(#bone-shading)" />
            <path d="M 225,490 L 230,600 L 215,600 L 210,490 Z" fill="url(#bone-shading)" />
            <path d="M 200,490 L 190,590 L 175,590 L 185,490 Z" fill="url(#bone-shading)" />
            <path d="M 175,485 L 150,550 L 135,545 L 160,485 Z" fill="url(#bone-shading)" />

            <path d="M 245,140 C 220,145 180,155 165,160 L 165,220 C 190,210 220,170 245,140 Z" fill="url(#muscle-shading)" opacity="0.3" />
            <path d="M 240,150 C 220,250 210,350 210,440 L 225,440 C 230,350 240,250 255,150 Z" fill="url(#muscle-shading)" opacity="0.25" />
            <path d="M 255,145 C 265,220 260,320 250,440 L 265,440 C 275,320 280,220 265,140 Z" fill="url(#muscle-shading)" opacity="0.2" />

        </g>

        <g id="origin-layer" class="interactive-layer">
            <ellipse cx="245" cy="142" rx="6" ry="10" transform="rotate(20 245 142)" fill="var(--success)" />
            
            <path d="M 163,165 L 168,165 L 172,280 L 167,280 Z" fill="var(--success)" />
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <ellipse cx="167" cy="492" rx="5" ry="8" transform="rotate(15 167 492)" fill="var(--accent)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-belly">
                <path d="M 245,140 
                         C 220,150 180,155 165,160 
                         L 170,280 
                         C 172,320 175,350 177,380 
                         L 192,380 
                         C 198,320 210,220 255,148 Z" 
                      fill="url(#muscle-shading)" />
                      
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.45" fill="none">
                    <path d="M 240,145 Q 210,170 185,220" />
                    <path d="M 235,150 Q 205,185 180,260" />
                    <path d="M 175,180 Q 180,250 182,320" />
                    <path d="M 185,220 Q 190,270 188,350" />
                    <path d="M 220,175 Q 200,240 190,320" />
                    <path d="M 170,200 L 175,300" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 177,380 
                         C 175,410 176,440 175,460 
                         C 174,475 168,485 165,492 
                         L 173,495 
                         C 176,485 183,475 184,460 
                         C 186,440 188,410 192,380 Z" 
                      fill="url(#tendon-shading)" opacity="0.95" />
                      
                <g stroke="#f8fafc" stroke-width="1.2" opacity="0.5" fill="none">
                    <path d="M 182,385 Q 180,440 168,490" />
                    <path d="M 187,385 Q 185,440 172,490" />
                </g>
            </g>
            
        </g>
        
        <path d="M 175,445 Q 225,435 275,450 L 278,465 Q 225,450 170,465 Z" fill="#94a3b8" opacity="0.4" style="pointer-events: none;" />
        <g stroke="#cbd5e1" stroke-width="1" opacity="0.5" fill="none" style="pointer-events: none;">
            <path d="M 174,450 Q 225,440 276,455" />
            <path d="M 172,455 Q 225,445 277,460" />
        </g>

    </svg>`;
