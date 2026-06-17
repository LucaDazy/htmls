document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('background-canvas');
    if (!canvas) {
        console.error('Background canvas element not found.');
        return;
    }
    const ctx = canvas.getContext('2d');

    // --- Configuration ---
    const DOODLE_COLOR = '#403143'; // The subtle color for the doodles
    const TOTAL_PARTICLES = 120;     // Total number of shapes in the background

    let particles = [];
    let loadedImageObjects = {}; // Will store preloaded image data

    // This array now contains all of your new, improved doodle assets
    const assetUrls = [
        'Global/SVGs/doodles/apple.svg',
        'Global/SVGs/doodles/books.svg',
        'Global/SVGs/doodles/dot.svg',
        'Global/SVGs/doodles/emc2.svg',
        'Global/SVGs/doodles/gradcap.svg',
        'Global/SVGs/doodles/pencil.svg',
        'Global/SVGs/doodles/plus.svg',
        'Global/SVGs/doodles/ruler.svg',
        'Global/SVGs/doodles/sparkle.svg',
        'Global/SVGs/doodles/square.svg',
        'Global/SVGs/doodles/star.svg',
        'Global/SVGs/doodles/worm.svg'
    ];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function loadAndPrepareSVG(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            fetch(url)
                .then(response => {
                    if (!response.ok) throw new Error(`Network request for ${url} failed: ${response.status}`);
                    return response.text();
                })
                .then(svgText => {
                    // 1. Remove the non-functional jitter filter to prevent rendering issues
                    const noFilterSvg = svgText.replace(/filter="url\(#jitter\)"/g, '');
                    // 2. Replace the white color with our desired subtle background color
                    const coloredSvg = noFilterSvg.replace(/#FFFFFF/gi, DOODLE_COLOR);

                    // 3. Intelligently parse the viewBox to get the SVG's native dimensions
                    const viewBoxMatch = svgText.match(/viewBox="([^"]+)"/);
                    let svgWidth = 100, svgHeight = 100; // A safe default
                    if (viewBoxMatch && viewBoxMatch[1]) {
                        const parts = viewBoxMatch[1].split(' ');
                        if (parts.length === 4) {
                            svgWidth = parseFloat(parts[2]);
                            svgHeight = parseFloat(parts[3]);
                        }
                    }
                    
                    const blob = new Blob([coloredSvg], { type: 'image/svg+xml' });
                    const blobUrl = URL.createObjectURL(blob);
                    
                    img.onload = () => {
                        // Store the image object and its real dimensions
                        loadedImageObjects[url] = { img, width: svgWidth, height: svgHeight };
                        resolve();
                    };
                    img.onerror = () => reject(new Error(`Image object failed to load for ${url}`));
                    img.src = blobUrl;
                })
                .catch(reject);
        });
    }

    function init() {
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        Promise.all(assetUrls.map(loadAndPrepareSVG))
            .then(() => {
                createParticles();
                animate();
            })
            .catch(err => console.error("Failed to initialize background animation:", err.message));
    }

    function createParticles() {
        particles = [];
        // Create shuffled "lanes" to distribute particles horizontally, reducing initial overlap.
        const laneWidth = canvas.width / TOTAL_PARTICLES;
        const lanes = Array.from({ length: TOTAL_PARTICLES }, (_, i) => i).sort(() => Math.random() - 0.5);

        for (let i = 0; i < TOTAL_PARTICLES; i++) {
            const url = assetUrls[Math.floor(Math.random() * assetUrls.length)];
            const asset = loadedImageObjects[url];
            
            // --- Smart Sizing Logic ---
            // Target an average size and calculate the correct scale for each unique SVG.
            const baseSize = 35; // The average size you want the doodles to be (in pixels)
            const maxDim = Math.max(asset.width, asset.height);
            // Calculate scale and add a bit of random variation
            const scale = (baseSize / maxDim) * (0.8 + Math.random() * 0.4); 

            const laneIndex = lanes.pop();
            particles.push({
                x: (laneIndex * laneWidth) + (Math.random() * laneWidth),
                y: Math.random() * canvas.height,
                scale: scale,
                opacity: 0.2 + Math.random() * 0.6, // Varied opacity for depth
                speed: 0.05 + Math.random() * 0.2,   // Slow to very slow falling speed
                imgObject: asset.img,
                baseWidth: asset.width,
                baseHeight: asset.height
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            // Update position for the falling effect
            p.y += p.speed;

            const w = p.baseWidth * p.scale;
            const h = p.baseHeight * p.scale;

            // If a particle's top edge has passed the bottom of the screen, recycle it.
            if (p.y - h > canvas.height) {
                p.y = -h; // Reset completely above the screen to prevent "popping in."
                p.x = Math.random() * canvas.width; // Give it a new horizontal position.
            }
            
            ctx.globalAlpha = p.opacity;
            ctx.drawImage(p.imgObject, p.x - w / 2, p.y - h / 2, w, h);
        });

        requestAnimationFrame(animate);
    }

    init();
});
