svgDataStore['muscle_diaphragm'] = `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
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
            <rect x="235" y="270" width="30" height="25" rx="3" />
            <rect x="233" y="300" width="34" height="28" rx="3" />
            <rect x="230" y="333" width="40" height="32" rx="4" />
            <rect x="228" y="370" width="44" height="35" rx="4" />
            <rect x="225" y="410" width="50" height="38" rx="5" />
            <rect x="222" y="453" width="56" height="25" rx="5" />

            <path d="M 250,55 C 130,65 30,180 20,330 L 45,335 C 55,190 145,85 250,80 C 355,85 445,190 455,335 L 480,330 C 470,180 370,65 250,55 Z" />
            
            <path d="M 230,285 C 160,295 90,335 40,375 L 45,390 C 95,350 160,310 230,300 Z" />
            <path d="M 270,285 C 340,295 410,335 460,375 L 455,390 C 405,350 340,310 270,300 Z" />
            <path d="M 230,315 C 180,320 130,350 90,380 L 95,395 C 135,365 180,335 230,330 Z" />
            <path d="M 270,315 C 320,320 370,350 410,380 L 405,395 C 365,365 320,335 270,330 Z" />
            
            <polygon points="242,30 258,30 250,60" />
        </g>

        <g id="origin-layer" class="interactive-layer">
            <path d="M 250,70 C 150,80 70,180 50,320" fill="none" stroke="var(--success)" stroke-width="8" stroke-linecap="round" />
            <path d="M 250,70 C 350,80 430,180 450,320" fill="none" stroke="var(--success)" stroke-width="8" stroke-linecap="round" />
            
            <line x1="235" y1="365" x2="235" y2="400" stroke="var(--success)" stroke-width="12" stroke-linecap="round" />
            <line x1="265" y1="365" x2="265" y2="435" stroke="var(--success)" stroke-width="14" stroke-linecap="round" />
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <path d="M 250,140 C 200,130 150,160 140,210 C 130,260 180,260 210,240 C 230,260 270,260 290,240 C 320,260 370,260 360,210 C 350,160 300,130 250,140 Z" 
                  fill="none" stroke="var(--accent)" stroke-width="6" opacity="0.9" stroke-linejoin="round" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-belly">
                <path d="M 250,70 
                         C 150,80 70,180 50,320 
                         C 90,360 160,370 200,350 
                         C 215,340 220,360 225,380 
                         L 225,410 L 245,410 L 245,340 
                         C 250,330 255,330 255,340 
                         L 255,445 L 275,445 L 275,370 
                         C 280,360 290,340 300,350 
                         C 340,370 410,360 450,320 
                         C 430,180 350,80 250,70 Z" 
                      fill="url(#muscle-shading)" />
                
                <ellipse cx="250" cy="275" rx="14" ry="20" fill="var(--bg-color)" opacity="0.9" />
                <path d="M 250,255 C 265,255 265,295 250,295 C 235,295 235,255 250,255 Z" fill="none" stroke="#ef4444" stroke-width="2" opacity="0.5" />

                <ellipse cx="250" cy="335" rx="16" ry="16" fill="var(--bg-color)" opacity="0.9" />
                
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.5" fill="none">
                    <path d="M 250,140 L 250,70" />
                    <path d="M 230,145 L 210,75" />
                    <path d="M 270,145 L 290,75" />
                    
                    <path d="M 190,165 Q 150,140 120,105" />
                    <path d="M 160,180 Q 110,160 80,140" />
                    <path d="M 145,200 Q 90,180 60,180" />
                    <path d="M 140,220 Q 80,220 55,240" />
                    <path d="M 150,240 Q 90,270 65,300" />
                    <path d="M 165,255 Q 110,300 80,330" />
                    
                    <path d="M 310,165 Q 350,140 380,105" />
                    <path d="M 340,180 Q 390,160 420,140" />
                    <path d="M 355,200 Q 410,180 440,180" />
                    <path d="M 360,220 Q 420,220 445,240" />
                    <path d="M 350,240 Q 410,270 435,300" />
                    <path d="M 335,255 Q 390,300 420,330" />
                    
                    <path d="M 180,250 Q 150,300 130,340" />
                    <path d="M 210,250 Q 180,310 170,355" />
                    
                    <path d="M 320,250 Q 350,300 370,340" />
                    <path d="M 290,250 Q 320,310 330,355" />
                    
                    <path d="M 240,255 C 225,270 225,290 240,300 L 265,390 L 265,440" />
                    <path d="M 260,255 C 275,270 275,290 260,300 L 270,380 L 273,440" />
                    <path d="M 230,300 L 230,400" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 250,140 C 200,130 150,160 140,210 C 130,260 180,260 210,240 C 230,260 270,260 290,240 C 320,260 370,260 360,210 C 350,160 300,130 250,140 Z" 
                      fill="url(#tendon-shading)" opacity="0.9" />
                      
                <ellipse cx="275" cy="205" rx="16" ry="13" fill="var(--bg-color)" opacity="0.9" />
                <ellipse cx="275" cy="205" rx="18" ry="15" fill="none" stroke="#f8fafc" stroke-width="2" opacity="0.6" />
                
                <g stroke="#f8fafc" stroke-width="1.5" opacity="0.5" fill="none">
                    <path d="M 250,150 Q 250,180 250,220" />
                    <path d="M 230,160 Q 200,180 160,210" />
                    <path d="M 270,160 Q 300,180 340,210" />
                    <path d="M 210,210 Q 180,240 160,240" />
                    <path d="M 290,210 Q 320,240 340,240" />
                    <path d="M 235,230 Q 250,245 265,230" />
                </g>
            </g>
            
        </g>
    </svg>`;
