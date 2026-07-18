svgDataStore['muscle_sternocleidomastoid'] = `<svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
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
            <path d="M 150,220 C 100,210 80,140 110,80 C 140,20 220,20 260,70 C 280,100 280,120 270,140 C 280,150 280,170 260,180 L 230,180 L 200,220 C 180,210 160,210 150,220 Z" />
            
            <path d="M 230,180 L 260,180 C 280,200 290,240 280,280 C 270,300 240,310 220,280 L 200,220 Z" />
            
            <path d="M 150,220 C 150,240 170,240 180,220 Z" />
            
            <circle cx="185" cy="195" r="5" fill="var(--bg-color)" opacity="0.6"/>
            
            <path d="M 160,230 C 150,280 140,360 140,430 L 190,440 C 200,360 210,280 200,230 Z" />
            
            <path d="M 60,450 C 150,430 220,440 270,450 C 280,452 280,468 270,470 C 220,460 150,450 60,470 Z" />
            
            <path d="M 270,450 C 290,440 305,440 300,470 C 295,500 290,520 280,520 L 270,470 Z" />
            
            <path d="M 190,440 C 220,460 250,460 280,470 L 270,490 C 240,480 210,480 180,450 Z" />
            <path d="M 270,400 C 280,420 280,440 270,450" stroke="#475569" stroke-width="2" fill="none" opacity="0.5"/>
        </g>

        <g id="origin-layer" class="interactive-layer">
            <path d="M 275,465 L 295,455 L 290,470 L 270,480 Z" fill="var(--success)" />
            <path d="M 220,450 L 250,458 L 245,465 L 215,458 Z" fill="var(--success)" />
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <path d="M 165,230 L 185,225 C 180,240 170,240 165,230 Z" fill="var(--accent)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-belly">
                <path d="M 165,230 C 175,310 195,390 220,450 L 250,458 C 230,380 200,300 180,230 Z" fill="url(#muscle-shading)" />
                
                <path d="M 185,225 C 205,300 235,380 250,458" stroke="#110d12" stroke-width="6" opacity="0.4" fill="none" />
                
                <path d="M 175,230 C 200,310 250,400 275,465 L 295,455 C 255,370 200,280 185,225 Z" fill="url(#muscle-shading)" />

                <g stroke="#450a0a" stroke-width="1.5" opacity="0.5" fill="none">
                    <path d="M 170,235 Q 185,310 225,450" />
                    <path d="M 175,232 Q 200,320 240,455" />
                    <path d="M 180,235 Q 225,330 280,460" />
                    <path d="M 183,230 Q 235,340 290,457" />
                    <path d="M 186,225 Q 245,350 285,450" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 220,450 L 250,458 C 245,430 230,410 222,430 Z" fill="url(#tendon-shading)" opacity="0.8"/>
                <path d="M 225,450 C 230,435 235,420 240,410" stroke="#f8fafc" stroke-width="1" fill="none" opacity="0.3" />
                
                <path d="M 275,465 L 295,455 C 290,420 275,400 270,420 Z" fill="url(#tendon-shading)" opacity="0.8"/>
                <path d="M 280,460 C 285,440 285,420 280,405" stroke="#f8fafc" stroke-width="1" fill="none" opacity="0.3" />
                
                <path d="M 165,230 L 185,225 C 190,245 180,255 175,245 Z" fill="url(#tendon-shading)" opacity="0.8"/>
            </g>
            
        </g>
    </svg>`;
