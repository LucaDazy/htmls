svgDataStore['muscle_sternothyroid'] = `<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
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
            
            <path d="M 175,250 L 175,410 L 225,410 L 225,250 Z" />
            <g stroke="#475569" stroke-width="2.5" fill="none" opacity="0.6">
                <path d="M 175,270 Q 200,275 225,270" />
                <path d="M 175,290 Q 200,295 225,290" />
                <path d="M 175,310 Q 200,315 225,310" />
                <path d="M 175,330 Q 200,335 225,330" />
                <path d="M 175,350 Q 200,355 225,350" />
                <path d="M 175,370 Q 200,375 225,370" />
                <path d="M 175,390 Q 200,395 225,390" />
            </g>

            <path d="M 170,250 C 185,265 215,265 230,250 L 225,235 C 210,245 190,245 175,235 Z" />

            <path d="M 155,160 C 180,175 190,185 200,190 C 210,185 220,175 245,160 C 250,180 255,220 235,245 C 215,255 205,260 200,260 C 195,260 185,255 165,245 C 145,220 150,180 155,160 Z" />
            <g stroke="#475569" stroke-width="2" fill="none" opacity="0.7">
                <path d="M 162,190 L 180,225" /> <path d="M 238,190 L 220,225" /> <path d="M 185,175 C 195,185 205,185 215,175" />
            </g>

            <path d="M 160,130 C 180,145 220,145 240,130 C 255,120 260,110 265,100 C 260,115 245,130 230,135 C 210,140 190,140 170,135 C 155,130 140,115 135,100 C 140,110 145,120 160,130 Z" />
            <path d="M 165,135 C 185,145 215,145 235,135 L 240,165 C 220,175 180,175 160,165 Z" fill="var(--bg-color)" opacity="0.6" />

            <path d="M 155,390 C 180,398 220,398 245,390 C 255,410 250,450 230,480 L 170,480 C 150,450 145,410 155,390 Z" />
            <path d="M 175,393 C 190,405 210,405 225,393" fill="none" stroke="#475569" stroke-width="2" opacity="0.7" />

            <path d="M 40,360 C 80,370 130,375 155,390 C 150,360 120,340 40,340 Z" />
            <path d="M 360,360 C 320,370 270,375 245,390 C 250,360 280,340 360,340 Z" />

            <path d="M 153,395 C 120,415 80,440 50,480 L 65,495 C 95,455 135,430 165,415 Z" />
            <path d="M 247,395 C 280,415 320,440 350,480 L 335,495 C 305,455 265,430 235,415 Z" />

        </g>

        <g id="origin-layer" class="interactive-layer">
            <path d="M 158,397 C 175,400 190,400 195,420 C 180,420 165,415 155,405 Z" fill="var(--success)" />
            <path d="M 242,397 C 225,400 210,400 205,420 C 220,420 235,415 245,405 Z" fill="var(--success)" />
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <polygon points="160,195 180,225 174,230 156,202" fill="var(--accent)" />
            <polygon points="240,195 220,225 226,230 244,202" fill="var(--accent)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-belly">
                <path d="M 158,198 
                         L 178,228 
                         C 183,280 188,340 195,420 
                         L 165,410 
                         C 160,340 155,280 158,198 Z" 
                      fill="url(#muscle-shading)" />
                      
                <path d="M 242,198 
                         L 222,228 
                         C 217,280 212,340 205,420 
                         L 235,410 
                         C 240,340 245,280 242,198 Z" 
                      fill="url(#muscle-shading)" />

                <g stroke="#450a0a" stroke-width="1.5" opacity="0.45" fill="none">
                    <path d="M 163,208 Q 166,310 172,410" />
                    <path d="M 168,215 Q 172,310 178,415" />
                    <path d="M 173,222 Q 178,310 185,418" />
                    <path d="M 176,228 Q 182,310 190,420" />
                    
                    <path d="M 237,208 Q 234,310 228,410" />
                    <path d="M 232,215 Q 228,310 222,415" />
                    <path d="M 227,222 Q 222,310 215,418" />
                    <path d="M 224,228 Q 218,310 210,420" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 158,198 L 178,228 C 175,232 172,235 156,202 Z" fill="url(#tendon-shading)" opacity="0.8" />
                <path d="M 242,198 L 222,228 C 225,232 228,235 244,202 Z" fill="url(#tendon-shading)" opacity="0.8" />
                
                <path d="M 195,420 L 165,410 C 160,390 175,395 195,420 Z" fill="url(#tendon-shading)" opacity="0.75" />
                <path d="M 205,420 L 235,410 C 240,390 225,395 205,420 Z" fill="url(#tendon-shading)" opacity="0.75" />
                
                <g stroke="#f8fafc" stroke-width="1.5" opacity="0.4" fill="none">
                    <line x1="162" y1="205" x2="168" y2="215" />
                    <line x1="172" y1="218" x2="175" y2="225" />
                    <line x1="238" y1="205" x2="232" y2="215" />
                    <line x1="228" y1="218" x2="225" y2="225" />
                    
                    <path d="M 170,410 C 175,405 180,405 190,415" />
                    <path d="M 230,410 C 225,405 220,405 210,415" />
                </g>
            </g>
            
        </g>
    </svg>`;
