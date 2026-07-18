svgDataStore['muscle_gluteus_maximus'] = `<svg viewBox="0 0 450 600" xmlns="http://www.w3.org/2000/svg">
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
            <path d="M 100, 110 C 130, 130 140, 200 130, 280 C 120, 320 110, 340 100, 350 C 90, 330 90, 280 100, 200 C 110, 150 100, 120 100, 110 Z" />
            <path d="M 100, 350 C 110, 360 115, 380 105, 390 C 95, 380 90, 360 100, 350 Z" /> <path d="M 120, 110 C 180, 90 250, 110 280, 150 C 300, 180 300, 200 290, 230 C 270, 260 250, 260 230, 280 C 200, 300 180, 340 150, 350 C 130, 340 135, 300 140, 280 C 150, 230 140, 180 120, 110 Z" />
            <ellipse cx="165" cy="340" rx="15" ry="25" transform="rotate(20 165 340)" fill="var(--bg-color)" opacity="0.3" />
            <path d="M 175, 320 C 185, 330 185, 360 170, 370" stroke="#475569" stroke-width="2" fill="none" opacity="0.6"/>

            <path d="M 220, 260 C 250, 240 280, 240 300, 250 C 320, 260 330, 280 340, 320 C 345, 360 335, 400 325, 450 L 310, 580 L 270, 580 L 285, 450 C 295, 400 290, 350 270, 330 L 260, 280 C 240, 280 230, 270 220, 260 Z" />
            <path d="M 290, 250 C 310, 245 330, 260 335, 290 C 340, 320 325, 340 310, 340" fill="none" stroke="#475569" stroke-width="2.5" opacity="0.6" />
            <path d="M 282, 360 L 290, 580" fill="none" stroke="#475569" stroke-width="2" opacity="0.5" />
        </g>

        <g id="origin-layer" class="interactive-layer">
            <path d="M 130, 115 C 160, 105 200, 115 220, 130 L 210, 140 C 185, 125 155, 120 135, 125 Z" fill="var(--success)" />
            
            <path d="M 135, 160 C 145, 200 140, 280 120, 360 L 110, 355 C 130, 280 135, 200 125, 160 Z" fill="var(--success)" />
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <path d="M 275, 345 L 290, 340 L 295, 380 L 280, 385 Z" fill="var(--accent)" />
            
            <path d="M 325, 310 C 330, 330 330, 350 325, 370 L 315, 370 C 320, 350 320, 330 315, 310 Z" fill="var(--accent)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-tendon">
                <path d="M 130, 115 C 180, 95 240, 110 280, 150 C 285, 165 290, 185 290, 200 C 250, 150 190, 120 140, 120 Z" fill="url(#tendon-shading)" opacity="0.6" />
                
                <path d="M 290, 200 C 315, 240 330, 290 330, 350 C 328, 430 320, 500 315, 580 L 295, 580 C 300, 500 310, 430 310, 350 C 310, 300 295, 260 275, 220 Z" fill="url(#tendon-shading)" opacity="0.85" />
                
                <g stroke="#f8fafc" stroke-width="1.5" opacity="0.4" fill="none">
                    <path d="M 300, 240 C 315, 290 320, 350 310, 570" />
                    <path d="M 310, 280 C 320, 320 325, 380 320, 570" />
                    <path d="M 285, 230 C 305, 280 310, 340 300, 570" />
                </g>
            </g>

            <g id="action-belly">
                <path d="M 140, 120 
                         C 190, 120 250, 150 290, 200 
                         C 315, 240 330, 290 330, 350 
                         C 300, 380 250, 410 180, 390 
                         C 150, 380 130, 350 120, 320 
                         C 140, 270 150, 200 140, 120 Z" 
                      fill="url(#muscle-shading)" />
                      
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.45" fill="none">
                    <path d="M 145, 140 Q 220, 180 295, 235" />
                    <path d="M 145, 170 Q 230, 220 310, 285" />
                    <path d="M 145, 200 Q 235, 260 320, 320" />
                    <path d="M 140, 240 Q 225, 300 315, 350" />
                    <path d="M 135, 280 Q 200, 330 280, 375" />
                    <path d="M 125, 315 Q 175, 355 230, 390" />
                    
                    <path d="M 130, 340 C 155, 385 200, 405 260, 385" stroke-width="2.5" opacity="0.6" stroke-linecap="round" />
                </g>
            </g>
            
        </g>
    </svg>`;
