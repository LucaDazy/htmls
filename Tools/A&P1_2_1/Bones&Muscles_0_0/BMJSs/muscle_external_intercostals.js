svgDataStore['muscle_external_intercostals'] = `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
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

        <!-- Background Context (Sternum and Ribs 2-7) -->
        <g class="svg-bg" opacity="0.4">
            <!-- Sternum (Manubrium, Body, Xiphoid) -->
            <path d="M 235,50 L 265,50 L 260,80 L 240,80 Z" fill="url(#bone-shading)" />
            <path d="M 240,80 L 260,80 L 255,200 L 245,200 Z" fill="url(#bone-shading)" />
            <path d="M 245,200 L 255,200 L 250,220 Z" fill="url(#bone-shading)" />

            <!-- Costal Cartilages (Medial to Costochondral Junction) -->
            <g stroke="url(#bone-shading)" stroke-width="12" stroke-linecap="round" fill="none" opacity="0.8">
                <!-- Right Cartilages -->
                <path d="M 260,110 L 290,110" /> <!-- Rib 2 -->
                <path d="M 258,135 L 300,135" /> <!-- Rib 3 -->
                <path d="M 257,160 L 310,165" /> <!-- Rib 4 -->
                <path d="M 256,185 L 320,195" /> <!-- Rib 5 -->
                <path d="M 255,210 L 330,230" /> <!-- Rib 6 -->
                <path d="M 255,235 L 330,270" /> <!-- Rib 7 -->
                
                <!-- Left Cartilages -->
                <path d="M 240,110 L 210,110" /> <!-- Rib 2 -->
                <path d="M 242,135 L 200,135" /> <!-- Rib 3 -->
                <path d="M 243,160 L 190,165" /> <!-- Rib 4 -->
                <path d="M 244,185 L 180,195" /> <!-- Rib 5 -->
                <path d="M 245,210 L 170,230" /> <!-- Rib 6 -->
                <path d="M 245,235 L 170,270" /> <!-- Rib 7 -->
            </g>

            <!-- Bony Ribs (Lateral to Costochondral Junction) -->
            <g stroke="url(#bone-shading)" stroke-width="12" stroke-linecap="round" fill="none">
                <!-- Right Ribs -->
                <path d="M 290,110 C 340,110 390,130 410,150" /> <!-- Rib 2 -->
                <path d="M 300,135 C 360,140 410,170 430,200" /> <!-- Rib 3 -->
                <path d="M 310,165 C 380,175 430,210 450,250" /> <!-- Rib 4 -->
                <path d="M 320,195 C 400,210 450,260 465,310" /> <!-- Rib 5 -->
                <path d="M 330,230 C 410,250 460,310 470,370" /> <!-- Rib 6 -->
                <path d="M 330,270 C 410,290 460,360 465,420" /> <!-- Rib 7 -->
                
                <!-- Left Ribs -->
                <path d="M 210,110 C 160,110 110,130 90,150" /> <!-- Rib 2 -->
                <path d="M 200,135 C 140,140 90,170 70,200" /> <!-- Rib 3 -->
                <path d="M 190,165 C 120,175 70,210 50,250" /> <!-- Rib 4 -->
                <path d="M 180,195 C 100,210 50,260 35,310" /> <!-- Rib 5 -->
                <path d="M 170,230 C 90,250 40,310 30,370" /> <!-- Rib 6 -->
                <path d="M 170,270 C 90,290 40,360 35,420" /> <!-- Rib 7 -->
            </g>
        </g>

        <!-- INTERACTIVE LAYERS -->
        
        <!-- Origin Layer: Inferior border of the upper ribs -->
        <g id="origin-layer" class="interactive-layer">
            <!-- Right Origins -->
            <path d="M 295,116 C 340,116 390,136 410,156" fill="none" stroke="var(--success)" stroke-width="4" stroke-linecap="round" />
            <path d="M 305,141 C 360,146 410,176 430,206" fill="none" stroke="var(--success)" stroke-width="4" stroke-linecap="round" />
            <path d="M 315,171 C 380,181 430,216 450,256" fill="none" stroke="var(--success)" stroke-width="4" stroke-linecap="round" />
            <path d="M 325,201 C 400,216 450,266 465,316" fill="none" stroke="var(--success)" stroke-width="4" stroke-linecap="round" />
            <path d="M 335,236 C 410,256 460,316 470,376" fill="none" stroke="var(--success)" stroke-width="4" stroke-linecap="round" />
            
            <!-- Left Origins -->
            <path d="M 205,116 C 160,116 110,136 90,156" fill="none" stroke="var(--success)" stroke-width="4" stroke-linecap="round" />
            <path d="M 195,141 C 140,146 90,176 70,206" fill="none" stroke="var(--success)" stroke-width="4" stroke-linecap="round" />
            <path d="M 185,171 C 120,181 70,216 50,256" fill="none" stroke="var(--success)" stroke-width="4" stroke-linecap="round" />
            <path d="M 175,201 C 100,216 50,266 35,316" fill="none" stroke="var(--success)" stroke-width="4" stroke-linecap="round" />
            <path d="M 165,236 C 90,256 40,316 30,376" fill="none" stroke="var(--success)" stroke-width="4" stroke-linecap="round" />
        </g>
        
        <!-- Insertion Layer: Superior border of the lower ribs -->
        <g id="insertion-layer" class="interactive-layer">
            <!-- Right Insertions -->
            <path d="M 300,129 C 360,129 410,164 427,194" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" />
            <path d="M 310,159 C 380,169 430,204 447,244" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" />
            <path d="M 320,189 C 400,204 450,254 462,304" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" />
            <path d="M 330,224 C 410,244 460,304 467,364" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" />
            <path d="M 330,264 C 410,284 460,354 462,414" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" />
            
            <!-- Left Insertions -->
            <path d="M 200,129 C 140,129 90,164 73,194" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" />
            <path d="M 190,159 C 120,169 70,204 53,244" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" />
            <path d="M 180,189 C 100,204 50,254 38,304" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" />
            <path d="M 170,224 C 90,244 40,304 33,364" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" />
            <path d="M 170,264 C 90,284 40,354 38,414" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" />
        </g>
        
        <!-- Action Layer: Main Muscle Belly and Tendons -->
        <g id="action-layer" class="interactive-layer">
            
            <!-- Muscle Belly -->
            <g id="action-belly">
                <!-- Right External Intercostal Bellies -->
                <path d="M 295,116 C 340,116 390,136 410,156 L 427,194 C 410,164 360,129 300,129 Z" fill="url(#muscle-shading)" />
                <path d="M 305,141 C 360,146 410,176 430,206 L 447,244 C 430,204 380,169 310,159 Z" fill="url(#muscle-shading)" />
                <path d="M 315,171 C 380,181 430,216 450,256 L 462,304 C 450,254 400,204 320,189 Z" fill="url(#muscle-shading)" />
                <path d="M 325,201 C 400,216 450,266 465,316 L 467,364 C 460,304 410,244 330,224 Z" fill="url(#muscle-shading)" />
                <path d="M 335,236 C 410,256 460,316 470,376 L 462,414 C 460,354 410,284 330,264 Z" fill="url(#muscle-shading)" />
                
                <!-- Left External Intercostal Bellies -->
                <path d="M 205,116 C 160,116 110,136 90,156 L 73,194 C 90,164 140,129 200,129 Z" fill="url(#muscle-shading)" />
                <path d="M 195,141 C 140,146 90,176 70,206 L 53,244 C 70,204 120,169 190,159 Z" fill="url(#muscle-shading)" />
                <path d="M 185,171 C 120,181 70,216 50,256 L 38,304 C 50,254 100,204 180,189 Z" fill="url(#muscle-shading)" />
                <path d="M 175,201 C 100,216 50,266 35,316 L 33,364 C 40,304 90,244 170,224 Z" fill="url(#muscle-shading)" />
                <path d="M 165,236 C 90,256 40,316 30,376 L 38,414 C 40,354 90,284 170,264 Z" fill="url(#muscle-shading)" />

                <!-- Muscle Fiber Striations (Running Inferomedially - "hands in pockets") -->
                <g stroke="#450a0a" stroke-width="1.5" opacity="0.6" fill="none">
                    <!-- Right Side (\ direction) -->
                    <line x1="330" y1="125" x2="315" y2="137" />
                    <line x1="360" y1="135" x2="345" y2="152" />
                    <line x1="390" y1="150" x2="375" y2="168" />
                    
                    <line x1="340" y1="155" x2="325" y2="173" />
                    <line x1="370" y1="165" x2="355" y2="188" />
                    <line x1="400" y1="180" x2="385" y2="205" />
                    
                    <line x1="350" y1="185" x2="335" y2="205" />
                    <line x1="380" y1="195" x2="365" y2="222" />
                    <line x1="410" y1="210" x2="395" y2="242" />
                    
                    <line x1="360" y1="215" x2="345" y2="238" />
                    <line x1="390" y1="225" x2="375" y2="255" />
                    <line x1="420" y1="245" x2="405" y2="280" />
                    
                    <line x1="370" y1="250" x2="355" y2="275" />
                    <line x1="400" y1="265" x2="385" y2="295" />
                    <line x1="430" y1="290" x2="415" y2="330" />
                    
                    <!-- Left Side (/ direction) -->
                    <line x1="170" y1="125" x2="185" y2="137" />
                    <line x1="140" y1="135" x2="155" y2="152" />
                    <line x1="110" y1="150" x2="125" y2="168" />
                    
                    <line x1="160" y1="155" x2="175" y2="173" />
                    <line x1="130" y1="165" x2="145" y2="188" />
                    <line x1="100" y1="180" x2="115" y2="205" />
                    
                    <line x1="150" y1="185" x2="165" y2="205" />
                    <line x1="120" y1="195" x2="135" y2="222" />
                    <line x1="90" y1="210" x2="105" y2="242" />
                    
                    <line x1="140" y1="215" x2="155" y2="238" />
                    <line x1="110" y1="225" x2="125" y2="255" />
                    <line x1="80" y1="245" x2="95" y2="280" />
                    
                    <line x1="130" y1="250" x2="145" y2="275" />
                    <line x1="100" y1="265" x2="115" y2="295" />
                    <line x1="70" y1="290" x2="85" y2="330" />
                </g>
            </g>
            
            <!-- Tendons & Aponeuroses (External Intercostal Membrane) -->
            <g id="action-tendon">
                <!-- Right Membranes (Connecting muscle border to sternum) -->
                <path d="M 260,116 C 275,116 285,116 295,116 L 300,129 C 285,129 270,132 258,132 Z" fill="url(#tendon-shading)" opacity="0.6" />
                <path d="M 258,141 C 275,141 290,143 305,141 L 310,159 C 290,159 275,162 257,157 Z" fill="url(#tendon-shading)" opacity="0.6" />
                <path d="M 257,166 C 275,166 295,168 315,171 L 320,189 C 300,186 275,182 256,182 Z" fill="url(#tendon-shading)" opacity="0.6" />
                <path d="M 256,191 C 280,191 300,196 325,201 L 330,224 C 305,219 280,209 255,207 Z" fill="url(#tendon-shading)" opacity="0.6" />
                <path d="M 255,216 C 280,216 305,225 335,236 L 330,264 C 300,254 280,232 255,232 Z" fill="url(#tendon-shading)" opacity="0.6" />
                
                <!-- Left Membranes -->
                <path d="M 240,116 C 225,116 215,116 205,116 L 200,129 C 215,129 230,132 242,132 Z" fill="url(#tendon-shading)" opacity="0.6" />
                <path d="M 242,141 C 225,141 210,143 195,141 L 190,159 C 210,159 225,162 243,157 Z" fill="url(#tendon-shading)" opacity="0.6" />
                <path d="M 243,166 C 225,166 205,168 185,171 L 180,189 C 200,186 225,182 244,182 Z" fill="url(#tendon-shading)" opacity="0.6" />
                <path d="M 244,191 C 220,191 200,196 175,201 L 170,224 C 195,219 220,209 245,207 Z" fill="url(#tendon-shading)" opacity="0.6" />
                <path d="M 245,216 C 220,216 195,225 165,236 L 170,264 C 200,254 220,232 245,232 Z" fill="url(#tendon-shading)" opacity="0.6" />
            </g>
            
        </g>
    </svg>`;
