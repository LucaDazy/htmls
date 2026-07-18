svgDataStore['bone_tarsals'] = `<svg viewBox="50 0 280 480" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="bone-shading" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#94a3b8" />
                <stop offset="25%" stop-color="#f1f5f9" />
                <stop offset="75%" stop-color="#cbd5e1" />
                <stop offset="100%" stop-color="#475569" />
            </linearGradient>
            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
        
        <g class="svg-bg" fill="url(#bone-shading)" stroke="#475569" stroke-width="1.5" opacity="0.4">
            <path d="M 125, 20 C 125, 80 135, 100 145, 120 C 160, 125 180, 125 195, 120 C 200, 100 200, 80 200, 20 Z" />
            <path d="M 125, 110 C 120, 130 130, 150 145, 140 C 140, 130 135, 120 125, 110 Z" />
            
            <path d="M 210, 20 C 210, 80 205, 100 215, 120 C 225, 130 235, 125 240, 115 C 235, 80 235, 60 235, 20 Z" />
            <path d="M 220, 115 C 225, 140 240, 150 245, 135 C 240, 125 235, 115 220, 115 Z" />
            
            <path d="M 125, 280 C 140, 275 145, 285 145, 300 C 145, 340 140, 380 135, 420 C 125, 425 115, 420 115, 410 C 120, 380 120, 340 125, 280 Z" />
            
            <path d="M 155, 275 C 165, 275 170, 285 165, 300 C 160, 340 155, 380 150, 430 C 140, 435 130, 430 135, 420 C 140, 380 145, 340 155, 275 Z" />
            
            <path d="M 180, 275 C 190, 275 190, 285 185, 300 C 180, 340 175, 380 170, 435 C 160, 440 150, 435 155, 425 C 160, 380 165, 340 180, 275 Z" />
            
            <path d="M 205, 280 C 215, 275 220, 285 215, 300 C 210, 340 205, 380 200, 430 C 190, 435 180, 430 185, 420 C 190, 380 195, 340 205, 280 Z" />
            
            <path d="M 230, 280 C 255, 270 265, 290 240, 305 C 235, 340 230, 380 225, 415 C 215, 420 205, 415 210, 405 C 215, 380 220, 340 230, 280 Z" />
        </g>
        
        <g id="region-layer" class="interactive-layer">
            <path d="M 145, 125 C 165, 115 195, 115 210, 130 C 220, 150 215, 185 200, 195 C 180, 205 155, 200 145, 180 C 135, 160 135, 140 145, 125 Z" fill="url(#bone-shading)" stroke="#334155" stroke-width="1.5" stroke-linejoin="round" />
            
            <path d="M 210, 130 C 235, 125 255, 140 260, 175 C 265, 210 255, 225 240, 230 C 220, 230 205, 215 200, 195 C 195, 175 200, 150 210, 130 Z" fill="url(#bone-shading)" stroke="#334155" stroke-width="1.5" stroke-linejoin="round" />
            
            <path d="M 140, 185 C 160, 195 185, 200 195, 210 C 185, 225 160, 225 145, 215 C 135, 210 130, 195 140, 185 Z" fill="url(#bone-shading)" stroke="#334155" stroke-width="1.5" stroke-linejoin="round" />
            
            <path d="M 195, 215 C 220, 210 240, 225 240, 255 C 235, 280 215, 280 200, 270 C 190, 255 185, 235 195, 215 Z" fill="url(#bone-shading)" stroke="#334155" stroke-width="1.5" stroke-linejoin="round" />
            
            <path d="M 175, 215 C 190, 215 195, 230 195, 255 C 190, 270 175, 275 170, 260 C 165, 245 165, 225 175, 215 Z" fill="url(#bone-shading)" stroke="#334155" stroke-width="1.5" stroke-linejoin="round" />
            
            <path d="M 155, 215 C 170, 210 175, 225 170, 255 C 165, 275 150, 275 145, 260 C 140, 245 145, 225 155, 215 Z" fill="url(#bone-shading)" stroke="#334155" stroke-width="1.5" stroke-linejoin="round" />
            
            <path d="M 135, 215 C 150, 215 155, 230 150, 265 C 145, 285 125, 280 120, 260 C 115, 240 120, 225 135, 215 Z" fill="url(#bone-shading)" stroke="#334155" stroke-width="1.5" stroke-linejoin="round" />
            
            <g stroke="#475569" stroke-width="1.5" opacity="0.4" fill="none">
                <path d="M 155, 140 C 175, 130 195, 135 205, 150" />
                <path d="M 150, 160 C 170, 150 190, 155 200, 170" />
                <path d="M 230, 160 C 245, 170 250, 190 245, 210" />
                <path d="M 135, 205 C 145, 195 155, 195 160, 205" />
                <path d="M 205, 235 C 215, 245 225, 245 235, 235" />
            </g>
        </g>
        
        <g id="landmarks-layer" class="interactive-layer">
            <circle cx="175" cy="160" r="5" fill="var(--accent)" />
            
            <circle cx="230" cy="180" r="5" fill="var(--accent)" />
            
            <circle cx="165" cy="205" r="4.5" fill="var(--accent)" />
            
            <circle cx="215" cy="245" r="4.5" fill="var(--accent)" />
            
            <circle cx="182" cy="240" r="4" fill="var(--accent)" />
            
            <circle cx="157" cy="240" r="4" fill="var(--accent)" />
            
            <circle cx="135" cy="245" r="4" fill="var(--accent)" />
        </g>
        
    </svg>`;
