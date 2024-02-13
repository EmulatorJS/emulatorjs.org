# Commodore 128

## Code example

```html
<div style='width:640px;height:480px;max-width:100%'>
    <div id='game'></div>
</div>

<script type='text/javascript'>

    EJS_player = '#game';
    
    EJS_core = 'c128';

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
| `JiffyDOS_C128.bin`            | JiffyDOS C128 Kernal     | `cbbd1bbcb5e4fd8046b6030ab71fc021` |
| `JiffyDOS_C64.bin`             | JiffyDOS C64 Kernal      | `be09394f0576cf81fa8bacf634daf9a2` |
| `JiffyDOS_1541-II.bin`         | JiffyDOS 1541 drive BIOS | `1b1e985ea5325a1f46eb7fd9681707bf` |
| `JiffyDOS_1571_repl310654.bin` | JiffyDOS 1571 drive BIOS | `41c6cc528e9515ffd0ed9b180f8467c0` |
| `JiffyDOS_1581.bin`            | JiffyDOS 1581 drive BIOS | `20b6885c6dc2d42c38754a365b043d71` |

### CORES

The *c128* system supports 1 core
- `vice_x128`

If set to `c128`, emulator will use the `vice_x128` core.
