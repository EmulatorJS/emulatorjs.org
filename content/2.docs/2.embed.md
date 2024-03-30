# How to Embed EmulatorJS on your Website

The [System Page](Systems.html) will have examples for all the supported systems.

## HTML

If you have a http server then the [Get Started Page](Getting%20Started.html#example-for-nes) has a working example for the NES.

## React / Single Page Apps

To embed within React or a SPA, the only way is to embed an iframe into your page, and run this emulator within that iframe. You **cannot** run it directly on the page. This will break single page apps, and tamper with the DOM.

## Google Sites
Here is an example made in google sites: [EmulatorJS Google Sites Example](https://sites.google.com/view/emulatorjs/home)
- It is recommended if you game file is 1 mb then to host your ROM on a server and not base64.
- Just add a full page embed with custom code, instrctions [here](https://workspaceupdates.googleblog.com/2022/05/embed-content-as-full-page-in-new.html)
- You can use [DriveToWeb](https://www.drv.tw/) if you want to host your files using google drive (as show in the working example below)
Here is the code used in the example game:
```html
<html>
    <head>
        <style>
            body, html {
                margin: 0;
                padding: 0;
            }
        </style>
    </head>
    <body>
        <div style="width:100%;height:100%;max-width:100%">
            <div id="game"></div>
        </div>
        <script>
            EJS_player = "#game";
            EJS_core = "CORE_NAME";
            EJS_pathtodata = "https://demo.emulatorjs.org/data/";
            EJS_gameUrl = "https://allancoding-website-files.on.drv.tw/ROM_FILE_NAME_&_PATH.zip";
        </script>
        <script src="https://demo.emulatorjs.org/data/loader.js"></script>
    </body>
</html>
```