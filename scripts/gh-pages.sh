# Stashing uncomitted changes
cd ../dist
git stash
cd ..

# Build the app : output is stored in public/
npm run build

# Copy dist files to another direct
cp -R public/* dist/

# Go to dist folder (points to gh-pages branch)
cd dist

# Committing
git add .
git commit -am "Auto-generated commit"
