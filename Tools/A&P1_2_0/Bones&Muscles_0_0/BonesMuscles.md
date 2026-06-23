# A&P 1: Bones & Muscles - SVG Generation Context

## 1. Goal
The primary objective is to systematically replace the generic placeholder SVGs with high-quality, anatomically representative, and interactive vector graphics for every bone and muscle listed in `Bones&Muscles_data.js`.

## 2. System Architecture
The tool uses a "specific-over-fallback" architecture to ensure it remains functional at all times, even with incomplete SVG data.

*   **`Bones&Muscles_data.js`**: This file contains the `rawDB` array, which is the master list of all anatomical items. During initialization, a unique `svg_id` (e.g., `muscle_pectoralis_major`) and a fallback `svg_template` (e.g., `placeholder_muscle`) are assigned to each item.

*   **`Bones&Muscles_svg_data.js`**: This file acts as the central SVG library. It contains a single object, `svgDB`. The keys of this object correspond to the `svg_id`s from the data file, and the values are JavaScript template literals containing the raw SVG code.

*   **`Bones&Muscles.html` (The Engine)**: When displaying a card, the script first attempts to find a key in `svgDB` that exactly matches the item's specific `svg_id`.
    *   **If found:** It renders the custom, high-quality SVG.
    *   **If not found:** It falls back to using the item's `svg_template` key (e.g., `svgDB['placeholder_muscle']`) to render the generic, interactive placeholder.

This architecture allows for the incremental addition of custom SVGs without ever breaking the tool.

## 3. SVG Design Principles

All newly generated SVGs must adhere to the following principles to ensure consistency and functionality.

*   **Anatomical Accuracy**: SVGs should be a realistic, albeit simplified, representation of the muscle or bone and its surrounding structures.
*   **Interactivity**: Each SVG **must** contain specific group (`<g>`) elements with IDs that the engine uses to control highlighting.
    *   **For Muscles**:
        *   `<g id="origin-layer">`: Contains all paths/shapes representing the muscle's origin points.
        *   `<g id="insertion-layer">`: Contains all paths/shapes representing the insertion points.
        *   `<g id="action-layer">`: Contains the paths for the muscle belly, tendons, and any striations.
    *   **For Bones**:
        *   `<g id="region-layer">`: Contains the main path(s) for the bone itself.
        *   `<g id="landmarks-layer">`: Contains shapes (circles, rects) highlighting the key landmarks.
*   **Aesthetic Consistency**: All SVGs should use the predefined `defs` for gradients and filters (e.g., `id="bone-shading"`, `id="muscle-shading"`, `id="glow"`) to maintain a uniform look and feel. Interactivity colors are controlled by CSS variables (`--success` and `--accent`).

## 4. Workflow

The process for adding a new SVG is as follows:

1.  Consult `BonesMusclesTracking.md` to identify the next incomplete item.
2.  Generate the new SVG code, ensuring it meets all the design principles outlined above.
3.  Open `Bones&Muscles_svg_data.js` and add a new entry to the `svgDB` object. The key **must** be the item's exact `svg_id` from the tracking file, and the value will be the new SVG code wrapped in backticks (``).
4.  Update the status of the item in `BonesMusclesTracking.md` from `⬜` to `✅`.
