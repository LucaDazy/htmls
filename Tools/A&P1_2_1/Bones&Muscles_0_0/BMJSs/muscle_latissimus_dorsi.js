svgDataStore['muscle_latissimus_dorsi'] = `<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
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
            <g stroke="url(#bone-shading)" stroke-width="12" stroke-linecap="round" fill="none" opacity="0.6">
                <path d="M 210,100 Q 270,110 300,140" />
                <path d="M 210,130 Q 280,140 315,170" />
                <path d="M 210,160 Q 290,170 325,200" />
                <path d="M 210,190 Q 295,200 330,230" />
                <path d="M 210,220 Q 295,230 330,260" />
                <path d="M 210,250 Q 290,260 325,290" />
                <path d="M 210,280 Q 270,290 310,310" />
                <path d="M 190,100 Q 130,110 100,140" />
                <path d="M 190,130 Q 120,140 85,170" />
                <path d="M 190,160 Q 110,170 75,200" />
                <path d="M 190,190 Q 105,200 70,230" />
                <path d="M 190,220 Q 105,230 70,260" />
                <path d="M 190,250 Q 110,260 75,290" />
                <path d="M 190,280 Q 130,290 90,310" />
            </g>

            <path d="M 190,10 L 210,10 L 210,400 L 190,400 Z" fill="url(#bone-shading)" />
            <g stroke="#475569" stroke-width="1.5" opacity="0.6" fill="none">
                <path d="M 190,40 L 210,40" /> <path d="M 190,60 L 210,60" />
                <path d="M 190,80 L 210,80" /> <path d="M 190,100 L 210,100" />
                <path d="M 190,120 L 210,120" /> <path d="M 190,140 L 210,140" />
                <path d="M 190,160 L 210,160" /> <path d="M 190,180 L 210,180" />
                <path d="M 190,200 L 210,200" /> <path d="M 190,220 L 210,220" />
                <path d="M 190,240 L 210,240" /> <path d="M 190,260 L 210,260" />
                <path d="M 190,280 L 210,280" /> <path d="M 190,300 L 210,300" />
                <path d="M 190,320 L 210,320" /> <path d="M 190,340 L 210,340" />
                <path d="M 190,360 L 210,360" /> <path d="M 190,380 L 210,380" />
            </g>

            <path d="M 200,380 C 240,380 290,360 310,330 C 330,360 300,440 260,460 C 230,470 210,460 200,480 Z" fill="url(#bone-shading)" />
            <path d="M 200,380 C 160,380 110,360 90,330 C 70,360 100,440 140,460 C 170,470 190,460 200,480 Z" fill="url(#bone-shading)" />
            <path d="M 190,400 L 210,400 L 205,460 L 195,460 Z" fill="url(#bone-shading)" />

            <path d="M 220,70 C 270,60 310,70 320,100 L 270,210 C 240,150 230,110 220,70 Z" fill="url(#bone-shading)" />
            <path d="M 180,70 C 130,60 90,70 80,100 L 130,210 C 160,150 170,110 180,70 Z" fill="url(#bone-shading)" />

            <path d="M 310,80 C 330,60 350,70 350,90 L 360,260 L 335,260 L 325,110 C 315,115 300,100 310,80 Z" fill="url(#bone-shading)" />
            <path d="M 90,80 C 70,60 50,70 50,90 L 40,260 L 65,260 L 75,110 C 85,115 100,100 90,80 Z" fill="url(#bone-shading)" />
        </g>

        <g id="origin-layer" class="interactive-layer">
            <path d="M 197,180 L 203,180 L 203,400 L 197,400 Z" fill="var(--success)" />
            
            <path d="M 203,398 C 240,395 260,385 275,370 C 270,365 250,380 203,388 Z" fill="var(--success)" />
            <path d="M 197,398 C 160,395 140,385 125,370 C 130,365 150,380 197,388 Z" fill="var(--success)" />
            
            <circle cx="280" cy="300" r="4" fill="var(--success)" />
            <circle cx="288" cy="320" r="4" fill="var(--success)" />
            <circle cx="295" cy="340" r="4" fill="var(--success)" />
            <circle cx="120" cy="300" r="4" fill="var(--success)" />
            <circle cx="112" cy="320" r="4" fill="var(--success)" />
            <circle cx="105" cy="340" r="4" fill="var(--success)" />
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <ellipse cx="312" cy="120" rx="3" ry="8" transform="rotate(30 312 120)" fill="var(--accent)" />
            <ellipse cx="88" cy="120" rx="3" ry="8" transform="rotate(-30 88 120)" fill="var(--accent)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-tendon">
                <path d="M 200,180 Q 220,230 240,280 Q 255,320 270,360 C 240,380 210,395 200,400 C 190,395 160,380 130,360 Q 145,320 160,280 Q 180,230 200,180 Z" fill="url(#tendon-shading)" opacity="0.9" />
                
                <path d="M 305,140 C 310,135 315,130 310,120 L 305,125 C 300,130 295,135 305,140 Z" fill="url(#tendon-shading)" opacity="0.9" />
                <path d="M 95,140 C 90,135 85,130 90,120 L 95,125 C 100,130 105,135 95,140 Z" fill="url(#tendon-shading)" opacity="0.9" />
                
                <g stroke="#f8fafc" stroke-width="1.5" opacity="0.25" fill="none">
                    <path d="M 200,180 L 200,400" />
                    <path d="M 200,200 L 225,240" /> <path d="M 200,200 L 175,240" />
                    <path d="M 200,220 L 235,270" /> <path d="M 200,220 L 165,270" />
                    <path d="M 200,240 L 245,300" /> <path d="M 200,240 L 155,300" />
                    <path d="M 200,260 L 252,325" /> <path d="M 200,260 L 148,325" />
                    <path d="M 200,280 L 260,345" /> <path d="M 200,280 L 140,345" />
                    <path d="M 200,300 L 265,355" /> <path d="M 200,300 L 135,355" />
                </g>
            </g>

            <g id="action-belly">
                <path d="M 200,180 C 230,195 250,210 270,220 C 285,180 295,155 305,140 C 325,180 335,250 310,320 C 295,340 280,355 270,360 Q 255,320 240,280 Q 220,230 200,180 Z" fill="url(#muscle-shading)" />
                
                <path d="M 200,180 C 170,195 150,210 130,220 C 115,180 105,155 95,140 C 75,180 65,250 90,320 C 105,340 120,355 130,360 Q 145,320 160,280 Q 180,230 200,180 Z" fill="url(#muscle-shading)" />

                <g stroke="#450a0a" stroke-width="1.5" opacity="0.4" fill="none">
                    <path d="M 300,145 Q 285,180 270,220" />
                    <path d="M 305,155 Q 295,210 240,280" />
                    <path d="M 308,165 Q 305,240 250,310" />
                    <path d="M 312,180 Q 315,260 265,340" />
                    <path d="M 315,200 Q 320,270 280,350" />
                    <path d="M 100,145 Q 115,180 130,220" />
                    <path d="M 95,155 Q 105,210 160,280" />
                    <path d="M 92,165 Q 95,240 150,310" />
                    <path d="M 88,180 Q 85,260 135,340" />
                    <path d="M 85,200 Q 80,270 120,350" />
                </g>
            </g>
            
        </g>
    </svg>`;
