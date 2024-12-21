---
bottom: false
---
# Nintendo 64

## Code Example

```html
<div style='width:640px;height:480px;max-width:100%'>
    <div id='game'></div>
</div>

<script type='text/javascript'>
    EJS_player = '#game';
    
    // Can also be mupen64plus_next or parallel-n64
    EJS_core = 'n64';
    
    // URL to Game rom
    EJS_gameUrl = '';
    
    // Path to the data directory
    EJS_pathtodata = 'data/';
</script>
<script src='data/loader.js'></script>
```

### CORES

The *n64* system supports 2 cores
- `mupen64plus_next`
- `parallel-n64`

If set to `n64`, emulator will use the `mupen64plus_next` core. On iOS mobile, n64 will default to `parallel-n64`.
