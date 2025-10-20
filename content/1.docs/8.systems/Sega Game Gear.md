---
bottom: false
---
# Sega Game Gear

## Code example

```html
<div style='width:640px;height:480px;max-width:100%'>
    <div id='game'></div>
</div>

<script type='text/javascript'>

    EJS_player = '#game';
    
    // Can also be genesis_plus_gx or genesis_plus_gx_wide
    EJS_core = 'segaGG';

    // URL to Game rom
     
    EJS_gameUrl = '';
    
    /*
     *  Path to the WASM / JS files
     *  HAS TO BE in the same directory.
     */
    
    EJS_pathtodata = 'data/';
    
</script>

<script src='data/loader.js'></script>
```

### BIOS

|  File Name  |  Description  |    md5sum   |
| ----------- | ------------- | ----------- |
| bios.gg | GameGear BIOS (bootrom) - Optional | `672e104c3be3a238301aceffc3b23fd6`

### CORES

The *segaGG* system supports 2 cores
- `genesis_plus_gx`
- `genesis_plus_gx_wide`

If set to `segaGG`, emulator will use the `genesis_plus_gx` core.
