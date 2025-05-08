<script setup lang="ts">
useSeoMeta({
    title: 'Code Generator',
    description: 'Simple code generator for EmulatorJS',
});
useHead({
    title: 'Code Generator',
    meta: [{ name: 'description', content: 'Simple code generator for EmulatorJS' }],
    link: [{ rel: 'stylesheet', href: '/css/editor.css' }],
    script: [{ src: '/js/jszip.js' }, { src: '/js/systems.js', onload: 'loadsystems()'}],
});
definePageMeta({
  title: 'Code Generator'
});
</script>
<template>
    <div>
        <br>
        <div class="center">
            <h1>EmulatorJS Code Generator</h1>
            <p>This tool can generate embeddable code for your website.</p>
            <a class="blockB" id="start" onclick="editorMain()">Start Creating</a>
        </div>
        <div class="main">
            <ul id="systemSelect" style="display:none;">
                <h1>Select System</h1>
                <ul id="radioContainer"></ul>
                <p style="text-align:left;">
                    <a class="blockB" onclick="window.location.reload();" style="margin:20px;">Restart</a>
                    <span style="float:right;">
                        <a class="blockB" id="systemSelected" style="margin:20px;">Next ></a>
                    </span>
                </p>
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
                <p style="text-align:left;">
                    <a class="blockB" onclick="window.location.reload();" style="margin:20px;">Restart</a>
                    <span style="float:right;">
                        <a class="blockB" id="generateFile" style="margin:20px;">Generate Out File</a>
                    </span>
                </p>
            </ul>
            <ul id="zipStatus" style="display:none;">
                <label for="zs1">Zipping</label>
                <progress id="zs1" value="0" max="100"> 0% </progress>
                <br>
                <p id="zs2"></p>
            </ul>
            <ul id="downloadScreen" style="display:none;">
                <p>FINISHED: <a id="outLink">Click to download.</a></p>
                <a class="blockB" onclick="window.location.reload();" style="margin:20px;">Reset</a>
            </ul>
        </div>
        <br>
    </div>
</template>
<style lang="ts" scoped>
css({
    '*': {
        fontSize: 'revert',
        fontWeight: 'revert',
    },
    '.center': {
        textAlign: 'center',
    },
    '.main': {
        margin: 'auto',
        width: '80%',
        maxWidth: '1000px',
        textAlign: 'left',
    },
    '.next': {
        textAlign: 'right',
    },
    '.back': {
        textAlign: 'left',
    },
})
</style>
