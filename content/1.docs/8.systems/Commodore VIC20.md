---
bottom: false
---
# Commodore VIC-20

## Code example

```html
<div style='width:640px;height:480px;max-width:100%'>
    <div id='game'></div>
</div>

<script type='text/javascript'>

    EJS_player = '#game';
    
    EJS_core = 'vic20';

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

### CORES

The *vic20* system supports 1 core
- `vice_xvic`

If set to `vic20`, emulator will use the `vice_xvic` core.
