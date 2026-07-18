svgDataStore['muscle_transversus_abdominis'] = `<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
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

            <!-- Ribcage (Ribs 6-12) & Costal Margin -->
            <!-- Prominent costal margin as origin reference for transversus -->
            <path d="M 195,160 L 140,220 C 100,260 60,300 40,330" fill="none" stroke="url(#bone-shading)" stroke-width="8" stroke-linecap="round" />
            <path d="M 205,160 L 260,220 C 300,260 340,300 360,330" fill="none" stroke="url(#bone-shading)" stroke-width="8" stroke-linecap="round" />

            <g fill="none" stroke="url(#bone-shading)" stroke-width="10" stroke-linecap="round" opacity="0.6">
                <!-- Left Ribs -->
                <path d="M 140,210 Q 90,250 40,270" /> <!-- Rib 8 -->
                <path d="M 120,240 Q 80,280 45,300" /> <!-- Rib 9 -->
                <path d="M 110,270 Q 80,310 55,330" /> <!-- Rib 10 -->
                <path d="M 100,300 Q 80,330 65,360" /> <!-- Rib 11 -->
                <path d="M 95,330 Q 85,355 80,380" /> <!-- Rib 12 -->
                
                <!-- Right Ribs -->
                <path d="M 260,210 Q 310,250 360,270" /> <!-- Rib 8 -->
                <path d="M 280,240 Q 320,280 355,300" /> <!-- Rib 9 -->
                <path d="M 290,270 Q 320,310 345,330" /> <!-- Rib 10 -->
                <path d="M 300,300 Q 320,330 335,360" /> <!-- Rib 11 -->
                <path d="M 305,330 Q 315,355 320,380" /> <!-- Rib 12 -->
            </g>

        </g>

        <!-- INTERACTIVE LAYERS -->
        
        <!-- Origin Layer: Iliac crest, lower ribs (6-12), and lumbodorsal fascia -->
        <g id="origin-layer" class="interactive-layer">
            <!-- Costal Margins (Lower Ribs 6-12) -->
            <path d="M 190,165 L 135,225 C 95,265 55,305 35,335" fill="none" stroke="var(--success)" stroke-width="5" stroke-linecap="round" opacity="0.9"/>
            <path d="M 210,165 L 265,225 C 305,265 345,305 365,335" fill="none" stroke="var(--success)" stroke-width="5" stroke-linecap="round" opacity="0.9"/>

            <!-- Lumbodorsal Fascia (Lateral Abdominal Edge) -->
            <line x1="35" y1="335" x2="55" y2="395" stroke="var(--success)" stroke-width="5" stroke-linecap="round" />
            <line x1="365" y1="335" x2="345" y2="395" stroke="var(--success)" stroke-width="5" stroke-linecap="round" />

            <!-- Iliac Crests -->
            <path d="M 55,395 C 75,370 120,400 140,430 L 135,435 C 115,405 75,385 55,405 Z" fill="var(--success)" />
            <path d="M 345,395 C 325,370 280,400 260,430 L 265,435 C 285,405 325,385 345,405 Z" fill="var(--success)" />
        </g>
        
        <!-- Insertion Layer: Linea alba & pubis -->
        <g id="insertion-layer" class="interactive-layer">
            <!-- Linea Alba (Midline insertion) -->
            <rect x="196" y="160" width="8" height="310" rx="3" fill="var(--accent)" />
            
            <!-- Pubic Crest Insertions -->
            <ellipse cx="185" cy="470" rx="10" ry="5" fill="var(--accent)" />
            <ellipse cx="215" cy="470" rx="10" ry="5" fill="var(--accent)" />
        </g>
        
        <!-- Action Layer: Main Muscle Belly and Tendons -->
        <g id="action-layer" class="interactive-layer">
            
            <!-- Muscle Belly -->
            <g id="action-belly">
                <!-- Left Transversus Abdominis Belly -->
                <path d="M 35,335 
                         L 55,395 
                         C 75,370 120,400 140,430 
                         C 145,360 145,260 120,185 
                         L 190,165 
                         L 135,225 
                         C 95,265 55,305 35,335 Z" 
                      fill="url(#muscle-shading)" />
                      
                <!-- Right Transversus Abdominis Belly -->
                <path d="M 365,335 
                         L 345,395 
                         C 325,370 280,400 260,430 
                         C 255,360 255,260 280,185 
                         L 210,165 
                         L 265,225 
                         C 305,265 345,305 365,335 Z" 
                      fill="url(#muscle-shading)" />

                <!-- Muscle Fiber Striations (Running Strictly Transversely/Horizontally) -->
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.6" fill="none">
                    <!-- Left Transverse Striations -->
                    <line x1="165" y1="180" x2="122" y2="180" />
                    <line x1="145" y1="200" x2="124" y2="200" />
                    <line x1="125" y1="220" x2="127" y2="220" />
                    <line x1="100" y1="240" x2="131" y2="240" />
                    <line x1="80" y1="260" x2="136" y2="260" />
                    <line x1="60" y1="280" x2="140" y2="280" />
                    <line x1="45" y1="300" x2="143" y2="300" />
                    <line x1="40" y1="320" x2="144" y2="320" />
                    <line x1="45" y1="340" x2="145" y2="340" />
                    <line x1="50" y1="360" x2="144" y2="360" />
                    <line x1="55" y1="380" x2="142" y2="380" />
                    <line x1="80" y1="400" x2="138" y2="400" />
                    <line x1="110" y1="415" x2="135" y2="415" />
                    
                    <!-- Right Transverse Striations -->
                    <line x1="235" y1="180" x2="278" y2="180" />
                    <line x1="255" y1="200" x2="276" y2="200" />
                    <line x1="275" y1="220" x2="273" y2="220" />
                    <line x1="300" y1="240" x2="269" y2="240" />
                    <line x1="320" y1="260" x2="264" y2="260" />
                    <line x1="340" y1="280" x2="260" y2="280" />
                    <line x1="355" y1="300" x2="257" y2="300" />
                    <line x1="360" y1="320" x2="256" y2="320" />
                    <line x1="355" y1="340" x2="255" y2="340" />
                    <line x1="350" y1="360" x2="256" y2="360" />
                    <line x1="345" y1="380" x2="258" y2="380" />
                    <line x1="320" y1="400" x2="262" y2="400" />
                    <line x1="290" y1="415" x2="265" y2="415" />
                </g>
            </g>
            
            <!-- Tendons & Aponeuroses -->
            <g id="action-tendon">
                <!-- Broad Anterior Aponeurosis (Shield meeting at linea alba) -->
                <path d="M 120,185 
                         C 145,260 145,360 140,430 
                         L 190,470 L 200,470 
                         L 200,160 Z" 
                      fill="url(#tendon-shading)" opacity="0.85" />
                      
                <path d="M 280,185 
                         C 255,260 255,360 260,430 
                         L 210,470 L 200,470 
                         L 200,160 Z" 
                      fill="url(#tendon-shading)" opacity="0.85" />
                
                <!-- Tendinous Striations in the aponeurosis (Strictly transverse) -->
                <g stroke="#f8fafc" stroke-width="1.5" opacity="0.6" fill="none">
                    <!-- Left Aponeurosis Striations -->
                    <line x1="124" y1="200" x2="200" y2="200" />
                    <line x1="127" y1="220" x2="200" y2="220" />
                    <line x1="131" y1="240" x2="200" y2="240" />
                    <line x1="136" y1="260" x2="200" y2="260" />
                    <line x1="140" y1="280" x2="200" y2="280" />
                    <line x1="143" y1="300" x2="200" y2="300" />
                    <line x1="144" y1="320" x2="200" y2="320" />
                    <line x1="145" y1="340" x2="200" y2="340" />
                    <line x1="144" y1="360" x2="200" y2="360" />
                    <line x1="142" y1="380" x2="200" y2="380" />
                    <line x1="138" y1="400" x2="200" y2="400" />
                    <line x1="135" y1="415" x2="200" y2="415" />
                    <line x1="145" y1="435" x2="195" y2="460" /> <!-- Pubic insertion fibers -->
                    
                    <!-- Right Aponeurosis Striations -->
                    <line x1="276" y1="200" x2="200" y2="200" />
                    <line x1="273" y1="220" x2="200" y2="220" />
                    <line x1="269" y1="240" x2="200" y2="240" />
                    <line x1="264" y1="260" x2="200" y2="260" />
                    <line x1="260" y1="280" x2="200" y2="280" />
                    <line x1="257" y1="300" x2="200" y2="300" />
                    <line x1="256" y1="320" x2="200" y2="320" />
                    <line x1="255" y1="340" x2="200" y2="340" />
                    <line x1="256" y1="360" x2="200" y2="360" />
                    <line x1="258" y1="380" x2="200" y2="380" />
                    <line x1="262" y1="400" x2="200" y2="400" />
                    <line x1="265" y1="415" x2="200" y2="415" />
                    <line x1="255" y1="435" x2="205" y2="460" /> <!-- Pubic insertion fibers -->
                </g>
                
                <!-- Linea Alba central emphasis -->
                <line x1="200" y1="160" x2="200" y2="470" stroke="#f8fafc" stroke-width="3" opacity="0.8" />
            </g>
            
        </g>
    </svg>`;
