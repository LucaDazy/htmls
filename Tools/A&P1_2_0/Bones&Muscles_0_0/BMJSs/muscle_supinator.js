svgDataStore['muscle_supinator'] = `<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
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

        <!-- Background Context (Humerus, Radius, Ulna) -->
        <g class="svg-bg" opacity="0.4">
            
            <!-- Right Humerus (Distal) -->
            <path d="M 120,50 L 260,50 
                     L 265,110 
                     C 275,130 250,145 230,145 
                     C 210,150 190,140 175,145 
                     C 150,155 125,145 115,130 
                     C 105,110 115,80 120,50 Z" 
                  fill="url(#bone-shading)"/>
            
            <!-- Capitulum (Articulates with Radial Head) -->
            <circle cx="155" cy="140" r="15" fill="url(#bone-shading)" opacity="0.6"/>
            
            <!-- Trochlea (Articulates with Ulna) -->
            <path d="M 185,135 C 200,155 220,155 235,135 Z" fill="url(#bone-shading)" opacity="0.6"/>
            
            <!-- Lateral Epicondyle Highlight -->
            <path d="M 115,130 C 105,120 115,100 125,105" fill="none" stroke="#475569" stroke-width="2"/>

            <!-- Right Radius (Lateral / Left side of SVG) -->
            <path d="M 135,150 
                     C 150,145 160,145 175,150 
                     L 175,165 
                     C 165,175 165,185 170,200 
                     L 185,450 
                     L 125,450 
                     L 140,200 
                     C 145,185 145,175 135,165 Z" 
                  fill="url(#bone-shading)"/>
                  
            <!-- Radial Head details -->
            <path d="M 135,150 L 175,150 L 175,165 L 135,165 Z" fill="url(#bone-shading)" opacity="0.5"/>
            <path d="M 135,165 Q 155,170 175,165" fill="none" stroke="#475569" stroke-width="1.5"/>
            
            <!-- Radial Tuberosity -->
            <path d="M 170,200 C 182,210 182,225 172,235" fill="none" stroke="#475569" stroke-width="2"/>

            <!-- Right Ulna (Medial / Right side of SVG) -->
            <path d="M 185,155 
                     C 210,150 230,145 250,150 
                     L 270,180 
                     L 240,450 
                     L 200,450 
                     L 190,200 
                     C 185,190 180,170 185,155 Z" 
                  fill="url(#bone-shading)"/>
                  
            <!-- Coronoid Process -->
            <path d="M 185,155 C 190,165 200,165 210,160" fill="none" stroke="#475569" stroke-width="2"/>
            
            <!-- Supinator Crest of Ulna (Lateral surface below radial notch) -->
            <path d="M 188,180 Q 185,210 188,235" fill="none" stroke="#475569" stroke-width="2"/>

        </g>

        <!-- INTERACTIVE LAYERS -->
        
        <!-- Origin Layer: Lateral epicondyle of humerus and supinator crest of ulna -->
        <g id="origin-layer" class="interactive-layer">
            <!-- Origin 1: Lateral Epicondyle of Humerus -->
            <ellipse cx="120" cy="120" rx="8" ry="12" transform="rotate(30 120 120)" fill="var(--success)"/>
            
            <!-- Origin 2: Supinator Crest of Ulna -->
            <path d="M 188,180 Q 183,205 186,235 L 192,232 Q 189,205 194,180 Z" fill="var(--success)"/>
        </g>
        
        <!-- Insertion Layer: Anterior/Lateral surface of proximal third of radius -->
        <g id="insertion-layer" class="interactive-layer">
            <path d="M 137,175 C 150,175 160,185 167,198 C 172,208 178,225 178,255 L 171,260 C 155,260 142,250 140,240 C 135,210 138,190 137,175 Z" fill="var(--accent)"/>
        </g>
        
        <!-- Action Layer: Main Muscle Belly and Tendons -->
        <g id="action-layer" class="interactive-layer">
            
            <!-- Muscle Belly -->
            <g id="action-belly">
                <!-- Superficial and deep fibers wrapping the upper radius -->
                <path d="M 118,125 
                         C 110,155 125,215 135,260
                         C 145,265 165,265 178,255
                         C 185,240 190,210 188,180
                         C 175,185 165,155 155,145
                         C 140,135 125,120 118,125 Z" 
                      fill="url(#muscle-shading)" />
                      
                <!-- Muscle Fiber Striations representing the helical wrapping -->
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.45" fill="none">
                    <!-- Fibers originating from humerus (sweeping inferomedially) -->
                    <path d="M 125, 135 Q 140, 155 155, 170" />
                    <path d="M 122, 150 Q 140, 175 160, 190" />
                    <path d="M 125, 170 Q 145, 195 165, 210" />
                    <path d="M 128, 190 Q 150, 215 170, 230" />
                    
                    <!-- Fibers wrapping from behind (from ulnar crest) inserting on anterior radius -->
                    <path d="M 132, 210 Q 155, 235 173, 245" />
                    <path d="M 135, 235 Q 155, 250 170, 255" />
                    
                    <!-- Depth shadow indicating the fold/wrap of the superficial head -->
                    <path d="M 155, 145 Q 165, 160 170, 180" stroke="#f8fafc" stroke-width="2" opacity="0.15" />
                </g>
            </g>
            
            <!-- Tendons & Aponeuroses -->
            <g id="action-tendon">
                <!-- Tendinous Origin at Lateral Epicondyle -->
                <path d="M 118,125 
                         C 112,135 120,145 126,150 
                         C 132,135 128,125 118,125 Z" 
                      fill="url(#tendon-shading)" opacity="0.85"/>
                
                <!-- Tendinous Origin along the Supinator Crest of Ulna -->
                <path d="M 188,180 
                         Q 185,205 186,235 
                         C 192,225 194,205 194,180 Z" 
                      fill="url(#tendon-shading)" opacity="0.85"/>
                      
                <!-- Tendon Striations & Connective Glints -->
                <g stroke="#f8fafc" stroke-width="1.2" opacity="0.5" fill="none">
                    <line x1="120" y1="128" x2="124" y2="140" />
                    <line x1="124" y1="132" x2="128" y2="145" />
                    <line x1="190" y1="185" x2="190" y2="200" />
                    <line x1="188" y1="210" x2="188" y2="225" />
                </g>
            </g>
            
        </g>
    </svg>`;
