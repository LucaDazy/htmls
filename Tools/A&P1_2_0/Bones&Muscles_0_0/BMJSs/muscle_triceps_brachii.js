svgDataStore['muscle_triceps_brachii'] = `<svg viewBox="0 0 400 800" xmlns="http://www.w3.org/2000/svg">
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

        <g class="svg-bg" fill="url(#bone-shading)" opacity="0.4">
            <path d="M 160,150 C 150,140 100,150 70,160 C 70,170 80,200 100,280 C 130,220 150,180 160,150 Z" />
            <path d="M 70,160 C 120,150 160,120 180,120 C 200,120 210,130 200,140 C 180,140 130,160 70,160 Z" />
            
            <path d="M 170,120 
                     C 190,110 210,120 220,140 
                     C 230,160 225,180 220,200 
                     L 210,540 
                     C 230,560 240,570 235,590 
                     L 145,590 
                     C 140,570 150,560 170,540 
                     L 180,200 
                     C 175,180 160,160 170,120 Z" />
            <ellipse cx="190" cy="575" rx="10" ry="15" fill="var(--bg-color)" opacity="0.5" />

            <path d="M 165,585 C 185,575 205,585 210,610 L 205,800 L 160,800 L 165,620 Z" />
            <path d="M 175,590 C 185,580 195,580 205,590 C 210,600 205,610 190,610 C 175,610 170,600 175,590 Z" fill="none" stroke="#475569" stroke-width="2"/> <path d="M 215,605 C 225,600 245,605 245,620 L 210,620 Z" />
            <path d="M 215,620 L 245,620 L 235,800 L 195,800 Z" />
        </g>

        <g id="origin-layer" class="interactive-layer">
            <circle cx="165" cy="160" r="7" fill="var(--success)" />
            
            <path d="M 205,160 C 215,160 225,180 215,220 C 205,210 195,190 205,160 Z" fill="var(--success)" />
            
            <path d="M 170,380 C 190,360 210,360 220,380 L 220,430 L 170,430 Z" fill="var(--success)" opacity="0.6" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-belly">
                <path d="M 160,420 C 145,480 140,540 160,590 C 165,570 175,520 180,480 Z" fill="url(#muscle-shading)" /> 
                <path d="M 225,450 C 240,500 235,550 220,590 C 210,550 205,500 200,450 Z" fill="url(#muscle-shading)" />

                <path d="M 165,160 
                         C 130,250 140,380 160,480 
                         C 170,420 180,350 190,280 
                         C 185,250 175,200 165,160 Z" 
                      fill="url(#muscle-shading)" />

                <path d="M 210,170 
                         C 245,210 260,300 220,450 
                         C 215,380 200,320 190,280 
                         C 195,240 205,200 210,170 Z" 
                      fill="url(#muscle-shading)" />

                <g stroke="#450a0a" stroke-width="1.5" opacity="0.4" fill="none">
                    <path d="M 160,180 Q 140,280 165,450" />
                    <path d="M 168,185 Q 155,280 175,420" />
                    <path d="M 175,190 Q 170,260 185,350" />
                    <path d="M 215,190 Q 240,280 215,420" />
                    <path d="M 208,210 Q 225,280 205,380" />
                    <path d="M 200,240 Q 210,290 195,330" />
                    <path d="M 155,470 Q 150,520 168,570" />
                    <path d="M 220,470 Q 230,520 210,570" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 190,280 
                         C 180,350 170,420 160,480 
                         C 165,520 175,570 180,590 
                         C 185,600 195,600 200,590 
                         C 205,570 215,500 220,450 
                         C 210,380 200,320 190,280 Z" 
                      fill="url(#tendon-shading)" opacity="0.95" />
                      
                <g stroke="#f8fafc" stroke-width="1.5" opacity="0.4" fill="none">
                    <path d="M 190,300 L 190,580" stroke-width="2" />
                    <path d="M 185,350 L 180,575" />
                    <path d="M 195,350 L 200,575" />
                    <path d="M 178,420 L 170,550" />
                    <path d="M 202,420 L 210,550" />
                </g>
            </g>
            
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <ellipse cx="190" cy="595" rx="10" ry="6" fill="var(--accent)" />
        </g>
        
    </svg>`;
