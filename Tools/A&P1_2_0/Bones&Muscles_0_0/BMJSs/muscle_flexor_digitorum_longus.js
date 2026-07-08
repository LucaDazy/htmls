svgDataStore['muscle_flexor_digitorum_longus'] = `<svg viewBox="0 0 450 850" xmlns="http://www.w3.org/2000/svg">
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
            
            <path d="M 80,50 L 80,800" stroke="#475569" stroke-width="2" stroke-dasharray="5,5" opacity="0.3" />

            <path d="M 175,50 
                     L 245,50 
                     C 245,80 265,100 255,130 
                     C 225,130 205,130 175,130 
                     C 165,100 175,80 175,50 Z" 
                  fill="url(#bone-shading)"/>
            <path d="M 165,120 C 165,140 195,140 200,120 C 200,100 185,90 175,100" fill="var(--bg-color)" opacity="0.5"/>
            <path d="M 255,120 C 255,140 225,140 220,120 C 220,100 235,90 245,100" fill="var(--bg-color)" opacity="0.5"/>

            <path d="M 170,135 
                     C 195,135 215,135 230,140 
                     L 215,670 
                     C 205,700 190,700 175,670 
                     L 165,140 Z" 
                  fill="url(#bone-shading)" />
            <path d="M 175,670 C 155,680 155,700 170,700 L 190,680 Z" fill="url(#bone-shading)" />
            <path d="M 225,165 C 205,195 185,230 170,260" fill="none" stroke="#475569" stroke-width="2" opacity="0.6"/>

            <path d="M 235,145 
                     C 255,145 260,160 250,175 
                     L 240,670 
                     L 225,670 
                     L 235,175 Z" 
                  fill="url(#bone-shading)" />
            <path d="M 240,670 C 260,685 260,715 245,720 L 230,680 Z" fill="url(#bone-shading)" />

            <path d="M 215,160 L 240,170 L 230,660 L 205,660 Z" fill="#94a3b8" opacity="0.3" />

            <path d="M 170,710 
                     C 165,760 180,790 210,790 
                     C 240,790 255,760 245,710 
                     C 225,700 185,700 170,710 Z" 
                  fill="url(#bone-shading)" opacity="0.9" />
            
            <path d="M 165,750 L 140,810 L 120,815 L 145,750 Z" fill="url(#bone-shading)" />
            <path d="M 175,760 L 165,830 L 150,830 L 165,760 Z" fill="url(#bone-shading)" />
            <path d="M 185,765 L 195,835 L 180,835 L 175,765 Z" fill="url(#bone-shading)" />
            <path d="M 195,760 L 225,825 L 210,825 L 185,760 Z" fill="url(#bone-shading)" />
            <path d="M 215,755 L 255,805 L 240,805 L 205,755 Z" fill="url(#bone-shading)" />

            <path d="M 190,220 C 185,350 195,500 215,650 L 225,650 C 215,500 210,350 220,220 Z" fill="url(#muscle-shading)" opacity="0.15" />

            <path d="M 230,350 C 220,450 225,550 235,670 L 245,670 C 240,550 235,450 245,350 Z" fill="url(#muscle-shading)" opacity="0.2" />
            <path d="M 230,670 C 220,720 180,760 140,800 L 135,790 C 175,750 210,710 220,670 Z" fill="url(#tendon-shading)" opacity="0.3" />

        </g>

        <g id="origin-layer" class="interactive-layer">
            <path d="M 175,280 
                     C 195,290 205,330 200,420 
                     L 190,520 
                     C 185,500 175,400 168,320 
                     C 165,290 170,280 175,280 Z" 
                  fill="var(--success)" />
        </g>
        
        <g id="insertion-layer" class="interactive-layer">
            <ellipse cx="160" cy="825" rx="5" ry="8" transform="rotate(10 160 825)" fill="var(--accent)" />
            <ellipse cx="188" cy="830" rx="5" ry="8" transform="rotate(-5 188 830)" fill="var(--accent)" />
            <ellipse cx="218" cy="820" rx="5" ry="8" transform="rotate(-25 218 820)" fill="var(--accent)" />
            <ellipse cx="248" cy="800" rx="4" ry="7" transform="rotate(-40 248 800)" fill="var(--accent)" />
        </g>
        
        <g id="action-layer" class="interactive-layer">
            
            <g id="action-belly">
                <path d="M 175,280 
                         C 205,300 215,380 205,490 
                         C 200,530 190,560 182,580 
                         C 178,550 175,480 170,400 
                         C 168,350 165,300 175,280 Z" 
                      fill="url(#muscle-shading)" />
                      
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.45" fill="none" stroke-linecap="round">
                    <path d="M 175,290 Q 185,340 190,390" />
                    <path d="M 173,330 Q 188,380 192,430" />
                    <path d="M 172,370 Q 185,420 192,470" />
                    <path d="M 171,410 Q 185,460 190,510" />
                    <path d="M 171,450 Q 182,500 188,540" />
                    
                    <path d="M 205,330 Q 195,380 192,430" />
                    <path d="M 205,370 Q 198,420 192,470" />
                    <path d="M 202,410 Q 195,460 190,510" />
                    <path d="M 198,460 Q 192,510 188,540" />
                </g>
            </g>
            
            <g id="action-tendon">
                <path d="M 188,480 
                         C 192,540 190,620 180,660 
                         C 170,695 160,715 165,745 
                         C 170,755 175,765 175,765 
                         L 165,760 
                         C 165,760 155,745 152,735 
                         C 145,715 155,690 168,660 
                         C 178,630 180,550 178,480 
                         C 182,490 185,490 188,480 Z" 
                      fill="url(#tendon-shading)" opacity="0.95" />
                      
                <path d="M 165,760 C 165,780 162,805 160,820 L 157,818 C 158,800 162,775 160,755 Z" fill="url(#tendon-shading)" opacity="0.95" />
                <path d="M 168,762 C 175,785 185,810 188,825 L 185,827 C 180,805 172,780 165,760 Z" fill="url(#tendon-shading)" opacity="0.95" />
                <path d="M 170,763 C 190,780 215,800 218,815 L 215,818 C 205,795 185,775 168,760 Z" fill="url(#tendon-shading)" opacity="0.95" />
                <path d="M 172,764 C 205,775 240,785 248,795 L 245,798 C 225,785 195,770 170,762 Z" fill="url(#tendon-shading)" opacity="0.95" />

                <path d="M 180,750 C 195,740 210,735 220,730 L 215,725 C 200,730 185,740 175,745 Z" fill="url(#tendon-shading)" opacity="0.4" />

                <g stroke="#f8fafc" stroke-width="1.2" opacity="0.5" fill="none">
                    <path d="M 183,500 Q 183,580 173,660" />
                    <path d="M 185,520 Q 185,590 177,655" />
                    <path d="M 172,665 Q 165,685 160,720" />
                    <line x1="162" y1="770" x2="159" y2="800" />
                    <line x1="171" y1="770" x2="182" y2="805" />
                    <line x1="178" y1="770" x2="205" y2="795" />
                </g>
            </g>
            
        </g>
        
        <g style="pointer-events: none;" opacity="0.6">
            <path d="M 165,660 C 185,665 195,685 180,710 C 165,695 150,670 165,660 Z" fill="#94a3b8"/>
            <path d="M 170,665 C 180,675 185,690 175,705" fill="none" stroke="#cbd5e1" stroke-width="1.5" opacity="0.7"/>
        </g>

        <g style="pointer-events: none;" opacity="0.4">
            <path d="M 160,260 C 130,350 140,500 190,650 C 200,680 220,680 230,650 C 280,500 290,350 260,260" fill="none" stroke="#9c82a1" stroke-width="1" stroke-dasharray="6,4" />
            <text x="260" y="270" fill="#9c82a1" font-size="11" font-family="sans-serif" style="text-shadow: 1px 1px 2px #000;">Soleus (cut)</text>
        </g>

    </svg>`;
