# Go back to root folder
cd ..

# Creating dist folder if it does not exist
mkdir dist

# Make dist folder point to gh-pages git branch
git worktree add dist gh-pages
