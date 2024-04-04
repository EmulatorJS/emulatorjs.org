---
bottom: false
---
# Commodore PET

## Code example

```html
<div style='width:640px;height:480px;max-width:100%'>
    <div id='game'></div>
</div>

<script type='text/javascript'>

    EJS_player = '#game';
    
    EJS_core = 'pet';

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

The *pet* system supports 1 core
- `vice_xpet`

If set to `pet`, emulator will use the `vice_xpet` core.
