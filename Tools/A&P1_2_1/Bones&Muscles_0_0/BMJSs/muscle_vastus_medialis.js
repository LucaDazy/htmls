svgDataStore['muscle_vastus_medialis'] = `<svg viewBox="0 50 260 650" xmlns="http://www.w3.org/2000/svg">
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
            <path d="M 120,60 C 90,50 60,70 50,110 C 60,130 90,130 100,100 C 110,90 120,80 120,60 Z" />
            
            <path d="M 145,510 
                     C 140,520 135,530 125,530 
                     C 105,520 105,480 125,470 
                     C 115,350 120,250 130,145 
                     L 95,125 
                     C 80,135 70,115 80,95 
                     C 90,75 110,85 125,100 
                     C 135,80 160,90 165,115 
                     C 170,140 165,160 160,160 
                     C 170,250 175,350 165,470 
                     C 185,480 185,520 165,530 
                     C 155,530 150,520 145,510 Z" />
                     
            <path d="M 135,515 C 155,510 160,530 145,545 C 130,530 130,520 135,515 Z" />
            
            <path d="M 115,540 C 145,535 175,540 175,550 C 175,560 165,570 160,580 L 160,680 L 130,680 L 130,580 C 125,570 115,560 115,550 Z" />
            
            <path d="M 175,555 C 190,550 190,570 180,580 L 180,680 L 170,680 L 170,580 Z" />
        </g>
        
        <g id="origin-layer" class="interactive-layer">
            <path d="M 128, 200 C 118, 280 116, 380 125, 465 L 129, 465 C 120, 380 122, 280 132, 200 Z" fill="var(--success)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            <g id="action-belly">
                <path d="M 128, 200 C 90, 280 60, 380 65, 450 C 70, 490 110, 510 135, 515 C 135, 450 137, 350 132, 200 Z" fill="url(#muscle-shading)" />
                
                <g stroke="#450a0a" stroke-width="1.2" opacity="0.4" fill="none">
                    <path d="M 115, 250 Q 120, 260 132, 270" />
                    <path d="M 95, 300 Q 110, 320 134, 320" />
                    <path d="M 80, 350 Q 105, 370 135, 365" />
                    <path d="M 70, 400 Q 100, 415 136, 405" />
                    <path d="M 68, 440 Q 100, 460 135, 450" />
                    <path d="M 75, 480 Q 105, 495 135, 490" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 135, 440 C 137, 480 138, 510 135, 515 C 145, 515 155, 525 150, 540 L 148, 580 L 142, 580 L 140, 540 C 132, 530 130, 520 135, 515 C 132, 510 133, 480 131, 440 Z" fill="url(#tendon-shading)" />
                
                <path d="M 146, 542 L 147, 575" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" opacity="0.4" />
                <path d="M 143, 542 L 144, 575" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" opacity="0.4" />
                <path d="M 134, 460 C 136, 480 137, 500 136, 515" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" opacity="0.2" />
            </g>
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <circle cx="145" cy="580" r="5" fill="var(--accent)" />
        </g>
    </svg>`;
