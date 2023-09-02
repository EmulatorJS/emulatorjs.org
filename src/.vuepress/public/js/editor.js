(function() {
    function editorMain() {
        if (!window.systems) {
            document.getElementById('systemJS').addEventListener('load', loadsystems);
        }
        document.getElementById('start').addEventListener('click', loadsystems);
        let loaded = false;
        function loadsystems(){
            if (loaded || !window.systems) return;
            const radioContainer = document.getElementById('radioContainer')
            let labelHTML = '';
            for (var i=0; i<systems.length; i++) {
                labelHTML += '<label class="container">'+systems[i].name+'\n<input type="radio" name="systemSelect" value='+systems[i].core+'>\n<span class="checkmark"></span>\n</label>'
            }
            radioContainer.innerHTML = labelHTML
            loaded = true;
        }
        var startBtn = document.getElementById('start');
        var systemSelect = document.getElementById('systemSelect');
        var select2 = document.getElementById('select2');
        document.getElementById('start').addEventListener('click', function(e) {
            startBtn.style = "display:none;"
            systemSelect.style = "display:block;"
        })
        document.getElementById('p2d').addEventListener('change', function(e) {
            document.getElementById('ptwod').style = (document.getElementById('p2d').checked ? 'display:block;' : 'display:none');
        })
        document.getElementById('offline').addEventListener('change', function(e) {
            document.getElementById('pathToData').style = (document.getElementById('offline').checked ? 'display:none;' : 'display:block');
            document.getElementById('singleFile').style = (document.getElementById('offline').checked ? 'display:block;' : 'display:none');
            document.getElementById('bf').style = (document.getElementById('offline').checked ? 'display:none;' : 'display:block');
            document.getElementById('ss').style = (document.getElementById('offline').checked ? 'display:none;' : 'display:block');
        })
        document.getElementById('systemSelected').addEventListener('click', function(e) {
            let system = null;
            var radios = document.getElementsByName('systemSelect');
            for (var i=0; i<radios.length; i++) {
                if (radios[i].checked) {
                    system = radios[i].value;
                    break;
                };
            };
            if (system === null) {return};
            for (var i=0; i<systems.length; i++) {
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
        document.getElementById('generateFile').addEventListener('click', async function(e) {
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
                let isChromebook = window.navigator.userAgent.includes("CrOS");
                window.sendLog("A user just generated a page with the EmulatorJS code helper.\n    Game Name: "+gameName+"\n    File name: "+file.name+"\n    System: "+window.selectedCoreData.core+"\n    Offline: "+(offline.checked ? (document.getElementById('offlinePack').checked ? "pack" : "yes") : "no")+"\n    Custom path to data: "+((document.getElementById('p2d').checked&&path2Data.value.trim()) ? path2Data.value : "no")+"\n    Ad Url: "+(document.getElementById('adUrl').value.trim() ? "<"+document.getElementById('adUrl').value.trim()+">"+ : "no")+"\n    Is Chromebook: "+(isChromebook ? "yes" : "no"));
            } catch(e){}
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
                if (! data['EJS_pathtodata'].endsWith('/')) {
                    data['EJS_pathtodata'] += '/';
                }
            } else {
                data['EJS_pathtodata'] = 'https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@latest/data/';
            }
            
            let zipOut = true;
            let fileData = '<html>\n    <head>\n        <!--HTML file auto generated using EmulatorJS codehelper-->\n    </head>\n    <body>\n        <div style="width:640px;height:480px;max-width:100%">\n            <div id="game"></div>\n        </div>\n        <script>\n';
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
                fileData += '        </scr'+'ipt>\n        <script src="'+data['EJS_pathtodata']+'loader.js"></scr'+'ipt>\n    </body>\n</html>';
            } else if (document.getElementById('offlinePack').checked) {
                data['EJS_gameUrl'] = 'new Blob([Uint8Array.from(window.gameData)])';
                var b = JSON.stringify(Array.from(new Uint8Array(await (new Blob([file])).arrayBuffer())));
                var a = spaces + 'window.gameData = '+b+';\n';
                fileData += a;
                for (var k in data) {
                    if (data[k] === true || data[k] === false || k === 'EJS_gameUrl') {
                        fileData += (spaces + k + ' = ' + data[k] + ';\n');
                    } else {
                        fileData += (spaces + k + ' = "' + data[k] + '";\n');
                    }
                }
                fileData += '        </scr'+'ipt>\n        <script src="'+data['EJS_pathtodata']+'loader.js"></scr'+'ipt>\n    </body>\n</html>';
                zipOut = false;
            } else {
                data['EJS_gameUrl'] = 'new Blob([Uint8Array.from(window.gameData)])';
                var b = JSON.stringify(Array.from(new Uint8Array(await (new Blob([file])).arrayBuffer())));
                zip.file('gameData.js', 'window.gameData = '+b+'\n');
                for (var k in data) {
                    if (data[k] === true || data[k] === false || k === 'EJS_gameUrl') {
                        fileData += (spaces + k + ' = ' + data[k] + ';\n');
                    } else {
                        fileData += (spaces + k + ' = \'' + data[k] + '\';\n');
                    }
                }
                fileData += '        </scr'+'ipt>\n        <script src=\''+data['EJS_pathtodata']+'loader.js\'></scr'+'ipt>\n    </body>\n</html>';
            }
            if (zipOut === false) {
                document.getElementById('select2').style = 'display:none;';
                document.getElementById('outLink').href = URL.createObjectURL(new Blob([fileData]));
                document.getElementById('outLink').download = file.name.split('.')[0]+'.html';
                document.getElementById('downloadScreen').style = 'display:block;';
                return;
            }
            zip.file('index.html', new Blob([fileData]));
            document.getElementById('select2').style = 'display:none;';
            document.getElementById('zipStatus').style = 'display:block;';
            zip.generateAsync({type:'blob'}, function updateCallback(metadata) {
                var zipStatus = metadata.percent.toFixed(2)+'%';
                document.getElementById('zs1').innerHTML = ' '+zipStatus+' ';
                document.getElementById('zs1').value = metadata.percent.toFixed(2);
                document.getElementById('zs2').innerHTML = zipStatus;
            }).then(function(blob) {
                document.getElementById('outLink').href = URL.createObjectURL(blob);
                document.getElementById('outLink').download = 'OUT-'+file.name.split('.')[0]+'.zip';
                document.getElementById('downloadScreen').style = 'display:block;';
                document.getElementById('zipStatus').style = 'display:none;';
            })
        })
    }
    if (window.document) {
        editorMain();
    } else {
        window.addEventListener("DOMContentLoaded", editorMain);
    }
})();
