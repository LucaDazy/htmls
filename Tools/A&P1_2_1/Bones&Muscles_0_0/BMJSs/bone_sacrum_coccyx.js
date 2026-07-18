svgDataStore['bone_sacrum_coccyx'] = `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
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
        
        <g class="svg-bg" fill="url(#bone-shading)" opacity="0.4">
            <text x="150" y="360" fill="var(--text-muted)" font-size="14" font-style="italic" text-anchor="middle">Anterior View</text>
            <text x="350" y="360" fill="var(--text-muted)" font-size="14" font-style="italic" text-anchor="middle">Posterior View</text>

            <path d="M 125,50 C 135,40 165,40 175,50 C 180,65 175,75 170,80 C 150,85 130,85 125,75 C 120,65 120,55 125,50 Z" />
            <path d="M 123,76 C 135,85 165,85 177,76 C 165,68 135,68 123,76 Z" opacity="0.7"/>
            
            <path d="M 325,50 C 335,40 365,40 375,50 C 380,65 370,75 365,70 C 360,60 340,60 335,70 C 330,75 320,65 325,50 Z" />
            <path d="M 346,25 C 348,15 352,15 354,25 L 353,45 L 347,45 Z" />
            <path d="M 326,50 C 310,40 300,45 305,55 L 322,60 Z" />
            <path d="M 374,50 C 390,40 400,45 395,55 L 378,60 Z" />

            <path d="M 110,85 C 90,60 50,40 40,80 C 30,120 70,140 95,150 C 105,130 110,100 110,85 Z" />
            <path d="M 190,85 C 210,60 250,40 260,80 C 270,120 230,140 205,150 C 195,130 190,100 190,85 Z" />
        </g>
        
        <g id="region-layer" class="interactive-layer">
            <path d="
                M 120,85 
                C 130,78 170,78 180,85 
                C 195,85 205,95 210,105 
                C 205,130 195,160 180,190 
                C 170,220 160,250 155,270 
                C 152,275 148,275 145,270 
                C 140,250 130,220 120,190 
                C 105,160 95,130 90,105 
                C 95,95 105,85 120,85 Z 
                
                M 119,120 A 4,6 0 1,0 111,120 A 4,6 0 1,0 119,120 Z 
                M 124,155 A 3.5,5 0 1,0 116.5,155 A 3.5,5 0 1,0 124,155 Z 
                M 129,190 A 3,4.5 0 1,0 123,190 A 3,4.5 0 1,0 129,190 Z 
                M 135.5,225 A 2.5,4 0 1,0 130.5,225 A 2.5,4 0 1,0 135.5,225 Z 
                
                M 189,120 A 4,6 0 1,0 181,120 A 4,6 0 1,0 189,120 Z 
                M 183.5,155 A 3.5,5 0 1,0 176.5,155 A 3.5,5 0 1,0 183.5,155 Z 
                M 177,190 A 3,4.5 0 1,0 171,190 A 3,4.5 0 1,0 177,190 Z 
                M 169.5,225 A 2.5,4 0 1,0 164.5,225 A 2.5,4 0 1,0 169.5,225 Z
            " fill="url(#bone-shading)" />

            <path d="M 125,130 Q 150,140 175,130 Q 150,135 125,130 Z" fill="url(#bone-shading)" />
            <path d="M 130,165 Q 150,175 170,165 Q 150,170 130,165 Z" fill="url(#bone-shading)" />
            <path d="M 135,195 Q 150,205 165,195 Q 150,200 135,195 Z" fill="url(#bone-shading)" />
            <path d="M 140,225 Q 150,230 160,225 Q 150,228 140,225 Z" fill="url(#bone-shading)" />

            <path d="M 145,272 C 150,268 155,272 153,280 C 150,282 147,282 143,280 Z" fill="url(#bone-shading)" />
            <path d="M 144,282 C 150,280 153,282 151,290 C 149,292 147,292 145,290 Z" fill="url(#bone-shading)" />
            <path d="M 146,292 C 150,290 151,292 150,300 C 149,305 148,305 147,300 Z" fill="url(#bone-shading)" />

            <path d="
                M 335,70 
                C 340,80 360,80 365,70 
                C 370,60 380,80 380,85 
                C 390,85 405,95 410,105 
                C 405,130 395,160 380,190 
                C 370,220 360,250 355,270 
                C 352,275 348,275 345,270 
                C 340,250 330,220 320,190 
                C 305,160 295,130 290,105 
                C 295,95 310,85 320,85 
                C 320,80 330,60 335,70 Z

                M 321.5,120 A 3.5,5 0 1,0 314.5,120 A 3.5,5 0 1,0 321.5,120 Z 
                M 326,155 A 3,4.5 0 1,0 320,155 A 3,4.5 0 1,0 326,155 Z 
                M 331.5,190 A 2.5,4 0 1,0 326.5,190 A 2.5,4 0 1,0 331.5,190 Z 
                M 338,225 A 2,3 0 1,0 334,225 A 2,3 0 1,0 338,225 Z 
                
                M 385.5,120 A 3.5,5 0 1,0 378.5,120 A 3.5,5 0 1,0 385.5,120 Z 
                M 380,155 A 3,4.5 0 1,0 374,155 A 3,4.5 0 1,0 380,155 Z 
                M 373.5,190 A 2.5,4 0 1,0 368.5,190 A 2.5,4 0 1,0 373.5,190 Z 
                M 366,225 A 2,3 0 1,0 362,225 A 2,3 0 1,0 366,225 Z
            " fill="url(#bone-shading)" />

            <path d="M 345,272 C 350,268 355,272 353,280 C 350,282 347,282 343,280 Z" fill="url(#bone-shading)" />
            <path d="M 344,282 C 350,280 353,282 351,290 C 349,292 347,292 345,290 Z" fill="url(#bone-shading)" />
            <path d="M 346,292 C 350,290 351,292 350,300 C 349,305 348,305 347,300 Z" fill="url(#bone-shading)" />
        </g>
        
        <g id="landmarks-layer" class="interactive-layer">
            <path d="M 125,85 C 135,78 165,78 175,85 C 165,92 135,92 125,85 Z" fill="var(--accent)" />
            
            <path d="M 90,105 C 105,100 115,95 120,85 C 120,110 115,140 105,150 C 95,135 90,120 90,105 Z" fill="var(--accent)" />
            <path d="M 210,105 C 195,100 185,95 180,85 C 180,110 185,140 195,150 C 205,135 210,120 210,105 Z" fill="var(--accent)" />

            <ellipse cx="115" cy="120" rx="4" ry="6" fill="var(--accent)" />
            <ellipse cx="120" cy="155" rx="3.5" ry="5" fill="var(--accent)" />
            <ellipse cx="126" cy="190" rx="3" ry="4.5" fill="var(--accent)" />
            <ellipse cx="133" cy="225" rx="2.5" ry="4" fill="var(--accent)" />
            
            <ellipse cx="185" cy="120" rx="4" ry="6" fill="var(--accent)" />
            <ellipse cx="180" cy="155" rx="3.5" ry="5" fill="var(--accent)" />
            <ellipse cx="174" cy="190" rx="3" ry="4.5" fill="var(--accent)" />
            <ellipse cx="167" cy="225" rx="2.5" ry="4" fill="var(--accent)" />

            <path d="M 342,76 C 346,65 354,65 358,76 C 354,84 346,84 342,76 Z" fill="var(--accent)" />

            <path d="M 347,100 Q 355,105 347,120 Q 355,130 347,150 Q 355,160 348,180 Q 354,195 348,210 Q 354,220 348,230 L 352,230 Q 358,220 352,210 Q 358,195 352,180 Q 358,160 352,150 Q 358,130 352,120 Q 358,105 352,100 Z" fill="var(--accent)" />

            <path d="M 345,245 C 350,230 350,230 355,245 L 358,255 C 350,245 350,245 342,255 Z" fill="var(--accent)" />

            <ellipse cx="318" cy="120" rx="3.5" ry="5" fill="var(--accent)" />
            <ellipse cx="323" cy="155" rx="3" ry="4.5" fill="var(--accent)" />
            <ellipse cx="329" cy="190" rx="2.5" ry="4" fill="var(--accent)" />
            <ellipse cx="336" cy="225" rx="2" ry="3" fill="var(--accent)" />
            
            <ellipse cx="382" cy="120" rx="3.5" ry="5" fill="var(--accent)" />
            <ellipse cx="377" cy="155" rx="3" ry="4.5" fill="var(--accent)" />
            <ellipse cx="371" cy="190" rx="2.5" ry="4" fill="var(--accent)" />
            <ellipse cx="364" cy="225" rx="2" ry="3" fill="var(--accent)" />
        </g>
    </svg>`;
