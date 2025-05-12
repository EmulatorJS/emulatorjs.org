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
    fs.writeFileSync("github/.git/info/sparse-checkout", "docs/contributors.md\nCHANGES.md\ndata/localization/README.md\nminify/README.md\n");
    await execute("git pull origin main", "github");
    fs.readFile('github/docs/contributors.md', 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
        const newData = `---\ntoc: false\n---\n<style>\na { display: inline-block; }\n</style>\n${data}`;
        fs.writeFile('content/1.docs/13.contributors.md', newData, (err) => {
          if (err) {
            throw err;
          }
        });
    });
    fs.readFile('github/CHANGES.md', 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
        data = data.replace("# Changes\n","");
        const newData = `---\ntoc: false\n---\n# Changes\nGithub has the latest information on <a href="https://github.com/EmulatorJS/EmulatorJS/releases" target="_blank">releases</a>.\n${data}`;
        fs.writeFile('content/1.docs/11.changelog.md', newData, (err) => {
          if (err) {
            throw err;
          }
        });
    });
    fs.readFile('github/minify/README.md', 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      fs.writeFile('content/2.docs4devs/8.minifying.md', data, (err) => {
        if (err) {
          throw err;
        }
      });
    });
    fs.readFile('github/data/localization/README.md', 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
        fs.writeFile('content/1.docs/9.languages.md', data, (err) => {
          if (err) {
            throw err;
          }
        });
    });
    console.log("done");
})();
