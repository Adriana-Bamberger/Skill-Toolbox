#!/bin/bash

# Target directory where Claude looks for global skills
TARGET_DIR="$HOME/.claude/skills"

# Ensure the Claude skills directory exists
mkdir -p "$TARGET_DIR"

echo "🔄 Syncing your Skill Toolbox to Claude Code..."
echo "=================================================="

# Your specific repository categories
CATEGORIES=("backend" "foundation" "frontend" "other" "security" "testing")

# Counter for synced skills
COUNT=0

for category in "${CATEGORIES[@]}"; do
    if [ -d "$category" ]; then
        echo "📂 Category: $category/"
        
        # Loop through every subfolder inside the category
        for skill_path in "$category"/*; do
            if [ -d "$skill_path" ]; then
                skill_name=$(basename "$skill_path")
                
                # Enforce safety check: Only sync if it's an actual skill folder containing SKILL.md
                if [ -f "$skill_path/SKILL.md" ]; then
                    # Get the absolute path of your toolbox skill folder
                    source_abs_path=$(cd "$skill_path" && pwd)
                    link_path="$TARGET_DIR/$skill_name"
                    
                    # Remove any old broken links or files to avoid conflicts
                    rm -rf "$link_path"
                    
                    # Create the symlink
                    ln -s "$source_abs_path" "$link_path"
                    
                    echo "   🔗 Linked: /$skill_name"
                    ((COUNT++))
                else
                    echo "   ⚠️  Skipped: $skill_name (Missing SKILL.md)"
                fi
            fi
        done
        echo "--------------------------------------------------"
    fi
done

echo "✅ Success! $COUNT skills linked to $TARGET_DIR"
echo "💡 Open Claude Code and type '/' to see your commands."