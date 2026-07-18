svgDataStore['muscle_platysma'] = `<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
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
            <path d="M 70,120 C 70,180 120,230 200,230 C 280,230 330,180 330,120 L 290,120 C 290,160 250,190 200,190 C 150,190 110,160 110,120 Z" />
            
            <path d="M 180,215 C 200,230 220,215 220,215 C 210,235 190,235 180,215 Z" fill="var(--bg-color)" opacity="0.3" />

            <rect x="175" y="180" width="50" height="180" rx="10" />
            
            <path d="M 185,240 L 215,240 L 220,270 L 200,290 L 180,270 Z" fill="#94a3b8" opacity="0.6" />
            
            <path d="M 30,360 Q 120,330 190,360 C 190,360 195,350 185,340 Q 120,310 20,340 Z" />
            <path d="M 370,360 Q 280,330 210,360 C 210,360 205,350 215,340 Q 280,310 380,340 Z" />
            
            <path d="M 185,360 L 215,360 L 205,420 L 195,420 Z" />
            
            <path d="M 40,380 C 100,370 150,380 190,410 L 185,460 C 130,420 80,420 30,430 Z" opacity="0.5" />
            <path d="M 360,380 C 300,370 250,380 210,410 L 215,460 C 270,420 320,420 370,430 Z" opacity="0.5" />
        </g>

        <g id="origin-layer" class="interactive-layer">
            <path d="M 40,385 C 80,375 130,375 180,395 L 175,415 C 120,395 70,395 35,405 Z" fill="var(--success)" />
            <path d="M 360,385 C 320,375 270,375 220,395 L 225,415 C 280,395 330,395 365,405 Z" fill="var(--success)" />
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <path d="M 95,160 C 125,200 160,215 200,215 L 200,205 C 165,205 135,190 105,150 Z" fill="var(--accent)" />
            <path d="M 305,160 C 275,200 240,215 200,215 L 200,205 C 235,205 265,190 295,150 Z" fill="var(--accent)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-belly">
                <path d="M 40,385 
                         C 60,265 80,185 95,160 
                         C 125,200 160,215 200,215 
                         C 180,270 160,330 180,395 
                         C 130,375 80,375 40,385 Z" 
                      fill="url(#muscle-shading)" />
                      
                <path d="M 360,385 
                         C 340,265 320,185 305,160 
                         C 275,200 240,215 200,215 
                         C 220,270 240,330 220,395 
                         C 270,375 320,375 360,385 Z" 
                      fill="url(#muscle-shading)" />

                <g stroke="#450a0a" stroke-width="1.5" opacity="0.45" fill="none">
                    <path d="M 55,385 Q 75,280 110,180" />
                    <path d="M 75,380 Q 95,280 130,200" />
                    <path d="M 100,380 Q 115,290 150,210" />
                    <path d="M 125,380 Q 135,300 170,215" />
                    <path d="M 150,385 Q 155,310 190,215" />
                    
                    <path d="M 345,385 Q 325,280 290,180" />
                    <path d="M 325,380 Q 305,280 270,200" />
                    <path d="M 300,380 Q 285,290 250,210" />
                    <path d="M 275,380 Q 265,300 230,215" />
                    <path d="M 250,385 Q 245,310 210,215" />
                </g>
                
                <path d="M 200,215 C 180,270 160,330 180,395 C 200,410 200,410 220,395 C 240,330 220,270 200,215 Z" fill="var(--bg-color)" opacity="0.15" />
            </g>
            
            <g id="action-tendon">
                <path d="M 40,385 C 80,375 130,375 180,395 C 178,390 130,370 40,380 Z" fill="url(#tendon-shading)" opacity="0.7" />
                <path d="M 360,385 C 320,375 270,375 220,395 C 222,390 270,370 360,380 Z" fill="url(#tendon-shading)" opacity="0.7" />
                
                <path d="M 95,160 C 125,195 160,210 200,210 C 160,205 125,190 100,165 Z" fill="url(#tendon-shading)" opacity="0.6" />
                <path d="M 305,160 C 275,195 240,210 200,210 C 240,205 275,190 300,165 Z" fill="url(#tendon-shading)" opacity="0.6" />
                
                <g stroke="#f8fafc" stroke-width="1.5" opacity="0.4" fill="none">
                    <path d="M 105,165 L 115,185" />
                    <path d="M 130,190 L 140,205" />
                    <path d="M 160,205 L 170,215" />
                    <path d="M 295,165 L 285,185" />
                    <path d="M 270,190 L 260,205" />
                    <path d="M 240,205 L 230,215" />
                </g>
            </g>
            
        </g>
    </svg>`;
