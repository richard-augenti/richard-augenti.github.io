const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const sourceDir = '/Users/richard/Documents/source/richard-augenti/src';
const destDir = '/Users/richard/source/richard-augenti.github.io/src';

// Copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('Copying src directory...');
copyDir(sourceDir, destDir);
console.log('Copy complete!');

console.log('Staging files...');
execSync('cd /Users/richard/source/richard-augenti.github.io && git add -A', { stdio: 'inherit' });

console.log('Committing...');
try {
  execSync('cd /Users/richard/source/richard-augenti.github.io && git commit -m "Add portfolio source files and GitHub Pages configuration"', { stdio: 'inherit' });
} catch (e) {
  console.log('No changes to commit or commit failed');
}

console.log('Pushing...');
execSync('cd /Users/richard/source/richard-augenti.github.io && git push origin main', { stdio: 'inherit' });

console.log('Done!');
