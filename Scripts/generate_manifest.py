import os
import json

def parse_name(name):
    """Parses folder names like 'MyTool_1_2' into a dict."""
    parts = name.split('_')
    if len(parts) < 3:
        return None
    try:
        sort1 = int(parts[-2])
        sort2 = int(parts[-1])
        display_name = " ".join(parts[:-2])
        return {"name": display_name, "sort1": sort1, "sort2": sort2}
    except ValueError:
        return None

def main():
    """Scans the 'Tools' directory and generates a JSON manifest."""
    manifest = []
    tools_root = 'Tools'

    if not os.path.isdir(tools_root):
        print(f"Error: '{tools_root}' directory not found.")
        return

    # Iterate through categories (e.g., A&P1_2_0)
    for cat_folder in sorted(os.listdir(tools_root)):
        cat_path = os.path.join(tools_root, cat_folder)
        if not os.path.isdir(cat_path):
            continue

        cat_info = parse_name(cat_folder)
        if not cat_info:
            continue

        category = {
            "categoryName": cat_info["name"],
            "sort1": cat_info["sort1"],
            "sort2": cat_info["sort2"],
            "tools": []
        }

        # Iterate through tools (e.g., Bones&Muscles_0_0)
        for tool_folder in sorted(os.listdir(cat_path)):
            tool_path = os.path.join(cat_path, tool_folder)
            if not os.path.isdir(tool_path):
                continue

            tool_info = parse_name(tool_folder)
            if not tool_info:
                continue
            
            # Find the main HTML file within the tool folder
            html_file = next((f for f in os.listdir(tool_path) if f.endswith('.html')), None)
            if not html_file:
                continue

            tool_data = {
                "name": tool_info["name"],
                "path": os.path.join(tool_path, html_file).replace("\\", "/"),
                "sort1": tool_info["sort1"],
                "sort2": tool_info["sort2"]
            }
            category["tools"].append(tool_data)

        if category["tools"]:
            # Sort tools within the category
            category["tools"].sort(key=lambda x: x['sort2'], reverse=True)
            manifest.append(category)

    # Sort categories
    manifest.sort(key=lambda x: (x['sort1'], x['sort2']), reverse=True)

    # Write the manifest file
    output_path = 'Global/tool-manifest.json'
    with open(output_path, 'w') as f:
        json.dump(manifest, f, indent=2)
    
    print(f"Successfully generated manifest at '{output_path}'")

if __name__ == "__main__":
    main()
