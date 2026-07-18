svgDataStore['muscle_sternohyoid'] = `<svg viewBox="0 0 350 450" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="bone-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#94a3b8" /><stop offset="25%" stop-color="#f1f5f9" /><stop offset="75%" stop-color="#cbd5e1" /><stop offset="100%" stop-color="#475569" /></linearGradient>
            <linearGradient id="muscle-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#7f1d1d" /><stop offset="35%" stop-color="#ef4444" /><stop offset="80%" stop-color="#b91c1c" /><stop offset="100%" stop-color="#450a0a" /></linearGradient>
            <linearGradient id="tendon-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#64748b" /><stop offset="50%" stop-color="#f8fafc" /><stop offset="100%" stop-color="#334155" /></linearGradient>
            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
        </defs>
        
        <g class="svg-bg" fill="url(#bone-shading)" opacity="0.4">
            <path d="M 60,60 C 100,150 250,150 290,60 C 300,100 270,170 175,180 C 80,170 50,100 60,60 Z"/>
            <path d="M 50,40 L 70,80 L 80,40 Z" />
            <path d="M 300,40 L 280,80 L 270,40 Z" />

            <path d="M 145,150 L 205,150 L 205,330 L 145,330 Z" opacity="0.6"/>

            <path d="M 130,150 C 130,175 220,175 220,150 C 215,155 180,163 175,163 C 170,163 135,155 130,150 Z" />
            
            <path d="M 145,185 L 175,195 L 205,185 L 205,225 L 175,235 L 145,225 Z" />
            
            <path d="M 152,240 L 198,240 L 198,255 L 152,255 Z" />

            <path d="M 155,265 L 195,265 L 195,275 L 155,275 Z" />
            <path d="M 155,285 L 195,285 L 195,295 L 155,295 Z" />
            <path d="M 155,305 L 195,305 L 195,315 L 155,315 Z" />

            <path d="M 145,335 C 100,320 40,300 20,285 C 30,275 60,295 140,320 Z" />
            <path d="M 205,335 C 250,320 310,300 330,285 C 320,275 290,295 210,320 Z" />

            <path d="M 145,335 L 205,335 L 190,390 L 160,390 Z" />
        </g>
        
        <g id="origin-layer" class="interactive-layer">
            <path d="M 133,320 C 145,324 156,331 161,336 L 145,338 Z" fill="var(--success)" />
            <path d="M 217,320 C 205,324 194,331 189,336 L 205,338 Z" fill="var(--success)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            <g id="action-belly">
                <path d="M 152,160 Q 138,240 142,328 L 158,335 Q 165,240 168,158 Z" fill="url(#muscle-shading)" />
                <path d="M 198,160 Q 212,240 208,328 L 192,335 Q 185,240 182,158 Z" fill="url(#muscle-shading)" />
                
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.35" fill="none">
                    <path d="M 155,163 Q 143,240 147,320" />
                    <path d="M 159,162 Q 148,240 152,326" />
                    <path d="M 164,161 Q 155,240 156,332" />
                    
                    <path d="M 195,163 Q 207,240 203,320" />
                    <path d="M 191,162 Q 202,240 198,326" />
                    <path d="M 186,161 Q 195,240 194,332" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 142,328 Q 150,331 158,335" fill="none" stroke="url(#tendon-shading)" stroke-width="6" stroke-linecap="round" />
                <path d="M 192,335 Q 200,331 208,328" fill="none" stroke="url(#tendon-shading)" stroke-width="6" stroke-linecap="round" />
                
                <path d="M 152,160 Q 160,159 168,158" fill="none" stroke="url(#tendon-shading)" stroke-width="5" stroke-linecap="round" />
                <path d="M 182,158 Q 190,159 198,160" fill="none" stroke="url(#tendon-shading)" stroke-width="5" stroke-linecap="round" />

                <path d="M 142,328 Q 150,331 158,335" fill="none" stroke="#ffffff" stroke-width="1.5" opacity="0.4" stroke-linecap="round" />
                <path d="M 192,335 Q 200,331 208,328" fill="none" stroke="#ffffff" stroke-width="1.5" opacity="0.4" stroke-linecap="round" />
            </g>
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <ellipse cx="160" cy="158" rx="8" ry="4" fill="var(--accent)" transform="rotate(-8 160 158)" />
            <ellipse cx="190" cy="158" rx="8" ry="4" fill="var(--accent)" transform="rotate(8 190 158)" />
        </g>
    </svg>`;
