svgDataStore['muscle_infraspinatus'] = `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
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

            <!-- Contextual Muscle: Supraspinatus (Above the spine) -->
            <path d="M 165,130 C 200,105 250,95 285,100 C 300,105 315,115 325,110 C 290,85 220,80 170,115 Z" fill="url(#muscle-shading)" opacity="0.6" />

            <!-- Contextual Muscle: Teres Minor (Inferior to Infraspinatus) -->
            <path d="M 235,260 C 255,220 280,170 305,140 C 315,135 325,145 315,155 C 285,185 260,240 245,275 C 240,270 235,265 235,260 Z" fill="url(#muscle-shading)" opacity="0.8" />
            
            <!-- Contextual Muscle: Teres Major (Inferior to Teres Minor) -->
            <path d="M 180,315 C 220,310 250,260 268,205 Q 260,185 260,165 C 245,190 215,225 235,240 C 210,260 185,290 180,315 Z" fill="url(#muscle-shading)" opacity="0.5" />

        </g>

        <!-- INTERACTIVE LAYERS -->
        
        <!-- Origin Layer: Infraspinous fossa of scapula -->
        <g id="origin-layer" class="interactive-layer">
            <path d="M 165,145 
                     C 210,125 260,120 285,120 
                     C 275,140 265,160 255,180 
                     C 240,210 210,250 180,300 
                     C 165,240 160,180 165,145 Z" 
                  fill="var(--success)" />
        </g>
        
        <!-- Insertion Layer: Greater tubercle of humerus (middle facet) -->
        <g id="insertion-layer" class="interactive-layer">
            <ellipse cx="325" cy="122" rx="7" ry="12" transform="rotate(-20 325 122)" fill="var(--accent)" />
        </g>
        
        <!-- Action Layer: Main Muscle Belly and Tendons -->
        <g id="action-layer" class="interactive-layer">
            
            <!-- Muscle Belly -->
            <g id="action-belly">
                <!-- Large, triangular multipennate belly filling the infraspinous fossa -->
                <path d="M 162,142 
                         C 210,120 260,115 285,115 
                         C 295,125 305,125 310,125 
                         C 285,150 265,190 240,240 
                         C 230,260 205,285 180,305 
                         C 165,240 155,180 162,142 Z" 
                      fill="url(#muscle-shading)" />
                      
                <!-- Muscle Fiber Striations converging to the central aponeurosis and tendon -->
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.45" fill="none">
                    <!-- Superior Fibers -->
                    <path d="M 168,148 Q 225,135 285,125" />
                    <path d="M 165,165 Q 230,145 295,135" />
                    <path d="M 162,185 Q 230,160 300,140" />
                    <!-- Middle Fibers -->
                    <path d="M 162,205 Q 230,175 305,145" />
                    <path d="M 165,225 Q 230,190 295,150" />
                    <path d="M 168,245 Q 225,200 285,155" />
                    <!-- Inferior Fibers -->
                    <path d="M 172,265 Q 220,215 275,165" />
                    <path d="M 175,285 Q 215,230 265,175" />
                    <path d="M 180,300 Q 210,245 255,185" />
                </g>
            </g>
            
            <!-- Tendons & Aponeuroses -->
            <g id="action-tendon">
                <!-- Broad Infraspinatus Aponeurosis covering the medial/inferior belly -->
                <path d="M 162,142 C 200,130 240,125 250,140 C 230,180 195,240 180,305 C 165,240 155,180 162,142 Z" fill="url(#tendon-shading)" opacity="0.35" />
                
                <!-- Distal Strong Tendon (Inserting onto Greater Tubercle) -->
                <path d="M 285,115 
                         C 305,115 320,118 325,122 
                         C 328,130 325,135 320,138 
                         C 310,135 290,140 275,165 
                         C 285,140 290,125 285,115 Z" 
                      fill="url(#tendon-shading)" opacity="0.9" />
                
                <!-- Tendon Striations & Glints -->
                <g stroke="#f8fafc" stroke-width="1.2" opacity="0.4" fill="none">
                    <path d="M 280,120 Q 305,120 320,122" />
                    <path d="M 275,128 Q 305,125 325,125" />
                    <path d="M 270,135 Q 300,130 320,132" />
                    <path d="M 260,150 Q 285,140 310,135" />
                </g>
            </g>
            
        </g>
    </svg>`;
