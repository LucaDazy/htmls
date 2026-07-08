svgDataStore['bone_nasal_bone'] = `<svg viewBox="40 30 320 420" xmlns="http://www.w3.org/2000/svg">
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
        
        <!-- Background Bones & Structures -->
        <g class="svg-bg" fill="url(#bone-shading)" stroke="#475569" stroke-width="1" stroke-linejoin="round" opacity="0.4">
            
            <!-- Frontal Bone -->
            <path d="M 80,170 C 80,60 320,60 320,170 C 320,220 270,220 250,200 C 240,190 225,195 212,212 C 210,208 205,205 200,205 C 195,205 190,208 188,212 C 175,195 160,190 150,200 C 130,220 80,220 80,170 Z" />
            
            <!-- Maxilla -->
            <path d="M 188,212 C 170,230 165,260 170,280 C 150,290 145,320 150,350 C 180,370 220,370 250,350 C 255,320 250,290 230,280 C 235,260 230,230 212,212 C 218,240 225,280 200,290 C 175,280 182,240 188,212 Z" />
            
            <!-- Zygomatic Bones -->
            <path d="M 150,290 C 130,300 110,280 100,250 C 95,230 110,200 135,200 C 130,220 135,260 170,280 Z" />
            <path d="M 250,290 C 270,300 290,280 300,250 C 305,230 290,200 265,200 C 270,220 265,260 230,280 Z" />
            
            <!-- Mandible -->
            <path d="M 145,340 C 145,390 170,420 200,420 C 230,420 255,390 255,340 C 240,360 220,365 200,365 C 180,365 160,360 145,340 Z" />

            <!-- Vomer / Perpendicular Plate (Inside Nasal Cavity) -->
            <path d="M 198,270 L 202,270 L 204,290 L 196,290 Z" />
            
            <!-- Nasal Conchae (Turbinates) -->
            <path d="M 175,275 C 185,275 190,285 185,290 C 180,290 178,280 175,275 Z" opacity="0.6"/>
            <path d="M 225,275 C 215,275 210,285 215,290 C 220,290 222,280 225,275 Z" opacity="0.6"/>

            <!-- Teeth Lines (Upper & Lower) -->
            <path d="M 160,353 L 160,363 M 175,358 L 175,368 M 190,360 L 190,370 M 200,362 L 200,372 M 210,360 L 210,370 M 225,358 L 225,368 M 240,353 L 240,363" stroke="#3d1c60" stroke-width="1.5" fill="none" />
            <path d="M 160,358 L 160,348 M 175,363 L 175,353 M 190,365 L 190,355 M 200,367 L 200,357 M 210,365 L 210,355 M 225,363 L 225,353 M 240,358 L 240,348" stroke="#3d1c60" stroke-width="1.5" fill="none" />

            <!-- Foramina Details -->
            <circle cx="165" cy="200" r="2.5" fill="#3d1c60" stroke="none" />
            <circle cx="235" cy="200" r="2.5" fill="#3d1c60" stroke="none" />
            <circle cx="165" cy="260" r="2.5" fill="#3d1c60" stroke="none" />
            <circle cx="235" cy="260" r="2.5" fill="#3d1c60" stroke="none" />

            <!-- Nasal Cartilage Reference -->
            <path d="M 200,270 C 195,290 185,320 185,335 C 185,345 200,345 215,335 C 215,320 205,290 200,270 Z" fill="none" stroke="#f1f5f9" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.6" />
        </g>
        
        <!-- INTERACTIVE LAYERS -->
        <g id="region-layer" class="interactive-layer">
            <!-- Left Nasal Bone -->
            <path d="M 200,205 C 195,205 190,208 188,212 C 185,230 182,245 178,265 C 185,270 192,272 200,270 Z" fill="url(#bone-shading)" stroke="#475569" stroke-width="0.5" />
            <!-- Right Nasal Bone -->
            <path d="M 200,205 C 205,205 210,208 212,212 C 215,230 218,245 222,265 C 215,270 208,272 200,270 Z" fill="url(#bone-shading)" stroke="#475569" stroke-width="0.5" />
        </g>

        <!-- Landmarks: Bridge of the Nose -->
        <g id="landmarks-layer" class="interactive-layer">
            <path d="M 197,212 C 197,230 195,250 193,264 C 198,267 202,267 207,264 C 205,250 203,230 203,212 Z" fill="var(--accent)" />
        </g>
    </svg>`;
