#!/bin/bash
set -e

# Copy src directory
echo "Copying src directory..."
cp -r /Users/richard/Documents/source/richard-augenti/src /Users/richard/source/richard-augenti.github.io/

# Navigate to repo
cd /Users/richard/source/richard-augenti.github.io

# Add all files
echo "Staging files..."
git add -A

# Commit
echo "Committing..."
git commit -m "Add portfolio source files and GitHub Pages configuration" || echo "No changes to commit"

# Push
echo "Pushing to origin..."
git push origin main

echo "Done!"
