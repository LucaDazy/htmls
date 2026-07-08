svgDataStore['muscle_rhomboid_minor'] = `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
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

        <!-- Background Context (Spine, Ribcage, Scapula, Rhomboid Major) -->
        <g class="svg-bg" opacity="0.4">
            <!-- Ribcage (Right side) -->
            <g stroke="url(#bone-shading)" stroke-width="12" fill="none" stroke-linecap="round" opacity="0.5">
                <path d="M 160,110 Q 250,120 350,170" />
                <path d="M 160,140 Q 250,150 350,200" />
                <path d="M 160,170 Q 250,180 350,230" />
                <path d="M 160,200 Q 250,210 350,260" />
                <path d="M 160,230 Q 250,240 350,290" />
                <path d="M 160,260 Q 250,270 350,320" />
                <path d="M 160,290 Q 250,300 350,350" />
                <path d="M 160,320 Q 250,330 350,380" />
            </g>

            <!-- Vertebral Column (Cervicothoracic Spine) -->
            <rect x="140" y="50" width="20" height="400" fill="url(#bone-shading)" />
            
            <!-- Spinous Processes -->
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

            <!-- Contextual Muscle: Rhomboid Major (Inferior to Rhomboid Minor) -->
            <path d="M 155,145 
                     L 292,225 
                     L 262,380 
                     L 155,255 Z" 
                  fill="url(#muscle-shading)" opacity="0.3" />
            <!-- Faint Rhomboid Major Striations -->
            <g stroke="#450a0a" stroke-width="1.5" opacity="0.2" fill="none">
                <path d="M 155,160 L 285,245" />
                <path d="M 155,190 L 275,285" />
                <path d="M 155,220 L 265,325" />
            </g>
        </g>

        <!-- INTERACTIVE LAYERS -->
        
        <!-- Origin Layer: Spinous processes of C7 and T1 -->
        <g id="origin-layer" class="interactive-layer">
            <path d="M 140,80 L 155,80 L 155,130 L 140,130 Z" fill="var(--success)" />
        </g>
        
        <!-- Insertion Layer: Medial border of scapula (root of the spine) -->
        <g id="insertion-layer" class="interactive-layer">
            <path d="M 293,188 L 303,192 L 295,215 L 285,210 Z" fill="var(--accent)" />
        </g>
        
        <!-- Action Layer: Main Muscle Belly and Tendons -->
        <g id="action-layer" class="interactive-layer">
            
            <!-- Muscle Belly -->
            <g id="action-belly">
                <!-- Small quadrilateral/cylindrical shape -->
                <path d="M 155,80 
                         L 298,193 
                         L 290,215 
                         L 155,130 Z" 
                      fill="url(#muscle-shading)" />
                      
                <!-- Muscle Fiber Striations (Running inferolaterally) -->
                <g stroke="#450a0a" stroke-width="2" opacity="0.45" fill="none">
                    <path d="M 155,90 L 295,198" />
                    <path d="M 155,100 L 293,203" />
                    <path d="M 155,110 L 291,208" />
                    <path d="M 155,120 L 290,212" />
                </g>
            </g>
            
            <!-- Tendons & Aponeuroses -->
            <g id="action-tendon">
                <!-- Proximal Aponeurosis (Origin at Spinous Processes) -->
                <path d="M 150,80 L 175,85 L 170,132 L 150,130 Z" fill="url(#tendon-shading)" opacity="0.75" />
                
                <!-- Distal Aponeurosis (Insertion at Medial Border of Scapula) -->
                <path d="M 275,188 L 298,193 L 290,215 L 268,210 Z" fill="url(#tendon-shading)" opacity="0.75" />
                
                <!-- Tendon Striations & Glints -->
                <g stroke="#f8fafc" stroke-width="1.5" opacity="0.4" fill="none">
                    <!-- Proximal glints -->
                    <line x1="155" y1="90" x2="165" y2="92" />
                    <line x1="155" y1="105" x2="165" y2="107" />
                    <line x1="155" y1="120" x2="165" y2="122" />
                    
                    <!-- Distal glints -->
                    <line x1="280" y1="195" x2="288" y2="197" />
                    <line x1="275" y1="205" x2="283" y2="207" />
                </g>
            </g>
            
        </g>
    </svg>`;
