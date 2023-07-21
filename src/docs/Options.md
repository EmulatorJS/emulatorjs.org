# Config

## `EJS_player`

The selector of the element you want the emulator to be placed in.

- Type: `string`
- Default:&nbsp;` `
- Example: `EJS_player = '#game'`

## `EJS_gameUrl`

URL to ROM file.

- Type: `string`
- Default:&nbsp;` `
- Example: `EJS_gameUrl = 'someFile.nes'`


## `EJS_biosUrl`

URL to bios file.

- Type: `string`
- Default: `''`
- Example: `EJS_biosUrl = 'someFile.bin'`

## `EJS_gamePatchUrl`

URL to game patch file.

- Type: `string`
- Default: `''`
- Example: `EJS_gamePatchUrl = 'someFile.patch'`

## `EJS_AdUrl`

URL to ad page. Will show this page when the page is loaded.

- Type: `string`
- Default: `''`
- Example: `EJS_AdUrl = 'ad.html'`

## `EJS_startOnLoaded`

Set to true to start the game when the page is loaded. Note that if the user has not interacted with the page, the emulator will freeze until they have done so.

- Type: `boolean`
- Default: `false`
- Example: `EJS_startOnLoaded = true`

## `EJS_core`

Desired target system.

- Type: `string`
- Default:&nbsp;` `
- Example: `EJS_core = 'nes'`

## `EJS_loadStateURL`

URL to save state. To be loaded on game start.

- Type: `string`
- Default: `''`
- Example: `EJS_loadStateURL = 'save.state'`

## `EJS_AdTimer`

Duration (in milliseconds) the ad iframe will stay before it automatically closes. Setting to `0` will disable auto-close.

- Type: `number`
- Default: `10000`
- Example: `EJS_AdTimer = 1000`

## `EJS_onSaveState`

Function to be called when save state button pressed.

- Type: `function`
- Default:&nbsp;` `
- Call Arguments: An array containing a screenshot and a save state
- Example: `EJS_onSaveState = function(e) {console.log("save state button pressed!")}`

## `EJS_onLoadState`

Function to be called when load state button pressed.

- Type: `function`
- Default:&nbsp;` `
- Example: `EJS_onLoadState = function(e) {console.log("load state button pressed!")}`

## `EJS_gameName`

Set this to the title of the game. This will be used when saving states and taking screenshots.

- Type: `string`
- Default: The name of the ROM file
- Example: `EJS_loadStateURL = 'pong'`

## `EJS_backgroundImage`

Url to a file you want to have as the background at the "Play Now" screen.

- Type: `string`
- Default:&nbsp;` `
- Example: `EJS_backgroundImage = 'loadScreen.png'`

## `EJS_pathtodata`

The path to the data folder. Version 4.0 and up will set this to the same path to the folder your loader.js file is in if not specified.

- Type: `string`
- Default: `data/`
- Example: `EJS_pathtodata = '/data/'`

## `EJS_onGameStart`

Function to be called when game is started.

- Type: `function`
- Default:&nbsp;` `
- Example: `EJS_onGameStart = function(e) {console.log("The game has started!")}`

## `EJS_color`

Emulator hex color theme.

- Type: `string`
- Default: `#1AAFFF`
- Example: `EJS_pathtodata = '#00FF80'`

## `EJS_CacheLimit`

The limit to game cache (per rom) in bytes

- Type: `number`
- Default: `1073741824` (`1 GB`)
- Example: `EJS_CacheLimit = 1024`

## `EJS_cheats`

Default cheats to be stored in the cheat manager screen.

- Type: `array`
- Default: `[]`
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

## `EJS_defaultControls`

Sets the default controller mapping. More information about controller mapping is located [here](Control%20Mapping).

- Type: `object`
- Default/Example:

```js
EJS_defaultControls = {"0":{"0":{"value":"x"},"1":{"value":"s"},"2":{"value":"v"},"3":{"value":"enter"},"4":{"value":"arrowup"},"5":{"value":"arrowdown"},"6":{"value":"arrowleft"},"7":{"value":"arrowright"},"8":{"value":"z"},"9":{"value":"a"},"10":{"value":"q"},"11":{"value":"e"},"12":{"value":"e"},"13":{"value":"w"},"14":{},"15":{},"16":{"value":"h"},"17":{"value":"f"},"18":{"value":"g"},"19":{"value":"t"},"20":{"value":"l"},"21":{"value":"j"},"22":{"value":"k"},"23":{"value":"i"},"24":{},"25":{},"26":{}},"1":{},"2":{},"3":{}}
```

## `EJS_volume`

Sets the defauly volume for the emulator. 0=muted, 1=max

- Type: `number`
- Default: `0.5`
- Example: `EJS_volume = 1`

## `EJS_VirtualGamepadSettings`

Sets the location of what buttons. More information about the virual gamepad button customization is located [here](Virutal%20Gamepad%20Settings).

- Type: `object`
- Default: `{}`

## `EJS_Buttons`

Shows/hides buttons.

- Type: `object`
- Default: `{}`
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
- Default: `{}`
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
