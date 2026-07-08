svgDataStore['muscle_tensor_fasciae_latae'] = `<svg viewBox="0 0 450 750" xmlns="http://www.w3.org/2000/svg">
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
            
            <path d="M 130,160 
                     C 140,110 190,80 250,90 
                     C 280,95 300,130 280,170 
                     C 260,190 230,190 210,210 
                     C 200,220 195,240 180,240 
                     C 160,240 150,220 140,190 
                     C 130,180 125,170 130,160 Z" 
                  fill="url(#bone-shading)" />
                  
            <path d="M 180,240 C 190,260 210,260 220,240 C 210,225 190,225 180,240 Z" fill="var(--bg-color)" opacity="0.6" />
            <path d="M 220,240 C 240,270 250,320 220,330 C 200,330 190,300 190,280" fill="none" stroke="url(#bone-shading)" stroke-width="15" stroke-linecap="round" />

            <path d="M 160,140 C 180,180 200,210 220,220" fill="none" stroke="#475569" stroke-width="2" opacity="0.5" />
            <path d="M 230,120 C 240,160 250,190 240,220" fill="none" stroke="#475569" stroke-width="2" opacity="0.5" />

            <path d="M 185,250 
                     C 205,230 235,250 235,280 
                     L 245,550 
                     C 250,570 210,570 200,550 
                     L 185,280 Z" 
                  fill="url(#bone-shading)" />
                  
            <path d="M 185,250 C 195,230 225,230 235,250 C 240,270 235,290 210,290 C 185,290 180,270 185,250 Z" fill="url(#bone-shading)" />
            <path d="M 195,245 C 205,235 215,235 225,245" fill="none" stroke="#475569" stroke-width="2" opacity="0.7" />
            
            <path d="M 200,550 C 185,555 185,580 200,585 C 220,590 245,590 250,575 C 255,560 250,545 245,550 Z" fill="url(#bone-shading)" />

            <path d="M 195,595 
                     C 225,590 245,600 240,665 
                     L 205,665 Z" 
                  fill="url(#bone-shading)" />
            
            <path d="M 245,605 
                     C 255,605 260,625 255,665 
                     L 245,665 Z" 
                  fill="url(#bone-shading)" />
                  
            <path d="M 190,590 C 210,592 230,592 250,590" fill="none" stroke="#475569" stroke-width="2" opacity="0.5" />

            <path d="M 185,290 
                     C 160,380 165,480 195,560 
                     L 240,560 
                     C 255,460 245,360 235,290 Z" 
                  fill="url(#muscle-shading)" opacity="0.25" />
                  
            <path d="M 230,120 
                     C 280,130 320,180 300,250 
                     C 280,300 250,330 235,330 
                     C 230,300 215,260 230,120 Z" 
                  fill="url(#muscle-shading)" opacity="0.15" />
                  
            <path d="M 160,260 
                     C 130,350 140,480 180,560 
                     L 195,560 
                     C 170,450 170,350 185,260 Z" 
                  fill="url(#muscle-shading)" opacity="0.15" />

        </g>

        <g id="origin-layer" class="interactive-layer">
            <path d="M 125,165 
                     C 130,145 145,125 160,115 
                     L 165,122 
                     C 150,132 138,150 135,168 Z" 
                  fill="var(--success)" />
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <ellipse cx="205" cy="605" rx="8" ry="12" transform="rotate(-15 205 605)" fill="var(--accent)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-belly">
                <path d="M 130,165 
                         C 145,120 160,115 165,122 
                         C 175,150 180,220 165,270 
                         C 145,260 135,210 130,165 Z" 
                      fill="url(#muscle-shading)" />
                      
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.5" fill="none">
                    <path d="M 138,150 Q 148,190 152,245" />
                    <path d="M 145,140 Q 155,190 160,250" />
                    <path d="M 152,130 Q 165,190 168,235" />
                    <path d="M 158,125 Q 172,180 172,215" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 155,250 
                         C 170,350 185,480 195,595 
                         C 200,610 215,610 215,595 
                         C 230,480 235,350 210,240 
                         C 195,245 175,260 155,250 Z" 
                      fill="url(#tendon-shading)" opacity="0.85" />
                      
                <path d="M 210,240 
                         C 230,220 245,200 260,180 
                         C 245,210 225,240 210,260 Z" 
                      fill="url(#tendon-shading)" opacity="0.6" />
                      
                <g stroke="#f8fafc" stroke-width="1.8" opacity="0.4" fill="none" stroke-linecap="round">
                    <path d="M 165,270 Q 175,350 198,590" />
                    <path d="M 175,265 Q 185,350 204,590" />
                    <path d="M 185,260 Q 195,350 208,590" />
                    <path d="M 195,255 Q 205,350 212,590" />
                    
                    <path d="M 175,300 L 195,310" stroke-width="1" opacity="0.3" />
                    <path d="M 178,350 L 198,360" stroke-width="1" opacity="0.3" />
                    <path d="M 182,400 L 202,410" stroke-width="1" opacity="0.3" />
                    <path d="M 185,450 L 205,460" stroke-width="1" opacity="0.3" />
                    <path d="M 190,500 L 210,510" stroke-width="1" opacity="0.3" />
                    <path d="M 192,550 L 212,560" stroke-width="1" opacity="0.3" />
                </g>
                
                <path d="M 155,250 C 145,350 150,450 195,550" fill="none" stroke="url(#tendon-shading)" stroke-width="3" opacity="0.4" />
                <path d="M 210,240 C 235,350 235,450 215,550" fill="none" stroke="url(#tendon-shading)" stroke-width="3" opacity="0.4" />
            </g>
            
        </g>
    </svg>`;
