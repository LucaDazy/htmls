svgDataStore['muscle_teres_minor'] = `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
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

        <!-- Background Context (Ribs, Scapula, Humerus, Faint Context Muscles) -->
        <g class="svg-bg" opacity="0.4">
            
            <!-- Deep Ribcage Context -->
            <g stroke="url(#bone-shading)" stroke-width="12" fill="none" stroke-linecap="round" opacity="0.5">
                <path d="M 150,180 C 100,180 60,200 40,240" />
                <path d="M 150,220 C 100,220 60,240 40,280" />
                <path d="M 150,260 C 100,260 60,280 40,320" />
                <path d="M 160,300 C 110,300 70,320 50,360" />
                <path d="M 180,340 C 130,340 90,360 70,400" />
            </g>

            <!-- Right Scapula (Posterior View) -->
            <path d="M 160,120 
                     C 150,180 155,260 175,310 
                     C 185,330 205,325 215,300 
                     C 235,240 250,190 270,150 
                     C 285,120 310,110 340,110 
                     C 320,80 290,90 270,100 
                     C 230,90 190,100 160,120 Z" 
                  fill="url(#bone-shading)" />
            <!-- Spine of Scapula -->
            <path d="M 165,135 Q 250,105 340,110" stroke="#475569" stroke-width="6" stroke-linecap="round" fill="none" opacity="0.7"/>

            <!-- Right Humerus (Posterior View) -->
            <path d="M 275,160 
                     L 285,450 
                     C 295,470 325,470 335,450 
                     L 325,160 
                     C 350,140 345,90 310,95 
                     C 280,100 265,140 275,160 Z" 
                  fill="url(#bone-shading)" />
            <!-- Humerus Head / Greater Tubercle Contours -->
            <path d="M 275,140 C 280,110 310,95 330,110" stroke="#475569" stroke-width="2" fill="none" opacity="0.5"/>

            <!-- Contextual Muscle: Infraspinatus (Fills fossa superior to Teres Minor) -->
            <path d="M 170,145 C 210,130 260,120 285,115 L 295,115 C 280,140 270,155 265,160 C 240,190 230,220 235,235 C 200,220 170,190 170,145 Z" fill="url(#muscle-shading)" opacity="0.6" />
            
            <!-- Contextual Muscle: Teres Major (Inferior to Teres Minor, dives anterior to humerus) -->
            <path d="M 180,315 C 220,310 250,260 268,205 Q 260,185 260,165 C 245,190 215,225 235,240 C 210,260 185,290 180,315 Z" fill="url(#muscle-shading)" opacity="0.6" />

            <!-- Contextual Muscle: Triceps Brachii Long Head (Passes anterior to Teres Minor, posterior to Teres Major) -->
            <!-- Drawn over Teres Major here, Teres Minor will overlay it natively -->
            <path d="M 265,155 C 275,180 275,220 270,300 L 250,300 C 255,220 255,180 255,160 Z" fill="url(#muscle-shading)" opacity="0.5" />
            <g stroke="#450a0a" stroke-width="1.5" opacity="0.3" fill="none">
                <path d="M 260,165 Q 265,220 260,300" />
            </g>
        </g>

        <!-- INTERACTIVE LAYERS -->
        
        <!-- Origin Layer: Lateral border of scapula (upper two-thirds) -->
        <g id="origin-layer" class="interactive-layer">
            <path d="M 235,235 C 248,195 260,170 265,160 L 258,155 C 253,165 240,190 228,230 Z" fill="var(--success)" />
        </g>
        
        <!-- Insertion Layer: Greater tubercle of humerus (inferior facet) -->
        <g id="insertion-layer" class="interactive-layer">
            <ellipse cx="282" cy="135" rx="5" ry="10" transform="rotate(-35 282 135)" fill="var(--accent)" />
        </g>
        
        <!-- Action Layer: Main Muscle Belly and Tendons -->
        <g id="action-layer" class="interactive-layer">
            
            <!-- Muscle Belly -->
            <g id="action-belly">
                <!-- Teres Minor Belly (Posterior to Triceps Long Head) -->
                <path d="M 265,160 
                         C 275,145 280,140 284,133 
                         L 272,149 
                         C 260,175 245,210 235,235 
                         C 248,195 260,170 265,160 Z" 
                      fill="url(#muscle-shading)" />
                      
                <!-- Muscle Fiber Striations -->
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.5" fill="none">
                    <path d="M 262,165 Q 272,150 281,137" />
                    <path d="M 258,175 Q 268,155 278,141" />
                    <path d="M 252,190 Q 262,165 275,145" />
                    <path d="M 245,210 Q 255,180 273,148" />
                </g>
            </g>
            
            <!-- Tendons & Aponeuroses -->
            <g id="action-tendon">
                <!-- Distal Tendon inserting onto the Greater Tubercle -->
                <path d="M 284,133 
                         Q 288,128 290,125 
                         L 278,142 
                         Q 275,146 272,149 Z" 
                      fill="url(#tendon-shading)" opacity="0.9" />
                
                <!-- Tendon Connective Glints -->
                <g stroke="#f8fafc" stroke-width="1.2" opacity="0.4" fill="none">
                    <path d="M 283,135 L 286,130" />
                    <path d="M 278,140 L 282,134" />
                    <path d="M 275,145 L 278,140" />
                </g>
            </g>
            
        </g>
    </svg>`;
