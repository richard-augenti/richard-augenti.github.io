#!/usr/bin/env python3
import shutil
import os

source_dir = "/Users/richard/Documents/source/richard-augenti/src"
dest_dir = "/Users/richard/source/richard-augenti.github.io/src"

if os.path.exists(source_dir):
    if os.path.exists(dest_dir):
        shutil.rmtree(dest_dir)
    shutil.copytree(source_dir, dest_dir)
    print(f"Successfully copied {source_dir} to {dest_dir}")
else:
    print(f"Source directory not found: {source_dir}")
