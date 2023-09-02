---
contributors: false
sidebar: false
lastUpdated: false
---
<br>
<link rel="stylesheet" href="/css/editor.css">
<p><a class="blockB" id="start">Start Creating</a></p>
<ul id="systemSelect" style="display:none;">
    <h1>Select System</h1>
    <ul id="radioContainer"></ul>
    <a class="blockB" id="systemSelected" style="float:right;margin:20px;">Next ></a>
</ul>
<ul id="select2" style="display:none;">
    <ul>
        <label class="textBox">Game Rom:
            <input type="file" id="gameRom">
        </label>
        <br>
        <label class="container" id="sgol">Start Game On Page Load
            <input type="checkbox" id="startOnLoad">
            <span class="checkmark2"></span>
        </label>
        <label class="container" style="display:none;" id="sm">SNES Mouse
            <input type="checkbox" id="snesMouse">
            <span class="checkmark2"></span>
        </label>
        <label class="container" style="display:none;" id="smt">SNES Multitap
            <input type="checkbox" id="snesMultiTap">
            <span class="checkmark2"></span>
        </label>
        <label class="container" style="display:none;" id="lg">Lightgun
            <input type="checkbox" id="lightgun">
            <span class="checkmark2"></span>
        </label>
        <label class="container">Make it work without web server (not recommended)
            <input type="checkbox" id="offline">
            <span class="checkmark2"></span>
        </label>
        <ul>
            <label class="container" id="singleFile" style="display:none;">Pack into single file
                <input type="checkbox" id="offlinePack">
                <span class="checkmark2"></span>
            </label>
        </ul>
        <div id="pathToData">
            <label class="container">Use Local path to Data
                <input type="checkbox" id="p2d">
                <span class="checkmark2"></span>
            </label>
            <ul>
                <label class="textBox" style="display:none;" id="ptwod">Path To Data Folder (on your server)
                    <input type="text" id="path2Data">
                </label>
            </ul>
        </div>
        <br>
        <label class="textBox">Name Of Game (for save files)
            <input type="text" id="nameOfGame">
        </label>
        <label class="textBox">Ad Url
            <input type="text" id="adUrl">
        </label>
        <br>
        <label class="textBox">Hex Color theme
            <input type="color" id="ejsColor" value="#0064ff">
        </label>
        <br>
        <label class="textBox" style="display:none;" id="bf">Bios File:
            <input type="file" id="biosFile">
        </label>
        <br>
        <label class="textBox" id="ss">Save state (to be loaded on start)
            <input type="file" id="stateOnLoad">
        </label>
        <div id="errors"></div>
    </ul>
    <a class="blockB" id="generateFile" style="float:right;margin:20px;">Generate Out File</a>
</ul>
<ul id="zipStatus" style="display:none;">
    <label for="zs1">Zipping</label>
    <progress id="zs1" value="0" max="100"> 0% </progress>
    <br>
    <p id="zs2"></p>
</ul>
<ul id="downloadScreen" style="display:none;">
    <p>FINISHED: <a id="outLink">Click to download.</a></p>
</ul>

<AddScript script-url="/js/systems.js"/>
<AddScript script-url="/js/jszip.js" script-id="systemJS"/>
<AddScript script-url="/js/editor.js"/>
