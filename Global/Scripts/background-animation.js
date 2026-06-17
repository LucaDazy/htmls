document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('background-canvas');
    if (!canvas) {
        console.error('Background canvas element not found.');
        return;
    }
    const ctx = canvas.getContext('2d');

    // --- Configuration ---
    const DOODLE_COLOR = '#403143';
    const NUM_STARS = 100;
    const NUM_DOODLES = 20;

    let particles = [];
    let loadedImageObjects = {}; // Will store preloaded JS Image objects

    const assets = {
        stars: ['Global/SVGs/doodles/star-1.svg'],
        doodles: [
            'Global/SVGs/doodles/star-1.svg',
            'Global/SVGs/doodles/apple.svg',
            'Global/SVGs/doodles/pencil.svg',
            'Global/SVGs/doodles/worm.svg'
        ]
    };

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function loadAndColorSVG(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            fetch(url)
                .then(response => {
                    if (!response.ok) throw new Error(`Network request for ${url} failed: ${response.status}`);
                    return response.text();
                })
                .then(svgText => {
                    const coloredSvg = svgText.replace(/currentColor/g, DOODLE_COLOR);
                    const blob = new Blob([coloredSvg], { type: 'image/svg+xml' });
                    const blobUrl = URL.createObjectURL(blob);
                    
                    img.onload = () => {
                        loadedImageObjects[url] = img;
                        resolve(img);
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

        const allAssetUrls = [...assets.stars, ...assets.doodles];
        Promise.all(allAssetUrls.map(loadAndColorSVG))
            .then(() => {
                createParticles();
                animate();
            })
            .catch(err => console.error("Failed to initialize background animation:", err.message));
    }

    function createParticles() {
        particles = [];
        const totalParticles = NUM_STARS + NUM_DOODLES;
        // Create shuffled "lanes" to distribute particles horizontally, reducing initial overlap.
        const laneWidth = canvas.width / totalParticles;
        const lanes = Array.from({ length: totalParticles }, (_, i) => i).sort(() => Math.random() - 0.5);

        // Create Stars (now falling)
        for (let i = 0; i < NUM_STARS; i++) {
            const laneIndex = lanes.pop();
            particles.push({
                x: (laneIndex * laneWidth) + (Math.random() * laneWidth), // Spawn in a unique lane
                y: Math.random() * canvas.height,
                scale: 0.5 + Math.random() * 0.5,
                opacity: 0.2 + Math.random() * 0.5,
                speed: 0.05 + Math.random() * 0.1, // Very slow speed
                imgObject: loadedImageObjects[assets.stars[0]]
            });
        }
        // Create Doodles (falling)
        for (let i = 0; i < NUM_DOODLES; i++) {
            const doodleUrl = assets.doodles[Math.floor(Math.random() * assets.doodles.length)];
            const laneIndex = lanes.pop();
            particles.push({
                x: (laneIndex * laneWidth) + (Math.random() * laneWidth), // Spawn in a unique lane
                y: Math.random() * canvas.height,
                opacity: 0.8,
                scale: 1.5 + Math.random() * 1.0,
                speed: 0.1 + Math.random() * 0.15, // Slower falling speed
                imgObject: loadedImageObjects[doodleUrl]
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            // Update position for the falling effect
            p.y += p.speed;

            const h = p.imgObject.height * p.scale;
            const w = p.imgObject.width * p.scale;

            // If a particle's top edge has passed the bottom of the screen, recycle it.
            if (p.y - h / 2 > canvas.height) {
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
