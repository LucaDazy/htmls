svgDataStore['muscle_popliteus'] = `<svg viewBox="0 0 450 650" xmlns="http://www.w3.org/2000/svg">
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
            
            <path d="M 60,50 L 60,600" stroke="#475569" stroke-width="2" stroke-dasharray="5,5" opacity="0.3" />

            <path d="M 195,50 
                     L 245,50 
                     L 235,220 
                     C 245,280 290,310 290,340 
                     C 290,370 240,370 220,340 
                     C 200,370 150,370 150,340 
                     C 150,310 195,280 205,220 Z" 
                  fill="url(#bone-shading)"/>
                  
            <path d="M 205,220 C 190,280 150,320 150,340" fill="none" stroke="#475569" stroke-width="1.5" opacity="0.6"/>
            <path d="M 235,220 C 250,280 290,320 290,340" fill="none" stroke="#475569" stroke-width="1.5" opacity="0.6"/>
            <path d="M 200,355 C 210,335 230,335 240,355 C 230,365 210,365 200,355 Z" fill="var(--bg-color)" opacity="0.5"/>

            <path d="M 155,375 
                     C 185,365 205,365 220,375 
                     C 235,365 255,365 285,375 
                     L 265,450 
                     L 240,650 
                     L 200,650 
                     L 175,450 Z" 
                  fill="url(#bone-shading)" />
                  
            <path d="M 170,410 C 210,430 240,450 268,460" fill="none" stroke="#475569" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
            <text x="275" y="470" fill="#9c82a1" font-size="10" opacity="0.8" font-family="sans-serif">Soleal Line</text>

            <path d="M 135,380 
                     C 155,380 160,400 150,420 
                     L 135,650 
                     L 115,650 
                     L 125,420 Z" 
                  fill="url(#bone-shading)" />
            <path d="M 155,385 C 160,395 155,410 145,415" fill="none" stroke="#475569" stroke-width="1.5" />

            <path d="M 145,365 Q 220,365 295,365" fill="none" stroke="#475569" stroke-width="2" opacity="0.3" />

        </g>

        <g id="origin-layer" class="interactive-layer">
            <ellipse cx="145" cy="342" rx="6" ry="10" transform="rotate(15 145 342)" fill="var(--success)" />
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <path d="M 178,380 L 282,390 L 265,455 C 220,425 190,405 178,380 Z" fill="var(--accent)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-belly">
                <path d="M 170,380 
                         C 210,380 250,385 282,390 
                         L 265,455 
                         C 220,425 180,410 162,400 
                         C 165,390 168,385 170,380 Z" 
                      fill="url(#muscle-shading)" />
                      
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.5" fill="none">
                    <path d="M 168,385 Q 220,390 280,395" />
                    <path d="M 166,390 Q 220,405 275,415" />
                    <path d="M 164,395 Q 215,415 270,435" />
                    <path d="M 163,400 Q 210,425 267,450" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 143,342 
                         C 152,360 160,372 170,380 
                         C 168,385 165,390 162,400 
                         C 150,380 145,360 139,348 Z" 
                      fill="url(#tendon-shading)" opacity="0.95" />
                      
                <g stroke="#f8fafc" stroke-width="1.2" opacity="0.5" fill="none">
                    <path d="M 143,348 Q 152,370 166,390" />
                    <path d="M 145,345 Q 155,370 168,385" />
                </g>
            </g>
            
        </g>
        
        <g style="pointer-events: none;">
            <path d="M 160,290 C 130,310 90,380 120,460 C 130,480 150,500 170,530" fill="none" stroke="#9c82a1" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.6" />
            <path d="M 280,290 C 310,310 350,380 320,460 C 310,480 290,500 270,530" fill="none" stroke="#9c82a1" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.6" />
            
            <text x="290" y="320" fill="#9c82a1" font-size="12" opacity="0.8" font-family="sans-serif" style="text-shadow: 1px 1px 2px #000;">Gastrocnemius (cut)</text>
            <path d="M 280,315 L 265,315" stroke="#9c82a1" stroke-width="1" stroke-dasharray="2,2" opacity="0.8" />
        </g>

    </svg>`;
