svgDataStore['bone_fibula'] = `<svg viewBox="0 0 240 620" xmlns="http://www.w3.org/2000/svg">
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
        
        <!-- Background Bones (Context: Femur condyles, Tibia, Talus) -->
        <g class="svg-bg" fill="url(#bone-shading)" opacity="0.4">
            <!-- Distal Femur -->
            <path d="M 50,60 C 50,40 70,30 100,30 C 130,30 150,40 150,60 C 150,80 140,90 125,95 C 110,90 90,90 75,95 C 60,90 50,80 50,60 Z"/>
            
            <!-- Tibia -->
            <path d="M 55,100 C 80,95 105,95 120,100 C 130,110 120,135 110,145 C 105,250 100,350 100,460 C 95,500 100,540 90,560 C 80,570 65,560 65,550 C 65,535 75,525 75,500 C 75,450 70,250 60,145 C 50,130 50,110 55,100 Z"/>
            
            <!-- Talus -->
            <path d="M 65,565 C 85,555 125,555 140,570 C 155,585 130,600 100,595 C 75,590 55,580 65,565 Z"/>
        </g>
        
        <!-- INTERACTIVE LAYERS -->
        <g id="region-layer" class="interactive-layer">
            <!-- Fibula Shaft and Extremities -->
            <path d="M 125,108 C 140,102 155,115 145,130 C 135,250 130,350 130,460 C 130,510 140,535 145,560 C 148,580 125,580 120,560 C 115,535 120,510 120,460 C 120,350 122,250 130,130 C 120,120 120,112 125,108 Z" fill="url(#bone-shading)" />
        </g>
        
        <g id="landmarks-layer" class="interactive-layer">
            <!-- Head of Fibula -->
            <ellipse cx="137" cy="118" rx="8" ry="10" fill="var(--accent)" />
            
            <!-- Lateral Malleolus -->
            <path d="M 124,555 C 124,545 133,540 140,540 C 146,540 147,550 145,562 C 143,572 135,575 130,572 C 125,568 124,562 124,555 Z" fill="var(--accent)" />
        </g>
    </svg>`;
