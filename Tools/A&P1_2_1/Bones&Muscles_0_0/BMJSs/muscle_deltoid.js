svgDataStore['muscle_deltoid'] = `<svg viewBox="0 0 400 450" xmlns="http://www.w3.org/2000/svg">
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
            <path d="M 30,160 C 80,160 130,180 140,210 L 130,220 C 80,190 30,175 30,175 Z" />
            <path d="M 30,200 C 80,200 135,220 145,250 L 135,260 C 80,230 30,215 30,215 Z" />
            <path d="M 30,240 C 80,240 140,260 150,290 L 140,300 C 80,270 30,255 30,255 Z" />
            <path d="M 30,280 C 80,280 140,300 150,330 L 140,340 C 80,310 30,295 30,295 Z" />
            
            <path d="M 20,120 C 80,100 160,100 220,110 C 240,113 250,118 260,125 C 245,135 225,125 210,122 C 160,115 80,115 20,135 Z" />
            
            <path d="M 195,130 C 210,145 220,145 225,135 C 220,125 205,120 195,130 Z" /> <path d="M 255,120 C 275,125 295,145 300,160 C 285,165 265,145 250,135 Z" /> <path d="M 235,140 
                     C 255,120 285,130 300,150 
                     C 310,170 315,200 305,250 
                     L 315,265 L 295,280 
                     C 290,320 290,360 295,420 
                     L 245,420 
                     C 250,360 255,300 255,250 
                     C 250,210 240,170 235,140 Z" />
                     
            <g stroke="#475569" stroke-width="2" fill="none" opacity="0.6">
                <path d="M 250,135 C 270,130 290,145 295,165" />
                <path d="M 270,140 C 280,155 280,180 280,210" /> </g>
        </g>

        <g id="origin-layer" class="interactive-layer">
            <path d="M 130,115 C 160,112 195,115 220,118 C 215,128 185,124 130,125 Z" fill="var(--success)" />
            <path d="M 255,130 C 270,135 285,150 290,160 C 280,165 260,150 250,140 Z" fill="var(--success)" />
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <path d="M 300,248 L 315,265 L 295,280 L 290,265 Z" fill="var(--accent)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-belly">
                <path d="M 130,120 
                         C 180,110 230,115 260,135 
                         C 290,150 320,170 325,210 
                         C 325,240 315,255 310,260 
                         L 295,268 
                         L 290,260 
                         C 260,230 200,180 130,120 Z" 
                      fill="url(#muscle-shading)" />
                      
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.45" fill="none">
                    <path d="M 140,123 Q 210,190 295,265" />
                    <path d="M 160,120 Q 230,190 298,265" />
                    <path d="M 180,118 Q 250,195 301,263" />
                    <path d="M 200,120 Q 270,195 304,261" />
                    <path d="M 220,125 Q 285,200 307,260" />
                    <path d="M 240,132 Q 295,205 310,258" />
                    <path d="M 260,142 Q 310,205 312,253" />
                    <path d="M 275,155 Q 315,210 316,245" />
                    
                    <path d="M 220,125 Q 260,180 290,250" stroke="#f8fafc" opacity="0.2" stroke-width="2" />
                    <path d="M 255,140 Q 285,190 305,250" stroke="#f8fafc" opacity="0.2" stroke-width="2" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 290,240 C 300,245 310,255 312,262 L 295,270 C 285,260 285,250 290,240 Z" fill="url(#tendon-shading)" opacity="0.8" />
                
                <g stroke="#f8fafc" stroke-width="1.5" fill="none" opacity="0.5">
                    <path d="M 295,245 L 305,262" />
                    <path d="M 305,250 L 310,260" />
                    <path d="M 290,250 L 295,265" />
                </g>
            </g>
            
        </g>
    </svg>`;
