# Getting Started

To get started, install the server using one of the options below then access it via a web browser. Be sure both are on the same computer/wifi network.

## Server Installation
### Windows
WIP

### Linux
WIP

### Docker
Docker is a container technology that allows for ease of upgrading, security and reliability.
After installing docker, EmulatorJS can be deployed thanks to our friends at [LinuxServer](https://hub.docker.com/r/linuxserver/emulatorjs) by executing the following (be sure to change the config and data folder paths to a correct path on your host computer):
```
docker run -d \
  --name=emulatorjs \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=America/New_York \
  -p 4001:4001 `#optional` \
  -p 3000:3000 \
  -p 8080:80 \
  -v /path/to/config:/config \
  -v /path/to/data:/data \
  --restart unless-stopped \
  lscr.io/linuxserver/emulatorjs:latest
```
NOTE: Do NOT link the data folder to a folder on your OS hard drive (aka C:/ drive). EmulatorJS will auto-download without checking for remaining hard drive space and could potentially lock-up your computer.

#### Docker on Windows


If you have docker-compose installed, use the following docker-compose.yaml:
(Be sure to change the config and data folder paths to a correct path on your host computer. The paths in this yaml file are example paths when running Docker on Windows)
```
version: "3"
services:
 emulatorjs:
    # https://hub.docker.com/r/linuxserver/emulatorjs
    # https://docs.linuxserver.io/images/docker-emulatorjs
    image: linuxserver/emulatorjs
    container_name: emulatorjs
    mem_limit: 2g # Docker variable to limit the amount of server RAM used
    cpus: 3 # Docker variable to limit the amount of server processor cores used
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/New_York
    volumes:
      # Global data folder & config folder
      # Note: Do NOT link the data folder to a folder on your OS hard drive (aka C:/ drive). It will auto-download without checking for remaining hard drive space and could potentially brick your computer.
      - “/d/Games/emulatorjs-library:/data” # For auto-downloaded artwork/videos and to link to your ROMs
      - “/c/DockerStorage/emulatorjs:/config” # Location of server-side profiles/save locations
    ports:
      # admin and config page
      - 3000:3000      
      # frontend
      - 8080:80
      # IPFS server for decentralized saves & sharing of your uploaded game metadata/art work
      - 4001:4001 # optional
    restart: always
```
## Client Installation
Because this software uses WebAssembly (WASM) applications, it can be ran within a modern browser so there is no installation necessary.
Only Safari for Apple devices and Chromium based browsers (Google Chrome, Edge, Brave, etc.) are supported. Other browsers might work, but have not been tested and likely never will be. Gamepads do not function on Firefox (yet!).

To make things a little more seamless, we can create a shortcut file to act as a launcher.

### Windows
In this example, we will use Google Chrome:
1) Right click on Chrome and click "Send to" then "Desktop (create shortcut)"
2) Now right click on the new shortcut and in the "Target" field, add this to the end:
```
 --kiosk "http://192.168.1.120:8080/"
```
(example: "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --kiosk "http://192.168.1.120:8080/")
3) Lastly, rename the shortcut to "EmulatorJS"

To exit 'Kiosk' mode, hit ctrl+W

### Android/iOS
1) Open your browser and go to the server ip address (example: http://192.168.1.120:8080/)
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
--kiosk "http://192.168.1.120:8080/"
```
(example: run --branch=stable --arch=x86_64 --command=/app/bin/chrome --file-forwarding com.google.Chrome @@u @@ --window-size=1024,640 --force-device-scale-factor=1.25 --device-scale-factor=1.25 --kiosk "http://192.168.1.120:8080/")

## Server Setup

After the server is installed, its time to finish getting it setup:
1) Access your "data" folder which was mapped to something like "D:\Games\emulatorjs-library"
2) Inside that folder, you should have 35+ folders which are labeled according to each emulated system as well as the following:
* ".ipfs" folder which is your local IPFS server storage
* "config" folder to hold the json config file for each of your systems
* "hashes" folder to hold the hash files for each of your roms
* "main" folder to hold the pics and videos for the consoles
3) Copy and paste your roms into the "roms" folder of its system (always keep an extra copy of your roms)
4) Access the admin page in the browser (example: "http://192.168.1.120:3000/")

These next few steps are to identify your roms, download their pics/videos and update the frontend's config file:
1) Download the initial files (pics/videos for each of the consoles)
2) When it says "finished" close the popup window. The server should have automatically scanned and counted how many roms you have in each system folder.
3) Click "Scan" on one system at a time. It will try to identify each game and then it will give you a system button on the left hand side.
4) For our example, lets say you scanned some n64 games in. Click the "n64" system button on the left hand side.
5) Identified roms will show in green, unidentified roms will show on the right side under the "unidentified" section. Here you can click each one and manually link it to a game from that console.
* If a game is in the "identified" section but still grey, that means the rom was scanned correctly, but there is no media for it yet.
* The "scan" works by reading the hash (fingerprint) of your rom and matching it to the online database. Since there can be multiple roms from different people making backups, there can be different hashes for the same game. This is where the IPFS system comes into play. If you uploaded media for that game to your server, it will then get copied out to anyone else who has a matching hash/rom and doesn't yet have any art/videos yet.
6) After all the art is downloaded, move on to "step 2" and click "Add all roms to config" which will then update the front end and show the consoles and games you just added.
* Note: Only consoles that have at least one game will show up on the front end.

Repeat steps 3 - 6 for each system/console you've added games to, then get to gaming!

## Basic controls
For all libretro based emulators, you can use F1 on your keyboard or start+select+L+R on a gamepad to bring up the quick menu.
Click [here](https://docs.libretro.com/guides/input-and-controls/) to read the libretro guide to input and controls.

All saves and any settings are stored in your actual web browser by the URL you are using to access EmulatorJS. To ensure SRAM is dumped on exit, always try to exit the game with back instead of closing the browser window. On libretro based emulators, you can perform saves and savestates from the menu.

### Xbox
For Xbox users on Edge browser, hold the start button for 3 seconds to exit gamepad controls and if you want to re-enter again press the start button again with your cursor hovering over the game and select the option to use gamepad controls. After you launch a game, press the select button a couple times to ensure the B button does not trigger a back action or drop you from fullscreen.

Scrolling through large collections can be sped up by holding "right" while scrolling up or down when using a keyboard or your controller on Xbox. For touch devices, panning is supported by holding and dragging up or down.