document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('background-canvas');
    const preloader = document.getElementById('background-asset-preloader');

    if (!canvas || !preloader) {
        console.error('Missing canvas or SVG preloader element.');
        return;
    }
    const ctx = canvas.getContext('2d');

    // --- Configuration ---
    const DOODLE_COLOR = '#403143'; // A subtle, but more visible, lighter version of --bg-color
    const NUM_STARS = 100;
    const NUM_DOODLES = 20;

    let particles = [];
    let loadedImageElements = {}; // Will store references to the <image> elements in the hidden SVG

    const assets = {
        stars: [ 'Global/SVGs/doodles/star-1.svg' ],
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
            const img = document.createElementNS('http://www.w3.org/2000/svg', 'image');

            fetch(url)
                .then(response => {
                    if (!response.ok) throw new Error(`Network request for ${url} failed: ${response.status}`);
                    return response.text();
                })
                .then(svgText => {
                    const coloredSvg = svgText.replace(/currentColor/g, DOODLE_COLOR);
                    const blob = new Blob([coloredSvg], { type: 'image/svg+xml' });
                    const blobUrl = URL.createObjectURL(blob); // Note: We do NOT revoke this URL

                    img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', blobUrl);
                    
                    // Set a placeholder size; actual size is determined by viewBox
                    img.setAttribute('width', '24');
                    img.setAttribute('height', '24');

                    // Wait for the href to be loaded and ready to draw
                    img.onload = () => {
                        loadedImageElements[url] = img;
                        resolve(img);
                    };
                    img.onerror = () => reject(new Error(`SVGImageElement failed to load for ${url}`));

                    preloader.appendChild(img);
                })
                .catch(reject);
        });
    }

    function init() {
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const allAssetUrls = [...assets.stars, ...assets.doodles];
        const uniqueUrls = [...new Set(allAssetUrls)];

        Promise.all(uniqueUrls.map(loadAndColorSVG))
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
                imgElement: loadedImageElements[assets.stars[0]]
            });
        }
        // Create Doodles
        for (let i = 0; i < NUM_DOODLES; i++) {
            const doodleUrl = assets.doodles[Math.floor(Math.random() * assets.doodles.length)];
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                type: 'doodle',
                scale: 0.6 + Math.random() * 0.6, // New, smaller scale
                opacity: 0.8,
                imgElement: loadedImageElements[doodleUrl]
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            if (p.imgElement) {
                // The base size of our doodles is 24x24 (from their viewBox)
                const w = 24 * p.scale;
                const h = 24 * p.scale;
                ctx.globalAlpha = p.opacity;
                
                // Draw the current frame of the animated <image> element from the hidden SVG
                ctx.drawImage(p.imgElement, p.x - w / 2, p.y - h / 2, w, h);
            }
        });

        requestAnimationFrame(animate);
    }

    init();
});
