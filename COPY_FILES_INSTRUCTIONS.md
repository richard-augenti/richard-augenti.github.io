# Quick Setup Instructions

## Step 1: Copy the src directory

Run this command in your terminal:

```bash
cp -r /Users/richard/Documents/source/richard-augenti/src /Users/richard/source/richard-augenti.github.io/
```

## Step 2: Verify files are copied

You should now have:
- ✅ `package.json`
- ✅ `index.html`
- ✅ `postcss.config.mjs`
- ✅ `vite.config.ts` (with `base: '/'`)
- ✅ `.github/workflows/deploy.yml`
- ✅ `src/` directory (with all components)

## Step 3: Commit and push

```bash
cd /Users/richard/source/richard-augenti.github.io
git add .
git commit -m "Add portfolio source files and GitHub Pages configuration"
git push origin main
```

## Step 4: Enable GitHub Pages

1. Go to: https://github.com/richard-augenti/richard-augenti.github.io/settings/pages
2. Under "Source", select: **GitHub Actions**
3. Save

## Step 5: Wait for deployment

- Go to the **Actions** tab in your repository
- The workflow should start automatically
- Wait 2-3 minutes for it to complete
- Your site will be live at: **https://richard-augenti.github.io/**

## Troubleshooting

If the workflow fails:
- Check the Actions tab for error messages
- Make sure all files were copied correctly
- Verify `vite.config.ts` has `base: '/'` (not `/richard-augenti/`)
