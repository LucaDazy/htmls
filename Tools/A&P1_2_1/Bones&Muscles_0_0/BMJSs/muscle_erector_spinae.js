svgDataStore['muscle_erector_spinae'] = `<svg viewBox="0 0 500 700" xmlns="http://www.w3.org/2000/svg">
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

        <!-- Background Context (Skull base, Spine, Ribcage, Pelvis) -->
        <g class="svg-bg" opacity="0.4">
            
            <!-- Base of Skull (Occiput) -->
            <path d="M 210,30 C 230,40 270,40 290,30 C 290,50 270,70 250,70 C 230,70 210,50 210,30 Z" fill="url(#bone-shading)" />

            <!-- Pelvis (Ilium, Sacrum) -->
            <!-- Sacrum -->
            <path d="M 230,530 L 270,530 L 250,620 Z" fill="url(#bone-shading)" />
            <!-- Left Ilium -->
            <path d="M 230,530 C 180,480 110,480 80,530 C 70,550 90,620 150,650 C 190,660 220,600 230,580 Z" fill="url(#bone-shading)" />
            <!-- Right Ilium -->
            <path d="M 270,530 C 320,480 390,480 420,530 C 430,550 410,620 350,650 C 310,660 280,600 270,580 Z" fill="url(#bone-shading)" />

            <!-- Ribcage (Posterior Ribs 1-12) -->
            <g stroke="url(#bone-shading)" stroke-width="12" fill="none" stroke-linecap="round" opacity="0.6">
                <!-- Left Ribs -->
                <path d="M 230,120 Q 140,100 110,140" />
                <path d="M 230,150 Q 130,130 90,170" />
                <path d="M 230,180 Q 120,160 80,210" />
                <path d="M 230,210 Q 110,190 70,250" />
                <path d="M 230,240 Q 100,220 60,290" />
                <path d="M 230,270 Q 90,250 60,330" />
                <path d="M 230,300 Q 90,280 60,370" />
                <path d="M 230,330 Q 90,310 65,410" />
                <path d="M 230,360 Q 100,350 75,440" />
                <path d="M 230,390 Q 120,390 90,460" />
                <path d="M 230,420 Q 150,420 120,480" />
                <path d="M 230,450 Q 180,450 150,500" />
                <!-- Right Ribs -->
                <path d="M 270,120 Q 360,100 390,140" />
                <path d="M 270,150 Q 370,130 410,170" />
                <path d="M 270,180 Q 380,160 420,210" />
                <path d="M 270,210 Q 390,190 430,250" />
                <path d="M 270,240 Q 400,220 440,290" />
                <path d="M 270,270 Q 410,250 440,330" />
                <path d="M 270,300 Q 410,280 440,370" />
                <path d="M 270,330 Q 410,310 435,410" />
                <path d="M 270,360 Q 400,350 425,440" />
                <path d="M 270,390 Q 380,390 410,460" />
                <path d="M 270,420 Q 350,420 380,480" />
                <path d="M 270,450 Q 320,450 350,500" />
            </g>

            <!-- Vertebral Column (Cervical, Thoracic, Lumbar) -->
            <rect x="235" y="70" width="30" height="460" fill="url(#bone-shading)" />
            <!-- Spinous Processes -->
            <g fill="url(#bone-shading)" stroke="#475569" stroke-width="1.5">
                <!-- Generating multiple processes along the spine -->
                <rect x="242" y="80" width="16" height="20" rx="4" />
                <rect x="242" y="110" width="16" height="20" rx="4" />
                <rect x="242" y="140" width="16" height="20" rx="4" />
                <rect x="242" y="170" width="16" height="20" rx="4" />
                <rect x="242" y="200" width="16" height="20" rx="4" />
                <rect x="242" y="230" width="16" height="20" rx="4" />
                <rect x="242" y="260" width="16" height="20" rx="4" />
                <rect x="242" y="290" width="16" height="20" rx="4" />
                <rect x="242" y="320" width="16" height="20" rx="4" />
                <rect x="242" y="350" width="16" height="20" rx="4" />
                <rect x="242" y="380" width="16" height="20" rx="4" />
                <rect x="242" y="410" width="16" height="20" rx="4" />
                <rect x="242" y="440" width="16" height="20" rx="4" />
                <rect x="242" y="470" width="16" height="20" rx="4" />
                <rect x="242" y="500" width="16" height="20" rx="4" />
            </g>
            
        </g>

        <!-- INTERACTIVE LAYERS -->
        
        <!-- Origin Layer: Iliac crest, lower vertebrae, ribs 3-6 -->
        <g id="origin-layer" class="interactive-layer">
            <!-- Left & Right Iliac Crests -->
            <path d="M 230,530 C 180,480 110,480 80,530 L 75,520 C 110,465 180,465 235,515 Z" fill="var(--success)" />
            <path d="M 270,530 C 320,480 390,480 420,530 L 425,520 C 390,465 320,465 265,515 Z" fill="var(--success)" />
            
            <!-- Lower Vertebrae & Sacrum Origins -->
            <rect x="238" y="405" width="24" height="120" rx="5" fill="var(--success)" />
            <polygon points="230,530 270,530 250,560" fill="var(--success)" />

            <!-- Ribs 3-6 Origin Points (Medial aspects) -->
            <circle cx="210" cy="180" r="6" fill="var(--success)" />
            <circle cx="210" cy="210" r="6" fill="var(--success)" />
            <circle cx="210" cy="240" r="6" fill="var(--success)" />
            <circle cx="210" cy="270" r="6" fill="var(--success)" />
            <circle cx="290" cy="180" r="6" fill="var(--success)" />
            <circle cx="290" cy="210" r="6" fill="var(--success)" />
            <circle cx="290" cy="240" r="6" fill="var(--success)" />
            <circle cx="290" cy="270" r="6" fill="var(--success)" />
        </g>
        
        <!-- Insertion Layer: Ribs and vertebrae above the origin -->
        <g id="insertion-layer" class="interactive-layer">
            <!-- Upper Rib Insertions (Iliocostalis / Longissimus regions) -->
            <!-- Left Ribs -->
            <path d="M 120,135 L 140,125 L 145,135 L 125,145 Z" fill="var(--accent)" />
            <path d="M 100,165 L 120,155 L 125,165 L 105,175 Z" fill="var(--accent)" />
            <path d="M 90,205 L 110,195 L 115,205 L 95,215 Z" fill="var(--accent)" />
            <path d="M 80,245 L 100,235 L 105,245 L 85,255 Z" fill="var(--accent)" />
            <path d="M 75,285 L 95,275 L 100,285 L 80,295 Z" fill="var(--accent)" />
            <path d="M 75,325 L 95,315 L 100,325 L 80,335 Z" fill="var(--accent)" />
            <path d="M 75,365 L 95,355 L 100,365 L 80,375 Z" fill="var(--accent)" />
            <!-- Right Ribs -->
            <path d="M 380,135 L 360,125 L 355,135 L 375,145 Z" fill="var(--accent)" />
            <path d="M 400,165 L 380,155 L 375,165 L 395,175 Z" fill="var(--accent)" />
            <path d="M 410,205 L 390,195 L 385,205 L 405,215 Z" fill="var(--accent)" />
            <path d="M 420,245 L 400,235 L 395,245 L 415,255 Z" fill="var(--accent)" />
            <path d="M 425,285 L 405,275 L 400,285 L 420,295 Z" fill="var(--accent)" />
            <path d="M 425,325 L 405,315 L 400,325 L 420,335 Z" fill="var(--accent)" />
            <path d="M 425,365 L 405,355 L 400,365 L 420,375 Z" fill="var(--accent)" />

            <!-- Upper Vertebral Insertions -->
            <rect x="228" y="60" width="6" height="50" fill="var(--accent)" />
            <rect x="266" y="60" width="6" height="50" fill="var(--accent)" />
        </g>
        
        <!-- Action Layer: Main Muscle Belly and Tendons -->
        <g id="action-layer" class="interactive-layer">
            
            <!-- Muscle Belly -->
            <g id="action-belly">
                <!-- Left Erector Spinae Mass (Iliocostalis, Longissimus, Spinalis) -->
                <path d="M 245,550 
                         L 245,60 
                         C 220,60 190,100 160,150 
                         C 130,200 90,320 100,420 
                         C 110,480 160,520 230,550 Z" 
                      fill="url(#muscle-shading)" />
                      
                <!-- Right Erector Spinae Mass -->
                <path d="M 255,550 
                         L 255,60 
                         C 280,60 310,100 340,150 
                         C 370,200 410,320 400,420 
                         C 390,480 340,520 270,550 Z" 
                      fill="url(#muscle-shading)" />

                <!-- Muscle Fiber Striations & Column Separations -->
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.5" fill="none">
                    <!-- Left Spinalis -->
                    <path d="M 240,530 Q 235,300 240,80" />
                    <!-- Left Longissimus -->
                    <path d="M 225,530 Q 215,300 220,90" />
                    <path d="M 210,510 Q 195,300 200,100" />
                    <path d="M 195,490 Q 175,300 180,120" />
                    <!-- Left Iliocostalis -->
                    <path d="M 175,470 Q 150,300 160,140" />
                    <path d="M 155,450 Q 130,300 140,160" />
                    <path d="M 135,430 Q 110,300 125,180" />
                    
                    <!-- Right Spinalis -->
                    <path d="M 260,530 Q 265,300 260,80" />
                    <!-- Right Longissimus -->
                    <path d="M 275,530 Q 285,300 280,90" />
                    <path d="M 290,510 Q 305,300 300,100" />
                    <path d="M 305,490 Q 325,300 320,120" />
                    <!-- Right Iliocostalis -->
                    <path d="M 325,470 Q 350,300 340,140" />
                    <path d="M 345,450 Q 370,300 360,160" />
                    <path d="M 365,430 Q 390,300 375,180" />
                    
                    <!-- Deep structural borders between columns -->
                    <path d="M 225,540 Q 215,300 230,70" stroke="#f8fafc" stroke-width="2" opacity="0.1" />
                    <path d="M 185,500 Q 165,300 185,110" stroke="#f8fafc" stroke-width="2" opacity="0.1" />
                    <path d="M 275,540 Q 285,300 270,70" stroke="#f8fafc" stroke-width="2" opacity="0.1" />
                    <path d="M 315,500 Q 335,300 315,110" stroke="#f8fafc" stroke-width="2" opacity="0.1" />
                </g>
            </g>
            
            <!-- Tendons & Aponeuroses (Thoracolumbar Fascia) -->
            <g id="action-tendon">
                <!-- Massive Diamond-Shaped Thoracolumbar Fascia over the lower back -->
                <path d="M 250,360 
                         L 130,510 
                         C 130,530 170,570 245,595 
                         L 250,620 
                         L 255,595 
                         C 330,570 370,530 370,510 
                         L 250,360 Z" 
                      fill="url(#tendon-shading)" opacity="0.85" />
                      
                <!-- Fascia Striations (Cross-hatching typical of thick aponeurosis) -->
                <g stroke="#f8fafc" stroke-width="1.5" opacity="0.4" fill="none">
                    <!-- Diagonal Left to Right -->
                    <path d="M 180,450 L 250,500" />
                    <path d="M 160,470 L 250,530" />
                    <path d="M 140,490 L 250,560" />
                    <path d="M 135,510 L 250,590" />
                    <!-- Diagonal Right to Left -->
                    <path d="M 320,450 L 250,500" />
                    <path d="M 340,470 L 250,530" />
                    <path d="M 360,490 L 250,560" />
                    <path d="M 365,510 L 250,590" />
                    <!-- Central Band -->
                    <line x1="250" y1="360" x2="250" y2="620" stroke-width="3" opacity="0.7" />
                </g>
                
                <!-- Superior Tendinous Slips inserting into Cervical region/Skull base -->
                <path d="M 245,120 L 245,60 C 235,60 225,65 220,70 L 245,150 Z" fill="url(#tendon-shading)" opacity="0.8" />
                <path d="M 255,120 L 255,60 C 265,60 275,65 280,70 L 255,150 Z" fill="url(#tendon-shading)" opacity="0.8" />
            </g>
            
        </g>
    </svg>`;
