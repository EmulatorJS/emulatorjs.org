<style>
    .form {
        position: absolute;
        top: 450px;
        left: 50%;
        margin-top: -150px;
        margin-left: -250px;
        width: 500px;
        height: 200px;
        border: 4px dashed #111;
        cursor: pointer;
    }
    .form p {
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 170px;
        color: #111;
        font-family: Arial;
        cursor: pointer;
    }
    .form input {
        position: absolute;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        outline: none;
        opacity: 0;
        cursor: pointer;
    }
    .eimg {
        width: 250px;
    }
    #uploadf, #uploadf1 {
        display: block;	
    }
    select, button {
        padding: 0.6em 0.4em;
        margin: 0.5em;
        width: 15em;
        max-width: 100%;
        font-family: monospace;
        font-weight: bold;
        font-size: 16px;
        background-color: #444;
        color: #aaa;
        border-radius: 0.4em;
        border: 1px solid #555;
        cursor: pointer;
        transition-duration: 0.2s
    }
</style>
<div id="box">
    <div id="uploadf" class="form">
        <input type="file" id="input" onchange="romSelected()">
        <b><p>Select Game Rom: Drag your files here or click in this area.</p></b>
    </div>
</div>

<script>
    window.romSelected = async function() {
        const input = document.getElementById('input');
        const box = document.getElementById('box');
        const ce = function(e) {return document.createElement(e);};
        const br = function(e) {e.appendChild(ce('br'))};
        const url = URL.createObjectURL(new Blob([input.files[0]]));
        const parts = input.files[0].name.split(".");

        const core = await (async function(ext) {
            if (["fds", "nes", "unif", "unf"].includes(ext))
                return "nes";

            if (["smc", "fig", "sfc", "gd3", "gd7", "dx2", "bsx", "swc"].includes(ext))
                return "snes";

            if (["z64", "n64"].includes(ext))
                return "n64";

            if (["nds", "gba", "gb", "z64", "n64"].includes(ext))
                return ext;

            
            return await new Promise(function(resolve, reject) {
                var cores = {"NES / Nintendo Entertainment System / Famicon": "nes",
                             "SNES / Super Nintendo Entertainment System": "snes",
                             "Nintendo 64": "n64",
                             "Nintendo Game Boy": "gb",
                             "Nintendo Game Boy Advance": "gba",
                             "Nintendo DS": "nds",
                             "PlayStation": "psx",
                             "Virtual Boy": "vb",
                             "Sega Mega Drive": "segaMD",
                             "Sega Master System": "segaMS",
                             "Sega CD": "segaCD",
                             "Atari Lynx": "lynx",
                             "Sega 32X": "sega32x",
                             "Atari Jaguar": "jaguar",
                             "Sega Game Gear": "segaGG",
                             "Sega Saturn": "segaSaturn",
                             "Atari 7800": "atari7800",
                             "Atari 2600": "atari2600"};
                var a = ce('div');
                a.style = 'padding: 50px;';
                var p = ce('h2');
                p.innerHTML = 'Unable to auto-detect system. Please select the desired system.';
                a.appendChild(p);
                br(a);
                for (var k in cores) {
                    var input = ce('input');
                    input.type = 'radio';
                    input.id = 'game-' + cores[k];
                    input.name = 'game';
                    input.value = cores[k];
                    a.appendChild(input);
                    var label = ce('label');
                    label.for = 'game-' + cores[k];
                    label.innerHTML = k;
                    a.appendChild(label);
                    br(a);
                };
                br(a);
                var submit = ce('input');
                submit.type = 'submit';
                submit.value = 'Load Game';
                submit.addEventListener('click', function(e) {
                    var q = false;
                    var radios = document.getElementsByName('game');
                    for (var i=0; i<radios.length; i++) {
                        if (radios[i].checked) {
                            var q = radios[i].value;
                            break;
                        };
                    };
                    if (! q) {
                        return;
                    };
                    a.remove();
                    resolve(q);
                });
                a.appendChild(submit);
                box.innerHTML = "";
                box.appendChild(a);
            });
        })(parts.pop());

        const div = document.createElement("div");
        const sub = document.createElement("div");
        const script = document.createElement("script");

        sub.id = "game";
        div.style = "width:640px;height:480px;max-width:100%";
        box.innerHTML = "";

        div.appendChild(sub);
        box.parentElement.appendChild(div);

        window.EJS_player = "#game"
        window.EJS_gameName = parts.shift()
        window.EJS_biosUrl = ""
        window.EJS_gameUrl = url
        window.EJS_core = core
        window.EJS_pathtodata = "data/"

        script.src = "data/loader.js";
        box.parentElement.appendChild(script);
        box.remove();
    }
</script>
