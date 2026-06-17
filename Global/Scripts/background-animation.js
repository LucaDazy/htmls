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
                    // --- SVG Normalization Logic ---

                    // 1. Parse viewBox to get dimensions and offsets
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

                    // 2. Extract the content inside the <svg> tag
                    const svgContentMatch = svgText.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
                    if (!svgContentMatch || !svgContentMatch[1]) {
                        return reject(new Error(`Could not parse content of SVG: ${url}`));
                    }
                    let innerContent = svgContentMatch[1];

                    // 3. Remove the non-functional filter
                    innerContent = innerContent.replace(/filter="url\(#jitter\)"/g, '');

                    // 4. Create a new, normalized SVG string that is perfectly centered
                    const normalizedSvgString = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}">
                            <g transform="translate(${-minX}, ${-minY})">
                                ${innerContent}
                            </g>
                        </svg>
                    `;
                    
                    // 5. Apply the desired color
                    const coloredSvg = normalizedSvgString.replace(/#FFFFFF/gi, DOODLE_COLOR);

                    // --- Image Loading Logic ---
                    const blob = new Blob([coloredSvg], { type: 'image/svg+xml' });
                    const blobUrl = URL.createObjectURL(blob);
                    
                    img.onload = () => {
                        // Store the image object and its true dimensions
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
        const laneWidth = canvas.width / TOTAL_PARTICLES;
        const lanes = Array.from({ length: TOTAL_PARTICLES }, (_, i) => i).sort(() => Math.random() - 0.5);

        for (let i = 0; i < TOTAL_PARTICLES; i++) {
            const url = assetUrls[Math.floor(Math.random() * assetUrls.length)];
            const asset = loadedImageObjects[url];
            
            let baseSize = 70; // New default size is twice as large
            // Keep specified doodles at the original, smaller size
            if (url.includes('sparkle.svg') || url.includes('dot.svg') || url.includes('square.svg')) {
                baseSize = 35;
            }
            
            const maxDim = Math.max(asset.width, asset.height);
            const scale = (baseSize / maxDim) * (0.8 + Math.random() * 0.4); 

            const laneIndex = lanes.pop();
            particles.push({
                x: (laneIndex * laneWidth) + (Math.random() * laneWidth),
                y: Math.random() * canvas.height,
                scale: scale,
                opacity: 0.2 + Math.random() * 0.6,
                speed: 0.05 + Math.random() * 0.2,
                imgObject: asset.img,
                baseWidth: asset.width,
                baseHeight: asset.height
            });
        }
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
