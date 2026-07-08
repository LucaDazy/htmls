svgDataStore['muscle_brachialis'] = `<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
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

        <!-- Background Context (Humerus, Ulna, Radius) -->
        <g class="svg-bg" opacity="0.4">
            
            <!-- Right Humerus (Anterior View) -->
            <!-- Medial is left, Lateral is right -->
            <path d="M 185,50 
                     L 215,50 
                     L 210,150 
                     C 210,200 215,250 235,310 
                     C 245,330 240,345 225,345 
                     C 200,345 190,340 175,345 
                     C 160,345 155,330 165,310 
                     C 185,250 190,200 190,150 Z" 
                  fill="url(#bone-shading)" />
                  
            <!-- Humerus Condyles/Epicondyles details -->
            <path d="M 165,310 C 150,330 160,345 175,345" fill="none" stroke="#475569" stroke-width="2" />
            <path d="M 235,310 C 250,330 240,345 225,345" fill="none" stroke="#475569" stroke-width="2" />
            <path d="M 185,335 C 195,325 205,325 215,335" fill="none" stroke="#475569" stroke-width="1.5" />

            <!-- Right Ulna (Medial / Left side of SVG) -->
            <path d="M 165,340 
                     C 185,340 195,350 190,380 
                     L 160,500 
                     L 130,500 
                     L 150,380 
                     C 150,360 155,345 165,340 Z" 
                  fill="url(#bone-shading)" />
            <!-- Coronoid process contour -->
            <path d="M 165,340 C 175,355 185,355 190,345" fill="none" stroke="#475569" stroke-width="2" />

            <!-- Right Radius (Lateral / Right side of SVG) -->
            <path d="M 205,345 
                     C 225,345 235,350 240,365 
                     L 265,500 
                     L 235,500 
                     L 210,380 
                     C 205,360 195,350 205,345 Z" 
                  fill="url(#bone-shading)" />
            <!-- Radial head contour -->
            <path d="M 205,345 L 230,345 L 235,355 L 205,355 Z" fill="url(#bone-shading)" stroke="#475569" stroke-width="1" />
            
            <!-- Radioulnar Joint Line -->
            <path d="M 190,370 L 207,370" stroke="#475569" fill="none" stroke-width="2" opacity="0.6" />

        </g>

        <!-- INTERACTIVE LAYERS -->
        
        <!-- Origin Layer: Anterior distal surface of humerus -->
        <!-- Embraces the deltoid tuberosity, creating a V-shape superiorly -->
        <g id="origin-layer" class="interactive-layer">
            <path d="M 170,160 
                     L 195,190 
                     L 220,160 
                     C 230,200 230,250 215,310 
                     C 200,315 180,315 165,310 
                     C 150,250 150,200 170,160 Z" 
                  fill="var(--success)" />
        </g>
        
        <!-- Insertion Layer: Coronoid process of ulna -->
        <g id="insertion-layer" class="interactive-layer">
            <ellipse cx="178" cy="365" rx="9" ry="14" transform="rotate(-15 178 365)" fill="var(--accent)" />
        </g>
        
        <!-- Action Layer: Main Muscle Belly and Tendons -->
        <g id="action-layer" class="interactive-layer">
            
            <!-- Muscle Belly -->
            <g id="action-belly">
                <path d="M 170,160 
                         L 195,190 
                         L 220,160 
                         C 240,210 245,260 225,320 
                         C 210,340 190,360 175,365 
                         C 160,350 145,320 150,270 
                         C 152,220 155,190 170,160 Z" 
                      fill="url(#muscle-shading)" />
                      
                <!-- Muscle Fiber Striations -->
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.45" fill="none">
                    <path d="M 175,175 Q 180,260 172,345" />
                    <path d="M 185,185 Q 195,260 180,350" />
                    <path d="M 195,195 Q 210,260 190,340" />
                    <path d="M 205,185 Q 225,250 200,320" />
                    <path d="M 215,175 Q 235,240 210,300" />
                    <path d="M 165,185 Q 160,250 162,320" />
                    <path d="M 157,210 Q 152,260 157,300" />
                </g>
            </g>
            
            <!-- Tendons & Aponeuroses -->
            <g id="action-tendon">
                <!-- Distal Tendon inserting onto the Ulna -->
                <path d="M 158,310 
                         C 165,340 170,360 175,365 
                         C 185,350 205,330 215,310 
                         C 200,325 175,325 158,310 Z" 
                      fill="url(#tendon-shading)" opacity="0.85" />
                
                <!-- Tendon Striations & Glints -->
                <g stroke="#f8fafc" stroke-width="1.5" opacity="0.4" fill="none">
                    <path d="M 165,325 Q 172,345 175,360" />
                    <path d="M 175,330 Q 180,345 178,358" />
                    <path d="M 185,325 Q 190,340 182,355" />
                </g>
            </g>
            
        </g>
    </svg>`;
