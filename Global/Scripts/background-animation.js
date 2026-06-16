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
            const doodleImg = loadedImages[assets.doodles[Math.floor(Math.random() * assets.doodles.length)]];
            const scale = 2 + Math.random() * 2;

            // Create an off-screen canvas for this particle
            const offscreenCanvas = document.createElement('canvas');
            const offscreenCtx = offscreenCanvas.getContext('2d');
            offscreenCanvas.width = doodleImg.width * scale;
            offscreenCanvas.height = doodleImg.height * scale;

            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                type: 'doodle',
                doodleType: Math.floor(Math.random() * assets.doodles.length),
                scale: scale,
                opacity: 0.8,
                img: doodleImg,
                offscreenCanvas: offscreenCanvas,
                offscreenCtx: offscreenCtx
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
                // Step 1: Clear the small off-screen canvas
                p.offscreenCtx.clearRect(0, 0, p.offscreenCanvas.width, p.offscreenCanvas.height);

                // Step 2: Draw the currently animated SVG frame onto the off-screen canvas
                p.offscreenCtx.drawImage(p.img, 0, 0, p.offscreenCanvas.width, p.offscreenCanvas.height);

                // Step 3: Set the 'img' to be the off-screen canvas itself for the main draw operation
                img = p.offscreenCanvas;
            }

            if (img) {
                // For doodles, img is already scaled. For stars, we use p.scale.
                const w = p.type === 'doodle' ? img.width : img.width * p.scale;
                const h = p.type === 'doodle' ? img.height : img.height * p.scale;
                ctx.globalAlpha = p.opacity;
                ctx.drawImage(img, p.x - w / 2, p.y - h / 2);
            }
        });

        ctx.globalAlpha = 1.0;
        requestAnimationFrame(animate);
    }

    init();
});
