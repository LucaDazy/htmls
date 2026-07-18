svgDataStore['muscle_pectoralis_minor'] = `<svg viewBox="0 0 350 400" xmlns="http://www.w3.org/2000/svg">
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
            
            <path d="M 50,60 L 80,60 L 85,120 L 75,260 L 50,280 Z" />
            
            <path d="M 80,60 C 130,50 190,55 250,75 C 265,80 270,70 255,60 C 190,40 130,35 80,45 Z" />
            
            <path d="M 215,85 C 225,75 245,85 235,105 C 225,110 215,105 215,95 Z" />
            <path d="M 235,80 C 245,65 270,60 280,75 C 290,90 270,105 250,100 Z" />
            <path d="M 235,105 C 250,90 270,95 280,110 C 290,130 280,160 260,170 L 250,150 C 260,140 260,115 245,110 Z" />
            
            <circle cx="280" cy="130" r="22" fill="none" stroke="#475569" stroke-width="2" opacity="0.6" />

            <path d="M 80,70 C 110,65 150,70 180,90 L 185,100 C 150,80 110,75 80,80 Z" />
            <path d="M 82,110 C 120,105 160,115 195,140 L 200,150 C 160,125 120,115 82,120 Z" />
            <path d="M 84,150 C 125,145 170,160 210,195 L 215,205 C 170,170 125,155 84,160 Z" />
            <path d="M 84,190 C 125,185 175,205 220,240 L 225,250 C 175,215 125,195 84,200 Z" />
            <path d="M 82,230 C 125,225 180,250 230,290 L 235,300 C 180,260 125,235 82,240 Z" />
            <path d="M 78,270 C 120,265 180,290 235,340 L 240,350 C 180,300 120,275 78,280 Z" />

        </g>

        <g id="origin-layer" class="interactive-layer">
            <path d="M 148,162 C 155,160 162,168 162,176 C 155,178 148,170 148,162 Z" fill="var(--success)" />
            <path d="M 143,202 C 150,200 157,208 157,216 C 150,218 143,210 143,202 Z" fill="var(--success)" />
            <path d="M 138,245 C 145,243 152,251 152,259 C 145,261 138,253 138,245 Z" fill="var(--success)" />
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <path d="M 218,98 C 225,95 235,108 232,115 C 225,112 215,105 218,98 Z" fill="var(--accent)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-belly">
                <path d="M 148,162 
                         C 155,165 160,170 162,176 
                         C 158,185 152,195 143,202 
                         C 150,205 155,210 157,216 
                         C 153,225 148,235 138,245 
                         C 145,248 150,253 152,259 
                         C 175,225 205,170 232,115 
                         L 220,100 
                         C 205,115 180,135 148,162 Z" 
                      fill="url(#muscle-shading)" />
                      
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.45" fill="none">
                    <path d="M 152,168 Q 185,140 223,105" />
                    <path d="M 148,208 Q 185,160 226,110" />
                    <path d="M 143,250 Q 185,190 229,114" />
                    
                    <path d="M 155,185 Q 185,150 225,108" stroke="#f8fafc" opacity="0.25" stroke-width="2" />
                    <path d="M 150,225 Q 185,175 228,112" stroke="#f8fafc" opacity="0.25" stroke-width="2" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 215,110 C 218,105 220,100 220,100 L 232,115 C 228,118 220,115 215,110 Z" fill="url(#tendon-shading)" opacity="0.85" />
                
                <g stroke="#f8fafc" stroke-width="1.5" opacity="0.5" fill="none">
                    <line x1="220" y1="105" x2="225" y2="112" />
                    <line x1="223" y1="102" x2="228" y2="110" />
                </g>
            </g>
            
        </g>
    </svg>`;
