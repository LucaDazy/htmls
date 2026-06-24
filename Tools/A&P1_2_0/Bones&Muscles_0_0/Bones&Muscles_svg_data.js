// A&P 1 Master SVG Database
// Provides modular, interactive SVG templates for the Bones & Muscles tool.
const svgDB = {
    "bone_frontal_bone": `
<svg viewBox="0 0 400 450" xmlns="http://www.w3.org/2000/svg">
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
    
    <g class="svg-bg" fill="url(#bone-shading)" opacity="0.4">
        <path d="M 60,190 C 50,220 50,250 80,260 C 100,260 120,240 120,220 C 100,220 80,210 60,190 Z" />
        
        <path d="M 340,190 C 350,220 350,250 320,260 C 300,260 280,240 280,220 C 300,220 320,210 340,190 Z" />
        
        <path d="M 120,220 C 120,260 140,310 200,310 C 260,310 280,260 280,220 C 260,200 240,180 220,170 C 215,220 185,220 180,170 C 160,180 140,200 120,220 Z" />
        
        <path d="M 180,170 C 185,190 195,190 200,190 C 205,190 215,190 220,170 L 210,210 L 190,210 Z" />
        
        <path d="M 90,250 C 80,320 120,400 200,400 C 280,400 320,320 310,250 C 290,290 250,310 200,310 C 150,310 110,290 90,250 Z" />
    </g>
    
    <g id="region-layer" class="interactive-layer">
        <path d="M 60,190 
                 C 60,20 340,20 340,190 
                 C 310,130 250,130 220,170 
                 C 215,190 185,190 180,170 
                 C 150,130 90,130 60,190 Z" 
              fill="url(#bone-shading)" />
              
        <g stroke="#475569" stroke-width="2" opacity="0.4" fill="none">
            <path d="M 100,160 Q 140,145 170,165" />
            <path d="M 300,160 Q 260,145 230,165" />
            <path d="M 75,170 Q 75,100 120,60" />
            <path d="M 325,170 Q 325,100 280,60" />
        </g>
    </g>
    
    <g id="landmarks-layer" class="interactive-layer">
        <circle cx="150" cy="148" r="4.5" fill="var(--accent)" />
        <circle cx="250" cy="148" r="4.5" fill="var(--accent)" />
    </g>
    
</svg>`,
    "bone_parietal_bone": `
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="bone-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#94a3b8" /><stop offset="25%" stop-color="#f1f5f9" /><stop offset="75%" stop-color="#cbd5e1" /><stop offset="100%" stop-color="#475569" /></linearGradient>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
    </defs>
    <!-- Background Bones (Lateral view of skull) -->
    <g class="svg-bg" fill="url(#bone-shading)" opacity="0.4">
        <!-- Frontal bone -->
        <path d="M 30,30 C 10,50 10,120 30,140 L 60,140 C 80,120 80,50 60,30 Z"/>
        <!-- Temporal bone -->
        <path d="M 180,80 C 160,100 160,160 180,180 L 210,180 C 230,160 230,100 210,80 Z"/>
        <!-- Occipital bone -->
        <path d="M 240,40 C 220,60 220,140 240,160 L 270,160 C 290,140 290,60 270,40 Z"/>
        <!-- Sphenoid region -->
        <path d="M 120,90 C 110,110 110,140 120,150 L 140,150 C 150,140 150,110 140,90 Z"/>
    </g>

    <!-- INTERACTIVE LAYERS -->
    <g id="region-layer" class="interactive-layer" style="transition: all 0.3s ease;">
        <!-- Parietal Bone (lateral view, large curved plate) -->
        <path d="M 60,30 C 40,50 40,160 60,180 L 180,180 C 200,160 200,50 180,30 Z" fill="url(#bone-shading)"/>
    </g>
    <g id="landmarks-layer" class="interactive-layer" fill="var(--accent)" style="transition: all 0.3s ease;">
        <!-- Sagittal suture line (top edge) -->
        <path d="M 60,30 L 180,30" stroke="var(--accent)" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
        <!-- Coronal suture line (front edge) -->
        <path d="M 60,30 L 60,180" stroke="var(--accent)" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
        <!-- Lambdoid suture line (back edge) -->
        <path d="M 180,30 L 180,180" stroke="var(--accent)" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
        <!-- Squamous suture line (bottom edge) -->
        <path d="M 60,180 L 180,180" stroke="var(--accent)" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
        <!-- Central landmark: parietal eminence -->
        <circle cx="120" cy="105" r="6" />
    </g>
</svg>`,
    "bone_temporal_bone": `
<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="bone-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#94a3b8" /><stop offset="25%" stop-color="#f1f5f9" /><stop offset="75%" stop-color="#cbd5e1" /><stop offset="100%" stop-color="#475569" /></linearGradient>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
    </defs>
    <!-- Background Bones (Lateral view of skull) -->
    <g class="svg-bg" fill="url(#bone-shading)" opacity="0.4">
        <!-- Frontal bone (anterior) -->
        <path d="M 20,30 C 10,60 10,120 20,150 L 50,150 C 60,120 60,60 50,30 Z"/>
        <!-- Parietal bone (superior) -->
        <path d="M 50,20 C 80,10 140,10 170,20 L 170,50 C 140,40 80,40 50,50 Z"/>
        <!-- Occipital bone (posterior) -->
        <path d="M 220,30 C 240,60 240,140 220,170 L 190,170 C 180,140 180,60 190,30 Z"/>
        <!-- Sphenoid bone (anterior/inferior) -->
        <path d="M 100,100 C 90,120 90,150 100,160 L 120,160 C 130,150 130,120 120,100 Z"/>
        <!-- Zygomatic bone (cheek) -->
        <path d="M 80,160 C 70,180 80,200 100,210 L 120,200 C 130,190 130,170 120,160 Z"/>
        <!-- Mandible (lower jaw) -->
        <path d="M 60,200 C 50,220 60,240 80,240 L 180,240 C 200,240 210,220 200,200 Z"/>
    </g>

    <!-- INTERACTIVE LAYERS -->
    <g id="region-layer" class="interactive-layer" style="transition: all 0.3s ease;">
        <!-- Temporal Bone (lateral view) -->
        <path d="M 170,30 C 150,40 140,80 140,120 C 140,140 150,160 160,170 C 170,180 180,180 190,170 C 200,160 210,140 210,120 C 210,80 200,40 180,30 Z" fill="url(#bone-shading)"/>
        <!-- Zygomatic process (anterior projection) -->
        <path d="M 140,120 C 130,120 120,130 120,140 C 120,150 130,150 140,150 C 150,150 150,140 150,130 Z" fill="url(#bone-shading)"/>
        <!-- Petrous region (medial extension, shown as a darker area) -->
        <path d="M 170,170 C 180,190 190,210 200,220 C 210,210 210,190 200,170 Z" fill="url(#bone-shading)" opacity="0.7"/>
    </g>
    <g id="landmarks-layer" class="interactive-layer" fill="var(--accent)" style="transition: all 0.3s ease;">
        <!-- Mastoid process (posterior inferior) -->
        <circle cx="195" cy="175" r="8" />
        <!-- Styloid process (inferior, thin) -->
        <circle cx="175" cy="195" r="5" />
        <!-- External auditory meatus (central) -->
        <circle cx="165" cy="145" r="7" />
        <!-- Mandibular fossa (anterior, near zygomatic process) -->
        <circle cx="145" cy="135" r="6" />
        <!-- Zygomatic process tip -->
        <circle cx="120" cy="135" r="5" />
    </g>
</svg>`,
    "muscle_pectoralis_major": `
<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="bone-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#94a3b8" /><stop offset="25%" stop-color="#f1f5f9" /><stop offset="75%" stop-color="#cbd5e1" /><stop offset="100%" stop-color="#475569" /></linearGradient>
        <linearGradient id="muscle-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#7f1d1d" /><stop offset="35%" stop-color="#ef4444" /><stop offset="80%" stop-color="#b91c1c" /><stop offset="100%" stop-color="#450a0a" /></linearGradient>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
    </defs>
    <!-- Background Bones -->
    <g class="svg-bg" fill="url(#bone-shading)" opacity="0.4">
        <!-- Humerus -->
        <path d="M50,50 C30,70 30,150 50,170 L70,170 C90,150 90,70 70,50 Z" />
        <circle cx="60" cy="50" r="25"/>
        <!-- Clavicle -->
        <path d="M100,40 C150,30 200,45 250,50 L250,60 C200,55 150,40 100,50 Z" />
        <!-- Sternum and Ribs -->
        <path d="M260,60 L260,250 L240,250 L240,60 Z" />
        <path d="M240,80 C200,85 180,100 180,110 L180,120 C180,110 200,95 240,90 Z" />
        <path d="M240,120 C200,125 170,140 170,150 L170,160 C170,150 200,135 240,130 Z" />
        <path d="M240,160 C190,165 165,180 165,190 L165,200 C165,190 190,175 240,170 Z" />
    </g>
    
    <!-- INTERACTIVE LAYERS -->
    <g id="origin-layer" class="interactive-layer" fill="var(--success)" style="transition: all 0.3s ease;">
        <!-- Origin on Clavicle -->
        <path d="M105,45 C150,38 190,48 220,53 L220,57 C190,52 150,42 105,49 Z" />
        <!-- Origin on Sternum/Ribs -->
        <path d="M255,65 L255,245 L245,245 L245,65 Z" />
    </g>
    <g id="insertion-layer" class="interactive-layer" fill="var(--accent)" style="transition: all 0.3s ease;">
        <!-- Insertion on Humerus -->
        <path d="M60,80 C50,90 55,110 70,110 C80,100 75,85 60,80 Z"/>
    </g>
    <g id="action-layer" class="interactive-layer" style="transition: all 0.3s ease;">
        <!-- Muscle Belly -->
        <path d="M250,70 C150,80 100,50 65,100 C150,150 200,200 250,220 Z" fill="url(#muscle-shading)" />
    </g>
</svg>`,
    "muscle_latissimus_dorsi": `
<svg viewBox="100 0 250 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="bone-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#94a3b8" /><stop offset="25%" stop-color="#f1f5f9" /><stop offset="75%" stop-color="#cbd5e1" /><stop offset="100%" stop-color="#475569" /></linearGradient>
        <linearGradient id="muscle-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#7f1d1d" /><stop offset="35%" stop-color="#ef4444" /><stop offset="80%" stop-color="#b91c1c" /><stop offset="100%" stop-color="#450a0a" /></linearGradient>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
    </defs>
    <!-- Background Bones (Posterior View) -->
    <g class="svg-bg" fill="url(#bone-shading)" opacity="0.4">
        <!-- Humerus -->
        <path d="M120,50 C100,70 100,150 120,170 L140,170 C160,150 160,70 140,50 Z" />
        <circle cx="130" cy="50" r="25"/>
        <!-- Scapula -->
        <path d="M140,60 L240,70 L240,180 L140,160 Z"/>
        <!-- Vertebral Column -->
        <path d="M250,50 L250,350 L270,350 L270,50 Z"/>
        <!-- Pelvis (Iliac Crest) -->
        <path d="M250,340 C220,330 200,345 180,360 L180,370 C200,355 220,340 250,350 Z"/>
    </g>

    <!-- INTERACTIVE LAYERS -->
    <g id="origin-layer" class="interactive-layer" fill="var(--success)" style="transition: all 0.3s ease;">
        <!-- Origin on Vertebrae -->
        <path d="M255,180 L255,345 L265,345 L265,180 Z" />
        <!-- Origin on Iliac Crest -->
        <path d="M245,342 C220,335 200,348 185,362 L190,368 C205,352 225,340 245,348 Z"/>
    </g>
    <g id="insertion-layer" class="interactive-layer" fill="var(--accent)" style="transition: all 0.3s ease;">
        <!-- Insertion on Humerus -->
        <circle cx="130" cy="110" r="10" />
    </g>
    <g id="action-layer" class="interactive-layer" style="transition: all 0.3s ease;">
        <!-- Muscle Belly -->
        <path d="M260,180 C200,150 150,150 130,110 C180,250 220,320 260,340 Z" fill="url(#muscle-shading)" />
    </g>
</svg>`,
    "muscle_peroneus_fibularis_longus": `
<svg viewBox="20 60 260 530" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="bone-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#94a3b8" /><stop offset="25%" stop-color="#f1f5f9" /><stop offset="75%" stop-color="#cbd5e1" /><stop offset="100%" stop-color="#475569" /></linearGradient>
        <linearGradient id="muscle-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#7f1d1d" /><stop offset="35%" stop-color="#ef4444" /><stop offset="80%" stop-color="#b91c1c" /><stop offset="100%" stop-color="#450a0a" /></linearGradient>
        <linearGradient id="tendon-shading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#64748b" /><stop offset="50%" stop-color="#f8fafc" /><stop offset="100%" stop-color="#334155" /></linearGradient>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
    </defs>
    
    <!-- Background Bones -->
    <g class="svg-bg" fill="url(#bone-shading)" opacity="0.4">
        <!-- Tibia (background) -->
        <path d="M 160,80 C 140,150 145,300 140,460 C 140,480 150,490 165,490 L 175,490 L 180,80 Z"/>
        <!-- Fibula (main context bone) -->
        <path d="M 100,90 C 85,100 90,120 100,135 C 105,250 110,350 100,450 C 95,480 95,505 105,515 C 120,520 130,505 130,485 C 135,400 135,200 125,125 C 125,100 115,85 100,90 Z"/>
        <!-- Foot bones (tarsals/metatarsals) -->
        <path d="M 105,510 C 80,515 50,530 55,560 C 60,580 90,580 120,575 C 160,570 230,585 260,580 C 270,575 250,555 200,545 C 150,535 130,505 105,510 Z"/>
    </g>
    
    <!-- INTERACTIVE LAYERS -->
    <g id="origin-layer" class="interactive-layer">
         <!-- Lateral condyle of tibia & fibula -->
         <path d="M 100,90 C 92,112 101,122 101,122 C 112,122 124,115 124,102 C 116,92 108,88 100,90 Z" fill="var(--success)" />
         <path d="M 101,122 C 105,200 108,280 102,340 L 115,340 C 118,280 115,200 122,125 C 124,115 112,122 101,122 Z" fill="var(--success)" />
    </g>
    
    <g id="action-layer" class="interactive-layer">
        <!-- Muscle Belly -->
        <path d="M 98,105 C 70,180 75,280 95,350 C 100,380 115,400 120,400 C 135,320 135,180 120,115 C 115,100 105,100 98,105 Z" fill="url(#muscle-shading)" />
        <!-- Striations -->
        <g stroke="#450a0a" stroke-width="1.5" opacity="0.4" fill="none">
            <path d="M 95,130 Q 105,160 120,140" /> <path d="M 90,180 Q 105,210 125,190" />
            <path d="M 85,230 Q 105,260 128,240" /> <path d="M 86,280 Q 105,310 125,290" />
            <path d="M 92,330 Q 105,350 118,335" />
        </g>
         <!-- Tendon Path -->
        <path d="M 112,350 C 115,400 105,450 90,490 C 80,520 90,545 110,550 C 130,555 160,555 190,565" fill="none" stroke="url(#tendon-shading)" stroke-width="9" stroke-linecap="round"/>
        <path d="M 112,350 C 115,400 105,450 90,490 C 80,520 90,545 110,550 C 130,555 160,555 190,565" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.3"/>
    </g>
    
    <g id="insertion-layer" class="interactive-layer">
        <!-- Insertion Point circle on foot bones: Base of 1st metatarsal & medial cuneiform bone -->
        <circle cx="190" cy="565" r="8" fill="var(--accent)" />
        <circle cx="215" cy="560" r="8" fill="var(--accent)" />
    </g>
</svg>`,
    "placeholder_muscle": `
<svg viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="bone-shading" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#94a3b8" /><stop offset="25%" stop-color="#f1f5f9" />
            <stop offset="75%" stop-color="#cbd5e1" /><stop offset="100%" stop-color="#475569" />
        </linearGradient>
        <linearGradient id="muscle-shading" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#7f1d1d" /><stop offset="35%" stop-color="#ef4444" />
            <stop offset="80%" stop-color="#b91c1c" /><stop offset="100%" stop-color="#450a0a" />
        </linearGradient>
        <linearGradient id="tendon-shading" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#64748b" /><stop offset="50%" stop-color="#f8fafc" />
            <stop offset="100%" stop-color="#334155" />
        </linearGradient>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
    </defs>
    <!-- Background Bones -->
    <path class="svg-bg" d="M 100,20 C 80,40 80,80 100,100 L 100,300 C 80,320 80,360 100,380 L 120,380 C 140,360 140,320 120,300 L 120,100 C 140,80 140,40 120,20 Z" fill="url(#bone-shading)" opacity="0.3"/>
    
    <!-- INTERACTIVE MUSCLE LAYERS -->
    <g id="origin-layer" class="interactive-layer" fill="var(--success)" style="transition: all 0.3s ease;">
        <circle cx="110" cy="80" r="15" />
    </g>
    <g id="insertion-layer" class="interactive-layer" fill="var(--accent)" style="transition: all 0.3s ease;">
        <circle cx="110" cy="320" r="15" />
    </g>
    <g id="action-layer" class="interactive-layer" style="transition: all 0.3s ease;">
        <path d="M 110,95 C 90,150 90,250 110,305 C 130,250 130,150 110,95 Z" fill="url(#muscle-shading)" />
        <path d="M 110,95 C 110,150 110,250 110,305" fill="none" stroke="url(#tendon-shading)" stroke-width="8" />
    </g>
</svg>`,
    "placeholder_bone": `
<svg viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="bone-shading" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#94a3b8" /><stop offset="25%" stop-color="#f1f5f9" />
            <stop offset="75%" stop-color="#cbd5e1" /><stop offset="100%" stop-color="#475569" />
        </linearGradient>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
    </defs>
    <!-- INTERACTIVE BONE LAYERS -->
    <g id="region-layer" class="interactive-layer" style="transition: all 0.3s ease;">
         <path d="M 100,20 C 80,40 80,80 100,100 L 100,300 C 80,320 80,360 100,380 L 120,380 C 140,360 140,320 120,300 L 120,100 C 140,80 140,40 120,20 Z" fill="url(#bone-shading)"/>
    </g>
    <g id="landmarks-layer" class="interactive-layer" fill="var(--accent)" style="transition: all 0.3s ease;">
        <circle cx="95" cy="40" r="8" />
        <rect x="90" y="150" width="40" height="15" rx="5" />
        <circle cx="125" cy="360" r="8" />
    </g>
</svg>`
};
