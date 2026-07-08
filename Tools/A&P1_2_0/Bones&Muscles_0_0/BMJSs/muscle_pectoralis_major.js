svgDataStore['muscle_pectoralis_major'] = `<svg viewBox="20 20 380 360" xmlns="http://www.w3.org/2000/svg">
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
            <path d="M 50,60 L 80,60 C 85,70 90,80 85,100 C 90,140 90,200 85,250 C 80,270 70,290 50,290 Z" />
            
            <path d="M 80,75 C 130,65 190,60 250,75 C 270,80 280,70 260,60 C 190,45 130,45 80,60 Z" />
            
            <path d="M 240,85 C 250,95 260,95 265,85 C 265,75 250,70 240,85 Z" /> <path d="M 270,70 C 290,60 300,70 295,85 C 285,85 275,80 270,70 Z" /> <path d="M 270,95 C 290,80 320,95 320,130 C 320,160 310,240 310,320 L 275,320 C 275,240 280,160 280,140 C 275,130 260,110 270,95 Z" />
            <circle cx="295" cy="105" r="18" fill="none" stroke="#475569" stroke-width="2" />
            
            <path d="M 85,110 C 130,105 180,115 210,140 L 215,150 C 180,125 130,120 85,125 Z" />
            <path d="M 85,145 C 130,140 185,150 220,180 L 225,190 C 185,160 130,155 85,160 Z" />
            <path d="M 85,180 C 130,175 190,185 230,220 L 235,230 C 190,195 130,190 85,195 Z" />
            <path d="M 85,215 C 130,210 190,220 235,260 L 240,270 C 190,230 130,225 85,230 Z" />
            <path d="M 85,250 C 130,245 185,255 230,295 L 235,305 C 185,265 130,260 85,265 Z" />
        </g>

        <g id="origin-layer" class="interactive-layer">
            <path d="M 80,75 C 110,70 140,65 170,70 C 175,75 165,85 160,85 C 130,80 100,85 80,90 Z" fill="var(--success)" />
            
            <path d="M 80,95 C 90,95 95,110 95,130 C 100,160 105,210 100,255 C 105,265 85,275 80,265 C 85,220 85,150 80,95 Z" fill="var(--success)" />
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <path d="M 285,120 C 290,115 295,125 293,145 C 290,160 282,165 283,145 C 285,135 282,125 285,120 Z" fill="var(--accent)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-belly">
                <path d="M 80,90 C 130,80 165,85 170,85 C 215,95 260,110 285,125 C 288,128 285,132 278,132 C 240,120 160,105 80,105 Z" fill="url(#muscle-shading)" />
                
                <path d="M 80,105 C 150,115 230,125 278,132 C 285,134 292,145 288,155 C 240,200 150,265 80,265 C 95,200 95,140 80,105 Z" fill="url(#muscle-shading)" />
                
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.45" fill="none">
                    <path d="M 120,90 Q 200,98 280,128" />
                    <path d="M 150,90 Q 220,105 278,130" />
                    <path d="M 90,120 Q 180,125 282,136" />
                    <path d="M 90,140 Q 185,135 285,140" />
                    <path d="M 92,170 Q 185,150 287,144" />
                    <path d="M 95,200 Q 190,170 288,148" />
                    <path d="M 93,230 Q 185,190 286,152" />
                    <path d="M 90,255 Q 180,210 283,155" />
                </g>
                
                <path d="M 170,85 C 215,95 260,110 285,125" stroke="#110d12" stroke-width="3" opacity="0.3" fill="none" />
                <path d="M 80,105 C 150,115 230,125 278,132" stroke="#110d12" stroke-width="2" opacity="0.2" fill="none" />
            </g>
            
            <g id="action-tendon">
                <path d="M 80,95 C 90,95 95,110 95,130 C 100,160 105,210 100,255 C 88,255 85,175 80,95 Z" fill="url(#tendon-shading)" opacity="0.6" />
                
                <path d="M 275,120 C 285,125 295,145 288,155 C 282,160 270,145 278,132 C 285,135 285,125 275,120 Z" fill="url(#tendon-shading)" opacity="0.8" />
                
                <path d="M 285,125 C 290,135 290,145 282,150" stroke="#f8fafc" stroke-width="1.5" fill="none" opacity="0.5" />
                <path d="M 278,132 C 285,140 285,150 280,155" stroke="#334155" stroke-width="1.5" fill="none" opacity="0.6" />
            </g>
            
        </g>
    </svg>`;
