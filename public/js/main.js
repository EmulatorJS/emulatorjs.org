$(document).ready(function() {
    let $button = $.backToTop({
        color: '#00afe4',
        effect: 'fade',
        position: 'bottom right',
        scrollAnimation: 500,
        theme: 'default',
        width: 35,
    });
    $button.resize(50, 50);
});

const target = document.querySelector('title');
let observer = new MutationObserver(function (mutations) {
    mutations.forEach(function () {
        if (document.title !== 'Code Generator · EmulatorJS' && window.location.pathname === '/editor') {
            document.title = 'Code Generator · EmulatorJS';
        }
        if (document.title !== 'Translation Tool · EmulatorJS' && window.location.pathname === '/translate') {
            document.title = 'Translation Tool · EmulatorJS';
        }
        if (window.location.pathname === '/translate') {
            translate();
        }
    });
});
observer.observe(target, config = { childList: true, });

let radioContainerHTML;

function editorMain() {
    if (!radioContainerHTML) {
        loadsystems();
    }
    const radioContainer = document.getElementById('radioContainer');
    radioContainer.innerHTML = radioContainerHTML;
    var startBtn = document.getElementById('start');
    var systemSelect = document.getElementById('systemSelect');
    var select2 = document.getElementById('select2');
    startBtn.style = "display:none;"
    systemSelect.style = "display:block;"
    document.getElementById('p2d').addEventListener('change', function (e) {
        document.getElementById('ptwod').style = (document.getElementById('p2d').checked ? 'display:block;' : 'display:none');
    })
    document.getElementById('offline').addEventListener('change', function (e) {
        document.getElementById('pathToData').style = (document.getElementById('offline').checked ? 'display:none;' : 'display:block');
        document.getElementById('singleFile').style = (document.getElementById('offline').checked ? 'display:block;' : 'display:none');
        document.getElementById('bf').style = (document.getElementById('offline').checked ? 'display:none;' : 'display:block');
        document.getElementById('ss').style = (document.getElementById('offline').checked ? 'display:none;' : 'display:block');
    })
    document.getElementById('systemSelected').addEventListener('click', function (e) {
        let system = null;
        var radios = document.getElementsByName('systemSelect');
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                system = radios[i].value;
                break;
            };
        };
        if (system === null) { return };
        for (var i = 0; i < systems.length; i++) {
            if (systems[i].core === system) {
                system = systems[i]
                break
            }
        }
        if (system.lightgun) {
            document.getElementById('lg').style = "display:block;"
        }
        if (system.bios) {
            document.getElementById('bf').style = "display:block;"
        }
        if (system.mouse) {
            document.getElementById('sm').style = "display:block;"
        }
        if (system.multitap) {
            document.getElementById('smt').style = "display:block;"
        }
        window.selectedCoreData = system;
        window.scrollTo(0, 0);
        systemSelect.style = "display:none;"
        select2.style = "display:block;"
    })
    document.getElementById('generateFile').addEventListener('click', async function (e) {
        let data = {}
        let zip = new JSZip();
        let file = document.getElementById('gameRom').files[0]
        let ejsColor = document.getElementById('ejsColor')
        let errors = document.getElementById('errors')
        let path2Data = document.getElementById('path2Data')
        let biosFile = document.getElementById('biosFile')
        let offline = document.getElementById('offline')
        let stateOnLoad = document.getElementById('stateOnLoad')
        if (ejsColor.value && ejsColor.value.trim() !== '') {
            if (!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(ejsColor.value)) {
                errors.innerHTML = '<p><span style="color:red;font-size:25px;">An error occured When Generating</span></p><ul><li>Color theme is not hex value</li></ul>'
                return
            }
        }
        if (!file) {
            errors.innerHTML = '<p><span style="color:red;font-size:25px;">An error occured When Generating</span></p><ul><li>No rom file selected</li></ul>'
            return
        }
        let gameName = (document.getElementById('nameOfGame').value && document.getElementById('nameOfGame').value.trim() !== '') ? document.getElementById('nameOfGame').value : file.name;
        try {
            //let isChromebook = window.navigator.userAgent.includes("CrOS");
            //window.sendLog("A user just generated a page with the EmulatorJS code helper.\n    Game Name: "+gameName+"\n    File name: "+file.name+"\n    System: "+window.selectedCoreData.core+"\n    Offline: "+(offline.checked ? (document.getElementById('offlinePack').checked ? "pack" : "yes") : "no")+"\n    Custom path to data: "+((document.getElementById('p2d').checked&&path2Data.value.trim()) ? path2Data.value : "no")+"\n    Ad Url: "+(document.getElementById('adUrl').value.trim() ? "<"+document.getElementById('adUrl').value.trim()+">" : "no")+"\n    Is Chromebook: "+(isChromebook ? "yes" : "no"));
        } catch (e) { }
        data['EJS_player'] = '#game';
        data['EJS_core'] = window.selectedCoreData.core;
        if (document.getElementById('snesMouse').checked) {
            data['EJS_mouse'] = true;
        }
        if (document.getElementById('snesMultiTap').checked) {
            data['EJS_multitap'] = true;
        }
        if (document.getElementById('nameOfGame').value && document.getElementById('nameOfGame').value.trim() !== '') {
            data['EJS_gameName'] = document.getElementById('nameOfGame').value;
        }
        if (document.getElementById('adUrl').value && document.getElementById('adUrl').value.trim() !== '') {
            data['EJS_AdUrl'] = document.getElementById('adUrl').value;
        }
        if (ejsColor.value && ejsColor.value.trim() !== '') {
            data['EJS_color'] = ejsColor.value;
        }
        if (document.getElementById('startOnLoad').checked) {
            data['EJS_startOnLoaded'] = true;
        }
        if (document.getElementById('p2d').checked && path2Data.value && path2Data.value.trim() !== '') {
            data['EJS_pathtodata'] = path2Data.value;
            if (!data['EJS_pathtodata'].endsWith('/')) {
                data['EJS_pathtodata'] += '/';
            }
        } else {
            data['EJS_pathtodata'] = 'https://cdn.emulatorjs.org/stable/data/';
        }

        let zipOut = true;
        let fileData = '<html>\n    <head>\n        <!--HTML file auto generated using EmulatorJS codehelper-->\n        <style>\n            body, html {\n                margin: 0;\n                padding: 0;\n            }\n        </style>\n    </head>\n    <body>\n        <div style="width:100%;height:100%;max-width:100%">\n            <div id="game"></div>\n        </div>\n        <script>\n';
        const spaces = '            ';
        if (!offline.checked) {
            if (stateOnLoad.files[0]) {
                data['EJS_loadStateURL'] = stateOnLoad.files[0].name;
                zip.file(stateOnLoad.files[0].name, new Blob([stateOnLoad.files[0]]));
            }
            data['EJS_gameUrl'] = file.name;
            zip.file(file.name, new Blob([file]));
            if (biosFile.files[0]) {
                data['EJS_biosUrl'] = biosFile.files[0].name;
                zip.file(biosFile.files[0].name, new Blob([biosFile.files[0]]));
            }
            for (var k in data) {
                if (data[k] === true || data[k] === false) {
                    fileData += (spaces + k + ' = ' + data[k] + ';\n');
                } else {
                    fileData += (spaces + k + ' = "' + data[k] + '";\n');
                }
            }
            fileData += '        </script>\n        <script src="' + data['EJS_pathtodata'] + 'loader.js"></script>\n    </body>\n</html>';
        } else if (document.getElementById('offlinePack').checked) {
            data['EJS_gameUrl'] = 'new Blob([Uint8Array.from(atob(window.gameData), (m) => m.codePointAt(0))])';
            var b = bytesToBase64(new Uint8Array(await (new Blob([file])).arrayBuffer()));
            var a = spaces + 'window.gameData = `' + b + '`;\n';
            fileData += a;
            for (var k in data) {
                if (data[k] === true || data[k] === false || k === 'EJS_gameUrl') {
                    fileData += (spaces + k + ' = ' + data[k] + ';\n');
                } else {
                    fileData += (spaces + k + ' = "' + data[k] + '";\n');
                }
            }
            fileData += '        </script>\n        <script src="' + data['EJS_pathtodata'] + 'loader.js"></script>\n    </body>\n</html>';
            zipOut = false;
        } else {
            data['EJS_gameUrl'] = 'new Blob([Uint8Array.from(atob(window.gameData), (m) => m.codePointAt(0))])';
            var b = bytesToBase64(new Uint8Array(await (new Blob([file])).arrayBuffer()));
            zip.file('gameData.js', 'window.gameData = `' + b + '`\n');
            for (var k in data) {
                if (data[k] === true || data[k] === false || k === 'EJS_gameUrl') {
                    fileData += (spaces + k + ' = ' + data[k] + ';\n');
                } else {
                    fileData += (spaces + k + ' = \'' + data[k] + '\';\n');
                }
            }
            fileData += '        </script>\n        <script src=\'' + data['EJS_pathtodata'] + 'loader.js\'></script>\n    </body>\n</html>';
        }
        if (zipOut === false) {
            document.getElementById('select2').style = 'display:none;';
            document.getElementById('outLink').href = URL.createObjectURL(new Blob([fileData]));
            document.getElementById('outLink').download = file.name.split('.')[0] + '.html';
            document.getElementById('downloadScreen').style = 'display:block;';
            return;
        }
        zip.file('index.html', new Blob([fileData]));
        document.getElementById('select2').style = 'display:none;';
        document.getElementById('zipStatus').style = 'display:block;';
        zip.generateAsync({ type: 'blob' }, function updateCallback(metadata) {
            var zipStatus = metadata.percent.toFixed(2) + '%';
            document.getElementById('zs1').innerHTML = ' ' + zipStatus + ' ';
            document.getElementById('zs1').value = metadata.percent.toFixed(2);
            document.getElementById('zs2').innerHTML = zipStatus;
        }).then(function (blob) {
            document.getElementById('outLink').href = URL.createObjectURL(blob);
            document.getElementById('outLink').download = 'OUT-' + file.name.split('.')[0] + '.zip';
            document.getElementById('downloadScreen').style = 'display:block;';
            document.getElementById('zipStatus').style = 'display:none;';
        })
    })
}

function loadsystems() {
    if (!window.systems) return;
    let labelHTML = '';
    for (var i = 0; i < systems.length; i++) {
        labelHTML += '<label class="container">' + systems[i].name + '\n<input type="radio" name="systemSelect" value=' + systems[i].core + '>\n<span class="checkmark"></span>\n</label>'
    }
    radioContainerHTML = labelHTML
}

function translate() {
    try {
        document.getElementById('copyBtn1').addEventListener('click', () => copy('box1'));
        document.getElementById('nextBtn').addEventListener('click', startTranslate);
        document.getElementById('copyBtn3').addEventListener('click', () => copy('box3'));
        fetch('https://cdn.emulatorjs.org/latest/data/localization/en-US.json')
            .then(response => response.json())
            .then(json => {
                let data1 = '';
                for (let i = 0; i < Object.keys(json).length; i++) {
                    data1 = data1 + "" + Object.keys(json)[i] + '\n';
                }
                data1 = data1.slice(0, -1);
                document.getElementById('box1').value = data1;
            })
            .catch(error => console.error('Error loading en-US.json:', error));
    } catch (e) {
        setTimeout(translate, 100);
    }
}

function startTranslate() {
    const [box1, box2, box3] = ['box1', 'box2', 'box3'].map(id => document.getElementById(id));

    if (![box1.value, box2.value].every(value => value.trim())) {
        return alert('Please fill in both input boxes before proceeding.');
    }

    const data4 = box1.value.split('\n').map(line => line.replace("", '').trim());
    const data5 = box2.value.split('\n').map(line => line.replace("", '').trim());

    if (data4.length !== data5.length) {
        return alert('The number of lines in both boxes must match.');
    }

    const jsonOutput = JSON.stringify(Object.fromEntries(data4.map((key, i) => [key, data5[i]])), null, 4);

    box3.value = jsonOutput;

    navigator.clipboard.writeText(jsonOutput);
    console.log(jsonOutput);
}

function copy(textareaId) {
    let textarea = document.getElementById(textareaId);
    textarea.select();
    document.execCommand('copy');
}

function bytesToBase64(bytes) {
    const binString = Array.from(bytes, (byte) =>
        String.fromCodePoint(byte),
    ).join("");
    return btoa(binString);
}
