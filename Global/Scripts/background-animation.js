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
            'Global/SVGs/doodles/apple.svg',
            'Global/SVGs/doodles/book.svg',
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
        // Create Stars (static)
        for (let i = 0; i < NUM_STARS; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                type: 'star',
                scale: 0.5 + Math.random() * 0.5,
                opacity: 0.2 + Math.random() * 0.5,
                imgObject: loadedImageObjects[assets.stars[0]]
            });
        }
        // Create Doodles (falling)
        for (let i = 0; i < NUM_DOODLES; i++) {
            const doodleUrl = assets.doodles[Math.floor(Math.random() * assets.doodles.length)];
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height, // Start at a random Y position
                type: 'doodle',
                opacity: 0.8,
                scale: 1.5 + Math.random() * 1.0, // New intermediate size
                speed: 0.2 + Math.random() * 0.3, // Slow falling speed
                imgObject: loadedImageObjects[doodleUrl]
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            if (p.type === 'doodle') {
                // Update position for falling effect
                p.y += p.speed;
                // If it goes off the bottom, recycle it to the top
                if (p.y > canvas.height + 50) {
                    p.y = -50; // Reset above the screen
                    p.x = Math.random() * canvas.width; // Reset to a new horizontal position
                }
            }
            
            const w = p.imgObject.width * p.scale;
            const h = p.imgObject.height * p.scale;
            
            ctx.globalAlpha = p.opacity;
            ctx.drawImage(p.imgObject, p.x - w / 2, p.y - h / 2, w, h);
        });

        requestAnimationFrame(animate);
    }

    init();
});
