const fs = require("fs");
const { exec } = require('child_process');
const execute = (cmd, dir) => {
    return new Promise((res) => {
        exec("cd \""+dir+"\" && "+cmd, (err, stdout, stderr) => {
            res();
            //console.log(`stdout: ${stdout}`);
            //console.log(`stderr: ${stderr}`);
        });
    })
}
if (!fs.statSync("src/github", {throwIfNoEntry:false})) {
    fs.mkdirSync("src/github");
}
(async() => {
    await execute("git init", "src/github");
    await execute("git remote add -f origin https://github.com/EmulatorJS/EmulatorJS.git", "src/github");
    await execute("git config core.sparseCheckout true", "src/github");
    fs.writeFileSync("src/github/.git/info/sparse-checkout", "docs/Systems\ndocs/Contributors.md\nCHANGES.md\n");
    await execute("git pull origin main", "src/github");
    console.log("done");
})();