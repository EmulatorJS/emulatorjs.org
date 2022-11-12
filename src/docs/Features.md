# Features
EmulatorJS has been developed by gamers for gamers. As such, we know what we want. Have a look at our features and feel free to submit further feature requests [here](https://github.com/EmulatorJS/EmulatorJS/issues) and title it "Feature Request: ".

## User Features
* User Accounts
  * After the admin creates a username and password, an individual can login and have their own persistent configs & save data which could be downloaded from the website & uploaded to a different computer, or have the option to push your save directly to the server and pull it down again after logging in to another computer.
* Drag-&-Drop saves right onto the running emulator to load from where you left off.

### File Browser
The file browser can be accessed via the folder icon on the top left corner of the play screen. Clicking on it, the player has the option to login to their profile and pull their profile from the server and pickup where they left off in their save files, or push their latest saves to the server.

Here, we are also given the option to download or upload a full backup of our profile to take on the go.

Lastly, we have "Backup to IPFS". (wip) This is a decentralized storage system.

## Admin Features
* Rom Management:
  * Able to scan games and scrape their information from online soucres.
* Media Managemment:
  * Uses the scraped ROM data to download artwork and videos for each console and ROM added.
* Config Management:
  * Edit the config file for each system including defining what emulator to use.
* File Management:
  * Download and upload files remotely
* Profile Management:
  * Add or delete users/profiles
* Custom Metadata:
  * When you identify roms or upload custom artwork from the rom management interface, all of that data is stored as custom metadata in your server. Any uploaded custom art assets are added to the local IPFS server running in this the EmulatorJS server. To share this data with the world, you will need to forward port 4001 to a public IP address.

## Extensions
Our friend [Ramaerel](https://github.com/Ramaerel/emulatorjs-GameLibrary) developed the EmulatorJS GameLibrary Extension.
* This add-on reads the contents of your ROM folders and uses it to display the games library. ROMs with common endings (like .iso, .bin or .zip), must also include the applicable extension before it. A list is included in this readme with the additional extensions, and will be updated as I go.
```
Example: [game].[system].[file extension]
Sample: Crash Bandicoot.psx.zip
```

To use systems that require a bios, like psx, add the bios under the BIOS folder and name it according to the system and ending with .bin
```
Example: psx.bin
```

* Installation (wip)

This is a drag and drop extension, with the exception that it requires something to host PHP files like XAMPP. Put your roms in the /roms/ folder and bios in the /bios/ folder, following the above naming scheme.