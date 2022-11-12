# Getting Started

## Prerequisits

* A web server like NGINX or the Apache server included in [XAMPP](https://www.apachefriends.org/)
* A website behing hosted on that server, or at its most basic, create an empty file named "index.html" (save for later)

## Setup

1) Download the [github project](https://github.com/EmulatorJS/EmulatorJS/archive/refs/heads/main.zip) and unzip it into your webserver hosted folder.
2) [Choose an emulator](https://github.com/EmulatorJS/EmulatorJS/tree/main/docs/Systems) you want embedded, then copy and paste its code into your "index.html" file and edit the necessary fields. You have the option to edit each of the fields manually or use the [Code Editor](/docs/Getting%20Started.html#code-editor) tool.

### Example for NES
```html
<div style='width:640px;height:480px;max-width:100%'>
    <div id='game'></div>
</div>

<script type='text/javascript'>
    EJS_player = '#game';
    
    // Can also be fceumm or nestopia
    EJS_core = 'nes';
    
    // Lightgun
    EJS_lightgun = false; // can be true or false
    
    // URL to BIOS file
    EJS_biosUrl = ''; // example: https://dl.dropboxusercontent.com/s/[random-code]/bios.bin
    
    // URL to Game rom
    EJS_gameUrl = ''; // example: https://dl.dropboxusercontent.com/s/[random-code]/mario.nes
    
    // Path to the data directory
    EJS_pathtodata = 'data/';
</script>
<script src='data/loader.js'></script>
```

## Code Editor

A [Code Editor](/editor.html) feature is included on this website. It's a wizard that will create this html web code for you.

1) Select a System
2) Fill out the details:
  * Upload game rom
  * Enter name of the game
  * Enter an ad URL (optional)
  * Upload bios file (if required)
  * Upload custom save state to be loaded on start (optional)
3) Generate out file

It will then give you the download link for a zip folder that will include the rom & an index.html file that has your code ready to be copy & pasted into your website.

## Client Installation
Because this software uses WebAssembly (WASM) applications, it can be ran within a modern browser so there is <ins>no installation necessary.</ins>
Only Safari for Apple devices and Chromium based browsers (Google Chrome, Edge, Brave, etc.) are supported. Other browsers might work, but have not been tested and likely never will be. Gamepads do not function on Firefox (yet!).

* To make things a little more seamless, we can create a shortcut file to act as a launcher.
  * In the below examples, we will use http://192.168.1.120/ as the address for the webserver hosted on port 80.

### Windows
In this example, we will use Google Chrome:
1) Right click on Chrome and click "Send to" then "Desktop (create shortcut)"
2) Now right click on the new shortcut and in the "Target" field, add this to the end:
```
 --kiosk "http://192.168.1.120/"
```
(example: "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --kiosk "http://192.168.1.120/")
3) Lastly, rename the shortcut to "EmulatorJS"

To exit 'Kiosk' mode, hit ctrl+W

### Android/iOS
1) Open your browser and go to the server ip address (example: http://192.168.1.120/)
2) After EmulatorJS has loaded in, open your browser settings and click "Add to Home Screen" or something similar.
3) Click through any other prompts that may come up, but you should be left with a shortcut on your phone's home screen that acts like an app.

### Steam Deck
The process is similar as that of the Windows setup
1) Enter Desktop mode
2) Right click on Chrome and add to Steam
3) Right click on the Chrome shortcut in Steam and click "Properties"
4) Under the "Shortcut" options, find the "Launch Options" text box.
5) Add this to the end:
```
--kiosk "http://192.168.1.120/"
```
(example: run --branch=stable --arch=x86_64 --command=/app/bin/chrome --file-forwarding com.google.Chrome @@u @@ --window-size=1024,640 --force-device-scale-factor=1.25 --device-scale-factor=1.25 --kiosk "http://192.168.1.120/")

## Basic controls
For all libretro based emulators, you can use F1 on your keyboard or start+select+L+R on a gamepad to bring up the quick menu.
Click [here](https://docs.libretro.com/guides/input-and-controls/) to read the libretro guide to input and controls.

All saves and any settings are stored in your actual web browser by the URL you are using to access EmulatorJS.

### Xbox
For Xbox users on Edge browser, hold the start button for 3 seconds to exit gamepad controls and if you want to re-enter again press the start button again with your cursor hovering over the game and select the option to use gamepad controls. After you launch a game, press the select button a couple times to ensure the B button does not trigger a back action or drop you from fullscreen.