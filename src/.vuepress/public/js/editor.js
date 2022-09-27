document.getElementById('systemJS').addEventListener('load', function() {
    loadsystems();
})
document.getElementById('start').addEventListener('click', function() {
    loadsystems();
})
function loadsystems(){
    var radioContainer = document.getElementById('radioContainer')
    var labelHTML = '';
    for (var i=0; i<systems.length; i++) {
        labelHTML += '<label class="container">'+systems[i].name+'\n<input type="radio" name="systemSelect" value='+systems[i].core+'>\n<span class="checkmark"></span>\n</label>'
    }
    radioContainer.innerHTML = labelHTML
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
document.getElementById('netplayServer').addEventListener('change', function(e) {
    document.getElementById('npurl').style = (document.getElementById('netplayServer').checked ? 'display:block;' : 'display:none');
})
document.getElementById('netplay').addEventListener('change', function(e) {
    document.getElementById('npgid').style = (document.getElementById('netplay').checked ? 'display:block;' : 'display:none');
    document.getElementById('nps').style = (document.getElementById('netplay').checked ? 'display:block;' : 'display:none');
    document.getElementById('npurl').style = (document.getElementById('netplay').checked ? (document.getElementById('netplayServer').checked ? 'display:block;' : 'display:none') : 'display:none');
})
document.getElementById('offline').addEventListener('change', function(e) {
    document.getElementById('pathToData').style = (document.getElementById('offline').checked ? 'display:none;' : 'display:block');
    document.getElementById('singleFile').style = (document.getElementById('offline').checked ? 'display:block;' : 'display:none');
    document.getElementById('bf').style = (document.getElementById('offline').checked ? 'display:none;' : 'display:block');
    document.getElementById('ss').style = (document.getElementById('offline').checked ? 'display:none;' : 'display:block');
})
document.getElementById('systemSelected').addEventListener('click', function(e) {
    var q = null;
    var radios = document.getElementsByName('systemSelect');
    for (var i=0; i<radios.length; i++) {
        if (radios[i].checked) {
            var q = radios[i].value;
            break;
        };
    };
    if (q === null) {return};
    for (var i=0; i<systems.length; i++) {
        if (systems[i].core === q) {
            q = systems[i]
            break
        }
    }
    if (q.netplay) {
        document.getElementById('np').style = "display:block;"
    }
    if (q.lightgun) {
        document.getElementById('lg').style = "display:block;"
    }
    if (q.bios) {
        document.getElementById('bf').style = "display:block;"
    }
    if (q.mouse) {
        document.getElementById('sm').style = "display:block;"
    }
    if (q.multitap) {
        document.getElementById('smt').style = "display:block;"
    }
    window.selectedCoreData = q;
    window.scrollTo(0, 0);
    systemSelect.style = "display:none;"
    select2.style = "display:block;"
})
document.getElementById('generateFile').addEventListener('click', async function(e) {
    var data = {}
    var zip = new JSZip();
    var file = document.getElementById('gameRom').files[0]
    var ejsColor = document.getElementById('ejsColor')
    var errors = document.getElementById('errors')
    var npGameId = document.getElementById('npGameId')
    var path2Data = document.getElementById('path2Data')
    var biosFile = document.getElementById('biosFile')
    var offline = document.getElementById('offline')
    var stateOnLoad = document.getElementById('stateOnLoad')
    if (ejsColor.value && ejsColor.value.trim() !== '') {
        if (!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(ejsColor.value)) {
            errors.innerHTML = '<p><span style="color:red;font-size:25px;">An error occured When Generating</span></p><ul><li>Color theme is not hex value</li></ul>'
            return
        }
    }
    if (! file) {
        errors.innerHTML = '<p><span style="color:red;font-size:25px;">An error occured When Generating</span></p><ul><li>No rom file selected</li></ul>'
        return
    }
    var gameName = (document.getElementById('nameOfGame').value && document.getElementById('nameOfGame').value.trim() !== '') ? document.getElementById('nameOfGame').value : file.name;
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
    if (document.getElementById('netplay').checked && npGameId.value && npGameId.value.trim() !== '') {
        data['EJS_gameID'] = npGameId.value;
    }
    if (document.getElementById('p2d').checked && path2Data.value && path2Data.value.trim() !== '') {
        data['EJS_pathtodata'] = path2Data.value;
        if (! data['EJS_pathtodata'].endsWith('/')) {
            data['EJS_pathtodata'] += '/';
        }
    } else {
        data['EJS_pathtodata'] = 'https://rawcdn.githack.com/EmulatorJS/EmulatorJS/main/data/';
    }
    if (document.getElementById('netplay').checked && document.getElementById('netplayServer').checked && document.getElementById('npServerURL').value && document.getElementById('npServerURL').value.trim() !== '') {
        data['EJS_netplayUrl'] = document.getElementById('npServerURL').value;
    }
    var zipOut = true;
    if (! offline.checked) {
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
        var spaces = '            ';
        var fileData = '<html>\n    <head>\n        <!--HTML file auto generated using EmulatorJS codehelper-->\n    </head>\n    <body>\n        <div style="width:640px;height:480px;max-width:100%">\n            <div id="game"></div>\n        </div>\n        <script>\n';
        for (var k in data) {
            if (data[k] === true || data[k] === false) {
                fileData += (spaces + k + ' = ' + data[k] + ';\n');
            } else {
                fileData += (spaces + k + ' = "' + data[k] + '";\n');
            }
        }
        fileData += '        </scr'+'ipt>\n        <script src="'+data['EJS_pathtodata']+'loader.js"></scr'+'ipt>\n    </body>\n</html>';
    } else if (document.getElementById('offlinePack').checked) {
        data['EJS_gameUrl'] = 'URL.createObjectURL(new Blob([Uint8Array.from(window.gameData)]))';
        var b = JSON.stringify(Array.from(new Uint8Array(await (new Blob([file])).arrayBuffer())));
        var spaces = '            ';
        var a = spaces + 'window.gameData = '+b+';\n';
        var fileData = '<html>\n    <head>\n        <!--HTML file auto generated using EmulatorJS codehelper-->\n    </head>\n    <body>\n        <div style="width:640px;height:480px;max-width:100%">\n            <div id="game"></div>\n        </div>\n        <script>\n';
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
        data['EJS_gameUrl'] = 'URL.createObjectURL(new Blob([Uint8Array.from(window.gameData)]))';
        var b = JSON.stringify(Array.from(new Uint8Array(await (new Blob([file])).arrayBuffer())));
        zip.file('gameData.js', 'window.gameData = '+b+'\n');
        var spaces = '            ';
        var fileData = '<html>\n    <head>\n        <!--HTML file auto generated using EmulatorJS codehelper-->\n    </head>\n    <body>\n        <div style="width:640px;height:480px;max-width:100%">\n            <div id="game"></div>\n        </div>\n        <script src=\'gameData.js\'></scr'+'ipt>\n        <script>\n';
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
        return
    }
    zip.file('index.html', new Blob([fileData]))
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
