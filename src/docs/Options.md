# Config Options

- [Main Options](#main-options)
- [Game Options](#game-options)
- [Core Options](#core-options)
- [UI Options](#ui-options)
- [Advanced Options](#advanced-options)
- [Debug Options](#debug-options)


## Main Options

### `EJS_player`

The selector of the element you want the emulator to be placed in.

- Type: `string`
- Default:&nbsp;` `
- Example: `EJS_player = '#game'`

### `EJS_gameUrl`

URL to ROM file.

- Type: `string`
- Default:&nbsp;` `
- Example: `EJS_gameUrl = 'someFile.nes'`

### `EJS_pathtodata`

The path to the data folder. Version 4.0 and up will set this to the same path to the folder your loader.js file is in if not specified.

- Type: `string`
- Default: `data/`
- Example: `EJS_pathtodata = '/data/'`

### `EJS_language`

Set the emulator UI to a certian language. More information available [here](Lang).

- Type: `string`
- Default: `en-US`


### `EJS_paths`

You can set the paths to the files used by the emulator. This is useful if you want to host the files in a different why than the default, like a blob or a cdn.

- Type: `object`
- Default: The default paths are used.
- Example:

```js
EJS_paths = {
    "GameManager.js": "blob:https://emulatorjs.org/0a0a0a0a-0a0a-0a0a-0a0a-0a0a0a0a0a0a",
    "emulator.min.css": "blob:https://emulatorjs.org/0a0a0a0a-0a0a-0a0a-0a0a-0a0a0a0a0a0a",
    "emulator.min.js": "https://cdn.emulatorjs.org/emulator.min.js",
    "gamepad.js": "https://cdn.emulatorjs.org/gamepad.js",
    "loader.js": "https://cdn.emulatorjs.org/loader.js",
    "nipplejs.js": "https://cdn.emulatorjs.org/nipplejs.js",
    "shaders.js": "https://cdn.emulatorjs.org/shaders.js",
    "socket.io.min.js": "https://cdn.emulatorjs.org/socket.io.min.js",
    "storage.js": "https://cdn.emulatorjs.org/storage.js",
    "version.json": "https://cdn.emulatorjs.org/version.json"
    };
```
Note the example above will not work the paths are just for example purposes.

### `EJS_volume`

Sets the defauly volume for the emulator. 0=muted, 1=max

- Type: `number`
- Default: `0.5`
- Example: `EJS_volume = 1`


## Game Options

### `EJS_gameName`

Set this to the title of the game. This will be used when saving states and taking screenshots.

- Type: `string`
- Default: The name of the ROM file
- Example: `EJS_loadStateURL = 'pong'`

### `EJS_cheats`

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

### `EJS_fullscreenOnLoad`

Set to true to start the game in fullscreen mode.

- Type: `boolean`
- Default: `false`
- Example: `EJS_fullscreenOnLoad = true`

### `EJS_startOnLoaded`

Set to true to start the game when the page is loaded. Note that if the user has not interacted with the page, the emulator will freeze until they have done so.

- Type: `boolean`
- Default: `false`
- Example: `EJS_startOnLoaded = true`


## Core Options

### `EJS_core`

Desired target system.

- Type: `string`
- Default:&nbsp;` `
- Example: `EJS_core = 'nes'`

### `EJS_biosUrl`

URL to bios file.

- Type: `string`
- Default: `''`
- Example: `EJS_biosUrl = 'someFile.bin'`

### `EJS_gamePatchUrl`

URL to game patch file.

- Type: `string`
- Default: `''`
- Example: `EJS_gamePatchUrl = 'someFile.patch'`

### `EJS_gameParentUrl`

This is a url to the game parent data. For additioal files needed for the game emulation.

- Type: `string`
- Default:&nbsp;` `

### `EJS_loadStateURL`

URL to save state. To be loaded on game start.

- Type: `string`
- Default: `''`
- Example: `EJS_loadStateURL = 'save.state'`


## UI Options

### `EJS_color`

Emulator hex color theme.

- Type: `string`
- Default: `#1AAFFF`
- Example: `EJS_pathtodata = '#00FF80'`

### `EJS_alignStartButton`

This can be used to align the start button. It can be `top`, `center`, `bottom`.

- Type: `string`
- Default: `bottom`
- Example: `EJS_alignStartButton = "center"`

### `EJS_backgroundImage`

Url to a file you want to have as the background at the "Play Now" screen. Must be a Absolute path or a Relative Path from the `pathtodata` folder.

- Type: `string`
- Default:&nbsp;` `
- Example: `EJS_backgroundImage = 'loadScreen.png'`

### `EJS_backgroundBlur`

This will blur the background image to fit the all aspect ratios. Also known as frame blur. This will override the `EJS_backgroundColor`.

- Type: `boolean`
- Default:&nbsp;` `
- Example: `EJS_backgroundBlur = true`

### `EJS_backgroundColor`

This will set the background color of the emulator. In the start and loadings screens. Can be a css color like `#000` or `rgba(150,150,150,0.6)`.

- Type: `string`
- Default: `#333`
- Example: `EJS_backgroundColor = '#000'`

### `EJS_AdUrl`

URL to ad page. Will show this page when the page is loaded.

- Type: `string`
- Default: `''`
- Example: `EJS_AdUrl = 'ad.html'`

### `EJS_AdTimer`

Duration (in milliseconds) the ad iframe will stay before it automatically closes. Setting to `0` will disable auto-close.
Setting to `-1` will close the ad immediately.

- Type: `number`
- Default: `10000`
- Example: `EJS_AdTimer = 1000`

### `EJS_AdMode`

This will set the ad mode. There 3 values `0` `1` `2`

`0` will only show the ad on the start screen and not the loading screen.

`1` will only show the ad on the loading screen.

`2` will show on both.

- Type: `number`
- Default: `2`
- Example: `EJS_AdMode = 0`

### `EJS_AdSize`

This will set the size of the ad. An array with the first value is the width and the second is the height. It can be any css option `%`, `vh`, `px` etc.

- Type: `array`
- Default: `["300px", "250px"]`
- Example: `EJS_AdSize = ["800px", "500px"];`


## Advanced Options

### `EJS_CacheLimit`

The limit to game cache (per rom) in bytes

- Type: `number`
- Default: `1073741824` (`1 GB`)
- Example: `EJS_CacheLimit = 1024`

### `EJS_adBlocked`

A function that can be run to change the adUrl on the fly or delete it. A use case would be if the user is using an ad blocker you can change the adUrl to a different url (like to show a message) or delete it.

The first parameter is the url to change it the second you can set it to `true` to delete the ad.

- Type: `function`
- Default:&nbsp;` `
- Example: `EJS_adBlocked("https://ads.emulatorjs.org/blocked");`

### `EJS_ready`

This is a function that will be called when the emulator is ready. This is useful if you want to do something when the emulator is ready.

- Type: `function`
- Default:&nbsp;` `
- Example: `EJS_ready = function() {console.log("The emulator is ready!")}`

### `EJS_onSaveState`

Function to be called when save state button pressed.

- Type: `function`
- Default:&nbsp;` `
- Call Arguments: An array containing a screenshot and a save state
- Example: `EJS_onSaveState = function(e) {console.log("save state button pressed!")}`

### `EJS_onLoadState`

Function to be called when load state button pressed.

- Type: `function`
- Default:&nbsp;` `
- Example: `EJS_onLoadState = function(e) {console.log("load state button pressed!")}`

### `EJS_onGameStart`

Function to be called when game is started.

- Type: `function`
- Default:&nbsp;` `
- Example: `EJS_onGameStart = function(e) {console.log("The game has started!")}`

### `EJS_defaultControls`

Sets the default controller mapping. More information about controller mapping is located [here](Control%20Mapping).

- Type: `object`
- Default/Example:

```js
EJS_defaultControls = {"0":{"0":{"value":"x"},"1":{"value":"s"},"2":{"value":"v"},"3":{"value":"enter"},"4":{"value":"arrowup"},"5":{"value":"arrowdown"},"6":{"value":"arrowleft"},"7":{"value":"arrowright"},"8":{"value":"z"},"9":{"value":"a"},"10":{"value":"q"},"11":{"value":"e"},"12":{"value":"e"},"13":{"value":"w"},"14":{},"15":{},"16":{"value":"h"},"17":{"value":"f"},"18":{"value":"g"},"19":{"value":"t"},"20":{"value":"l"},"21":{"value":"j"},"22":{"value":"k"},"23":{"value":"i"},"24":{},"25":{},"26":{}},"1":{},"2":{},"3":{}}
```

### `EJS_VirtualGamepadSettings`

Sets the location of what buttons. More information about the virual gamepad button customization is located [here](Virutal%20Gamepad%20Settings).

- Type: `object`
- Default: `{}`

### `EJS_controlScheme`

- Type: `string`
- Default: ``

Default behaviour (when option is undefined) not changed (core name will be used).

Available control schemes: `nes` `gb`  `gba` `snes` `n64` `gba` `nds` `vb` `segaMD` `segaCD` `sega32x` `segaMS` `segaGG` `segaSaturn` `3do` `atari2600` `atari7800` `lynx` `jaguar` `arcade` `mame`

### `EJS_Buttons`

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

### `EJS_defaultOptions`

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

## Debug Options

### `EJS_DEBUG_XX`

You can set this to `true` to enable debug mode. This will log a lot of information to the console and use the unminified scripts. This is useful for debugging issues with the emulator. And it is recommended to use this when you are contibuting to the project.

- Type: `boolean`
- Default: `false`
- Example: `EJS_DEBUG_XX = true`

### `EJS_settingsLanguage`

For debugging and adding new languages. Set it to `true` and it will enable the missing translations in the console logs.

- Type: `boolean`
- Default: `false`
- Example: `EJS_settingsLanguage = true`

### `EJS_missingLang`

This is an array of missing translations. This is used for debugging and adding new languages. You can get the array by using `console.log(EJS_missingLang)`.

- Type: `array`
- Default: `[]`
- Example: `console.log(EJS_missingLang);`
