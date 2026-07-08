svgDataStore['muscle_teres_major'] = `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
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
            
            <g stroke="url(#bone-shading)" stroke-width="12" fill="none" stroke-linecap="round" opacity="0.5">
                <path d="M 150,180 C 100,180 60,200 40,240" />
                <path d="M 150,220 C 100,220 60,240 40,280" />
                <path d="M 150,260 C 100,260 60,280 40,320" />
                <path d="M 160,300 C 110,300 70,320 50,360" />
                <path d="M 180,340 C 130,340 90,360 70,400" />
            </g>

            <path d="M 160,120 
                     C 150,180 155,260 175,310 
                     C 185,330 205,325 215,300 
                     C 235,240 250,190 270,150 
                     C 285,120 310,110 340,110 
                     C 320,80 290,90 270,100 
                     C 230,90 190,100 160,120 Z" 
                  fill="url(#bone-shading)" />
            <path d="M 165,135 Q 250,105 340,110" stroke="#475569" stroke-width="6" stroke-linecap="round" fill="none" opacity="0.7"/>

            <path d="M 275,160 
                     L 285,450 
                     C 295,470 325,470 335,450 
                     L 325,160 
                     C 350,140 345,90 310,95 
                     C 280,100 265,140 275,160 Z" 
                  fill="url(#bone-shading)" />
            <path d="M 275,140 C 280,110 310,95 330,110" stroke="#475569" stroke-width="2" fill="none" opacity="0.5"/>

            <path d="M 170,145 C 210,130 270,120 270,150 C 265,200 245,240 235,260 C 200,230 170,200 170,145 Z" fill="url(#muscle-shading)" opacity="0.6" />
            
            <path d="M 235,260 C 255,220 280,170 305,140 C 315,135 325,145 315,155 C 285,185 260,240 245,275 C 240,270 235,265 235,260 Z" fill="url(#muscle-shading)" opacity="0.8" />

        </g>

        <g id="origin-layer" class="interactive-layer">
            <path d="M 180,315 C 195,325 210,315 215,300 L 235,260 C 210,270 190,290 180,315 Z" fill="var(--success)" />
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <path d="M 278,170 C 285,170 288,190 282,210 C 275,200 272,180 278,170 Z" fill="var(--accent)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-belly">
                <path d="M 195,320 
                         C 240,310 270,250 282,210 
                         Q 275,190 278,170 
                         C 245,190 215,225 235,260 
                         C 210,280 185,300 195,320 Z" 
                      fill="url(#muscle-shading)" />
                      
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.5" fill="none">
                    <path d="M 205,310 Q 245,290 278,200" />
                    <path d="M 215,295 Q 250,270 275,190" />
                    <path d="M 225,275 Q 255,250 272,180" />
                    <path d="M 230,265 Q 260,240 275,175" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 282,210 Q 275,190 278,170 C 270,175 265,185 268,205 Z" fill="url(#tendon-shading)" opacity="0.9" />
                
                <g stroke="#f8fafc" stroke-width="1.2" opacity="0.4" fill="none">
                    <path d="M 278,175 L 280,205" />
                    <path d="M 275,180 L 278,200" />
                    <path d="M 272,185 L 275,202" />
                </g>
            </g>
            
        </g>
    </svg>`;
