svgDataStore['muscle_rhomboid_major'] = `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
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

        <!-- Background Context (Spine, Ribcage, Scapula, Rhomboid Minor) -->
        <g class="svg-bg" opacity="0.4">
            <!-- Ribcage (Right side) -->
            <g stroke="url(#bone-shading)" stroke-width="12" fill="none" stroke-linecap="round" opacity="0.5">
                <path d="M 160,110 Q 250,120 350,170" /> <!-- Rib 1/2 area -->
                <path d="M 160,140 Q 250,150 350,200" /> <!-- Rib 3 -->
                <path d="M 160,170 Q 250,180 350,230" /> <!-- Rib 4 -->
                <path d="M 160,200 Q 250,210 350,260" /> <!-- Rib 5 -->
                <path d="M 160,230 Q 250,240 350,290" /> <!-- Rib 6 -->
                <path d="M 160,260 Q 250,270 350,320" /> <!-- Rib 7 -->
                <path d="M 160,290 Q 250,300 350,350" /> <!-- Rib 8 -->
                <path d="M 160,320 Q 250,330 350,380" /> <!-- Rib 9 -->
            </g>

            <!-- Vertebral Column (Thoracic Spine) -->
            <rect x="140" y="50" width="20" height="400" fill="url(#bone-shading)" />
            
            <!-- Spinous Processes (C7 down to T8) -->
            <g fill="url(#bone-shading)" stroke="#475569" stroke-width="1.5">
                <rect x="145" y="80" width="10" height="20" rx="3" />  <!-- C7 -->
                <rect x="145" y="110" width="10" height="20" rx="3" /> <!-- T1 -->
                <rect x="145" y="140" width="10" height="20" rx="3" /> <!-- T2 -->
                <rect x="145" y="170" width="10" height="20" rx="3" /> <!-- T3 -->
                <rect x="145" y="200" width="10" height="20" rx="3" /> <!-- T4 -->
                <rect x="145" y="230" width="10" height="20" rx="3" /> <!-- T5 -->
                <rect x="145" y="260" width="10" height="20" rx="3" /> <!-- T6 -->
                <rect x="145" y="290" width="10" height="20" rx="3" /> <!-- T7 -->
                <rect x="145" y="320" width="10" height="20" rx="3" /> <!-- T8 -->
            </g>

            <!-- Right Scapula (Posterior View) -->
            <path d="M 290,160 
                     L 300,200 
                     L 260,380 
                     L 380,200 
                     L 350,150 
                     C 320,140 300,150 290,160 Z" 
                  fill="url(#bone-shading)" />
            <!-- Spine of Scapula -->
            <path d="M 300,200 Q 340,180 390,160" fill="none" stroke="#475569" stroke-width="6" stroke-linecap="round" opacity="0.8" />
            <!-- Scapula Medial Border Highlight -->
            <path d="M 290,160 L 300,200 L 260,380" fill="none" stroke="#475569" stroke-width="3" opacity="0.6" />

            <!-- Contextual Muscle: Rhomboid Minor (Superior to Rhomboid Major) -->
            <path d="M 150,85 
                     L 300,195 
                     L 295,215 
                     L 150,125 Z" 
                  fill="url(#muscle-shading)" opacity="0.3" />
            <path d="M 150,95 L 297,205" fill="none" stroke="#450a0a" stroke-width="1.5" opacity="0.2" />
        </g>

        <!-- INTERACTIVE LAYERS -->
        
        <!-- Origin Layer: Spinous processes of upper thoracic vertebrae (T2-T5) -->
        <g id="origin-layer" class="interactive-layer">
            <path d="M 140,140 L 155,140 L 155,250 L 140,250 Z" fill="var(--success)" />
        </g>
        
        <!-- Insertion Layer: Medial border of scapula (between spine root and inferior angle) -->
        <g id="insertion-layer" class="interactive-layer">
            <!-- Path tracing the medial border insertion site -->
            <path d="M 292,215 L 302,220 L 267,385 L 257,380 Z" fill="var(--accent)" />
        </g>
        
        <!-- Action Layer: Main Muscle Belly and Tendons -->
        <g id="action-layer" class="interactive-layer">
            
            <!-- Muscle Belly -->
            <g id="action-belly">
                <!-- Large parallelogram / rhomboid shape -->
                <path d="M 155,140 
                         L 295,220 
                         L 262,380 
                         L 155,250 Z" 
                      fill="url(#muscle-shading)" />
                      
                <!-- Muscle Fiber Striations (Running inferolaterally) -->
                <g stroke="#450a0a" stroke-width="2" opacity="0.45" fill="none">
                    <path d="M 155,155 L 290,235" />
                    <path d="M 155,170 L 285,250" />
                    <path d="M 155,185 L 280,265" />
                    <path d="M 155,200 L 275,280" />
                    <path d="M 155,215 L 270,295" />
                    <path d="M 155,230 L 265,310" />
                    <path d="M 155,245 L 260,325" />
                    <!-- Deeper fill striations -->
                    <path d="M 200,200 L 270,345" opacity="0.5" stroke-width="1.5" />
                    <path d="M 190,225 L 265,360" opacity="0.5" stroke-width="1.5" />
                </g>
            </g>
            
            <!-- Tendons & Aponeuroses -->
            <g id="action-tendon">
                <!-- Proximal Aponeurosis (Origin at Spinous Processes) -->
                <path d="M 150,140 L 175,145 L 170,260 L 150,250 Z" fill="url(#tendon-shading)" opacity="0.75" />
                
                <!-- Distal Aponeurosis (Insertion at Medial Border of Scapula) -->
                <path d="M 280,210 L 298,222 L 265,380 L 250,365 Z" fill="url(#tendon-shading)" opacity="0.75" />
                
                <!-- Tendon Striations & Glints -->
                <g stroke="#f8fafc" stroke-width="1.5" opacity="0.4" fill="none">
                    <!-- Proximal glints -->
                    <line x1="155" y1="160" x2="165" y2="162" />
                    <line x1="155" y1="190" x2="165" y2="192" />
                    <line x1="155" y1="220" x2="165" y2="222" />
                    <line x1="155" y1="245" x2="162" y2="247" />
                    
                    <!-- Distal glints -->
                    <line x1="285" y1="225" x2="292" y2="228" />
                    <line x1="275" y1="265" x2="282" y2="268" />
                    <line x1="265" y1="305" x2="272" y2="308" />
                    <line x1="255" y1="345" x2="262" y2="348" />
                </g>
            </g>
            
        </g>
    </svg>`;
