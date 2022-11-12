# Introduction

EmulatorJS is a highly wrapped emulator. The backend is RetroArch compiled to WebAssembly (WASM) via Emscripten.

## How it Works

EmulatorJS hosts the website where you can select a game to play. Once a game is selected, EmulatorJS will send the user its necessary emulator WASM file and a temporary copy of the ROM to their device, then links the ROM to the emulator while inside the user's device and stored in a temp file which is cleared automatically after the end of the play session.

Because save files are also stored within this temp directory, they would automatically be deleted. This is where EmulatorJS differes from other emulation server/software (along with some other background magic), that it allows the player to download their save files locally, to a USB drive, or even push them back up to the server computer and stored on the server hard drive.

## Support
For general support/discussions, head over to the github and read through the [discussion threads.](https://github.com/EmulatorJS/EmulatorJS/discussions)

This site is a work-in-progress. If any information is missing, you can request it by opening an issue on github [here](https://github.com/EmulatorJS/EmulatorJS/issues).