svgDataStore['muscle_zygomaticus'] = `<svg viewBox="20 20 360 460" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="bone-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#94a3b8" /><stop offset="25%" stop-color="#f1f5f9" /><stop offset="75%" stop-color="#cbd5e1" /><stop offset="100%" stop-color="#475569" /></linearGradient>
            <linearGradient id="muscle-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#7f1d1d" /><stop offset="35%" stop-color="#ef4444" /><stop offset="80%" stop-color="#b91c1c" /><stop offset="100%" stop-color="#450a0a" /></linearGradient>
            <linearGradient id="tendon-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#64748b" /><stop offset="50%" stop-color="#f8fafc" /><stop offset="100%" stop-color="#334155" /></linearGradient>
            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
        </defs>
        
        <g class="svg-bg" fill="url(#bone-shading)" opacity="0.4">
            <path d="M 200,40 C 90,40 80,160 90,240 C 95,280 110,320 120,350 C 130,400 160,430 200,430 C 240,430 270,400 280,350 C 290,320 305,280 310,240 C 320,160 310,40 200,40 Z"/>
            
            <path d="M 135,210 C 135,190 165,190 175,210 C 185,230 160,250 145,240 C 135,235 135,220 135,210 Z" fill="var(--bg-color)" />
            <path d="M 265,210 C 265,190 235,190 225,210 C 215,230 240,250 255,240 C 265,235 265,220 265,210 Z" fill="var(--bg-color)" />
            
            <path d="M 200,230 L 185,280 C 185,290 215,290 215,280 Z" fill="var(--bg-color)" />
            
            <path d="M 165,335 Q 200,320 235,335 Q 200,350 165,335 Z" fill="var(--bg-color)" />
            
            <path d="M 110,240 Q 90,200 100,160" fill="none" stroke="var(--bg-color)" stroke-width="2" />
            <path d="M 290,240 Q 310,200 300,160" fill="none" stroke="var(--bg-color)" stroke-width="2" />
        </g>
        
        <g id="origin-layer" class="interactive-layer">
            <path d="M 110,250 C 120,240 135,245 135,255 C 125,265 110,260 110,250 Z" fill="var(--success)" />
            <path d="M 290,250 C 280,240 265,245 265,255 C 275,265 290,260 290,250 Z" fill="var(--success)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            <g id="action-belly">
                <path d="M 110,255 Q 135,300 165,340 Q 155,348 105,265 Z" fill="url(#muscle-shading)" />
                <path d="M 125,245 Q 150,285 168,328 Q 160,335 118,252 Z" fill="url(#muscle-shading)" />
                
                <path d="M 290,255 Q 265,300 235,340 Q 245,348 295,265 Z" fill="url(#muscle-shading)" />
                <path d="M 275,245 Q 250,285 232,328 Q 240,335 282,252 Z" fill="url(#muscle-shading)" />
            </g>
            
            <g id="action-tendon">
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.4" fill="none">
                    <path d="M 112,260 Q 135,300 160,338" />
                    <path d="M 122,250 Q 150,290 165,330" />
                </g>
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.4" fill="none">
                    <path d="M 288,260 Q 265,300 240,338" />
                    <path d="M 278,250 Q 250,290 235,330" />
                </g>
            </g>
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <path d="M 160,330 C 170,325 175,335 170,345 C 160,350 155,340 160,330 Z" fill="var(--accent)" />
            <path d="M 240,330 C 230,325 225,335 230,345 C 240,350 245,340 240,330 Z" fill="var(--accent)" />
        </g>
    </svg>`;
