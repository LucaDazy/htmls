svgDataStore['muscle_rectus_femoris'] = `<svg viewBox="0 0 250 700" xmlns="http://www.w3.org/2000/svg">
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
            <path d="M 45,50 C 70,15 130,10 160,60 C 180,95 190,140 180,160 C 170,180 140,210 120,180 C 110,165 95,145 95,125 C 75,120 55,105 60,95 C 65,85 45,65 45,50 Z" />
            
            <path d="M 100,115 C 115,110 120,125 110,140 C 105,150 100,160 100,180 L 130,480 C 140,500 145,510 140,520 L 95,520 C 90,510 95,500 105,480 L 80,180 C 75,160 50,150 55,130 C 60,115 85,115 100,115 Z" />
            
            <path d="M 108,510 C 128,505 138,515 120,532 C 105,525 100,515 108,510 Z" />
            
            <path d="M 90,535 C 120,530 140,530 150,540 C 148,560 140,590 140,680 L 115,680 L 115,600 C 115,580 100,560 90,550 Z" />
            
            <path d="M 75,545 C 88,540 93,560 88,570 L 88,680 L 75,680 Z" />
        </g>
        
        <g id="origin-layer" class="interactive-layer">
            <circle cx="63" cy="92" r="5" fill="var(--success)" />
            
            <path d="M 95,110 C 102,108 108,112 105,118 C 98,120 92,116 95,110 Z" fill="var(--success)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            <g id="action-belly">
                <path d="M 88,160 C 50,280 65,380 108,470 L 128,470 C 148,380 138,280 98,160 Z" fill="url(#muscle-shading)" />
                
                <g stroke="#450a0a" stroke-width="1.2" opacity="0.4" fill="none">
                    <path d="M 93,160 C 103,280 113,380 118,470" />
                    
                    <path d="M 95,190 Q 82,210 75,230" />
                    <path d="M 98,240 Q 82,270 70,290" />
                    <path d="M 102,300 Q 85,330 73,350" />
                    <path d="M 107,360 Q 95,390 85,410" />
                    <path d="M 112,420 Q 105,440 98,450" />
                    
                    <path d="M 95,190 Q 105,210 115,220" />
                    <path d="M 98,240 Q 115,260 125,280" />
                    <path d="M 102,300 Q 120,320 135,340" />
                    <path d="M 107,360 Q 125,380 138,400" />
                    <path d="M 112,420 Q 125,440 130,450" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 61,90 C 70,95 80,120 88,160 L 98,160 C 100,130 102,115 105,113 L 95,110 C 95,120 94,140 93,155 L 90,155 C 80,130 68,100 61,90 Z" fill="url(#tendon-shading)" />
                
                <path d="M 108,470 C 108,490 108,505 110,512 L 126,512 C 128,505 128,490 128,470 Z" fill="url(#tendon-shading)" />
                
                <path d="M 112,528 C 114,550 118,575 118,575 L 126,575 C 126,550 124,528 122,528 Z" fill="url(#tendon-shading)" />
                
                <path d="M 113,470 C 113,490 113,505 114,510" fill="none" stroke="#ffffff" stroke-width="1.5" opacity="0.3" stroke-linecap="round" />
                <path d="M 117,532 C 119,550 121,570 121,570" fill="none" stroke="#ffffff" stroke-width="1.5" opacity="0.3" stroke-linecap="round" />
            </g>
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <circle cx="122" cy="580" r="6" fill="var(--accent)" />
        </g>
    </svg>`;
