svgDataStore['muscle_internal_oblique'] = `<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
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

        <!-- Background Context (Ribcage, Sternum, Pelvis, Lumbar Spine) -->
        <g class="svg-bg" opacity="0.4">
            
            <!-- Lumbar Spine Context -->
            <rect x="185" y="300" width="30" height="170" fill="url(#bone-shading)" opacity="0.5" />
            
            <!-- Lower Sternum and Xiphoid Process -->
            <path d="M 190,50 L 210,50 L 210,130 L 205,160 L 195,160 L 190,130 Z" fill="url(#bone-shading)" />
            <path d="M 195,160 L 205,160 L 200,180 Z" fill="url(#bone-shading)" />

            <!-- Pelvis (Ilium, Iliac Crest, Pubic Symphysis) -->
            <!-- Left Ilium -->
            <path d="M 190,470 L 160,470 C 120,460 80,430 60,390 C 50,370 80,350 110,360 C 130,370 140,390 150,420 C 160,450 180,460 190,470 Z" fill="url(#bone-shading)" />
            <!-- Right Ilium -->
            <path d="M 210,470 L 240,470 C 280,460 320,430 340,390 C 350,370 320,350 290,360 C 270,370 260,390 250,420 C 240,450 220,460 210,470 Z" fill="url(#bone-shading)" />
            <!-- Pubic Symphysis -->
            <path d="M 190,470 L 210,470 L 210,490 L 190,490 Z" fill="url(#bone-shading)" />

            <!-- Ribcage (Ribs 7-12) -->
            <g fill="none" stroke="url(#bone-shading)" stroke-width="10" stroke-linecap="round" opacity="0.8">
                <!-- Left Ribs -->
                <path d="M 160,180 Q 100,220 40,240" /> <!-- Rib 7 -->
                <path d="M 140,210 Q 90,250 40,270" /> <!-- Rib 8 -->
                <path d="M 120,240 Q 80,280 45,300" /> <!-- Rib 9 -->
                <path d="M 110,270 Q 80,310 55,330" /> <!-- Rib 10 -->
                <path d="M 100,300 Q 80,330 65,360" /> <!-- Rib 11 -->
                <path d="M 95,330 Q 85,355 80,380" /> <!-- Rib 12 -->
                
                <!-- Right Ribs -->
                <path d="M 240,180 Q 300,220 360,240" /> <!-- Rib 7 -->
                <path d="M 260,210 Q 310,250 360,270" /> <!-- Rib 8 -->
                <path d="M 280,240 Q 320,280 355,300" /> <!-- Rib 9 -->
                <path d="M 290,270 Q 320,310 345,330" /> <!-- Rib 10 -->
                <path d="M 300,300 Q 320,330 335,360" /> <!-- Rib 11 -->
                <path d="M 305,330 Q 315,355 320,380" /> <!-- Rib 12 -->
            </g>

        </g>

        <!-- INTERACTIVE LAYERS -->
        
        <!-- Origin Layer: Iliac crest & lumbodorsal fascia -->
        <g id="origin-layer" class="interactive-layer">
            <!-- Left Iliac Crest & Lumbodorsal Fascia -->
            <path d="M 60,390 C 80,370 120,400 140,430 L 130,438 C 110,410 75,385 55,400 Z" fill="var(--success)" />
            <ellipse cx="45" cy="340" rx="4" ry="8" transform="rotate(10 45 340)" fill="var(--success)" />
            <ellipse cx="42" cy="310" rx="4" ry="8" transform="rotate(5 42 310)" fill="var(--success)" />
            <ellipse cx="42" cy="280" rx="4" ry="8" transform="rotate(0 42 280)" fill="var(--success)" />
            
            <!-- Right Iliac Crest & Lumbodorsal Fascia -->
            <path d="M 340,390 C 320,370 280,400 260,430 L 270,438 C 290,410 325,385 345,400 Z" fill="var(--success)" />
            <ellipse cx="355" cy="340" rx="4" ry="8" transform="rotate(-10 355 340)" fill="var(--success)" />
            <ellipse cx="358" cy="310" rx="4" ry="8" transform="rotate(-5 358 310)" fill="var(--success)" />
            <ellipse cx="358" cy="280" rx="4" ry="8" transform="rotate(0 358 280)" fill="var(--success)" />
        </g>
        
        <!-- Insertion Layer: Inferior ribs, xiphoid process & linea alba -->
        <g id="insertion-layer" class="interactive-layer">
            <!-- Linea Alba (Midline insertion) -->
            <rect x="198" y="160" width="4" height="310" rx="2" fill="var(--accent)" />
            
            <!-- Xiphoid Process Tip -->
            <polygon points="195,175 205,175 200,185" fill="var(--accent)" />
            
            <!-- Left Inferior Ribs Insertions -->
            <ellipse cx="140" cy="210" rx="10" ry="4" transform="rotate(20 140 210)" fill="var(--accent)" />
            <ellipse cx="120" cy="240" rx="10" ry="4" transform="rotate(25 120 240)" fill="var(--accent)" />
            <ellipse cx="110" cy="270" rx="10" ry="4" transform="rotate(30 110 270)" fill="var(--accent)" />
            <ellipse cx="100" cy="300" rx="10" ry="4" transform="rotate(35 100 300)" fill="var(--accent)" />
            
            <!-- Right Inferior Ribs Insertions -->
            <ellipse cx="260" cy="210" rx="10" ry="4" transform="rotate(-20 260 210)" fill="var(--accent)" />
            <ellipse cx="280" cy="240" rx="10" ry="4" transform="rotate(-25 280 240)" fill="var(--accent)" />
            <ellipse cx="290" cy="270" rx="10" ry="4" transform="rotate(-30 290 270)" fill="var(--accent)" />
            <ellipse cx="300" cy="300" rx="10" ry="4" transform="rotate(-35 300 300)" fill="var(--accent)" />
        </g>
        
        <!-- Action Layer: Main Muscle Belly and Tendons -->
        <g id="action-layer" class="interactive-layer">
            
            <!-- Muscle Belly -->
            <g id="action-belly">
                <!-- Left Internal Oblique Belly -->
                <path d="M 60,390 
                         C 40,320 40,250 60,195 
                         C 80,215 110,230 140,240 
                         C 145,300 145,370 140,430 
                         C 110,405 80,380 60,390 Z" 
                      fill="url(#muscle-shading)" />
                      
                <!-- Right Internal Oblique Belly -->
                <path d="M 340,390 
                         C 360,320 360,250 340,195 
                         C 320,215 290,230 260,240 
                         C 255,300 255,370 260,430 
                         C 290,405 320,380 340,390 Z" 
                      fill="url(#muscle-shading)" />

                <!-- Muscle Fiber Striations (Running Superomedially - up and in) -->
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.5" fill="none">
                    <!-- Left Striations -->
                    <path d="M 60,370 Q 90,340 142,310" />
                    <path d="M 50,340 Q 85,310 143,280" />
                    <path d="M 46,310 Q 85,280 141,250" />
                    <path d="M 46,280 Q 85,250 135,225" />
                    <path d="M 48,250 Q 80,225 125,205" />
                    <path d="M 52,220 Q 80,205 105,190" />
                    
                    <!-- Right Striations -->
                    <path d="M 340,370 Q 310,340 258,310" />
                    <path d="M 350,340 Q 315,310 257,280" />
                    <path d="M 354,310 Q 315,280 259,250" />
                    <path d="M 354,280 Q 315,250 265,225" />
                    <path d="M 352,250 Q 320,225 275,205" />
                    <path d="M 348,220 Q 320,205 295,190" />
                </g>
            </g>
            
            <!-- Tendons & Aponeuroses -->
            <g id="action-tendon">
                <!-- Anterior Aponeurosis (shield meeting at linea alba) -->
                <path d="M 140,240 
                         C 145,300 145,370 140,430 
                         L 200,470 L 200,160 
                         C 175,185 155,210 140,240 Z" 
                      fill="url(#tendon-shading)" opacity="0.85" />
                      
                <path d="M 260,240 
                         C 255,300 255,370 260,430 
                         L 200,470 L 200,160 
                         C 225,185 245,210 260,240 Z" 
                      fill="url(#tendon-shading)" opacity="0.85" />
                
                <!-- Tendinous Striations in the aponeurosis (matching muscle fiber direction) -->
                <g stroke="#f8fafc" stroke-width="1.5" opacity="0.5" fill="none">
                    <!-- Left Aponeurosis Striations -->
                    <path d="M 142,310 Q 170,290 200,270" />
                    <path d="M 143,280 Q 170,260 200,240" />
                    <path d="M 141,250 Q 170,230 200,210" />
                    <path d="M 135,225 Q 165,205 200,180" />
                    
                    <!-- Right Aponeurosis Striations -->
                    <path d="M 258,310 Q 230,290 200,270" />
                    <path d="M 257,280 Q 230,260 200,240" />
                    <path d="M 259,250 Q 230,230 200,210" />
                    <path d="M 265,225 Q 235,205 200,180" />
                </g>
                
                <!-- Linea Alba central emphasis -->
                <line x1="200" y1="160" x2="200" y2="470" stroke="#f8fafc" stroke-width="2" opacity="0.7" />
            </g>
            
        </g>
    </svg>`;
