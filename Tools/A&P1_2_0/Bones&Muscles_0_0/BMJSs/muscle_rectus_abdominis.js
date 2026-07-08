svgDataStore['muscle_rectus_abdominis'] = `<svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
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
            <path d="M 185,50 L 215,50 L 215,120 L 210,140 L 205,170 L 195,170 L 190,140 L 185,120 Z" />
            
            <path d="M 195,150 C 140,165 90,210 70,260 C 80,270 120,230 160,200 C 175,190 190,170 195,160 Z" />
            <path d="M 205,150 C 260,165 310,210 330,260 C 320,270 280,230 240,200 C 225,190 210,170 205,160 Z" />
            
            <path d="M 190,120 C 140,130 80,160 50,210 C 60,220 110,180 160,150 C 175,140 185,130 190,120 Z" />
            <path d="M 210,120 C 260,130 320,160 350,210 C 340,220 290,180 240,150 C 225,140 215,130 210,120 Z" />
            
            <path d="M 185,90 C 140,100 60,120 40,160 C 50,170 100,140 150,120 C 170,110 180,100 185,90 Z" />
            <path d="M 215,90 C 260,100 340,120 360,160 C 350,170 300,140 250,120 C 230,110 220,100 215,90 Z" />

            <path d="M 160,490 C 180,510 195,520 200,530 C 205,520 220,510 240,490 C 260,510 270,540 250,560 C 230,550 200,570 200,570 C 200,570 170,550 150,560 C 130,540 140,510 160,490 Z" />
            
            <path d="M 90,400 C 100,430 130,460 160,490" stroke="#475569" stroke-width="8" fill="none" opacity="0.6"/>
            <path d="M 310,400 C 300,430 270,460 240,490" stroke="#475569" stroke-width="8" fill="none" opacity="0.6"/>
            <ellipse cx="200" cy="540" rx="3" ry="12" fill="var(--bg-color)" opacity="0.5"/>
        </g>

        <g id="origin-layer" class="interactive-layer">
            <path d="M 175,505 C 190,500 210,500 225,505 C 220,520 205,525 200,525 C 195,525 180,520 175,505 Z" fill="var(--success)" />
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <path d="M 190,165 L 210,165 L 205,175 L 195,175 Z" fill="var(--accent)"/>
            <path d="M 195,170 C 160,180 135,200 130,225 C 140,215 160,195 195,185 Z" fill="var(--accent)" />
            <path d="M 205,170 C 240,180 265,200 270,225 C 260,215 240,195 205,185 Z" fill="var(--accent)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-belly">
                <path d="M 193,175 
                         C 160,185 135,205 130,230 
                         C 125,290 135,360 150,440 
                         C 160,480 175,505 185,512 
                         L 193,512 
                         L 193,175 Z" 
                      fill="url(#muscle-shading)" />
                      
                <path d="M 207,175 
                         C 240,185 265,205 270,230 
                         C 275,290 265,360 250,440 
                         C 240,480 225,505 215,512 
                         L 207,512 
                         L 207,175 Z" 
                      fill="url(#muscle-shading)" />

                <g stroke="#450a0a" stroke-width="1.5" opacity="0.35" fill="none">
                    <path d="M 188,178 Q 188,340 188,510" />
                    <path d="M 180,180 Q 175,340 180,500" />
                    <path d="M 172,185 Q 160,340 170,480" />
                    <path d="M 164,190 Q 148,320 162,450" />
                    <path d="M 156,197 Q 138,280 155,400" />
                    <path d="M 212,178 Q 212,340 212,510" />
                    <path d="M 220,180 Q 225,340 220,500" />
                    <path d="M 228,185 Q 240,340 230,480" />
                    <path d="M 236,190 Q 252,320 238,450" />
                    <path d="M 244,197 Q 262,280 245,400" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 192,170 L 208,170 L 208,515 L 192,515 Z" fill="url(#tendon-shading)" opacity="0.9" />
                
                <path d="M 130,260 Q 165,265 193,255 L 193,265 Q 165,275 129,270 Z" fill="url(#tendon-shading)" opacity="0.85" />
                <path d="M 131,330 Q 165,335 193,325 L 193,335 Q 165,345 132,340 Z" fill="url(#tendon-shading)" opacity="0.85" />
                <path d="M 141,410 Q 165,415 193,405 L 193,415 Q 165,425 143,420 Z" fill="url(#tendon-shading)" opacity="0.85" />
                
                <path d="M 270,260 Q 235,265 207,255 L 207,265 Q 235,275 271,270 Z" fill="url(#tendon-shading)" opacity="0.85" />
                <path d="M 269,330 Q 235,335 207,325 L 207,335 Q 235,345 268,340 Z" fill="url(#tendon-shading)" opacity="0.85" />
                <path d="M 259,410 Q 235,415 207,405 L 207,415 Q 235,425 257,420 Z" fill="url(#tendon-shading)" opacity="0.85" />

                <path d="M 192,175 C 160,185 135,205 130,230 C 125,290 135,360 150,440 C 160,480 175,505 185,512 L 180,512 C 170,505 155,480 145,440 C 130,360 120,290 125,230 C 130,205 155,185 192,175 Z" fill="url(#tendon-shading)" opacity="0.6"/>
                <path d="M 208,175 C 240,185 265,205 270,230 C 275,290 265,360 250,440 C 240,480 225,505 215,512 L 220,512 C 230,505 245,480 255,440 C 270,360 280,290 275,230 C 270,205 245,185 208,175 Z" fill="url(#tendon-shading)" opacity="0.6"/>

                <ellipse cx="200" cy="360" rx="3.5" ry="5" fill="var(--bg-color)" opacity="0.6"/>
            </g>
            
        </g>
    </svg>`;
