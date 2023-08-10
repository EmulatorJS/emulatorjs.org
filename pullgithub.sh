if [ ! -d "src/github" ]; then
    cd src
    mkdir github
    cd ../
fi
cd src/github
git init
git remote add -f origin https://github.com/EmulatorJS/EmulatorJS.git
git config core.sparseCheckout true
echo "docs/Systems" >> .git/info/sparse-checkout
echo "docs/Contributors.md" >> .git/info/sparse-checkout
echo "CHANGES.md" >> .git/info/sparse-checkout
git pull origin main
cd ../../
