const fs = require("fs");
const { exec } = require('child_process');
const execute = (cmd, dir) => {
    return new Promise((res) => {
        exec("cd \""+dir+"\" && "+cmd, (err, stdout, stderr) => {
            res();
        });
    })
}
if (!fs.statSync("content/github", {throwIfNoEntry:false})) {
    fs.mkdirSync("content/github");
}
(async() => {
    await execute("git init", "content/github");
    await execute("git remote add -f origin https://github.com/EmulatorJS/EmulatorJS.git", "content/github");
    await execute("git config core.sparseCheckout true", "content/github");
    fs.writeFileSync("content/github/.git/info/sparse-checkout", "docs/Contributors.md\nCHANGES.md\n");
    await execute("git pull origin main", "content/github");
    console.log("done");
})();