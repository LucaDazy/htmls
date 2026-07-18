svgDataStore['bone_mandible'] = `<svg viewBox="0 0 400 450" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="bone-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#94a3b8" /><stop offset="25%" stop-color="#f1f5f9" /><stop offset="75%" stop-color="#cbd5e1" /><stop offset="100%" stop-color="#475569" /></linearGradient>
            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
        </defs>
        
        <g class="svg-bg" fill="url(#bone-shading)" opacity="0.4">
            <path d="M 60,215 C 60,180 80,120 160,110 C 200,105 230,120 220,150 C 210,180 180,190 170,200 C 140,205 100,210 60,215 Z" />
            
            <path d="M 200,130 C 240,110 300,110 330,120 C 350,130 350,150 330,160 C 300,170 260,160 220,150 Z" />
            
            <path d="M 120,115 C 100,50 200,10 280,20 C 340,30 380,80 350,140 Z" />
            
            <path d="M 65,215 C 70,230 80,230 85,215 M 85,215 C 90,230 100,230 105,215 M 105,215 C 110,230 120,230 125,212 M 125,212 C 130,225 140,225 145,210 M 145,210 C 150,225 160,225 165,205" stroke="#475569" stroke-width="1.5" fill="#f8fafc" opacity="0.8" />
            
            <path d="M 65,220 C 70,205 80,205 85,220 M 85,220 C 90,205 100,205 105,220 M 105,220 C 110,205 120,205 125,218 M 125,218 C 130,205 140,205 145,215 M 145,215 C 150,205 160,205 165,210" stroke="#475569" stroke-width="1.5" fill="#f8fafc" opacity="0.6" />
        </g>
        
        <g id="region-layer" class="interactive-layer">
            <path d="M 275,120 
                     C 275,110 295,110 295,120 
                     C 295,130 290,140 290,160 
                     C 290,220 300,280 280,310 
                     C 260,330 200,325 150,315 
                     C 100,305 60,295 50,285 
                     C 40,275 45,250 60,220 
                     C 100,215 140,210 180,200 
                     C 195,195 205,150 215,120 
                     C 218,105 222,105 225,120 
                     C 230,145 260,145 275,120 Z" 
                  fill="url(#bone-shading)" />
                  
            <g stroke="#475569" fill="none">
                <path d="M 190,190 C 205,240 230,275 280,305" stroke-width="2.5" opacity="0.4"/>
                <path d="M 55,275 C 65,285 85,285 95,275" stroke-width="1.5" opacity="0.3"/>
                <path d="M 270,280 Q 285,295 275,310" stroke-width="1.5" opacity="0.3"/>
                <path d="M 260,290 Q 275,305 265,315" stroke-width="1" opacity="0.2"/>
            </g>
        </g>
        
        <g id="landmarks-layer" class="interactive-layer">
            <ellipse cx="285" cy="115" rx="10" ry="6" transform="rotate(-15 285 115)" fill="var(--accent)" />
            
            <circle cx="220" cy="112" r="5" fill="var(--accent)" />
            
            <circle cx="282" cy="305" r="7" fill="var(--accent)" />
            
            <circle cx="260" cy="220" r="6" fill="var(--accent)" />
            
            <circle cx="150" cy="285" r="6" fill="var(--accent)" />
            
            <circle cx="95" cy="255" r="5" fill="var(--accent)" />
            <circle cx="95" cy="255" r="2.5" fill="var(--bg-color)" />
            
            <circle cx="240" cy="200" r="5" fill="var(--accent)" opacity="0.5" />
            
            <circle cx="70" cy="218" r="3" fill="var(--accent)" />
            <circle cx="95" cy="215" r="3" fill="var(--accent)" />
            <circle cx="120" cy="212" r="3" fill="var(--accent)" />
            <circle cx="145" cy="207" r="3" fill="var(--accent)" />
            <circle cx="170" cy="202" r="3" fill="var(--accent)" />
        </g>
    </svg>`;
