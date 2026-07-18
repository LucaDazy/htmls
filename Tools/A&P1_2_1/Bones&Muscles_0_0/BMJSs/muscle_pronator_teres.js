svgDataStore['muscle_pronator_teres'] = `<svg viewBox="20 20 310 520" xmlns="http://www.w3.org/2000/svg">
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
            <path d="M 140,40 C 140,80 150,110 145,130 C 135,140 125,150 140,155 C 165,150 190,150 210,155 C 230,150 235,135 220,125 C 210,110 200,70 200,40 Z" />
            
            <path d="M 145,165 C 160,165 165,175 155,185 C 155,195 140,220 125,350 L 115,470 C 105,485 125,495 135,480 L 150,350 C 165,220 170,195 165,185 C 155,175 140,165 145,165 Z" />
            
            <path d="M 170,165 C 180,160 205,160 205,175 C 205,190 195,220 185,350 L 175,470 C 170,485 190,495 195,480 L 205,350 C 215,220 215,190 205,175 C 210,165 190,150 170,165 Z" />
            
            <path d="M 105,490 C 120,480 170,480 185,490 C 195,505 190,520 180,530 L 110,530 C 100,520 95,505 105,490 Z" />
        </g>
        
        <g id="origin-layer" class="interactive-layer">
            <path d="M 218,136 C 226,138 228,148 221,153 C 215,152 212,142 218,136 Z" fill="var(--success)" />
            
            <ellipse cx="188" cy="180" rx="5" ry="8" transform="rotate(-30 188 180)" fill="var(--success)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            <g id="action-belly">
                <path d="M 221,142 C 200,160 150,230 120,265 L 126,282 C 160,250 180,200 190,185 C 200,175 215,160 221,142 Z" fill="url(#muscle-shading)" />
                
                <g stroke="#450a0a" stroke-width="1.2" opacity="0.4" fill="none">
                    <path d="M 215,148 Q 170,200 124,268" />
                    <path d="M 205,155 Q 165,210 128,275" />
                    <path d="M 195,170 Q 170,210 132,280" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 120,265 L 126,282 C 122,288 116,292 113,294 C 110,285 113,272 120,265 Z" fill="url(#tendon-shading)" />
                
                <path d="M 120,270 C 116,278 114,286 114,292" fill="none" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" opacity="0.4" />
            </g>
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <path d="M 115,270 C 119,270 122,285 118,295 C 112,295 110,280 115,270 Z" fill="var(--accent)" />
        </g>
    </svg>`;
