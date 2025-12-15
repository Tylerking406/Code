#!/usr/bin/env bash

set -e

UI_DIR="src/components/ui"

echo "🔍 Removing \"use client\" from .tsx files in $UI_DIR"

find "$UI_DIR" -type f -name "*.tsx" | while read -r file; do
  # Remove only lines that exactly match: "use client";
  sed -i.bak '/^"use client";[[:space:]]*$/d' "$file"
  rm -f "$file.bak"
done

echo "✅ Done. All \"use client\" directives removed."
