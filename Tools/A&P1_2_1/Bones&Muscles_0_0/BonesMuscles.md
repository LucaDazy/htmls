# A&P 1: Bones & Muscles - SVG Generation Context

## 1. Goal
The primary objective is to systematically replace the generic placeholder SVGs with high-quality, anatomically representative, and interactive vector graphics for every bone and muscle listed in `Bones&Muscles_data.js`.

## 2. System Architecture
The tool uses a "specific-over-fallback" architecture to ensure it remains functional at all times, even with incomplete SVG data.

*   **`Bones&Muscles_data.js`**: This file contains the `rawDB` array, which is the master list of all anatomical items. During initialization, a unique `svg_id` (e.g., `muscle_pectoralis_major`) and a fallback `svg_template` (e.g., `placeholder_muscle`) are assigned to each item.

*   **`SVGs/` directory**: This directory contains all the individual, high-quality SVG modules as `.js` files. Each file is named according to its `svg_id` (e.g., `muscle_pectoralis_major.js`).

*   **`Bones&Muscles_svg_data.js`**: This file is now a manifest. It contains a single array, `svgDB`, which lists the `svg_id` strings of all completed, custom SVGs.

*   **`Bones&Muscles.html` (The Engine)**: When displaying a card, the script checks if the item's `svg_id` exists in the `svgDB` manifest array.
    *   **If found:** It dynamically loads and renders the corresponding custom SVG module from the `SVGs/` directory (e.g., `SVGs/muscle_pectoralis_major.js`).
    *   **If not found:** It falls back to loading the appropriate placeholder module (e.g., `SVGs/placeholder_muscle.js`).

This architecture allows for the incremental addition of custom SVGs without ever breaking the tool.

## 3. SVG Design Principles

All newly generated SVGs must adhere to the following principles to ensure consistency and functionality.

*   **Anatomical Accuracy**: SVGs should be a realistic, albeit simplified, representation of the muscle or bone and its surrounding structures.
*   **Interactivity**: Each SVG **must** contain specific group (`<g>`) elements with IDs that the engine uses to control highlighting.
    *   **For Muscles**:
        *   `<g id="origin-layer">`: Contains all paths/shapes representing the muscle's origin points.
        *   `<g id="insertion-layer">`: Contains all paths/shapes representing the insertion points.
        *   `<g id="action-layer">`: This is a container group for the sequential highlight. It **must** contain two mandatory child groups:
            *   `<g id="action-belly">`: Contains all paths for the muscle belly.
            *   `<g id="action-tendon">`: Contains all paths for the tendons and other connective tissues.
    *   **For Bones**:
        *   `<g id="region-layer">`: Contains the main path(s) for the bone itself.
        *   `<g id="landmarks-layer">`: Contains shapes (circles, rects) highlighting the key landmarks.
*   **Aesthetic Consistency**: All SVGs should use the predefined `defs` for gradients and filters (e.g., `id="bone-shading"`, `id="muscle-shading"`, `id="glow"`) to maintain a uniform look and feel. Interactivity colors are controlled by CSS variables (`--success` and `--accent`).

## 4. Workflow

The process for adding a new SVG is as follows:

1.  Consult `BonesMusclesTracking.md` to identify the next incomplete item.
2.  Generate the new SVG code, ensuring it meets all the design principles outlined above.
3.  Create a new JavaScript file inside the `Tools/A&P1_2_0/Bones&Muscles_0_0/SVGs/` directory. The filename **must** be the item's exact `svg_id` with a `.js` extension (e.g., `muscle_sternohyoid.js`).
4.  Inside this new file, add the line `svgDataStore['svg_id'] = \`<svg>...\</svg>\`;`, replacing `svg_id` with the item's ID and pasting the SVG code within the backticks.
5.  Open `Bones&Muscles_svg_data.js` and add the new item's `svg_id` string to the `svgDB` array.
6.  Update the status of the item in `BonesMusclesTracking.md` from `⬜` to `✅`.
