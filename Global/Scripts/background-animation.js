document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('background-canvas');
    if (!canvas) {
        console.error('Background canvas not found.');
        return;
    }
    const ctx = canvas.getContext('2d');

    // --- Configuration ---
    const DOODLE_COLOR = '#403143'; // A subtle, but more visible, lighter version of --bg-color
    const NUM_STARS = 100;
    const NUM_DOODLES = 20;
    const DOODLE_JITTER_AMOUNT = 0.5; // Pixels to jitter in any direction

    let particles = [];
    let loadedImages = {};

    const assets = {
        stars: [
            'Global/SVGs/doodles/star-1.svg' // Only one static star
        ],
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

    function loadSVG(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            // Create a version of the SVG with the correct color
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Network request failed for ${url} - Status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(svgText => {
                    const coloredSvg = svgText.replace(/currentColor/g, DOODLE_COLOR);
                    const blob = new Blob([coloredSvg], { type: 'image/svg+xml' });
                    const blobUrl = URL.createObjectURL(blob);
                    img.onload = () => {
                        loadedImages[url] = img;
                        URL.revokeObjectURL(blobUrl);
                        resolve(img);
                    };
                    img.onerror = () => reject(new Error(`Image failed to load from blob created for: ${url}`));
                    img.src = blobUrl;
                })
                .catch(error => reject(error));
        });
    }

    function init() {
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const allAssetUrls = [...assets.stars, ...assets.doodles.flat()];
        const uniqueUrls = [...new Set(allAssetUrls)];

        Promise.all(uniqueUrls.map(loadSVG)).then(() => {
            createParticles();
            animate();
        }).catch(err => {
            // This more detailed logging bypasses the JSON.stringify issue in the custom logger.
            console.error("Failed to load SVG assets. The animation cannot start.");
            console.error("Error Message:", err.message || 'No message found, see details below.');
            console.error("Full Error Object:", err);
        });
    }

    function createParticles() {
        particles = [];
        // Create Stars
        for (let i = 0; i < NUM_STARS; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                type: 'star',
                scale: 0.5 + Math.random() * 0.5,
                opacity: 0.2 + Math.random() * 0.5
            });
        }
        // Create Doodles
        for (let i = 0; i < NUM_DOODLES; i++) {
            const originalX = Math.random() * canvas.width;
            const originalY = Math.random() * canvas.height;
            particles.push({
                x: originalX,
                y: originalY,
                originalX: originalX,
                originalY: originalY,
                type: 'doodle',
                doodleType: Math.floor(Math.random() * assets.doodles.length),
                scale: 2 + Math.random() * 2,
                opacity: 0.8
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            let img;

            if (p.type === 'star') {
                img = loadedImages[assets.stars[0]];
            } else { // doodle
                // Apply jitter effect by modifying position every frame
                p.x = p.originalX + (Math.random() - 0.5) * DOODLE_JITTER_AMOUNT * 2;
                p.y = p.originalY + (Math.random() - 0.5) * DOODLE_JITTER_AMOUNT * 2;
                img = loadedImages[assets.doodles[p.doodleType]];
            }

            if (img) {
                const w = img.width * p.scale;
                const h = img.height * p.scale;
                ctx.globalAlpha = p.opacity;
                ctx.drawImage(img, p.x - w / 2, p.y - h / 2, w, h);
            }
        });

        ctx.globalAlpha = 1.0;
        requestAnimationFrame(animate);
    }

    init();
});
