# Features

EmulatorJS has been developed by gamers for gamers. As such, we know what we want. Have a look at our features and feel free to submit further feature requests by opening a new issue [here](https://github.com/EmulatorJS/EmulatorJS/issues) and use an appropriate [label](https://github.com/EmulatorJS/EmulatorJS/labels).

Before opening a new issue, please search through current and previous issues to see if it has already been addressed.

## User Features

* A demo page via the included "index.html" file
  * Drag-&-Drop to upload a game ROM, select which system its for then click "Load Game" to play
* Emulator controls such as "Pause" or "Restart"
* Save state that downloads to your device
* Load state from a save state you previously downloaded
  * Drag-&-Drop saves right onto the running emulator to load from where you left off!
* Screen recording for sharing with friends
* Cache manager to access or clear any local game data saved to the web browser cache
* Control settings to map keyboard/controller button binds for up to 4 players
* Cheats menu to add cheat codes (if you're into that)

## Extensions

Our friend [Ramaerel](https://github.com/Ramaerel/emulatorjs-GameLibrary) is developing the EmulatorJS GameLibrary Extension.

* This add-on reads the contents of your ROM folders and uses it to display the games library. ROMs with common endings (like .iso, .bin or .zip), must also include the applicable extension before it. A list is included in this readme with the additional extensions, and will be updated as I go.

```txt
Example: [game].[system].[file extension]
Sample: Crash Bandicoot.psx.zip
```

To use systems that require a bios, like psx, add the bios under the BIOS folder and name it according to the system and ending with .bin

```txt
Example: psx.bin
```

* Installation (wip)

This is a drag and drop extension, with the exception that it requires something to host PHP files like XAMPP. Put your roms in the /roms/ folder and bios in the /bios/ folder, following the above naming scheme.
