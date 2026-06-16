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
                        // We don't revoke the blob URL because the images need it.
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
        // Create Stars
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
        // Create Doodles
        for (let i = 0; i < NUM_DOODLES; i++) {
            const doodleUrl = assets.doodles[Math.floor(Math.random() * assets.doodles.length)];
            const imgObject = loadedImageObjects[doodleUrl];
            
            // New, intermediate size. The base SVG is 24px. This gives a range of ~29px to ~48px.
            const scale = 1.2 + Math.random() * 0.8; 
            const width = imgObject.width * scale;
            const height = imgObject.height * scale;

            // Create a dedicated off-screen canvas for this particle
            const offscreenCanvas = document.createElement('canvas');
            offscreenCanvas.width = width;
            offscreenCanvas.height = height;
            const offscreenCtx = offscreenCanvas.getContext('2d');

            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                type: 'doodle',
                opacity: 0.8,
                width: width,
                height: height,
                imgObject: imgObject,
                offscreenCanvas: offscreenCanvas,
                offscreenCtx: offscreenCtx
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            let imageToDraw = p.imgObject;
            let w = p.width;
            let h = p.height;
            
            if (p.type === 'doodle') {
                // Step 1: Render the animated SVG onto the particle's hidden canvas
                p.offscreenCtx.clearRect(0, 0, p.width, p.height);
                p.offscreenCtx.drawImage(p.imgObject, 0, 0, p.width, p.height);
                // Step 2: Use the hidden canvas as the source for the main draw operation
                imageToDraw = p.offscreenCanvas;
            } else { // 'star'
                w = p.imgObject.width * p.scale;
                h = p.imgObject.height * p.scale;
            }
            
            ctx.globalAlpha = p.opacity;
            ctx.drawImage(imageToDraw, p.x - w / 2, p.y - h / 2, w, h);
        });

        requestAnimationFrame(animate);
    }

    init();
});
