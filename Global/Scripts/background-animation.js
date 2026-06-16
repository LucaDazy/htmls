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
    const NUM_DOODLES = 15;
    const DOODLE_BOIL_SPEED = 15; // Higher is slower
    const STAR_TWINKLE_SPEED = 8; // Higher is slower

    let particles = [];
    let loadedImages = {};

    const assets = {
        stars: [
            'Global/SVGs/doodles/star-1.svg',
            'Global/SVGs/doodles/star-2.svg',
            'Global/SVGs/doodles/star-3.svg',
            'Global/SVGs/doodles/star-2.svg'
        ],
        doodles: [
            ['Global/SVGs/doodles/apple-1.svg', 'Global/SVGs/doodles/apple-2.svg'],
            ['Global/SVGs/doodles/book-1.svg', 'Global/SVGs/doodles/book-2.svg'],
            ['Global/SVGs/doodles/pencil-1.svg', 'Global/SVGs/doodles/pencil-2.svg'],
            ['Global/SVGs/doodles/worm-1.svg', 'Global/SVGs/doodles/worm-2.svg']
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
                .then(response => response.text())
                .then(svgText => {
                    const coloredSvg = svgText.replace(/currentColor/g, DOODLE_COLOR);
                    const blob = new Blob([coloredSvg], { type: 'image/svg+xml' });
                    const blobUrl = URL.createObjectURL(blob);
                    img.onload = () => {
                        loadedImages[url] = img;
                        URL.revokeObjectURL(blobUrl);
                        resolve(img);
                    };
                    img.onerror = reject;
                    img.src = blobUrl;
                })
                .catch(reject);
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
        }).catch(err => console.error("Failed to load SVG assets:", err));
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
                frame: Math.floor(Math.random() * assets.stars.length),
                tick: Math.floor(Math.random() * STAR_TWINKLE_SPEED)
            });
        }
        // Create Doodles
        for (let i = 0; i < NUM_DOODLES; i++) {
            const doodleType = Math.floor(Math.random() * assets.doodles.length);
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                type: 'doodle',
                doodleType: doodleType,
                scale: 2 + Math.random() * 2,
                opacity: 0.8,
                frame: Math.floor(Math.random() * 2),
                tick: Math.floor(Math.random() * DOODLE_BOIL_SPEED)
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.tick++;
            let img;
            let speed;

            if (p.type === 'star') {
                speed = STAR_TWINKLE_SPEED;
                if (p.tick >= speed) {
                    p.frame = (p.frame + 1) % assets.stars.length;
                    p.tick = 0;
                }
                img = loadedImages[assets.stars[p.frame]];
            } else { // doodle
                speed = DOODLE_BOIL_SPEED + Math.floor(Math.random() * 10 - 5); // Add jitter
                if (p.tick >= speed) {
                    p.frame = (p.frame + 1) % 2;
                    p.tick = 0;
                }
                img = loadedImages[assets.doodles[p.doodleType][p.frame]];
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
