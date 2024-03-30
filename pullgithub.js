const fs = require("fs");
const { exec } = require('child_process');
const execute = (cmd, dir) => {
    return new Promise((res) => {
        exec("cd \""+dir+"\" && "+cmd, (err, stdout, stderr) => {
            res();
        });
    })
}
if (!fs.statSync("github", {throwIfNoEntry:false})) {
    fs.mkdirSync("github");
}
(async() => {
    await execute("git init", "github");
    await execute("git remote add -f origin https://github.com/EmulatorJS/EmulatorJS.git", "github");
    await execute("git config core.sparseCheckout true", "github");
    fs.writeFileSync("github/.git/info/sparse-checkout", "docs/Contributors.md\nCHANGES.md\n");
    await execute("git pull origin main", "github");
    fs.copyFile('github/docs/Contributors.md', 'content/1.introduction/5.contributors.md', (err) => { if (err) throw err; });
    fs.copyFile('github/CHANGES.md', 'content/1.introduction/6.changelog.md', (err) => { if (err) throw err; });
    console.log("done");
})();