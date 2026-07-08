svgDataStore['muscle_flexor_carpi_radialis'] = `<svg viewBox="0 0 400 650" xmlns="http://www.w3.org/2000/svg">
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

        <!-- Background Context (Humerus, Radius, Ulna, Carpals, Metacarpals, Context Muscles) -->
        <g class="svg-bg" opacity="0.4">
            
            <!-- Right Humerus (Distal, Anterior View) -->
            <!-- Medial epicondyle is on the left, Lateral on the right -->
            <path d="M 145,30 
                     L 205,30 
                     L 205,90 
                     C 230,100 245,115 235,130 
                     C 220,140 190,135 180,135 
                     C 160,135 130,145 115,130 
                     C 105,115 125,100 145,90 Z" 
                  fill="url(#bone-shading)" />
            <!-- Humerus Condyles contours -->
            <path d="M 130,135 C 145,155 160,155 175,135" fill="none" stroke="#475569" stroke-width="2" />
            <path d="M 235,130 C 220,150 200,150 185,135" fill="none" stroke="#475569" stroke-width="2" />

            <!-- Right Radius (Lateral / Right side of SVG) -->
            <path d="M 195,145 
                     L 230,145 
                     L 265,460 
                     L 225,460 Z" 
                  fill="url(#bone-shading)" />
            <path d="M 195,145 C 205,165 220,165 230,145 Z" fill="none" stroke="#475569" stroke-width="1.5" />

            <!-- Right Ulna (Medial / Left side of SVG) -->
            <path d="M 135,145 
                     L 180,145 
                     L 175,460 
                     L 145,460 Z" 
                  fill="url(#bone-shading)" />
            <path d="M 135,145 C 150,165 165,165 180,145 Z" fill="none" stroke="#475569" stroke-width="1.5" />

            <!-- Carpals (Wrist bones) -->
            <rect x="150" y="465" width="105" height="35" rx="12" fill="url(#bone-shading)" opacity="0.8" />

            <!-- Metacarpals (1-5) -->
            <!-- MC 1 (Thumb, lateral/right) -->
            <path d="M 255,480 L 295,540 L 285,550 L 245,490 Z" fill="url(#bone-shading)" />
            <!-- MC 2 (Index) -->
            <path d="M 235,500 L 255,590 L 240,595 L 220,500 Z" fill="url(#bone-shading)" />
            <!-- MC 3 (Middle) -->
            <path d="M 210,500 L 215,600 L 200,600 L 195,500 Z" fill="url(#bone-shading)" />
            <!-- MC 4 (Ring) -->
            <path d="M 185,500 L 175,590 L 160,590 L 170,500 Z" fill="url(#bone-shading)" />
            <!-- MC 5 (Pinky, medial/left) -->
            <path d="M 160,495 L 140,560 L 125,555 L 145,495 Z" fill="url(#bone-shading)" />

            <!-- Faint Context Muscles to give the forearm volume -->
            <!-- Brachioradialis (Lateral border) -->
            <path d="M 230,100 C 275,180 280,260 255,380 Z" fill="url(#muscle-shading)" opacity="0.25" />
            <!-- Flexor Carpi Ulnaris (Medial border) -->
            <path d="M 120,120 C 95,180 110,280 150,380 Z" fill="url(#muscle-shading)" opacity="0.25" />
            <!-- Palmaris Longus (Medial to FCR) -->
            <path d="M 125,120 C 145,180 160,250 165,300 C 160,260 140,180 125,120 Z" fill="url(#muscle-shading)" opacity="0.3" />

        </g>

        <!-- INTERACTIVE LAYERS -->
        
        <!-- Origin Layer: Medial epicondyle of humerus -->
        <g id="origin-layer" class="interactive-layer">
            <ellipse cx="122" cy="120" rx="9" ry="14" transform="rotate(15 122 120)" fill="var(--success)" />
        </g>
        
        <!-- Insertion Layer: Base of 2nd & 3rd metacarpals -->
        <g id="insertion-layer" class="interactive-layer">
            <!-- Base of Metacarpal 2 -->
            <ellipse cx="230" cy="505" rx="6" ry="9" transform="rotate(-15 230 505)" fill="var(--accent)" />
            <!-- Base of Metacarpal 3 -->
            <ellipse cx="205" cy="505" rx="5" ry="8" fill="var(--accent)" />
        </g>
        
        <!-- Action Layer: Main Muscle Belly and Tendons -->
        <g id="action-layer" class="interactive-layer">
            
            <!-- Muscle Belly -->
            <g id="action-belly">
                <!-- Fusiform belly running inferolaterally -->
                <path d="M 122,120 
                         C 135,160 175,220 196,290 
                         L 174,295 
                         C 150,230 115,160 115,120 Z" 
                      fill="url(#muscle-shading)" />
                      
                <!-- Muscle Fiber Striations -->
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.45" fill="none">
                    <path d="M 122,130 Q 145,190 178,290" />
                    <path d="M 126,135 Q 155,190 183,285" />
                    <path d="M 130,140 Q 165,195 188,280" />
                    <path d="M 120,135 Q 135,190 176,293" />
                </g>
            </g>
            
            <!-- Tendons & Aponeuroses -->
            <g id="action-tendon">
                <!-- Long robust tendon crossing the wrist and splitting to MC 2 & 3 -->
                <path d="M 196,290 
                         C 205,360 212,420 218,460 
                         C 219,475 220,490 221,495
                         L 232,495 
                         C 230,485 225,475 223,465 
                         L 211,460 
                         L 208,495 
                         L 197,495 
                         C 198,485 200,470 205,455 
                         C 195,410 185,360 174,295 Z" 
                      fill="url(#tendon-shading)" opacity="0.95" />
                      
                <!-- Tendon Striations & Connective Glints -->
                <g stroke="#f8fafc" stroke-width="1.2" opacity="0.5" fill="none">
                    <!-- Main tendon body -->
                    <path d="M 180,305 Q 192,365 204,445" />
                    <path d="M 186,305 Q 198,365 210,445" />
                    <path d="M 191,305 Q 203,365 214,445" />
                    
                    <!-- Split to MC 2 -->
                    <path d="M 215,455 Q 220,470 225,490" />
                    <path d="M 218,455 Q 223,470 228,490" />
                    
                    <!-- Split to MC 3 -->
                    <path d="M 207,455 Q 205,475 203,490" />
                    <path d="M 210,455 Q 208,475 206,490" />
                </g>
            </g>
            
        </g>
    </svg>`;
