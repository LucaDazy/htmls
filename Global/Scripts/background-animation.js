document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('background-canvas');
    if (!canvas) {
        console.error('Background canvas element not found.');
        return;
    }
    const ctx = canvas.getContext('2d');

    // --- Configuration ---
    const DOODLE_COLOR = '#403143'; // The subtle color for the doodles

    let particles = [];
    let loadedImageObjects = {}; // Will store preloaded image data

    const fillerUrls = [
        'Global/SVGs/doodles/dot.svg',
        'Global/SVGs/doodles/plus.svg',
        'Global/SVGs/doodles/sparkle.svg',
        'Global/SVGs/doodles/square.svg'
    ];
    const doodleUrls = [
        'Global/SVGs/doodles/apple.svg',
        'Global/SVGs/doodles/books.svg',
        'Global/SVGs/doodles/emc2.svg',
        'Global/SVGs/doodles/gradcap.svg',
        'Global/SVGs/doodles/pencil.svg',
        'Global/SVGs/doodles/ruler.svg',
        'Global/SVGs/doodles/star.svg',
        'Global/SVGs/doodles/worm.svg'
    ];
    const assetUrls = [...fillerUrls, ...doodleUrls];

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
                    const viewBoxMatch = svgText.match(/viewBox="([^"]+)"/);
                    let svgWidth = 100, svgHeight = 100, minX = 0, minY = 0;
                    if (viewBoxMatch && viewBoxMatch[1]) {
                        const parts = viewBoxMatch[1].split(' ');
                        if (parts.length === 4) {
                            minX = parseFloat(parts[0]);
                            minY = parseFloat(parts[1]);
                            svgWidth = parseFloat(parts[2]);
                            svgHeight = parseFloat(parts[3]);
                        }
                    }

                    const svgContentMatch = svgText.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
                    if (!svgContentMatch || !svgContentMatch[1]) {
                        return reject(new Error(`Could not parse content of SVG: ${url}`));
                    }
                    let innerContent = svgContentMatch[1].replace(/filter="url\(#jitter\)"/g, '');

                    const normalizedSvgString = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}">
                            <g transform="translate(${-minX}, ${-minY})">
                                ${innerContent}
                            </g>
                        </svg>
                    `;
                    
                    const coloredSvg = normalizedSvgString.replace(/#FFFFFF/gi, DOODLE_COLOR);
                    const blob = new Blob([coloredSvg], { type: 'image/svg+xml' });
                    const blobUrl = URL.createObjectURL(blob);
                    
                    img.onload = () => {
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
        const numFillers = 150; // Increased count for small shapes
        const numDoodles = 15;  // Reduced count for large shapes
        const totalParticles = numFillers + numDoodles;

        const laneWidth = canvas.width / totalParticles;
        const lanes = Array.from({ length: totalParticles }, (_, i) => i).sort(() => Math.random() - 0.5);

        // Create Fillers
        for (let i = 0; i < numFillers; i++) {
            const url = fillerUrls[Math.floor(Math.random() * fillerUrls.length)];
            const asset = loadedImageObjects[url];
            
            const baseSize = 42; // Base size for small fillers (1.7x larger)
            
            const maxDim = Math.max(asset.width, asset.height);
            const scale = (baseSize / maxDim) * (0.8 + Math.random() * 0.4); 

            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                scale: scale,
                opacity: 0.15 + Math.random() * 0.4,
                speed: 0.05 + Math.random() * 0.1,
                imgObject: asset.img,
                baseWidth: asset.width,
                baseHeight: asset.height
            });
        }

        // Create Doodles
        for (let i = 0; i < numDoodles; i++) {
            const url = doodleUrls[Math.floor(Math.random() * doodleUrls.length)];
            const asset = loadedImageObjects[url];
            
            const baseSize = 182; // Larger size for doodles (1.3x larger)
            const maxDim = Math.max(asset.width, asset.height);
            const scale = (baseSize / maxDim) * (0.8 + Math.random() * 0.4); 

            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                scale: scale,
                opacity: 0.3 + Math.random() * 0.5,
                speed: 0.1 + Math.random() * 0.2,
                imgObject: asset.img,
                baseWidth: asset.width,
                baseHeight: asset.height
            });
        }

        // Shuffle all particles to mix doodles and fillers
        particles.sort(() => Math.random() - 0.5);
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.y += p.speed;
            const w = p.baseWidth * p.scale;
            const h = p.baseHeight * p.scale;

            if (p.y - h > canvas.height) {
                p.y = -h;
                p.x = Math.random() * canvas.width;
            }
            
            ctx.globalAlpha = p.opacity;
            ctx.drawImage(p.imgObject, p.x - w / 2, p.y - h / 2, w, h);
        });

        requestAnimationFrame(animate);
    }

    init();
});
