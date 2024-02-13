# ColecoVision

## Code example

```html
<div style='width:640px;height:480px;max-width:100%'>
    <div id='game'></div>
</div>

<script type='text/javascript'>

    EJS_player = '#game';
    
    EJS_core = 'coleco';

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

| Name | Description | MD5 Checksum |
|------|--------------|-------------|
| `colecovision.rom`            | ColecoVision BIOS - Required     | `2c66f5911e5b42b8ebe113403548eee7` |

### CORES

The *coleco* system supports 1 core
- `gearcoleco`

If set to `coleco`, emulator will use the `gearcoleco` core.
