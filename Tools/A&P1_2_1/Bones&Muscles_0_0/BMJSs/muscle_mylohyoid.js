svgDataStore['muscle_mylohyoid'] = `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
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
            <path d="M 160,350 L 240,350 L 230,390 L 170,390 Z" fill="url(#bone-shading)" opacity="0.3" />

            <path d="M 40,320 C 30,120 100,20 200,20 C 300,20 370,120 360,320 L 310,320 C 320,150 260,70 200,70 C 140,70 80,150 90,320 Z" fill="url(#bone-shading)" />
            
            <path d="M 180,40 C 200,45 220,45 220,40" fill="none" stroke="#475569" stroke-width="2" opacity="0.5" />

            <path d="M 150,330 C 170,345 230,345 250,330 C 255,320 270,290 275,260 L 265,255 C 260,285 245,310 235,320 C 220,330 180,330 165,320 C 155,310 140,285 135,255 L 125,260 C 130,290 145,320 150,330 Z" fill="url(#bone-shading)" />
        </g>

        <g id="origin-layer" class="interactive-layer">
            <path d="M 90,280 C 80,150 140,70 200,70 C 260,70 320,150 310,280 L 303,280 C 313,155 255,77 200,77 C 145,77 87,155 97,280 Z" fill="var(--success)" />
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <path d="M 150,330 C 170,345 230,345 250,330 L 245,335 C 230,348 170,348 155,335 Z" fill="var(--accent)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-belly">
                <path d="M 200,77 C 145,77 87,155 97,280 L 150,330 C 170,345 185,348 198,348 L 198,77 Z" fill="url(#muscle-shading)" />
                
                <path d="M 200,77 C 255,77 313,155 303,280 L 250,330 C 230,345 215,348 202,348 L 202,77 Z" fill="url(#muscle-shading)" />

                <g stroke="#450a0a" stroke-width="1.5" opacity="0.45" fill="none">
                    <path d="M 93,250 Q 145,265 198,280" />
                    <path d="M 87,210 Q 140,230 198,245" />
                    <path d="M 85,170 Q 140,195 198,210" />
                    <path d="M 90,130 Q 140,155 198,175" />
                    <path d="M 105,95 Q 150,120 198,140" />
                    <path d="M 130,80 Q 160,100 198,110" />
                    
                    <path d="M 307,250 Q 255,265 202,280" />
                    <path d="M 313,210 Q 260,230 202,245" />
                    <path d="M 315,170 Q 260,195 202,210" />
                    <path d="M 310,130 Q 260,155 202,175" />
                    <path d="M 295,95 Q 250,120 202,140" />
                    <path d="M 270,80 Q 240,100 202,110" />
                </g>
            </g>
            
            <g id="action-tendon">
                <rect x="198" y="77" width="4" height="271" fill="url(#tendon-shading)" opacity="0.8" />
                
                <g stroke="#f8fafc" stroke-width="1" opacity="0.5" fill="none">
                    <line x1="195" y1="110" x2="205" y2="112" />
                    <line x1="196" y1="160" x2="204" y2="158" />
                    <line x1="195" y1="210" x2="205" y2="213" />
                    <line x1="196" y1="260" x2="204" y2="258" />
                    <line x1="195" y1="310" x2="205" y2="312" />
                </g>
            </g>
            
        </g>
    </svg>`;
