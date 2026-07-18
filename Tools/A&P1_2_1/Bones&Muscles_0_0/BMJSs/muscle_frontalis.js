svgDataStore['muscle_frontalis'] = `<svg viewBox="20 20 360 460" xmlns="http://www.w3.org/2000/svg">
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
            
            <path d="M 160,330 Q 200,340 240,330" fill="none" stroke="var(--bg-color)" stroke-width="4" />
            <path d="M 165,350 Q 200,360 235,350" fill="none" stroke="var(--bg-color)" stroke-width="3" />
            
            <path d="M 110,240 Q 90,200 100,160" fill="none" stroke="var(--bg-color)" stroke-width="2" />
            <path d="M 290,240 Q 310,200 300,160" fill="none" stroke="var(--bg-color)" stroke-width="2" />
        </g>
        
        <g id="origin-layer" class="interactive-layer">
            <path d="M 115,105 Q 155,85 195,105 L 195,90 Q 155,70 115,90 Z" fill="var(--success)" />
            <path d="M 285,105 Q 245,85 205,105 L 205,90 Q 245,70 285,90 Z" fill="var(--success)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            <g id="action-belly">
                <path d="M 115,105 Q 155,85 195,105 C 190,135 190,160 185,185 Q 155,175 125,200 C 120,165 115,135 115,105 Z" fill="url(#muscle-shading)" />
                <path d="M 285,105 Q 245,85 205,105 C 210,135 210,160 215,185 Q 245,175 275,200 C 280,165 285,135 285,105 Z" fill="url(#muscle-shading)" />
            </g>
            
            <g id="action-tendon">
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.5" fill="none">
                    <path d="M 130,105 Q 135,150 140,190" />
                    <path d="M 145,95 Q 150,140 155,180" />
                    <path d="M 160,92 Q 165,135 170,180" />
                    <path d="M 175,95 Q 180,135 180,185" />
                </g>
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.5" fill="none">
                    <path d="M 270,105 Q 265,150 260,190" />
                    <path d="M 255,95 Q 250,140 245,180" />
                    <path d="M 240,92 Q 235,135 230,180" />
                    <path d="M 225,95 Q 220,135 220,185" />
                </g>
                <path d="M 115,105 Q 155,85 195,105" fill="none" stroke="url(#tendon-shading)" stroke-width="3" stroke-linecap="round"/>
                <path d="M 285,105 Q 245,85 205,105" fill="none" stroke="url(#tendon-shading)" stroke-width="3" stroke-linecap="round"/>
            </g>
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <path d="M 125,200 Q 155,175 185,185 L 180,195 Q 155,185 120,210 Z" fill="var(--accent)" />
            <path d="M 275,200 Q 245,175 215,185 L 220,195 Q 245,185 280,210 Z" fill="var(--accent)" />
            <circle cx="200" cy="185" r="7" fill="var(--accent)" />
        </g>
    </svg>`;
