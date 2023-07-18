# Config

## `EJS_biosUrl`

URL to bios file.

- Type: `string`
- Default:
- Example: `EJS_biosUrl = 'someFile.bin'`

## `EJS_gamePatchUrl`

URL to game patch file.

- Type: `string`
- Default:
- Example: `EJS_gamePatchUrl = 'someFile.patch'`

## `EJS_AdUrl`

URL to ad page. Will show this page when the page is loaded.

- Type: `string`
- Default:
- Example: `EJS_AdUrl = 'ad.html'`

## `EJS_startOnLoaded`

Set to true to start the game when the page is loaded. Note that if the user has not interacted with the page, the emulator will freeze until they have done so.

- Type: `boolean`
- Default: `false`
- Example: `EJS_startOnLoaded = true`

## `EJS_core`

Desired target system.

- Type: `string`
- Default:
- Example: `EJS_core = 'nes'`

## `EJS_loadStateURL`

URL to save state. To be loaded on game start.

- Type: `string`
- Default:
- Example: `EJS_loadStateURL = 'save.state'`

## `EJS_AdTimer`

Duration (in milliseconds) the ad iframe will stay before it automatically closes. Setting to `0` will disable auto-close.

- Type: `number`
- Default: `10000`
- Example: `EJS_AdTimer = 1000`

## `EJS_onSaveState`

Function to be called when save state button pressed.

- Type: `function`
- Default:
- Call Arguments: An array containing a screenshot and a save state
- Example: `EJS_onSaveState = function(e) {console.log("save state button pressed!")}`

## `EJS_onLoadState`

Function to be called when load state button pressed.

- Type: `function`
- Default:
- Example: `EJS_onLoadState = function(e) {console.log("load state button pressed!")}`

## `EJS_gameName`

Set this to the title of the game. This will be used when saving states and taking screenshots.

- Type: `string`
- Default:
- Example: `EJS_loadStateURL = 'pong'`

## `EJS_pathtodata`

The path to the data folder. Version 4.0 and up will set this to the same path to the folder your loader.js file is in if not specified.

- Type: `string`
- Default: `data/`
- Example: `EJS_pathtodata = '/data/'`

## `EJS_onGameStart`

Function to be called when game is started.

- Type: `function`
- Default:
- Example: `EJS_onGameStart = function(e) {console.log("The game has started!")}`

## `EJS_color`

Emulator hex color theme.

- Type: `string`
- Default:
- Example: `EJS_pathtodata = '#00FF80'`

## `EJS_CacheLimit`

The limit to game cache (per rom) in bytes

- Type: `number`
- Default: `1073741824` (`1 GB`)
- Example: `EJS_CacheLimit = 1024`

## `EJS_cheats`

Default cheats to be stored in the cheat manager screen.

- Type: `array`
- Default:
- Example:

```js
EJS_cheats = [
    ["name", "value"],
    ["name2", "value2"]
]
```

## `EJS_language`

Set the emulator UI to a certian language. More information available [here](Lang).

- Type: `string`
- Default: `en-US`

## `EJS_Settings`

Sets the default Volume and controller settings for the emulator. More information about controller mapping is located [here](Control%20Mapping).

- Type: `object`
- Default:
- Example:

```js
EJS_Settings = {
    volume: 0.75,
    defaultControllers:{"0":{"0":{"value":"88","value2":"1"},"1":{"value":"83","value2":"3"},"2":{"value":"16","value2":"8"},"3":{"value":"13","value2":"9"},"4":{"value":"38","value2":"12"},"5":{"value":"40","value2":"13"},"6":{"value":"37","value2":"14"},"7":{"value":"39","value2":"15"},"8":{"value":"90","value2":"0"},"9":{"value":"65","value2":"2"},"10":{"value":"81","value2":"4"},"11":{"value":"69","value2":"5"},"12":{"value":"82","value2":"6"},"13":{"value":"87","value2":"7"},"14":{},"15":{},"16":{"value":"72"},"17":{"value":"70"},"18":{"value":"71"},"19":{"value":"84"},"20":{"value":"76"},"21":{"value":"74"},"22":{"value":"75"},"23":{"value":"73"},"24":{},"25":{},"26":{}},"1":{},"2":{},"3":{}}
}
```

## `EJS_VirtualGamepadSettings`

Sets the location of what buttons. More information about the virual gamepad button customization is located [here](Virutal%20Gamepad%20Settings).

- Type: `object`
- Default:

## `EJS_Buttons`

Shows/hides buttons.

- Type: `object`
- Default:
- Example: The following example will hide all the buttons except for the volume slider and fullscreen button.

```js
EJS_Buttons = {
    playPause: false,
    restart: false,
    mute: false,
    settings: false,
    fullscreen: true,
    saveState: false,
    loadState: false,
    screenRecord: false,
    gamepad: false,
    cheat: false,
    volume: true,
    saveSavFiles: true,
    loadSavFiles: true
    quickSave: false,
    quickLoad: false,
    screenshot: false,
    cacheManager: false
}
```

## `EJS_defaultOptions`

Sets the default settings menu options.

- Type: `object`
- Default:
- Note: Available options and values will be logged when the emulator is started. Load the emulator page with `EJS_DEBUG_XX` on, click the play button, then on load there should be a log in the console `supported menu options`. If you use the one that logs on page load, not all options will be available and not all options will be supported.
- Example:

```js
EJS_defaultOptions = {
    'shader':'crt-mattias.glslp',
    'save-state-slot': 4,
    'save-state-location': 'keep in browser'
}
```

<!-- EJS_paths, EJS_gameParentUrl -->
