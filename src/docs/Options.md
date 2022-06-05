---
sidebar: auto
---

# Config

## `EJS_biosUrl`
URL to bios file.

- Type: `string`
- Default: 

## `EJS_gameID`
Game ID (for netplay). Must be unique per site.

- Type: `number`
- Default: 

## `EJS_gamePatchUrl`
URL to game patch file.

- Type: `string`
- Default: 

## `EJS_AdUrl`
URL to ad page. Will show this page when the page is loaded.

- Type: `string`
- Default: 

## `EJS_netplayUrl`
URL to custom netplay server. The netplay server is avaliable for download [here](https://github.com/ethanaobrien/emuserver)

- Type: `string`
- Default: `https://emuserver.emulatorjs.ga/`

## `EJS_oldEJSNetplayServer`
Set to true to use the original `emulatorjs.com` netplay server. Not recommended.

- Type: `boolean`
- Default: `false`

## `EJS_startOnLoaded`
Set to true to start the game when the page is loaded.

- Type: `boolean`
- Default: `false`

## `EJS_core`
Desired target system.

- Type: `string`
- Default: 

## `EJS_loadStateURL`
URL to save state. To be loaded on game start. There may be a small delay in load.

- Type: `string`
- Default: 

## `EJS_noAutoCloseAd`
Will not auto-close ad iframe when `play now` button pressed.

- Type: `boolean`
- Default: `false`

## `EJS_BETA`
Will enable using beta cores.

- Type: `boolean`
- Default: `false`

## `EJS_onSaveState`
Function to be called when save state button pressed.

- Type: `function`
- Default: 

## `EJS_onLoadState`
Function to be called when load state button pressed.

- Type: `function`
- Default: 

## `EJS_lightgun`
When true, will enable nes/famicom lightgun.

- Type: `boolean`
- Default: `false`

## `EJS_mouse`
When true, will enable snes mouse.

- Type: `boolean`
- Default: `false`

## `EJS_multitap`
When true, will enable snes multitap.

- Type: `boolean`
- Default: `false`

## `EJS_gameName`
Set this to the title of the game. This will be used when saving states and taking screenshots.

- Type: `string`
- Default: 

## `EJS_pathtodata`
The path to the data folder.

- Type: `string`
- Default: `data/`

## `EJS_playerName`
Force netplay player name.

- Type: `string`
- Default: 

## `EJS_onGameStart`
Function to be called when game is started.

- Type: `function`
- Default: 

## `EJS_color`
Emulator hex color theme.

- Type: `string`
- Default: 


<!-- EJS_paths, EJS_gameParentUrl, EJS_language, EJS_cheats -->
