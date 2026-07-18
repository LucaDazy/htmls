svgDataStore['muscle_gastrocnemius'] = `<svg viewBox="0 0 300 700" xmlns="http://www.w3.org/2000/svg">
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
            <path d="M 130,20 C 130,60 120,90 120,115 C 115,135 135,145 145,130 C 148,125 152,125 155,130 C 165,145 185,135 180,115 C 180,90 170,60 170,20 Z" />
            
            <path d="M 145,140 C 175,135 195,145 185,165 C 180,175 165,220 165,350 L 165,560 C 175,570 190,580 185,590 C 175,600 155,580 150,570 Z" />
            
            <path d="M 125,140 C 110,135 95,145 105,165 C 110,175 125,220 125,350 L 125,560 C 115,570 95,580 100,590 C 110,600 130,580 135,570 Z" />
            
            <path d="M 115,580 C 100,610 110,650 150,650 C 190,650 200,610 185,580 C 170,595 130,595 115,580 Z" />
        </g>
        
        <g id="origin-layer" class="interactive-layer">
            <path d="M 115,115 C 110,125 125,135 130,125 C 130,115 120,110 115,115 Z" fill="var(--success)" />
            <path d="M 185,115 C 190,125 175,135 170,125 C 170,115 180,110 185,115 Z" fill="var(--success)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            <g id="action-belly">
                <path d="M 125,120 C 70,140 60,260 110,330 C 125,355 145,390 150,390 C 155,390 175,370 190,345 C 240,260 230,140 175,120 C 160,110 155,150 150,165 C 145,150 140,110 125,120 Z" fill="url(#muscle-shading)" />
                
                <g stroke="#450a0a" stroke-width="1.2" opacity="0.4" fill="none">
                    <path d="M 145,180 Q 110,190 90,210" />
                    <path d="M 147,220 Q 100,240 85,260" />
                    <path d="M 148,260 Q 110,290 90,300" />
                    <path d="M 149,300 Q 120,320 110,330" />
                    <path d="M 155,180 Q 190,190 210,210" />
                    <path d="M 153,220 Q 200,240 215,260" />
                    <path d="M 152,260 Q 190,290 210,300" />
                    <path d="M 151,300 Q 180,320 190,330" />
                    <path d="M 150,165 Q 150,280 150,390" stroke-width="1.5" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 115,310 C 130,350 142,390 142,430 C 140,490 135,570 135,620 C 145,630 155,630 165,620 C 165,570 160,490 158,430 C 158,390 170,350 185,315 C 170,360 155,390 150,390 C 145,390 130,360 115,310 Z" fill="url(#tendon-shading)" />
                
                <path d="M 145,430 C 145,490 142,570 142,610" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.3" />
                <path d="M 155,430 C 155,490 158,570 158,610" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.3" />
            </g>
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <ellipse cx="150" cy="625" rx="12" ry="8" fill="var(--accent)" />
        </g>
    </svg>`;
