svgDataStore['muscle_external_oblique'] = `<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
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

            <!-- Ribcage (Ribs 5-12) -->
            <g fill="none" stroke="url(#bone-shading)" stroke-width="10" stroke-linecap="round" opacity="0.8">
                <!-- Left Ribs -->
                <path d="M 190,140 Q 120,160 50,180" /> <!-- Rib 5 -->
                <path d="M 180,160 Q 110,190 45,210" /> <!-- Rib 6 -->
                <path d="M 160,180 Q 100,220 40,240" /> <!-- Rib 7 -->
                <path d="M 140,210 Q 90,250 40,270" /> <!-- Rib 8 -->
                <path d="M 120,240 Q 80,280 45,300" /> <!-- Rib 9 -->
                <path d="M 110,270 Q 80,310 55,330" /> <!-- Rib 10 -->
                <path d="M 100,300 Q 80,330 65,360" /> <!-- Rib 11 -->
                <path d="M 95,330 Q 85,355 80,380" /> <!-- Rib 12 -->
                
                <!-- Right Ribs -->
                <path d="M 210,140 Q 280,160 350,180" /> <!-- Rib 5 -->
                <path d="M 220,160 Q 290,190 355,210" /> <!-- Rib 6 -->
                <path d="M 240,180 Q 300,220 360,240" /> <!-- Rib 7 -->
                <path d="M 260,210 Q 310,250 360,270" /> <!-- Rib 8 -->
                <path d="M 280,240 Q 320,280 355,300" /> <!-- Rib 9 -->
                <path d="M 290,270 Q 320,310 345,330" /> <!-- Rib 10 -->
                <path d="M 300,300 Q 320,330 335,360" /> <!-- Rib 11 -->
                <path d="M 305,330 Q 315,355 320,380" /> <!-- Rib 12 -->
            </g>

        </g>

        <!-- INTERACTIVE LAYERS -->
        
        <!-- Origin Layer: Outer surfaces of lower 8 ribs (Ribs 5-12) -->
        <g id="origin-layer" class="interactive-layer">
            <!-- Left Rib Origins -->
            <ellipse cx="50" cy="180" rx="6" ry="10" transform="rotate(20 50 180)" fill="var(--success)" />
            <ellipse cx="45" cy="210" rx="6" ry="10" transform="rotate(15 45 210)" fill="var(--success)" />
            <ellipse cx="40" cy="240" rx="6" ry="10" transform="rotate(10 40 240)" fill="var(--success)" />
            <ellipse cx="40" cy="270" rx="6" ry="10" transform="rotate(5 40 270)" fill="var(--success)" />
            <ellipse cx="45" cy="300" rx="6" ry="10" transform="rotate(0 45 300)" fill="var(--success)" />
            <ellipse cx="55" cy="330" rx="6" ry="10" transform="rotate(-10 55 330)" fill="var(--success)" />
            <ellipse cx="65" cy="360" rx="6" ry="10" transform="rotate(-20 65 360)" fill="var(--success)" />
            <ellipse cx="80" cy="380" rx="6" ry="10" transform="rotate(-30 80 380)" fill="var(--success)" />
            
            <!-- Right Rib Origins -->
            <ellipse cx="350" cy="180" rx="6" ry="10" transform="rotate(-20 350 180)" fill="var(--success)" />
            <ellipse cx="355" cy="210" rx="6" ry="10" transform="rotate(-15 355 210)" fill="var(--success)" />
            <ellipse cx="360" cy="240" rx="6" ry="10" transform="rotate(-10 360 240)" fill="var(--success)" />
            <ellipse cx="360" cy="270" rx="6" ry="10" transform="rotate(-5 360 270)" fill="var(--success)" />
            <ellipse cx="355" cy="300" rx="6" ry="10" transform="rotate(0 355 300)" fill="var(--success)" />
            <ellipse cx="345" cy="330" rx="6" ry="10" transform="rotate(10 345 330)" fill="var(--success)" />
            <ellipse cx="335" cy="360" rx="6" ry="10" transform="rotate(20 335 360)" fill="var(--success)" />
            <ellipse cx="320" cy="380" rx="6" ry="10" transform="rotate(30 320 380)" fill="var(--success)" />
        </g>
        
        <!-- Insertion Layer: Iliac crest & Linea Alba -->
        <g id="insertion-layer" class="interactive-layer">
            <!-- Linea Alba (Midline insertion) -->
            <rect x="197" y="170" width="6" height="300" rx="2" fill="var(--accent)" />
            
            <!-- Left Iliac Crest & Pubic Tubercle -->
            <path d="M 140,430 C 130,425 110,405 80,390 L 75,395 C 105,410 125,435 140,435 Z" fill="var(--accent)" />
            <ellipse cx="190" cy="470" rx="6" ry="4" fill="var(--accent)" />
            
            <!-- Right Iliac Crest & Pubic Tubercle -->
            <path d="M 260,430 C 270,425 290,405 320,390 L 325,395 C 295,410 275,435 260,435 Z" fill="var(--accent)" />
            <ellipse cx="210" cy="470" rx="6" ry="4" fill="var(--accent)" />
        </g>
        
        <!-- Action Layer: Main Muscle Belly and Tendons -->
        <g id="action-layer" class="interactive-layer">
            
            <!-- Muscle Belly -->
            <g id="action-belly">
                <!-- Left External Oblique Belly -->
                <path d="M 125,180 
                         C 100,175 75,185 50,195 
                         C 40,240 40,300 55,345 
                         C 75,380 100,410 140,430 
                         C 120,350 120,250 125,180 Z" 
                      fill="url(#muscle-shading)" />
                      
                <!-- Right External Oblique Belly -->
                <path d="M 275,180 
                         C 300,175 325,185 350,195 
                         C 360,240 360,300 345,345 
                         C 325,380 300,410 260,430 
                         C 280,350 280,250 275,180 Z" 
                      fill="url(#muscle-shading)" />

                <!-- Muscle Fiber Striations (Running Inferomedially) -->
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.5" fill="none">
                    <!-- Left Striations -->
                    <path d="M 60,205 Q 90,230 124,250" />
                    <path d="M 50,235 Q 80,260 122,285" />
                    <path d="M 50,265 Q 85,295 122,315" />
                    <path d="M 55,295 Q 90,325 125,345" />
                    <path d="M 65,330 Q 100,360 130,380" />
                    <path d="M 85,365 Q 115,395 136,410" />
                    
                    <!-- Right Striations -->
                    <path d="M 340,205 Q 310,230 276,250" />
                    <path d="M 350,235 Q 320,260 278,285" />
                    <path d="M 350,265 Q 315,295 278,315" />
                    <path d="M 345,295 Q 310,325 275,345" />
                    <path d="M 335,330 Q 300,360 270,380" />
                    <path d="M 315,365 Q 285,395 264,410" />
                </g>
            </g>
            
            <!-- Tendons & Aponeuroses -->
            <g id="action-tendon">
                <!-- Broad Anterior Aponeurosis (Shield covering the medial abdomen) -->
                <path d="M 125,180 
                         C 120,250 120,350 140,430 
                         L 190,470 L 210,470 
                         L 260,430 
                         C 280,350 280,250 275,180 
                         C 240,175 160,175 125,180 Z" 
                      fill="url(#tendon-shading)" opacity="0.85" />
                      
                <!-- Inguinal Ligaments (Inferior thick border of the aponeurosis) -->
                <path d="M 140,430 Q 165,455 190,470" fill="none" stroke="url(#tendon-shading)" stroke-width="4" stroke-linecap="round" />
                <path d="M 260,430 Q 235,455 210,470" fill="none" stroke="url(#tendon-shading)" stroke-width="4" stroke-linecap="round" />
                
                <!-- Linea Alba and Tendinous Intersections (Glints revealing underlying rectus sheath structure) -->
                <g stroke="#f8fafc" stroke-width="2" opacity="0.5" fill="none">
                    <!-- Central Linea Alba -->
                    <line x1="200" y1="180" x2="200" y2="470" stroke-width="3" />
                    
                    <!-- Transverse Tendinous Intersections across the aponeurosis -->
                    <path d="M 125,230 Q 200,235 275,230" />
                    <path d="M 122,290 Q 200,295 278,290" />
                    <path d="M 125,350 Q 200,355 275,350" />
                </g>
            </g>
            
        </g>
    </svg>`;
