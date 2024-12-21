---
bottom: false
---
# PSP

::alert{type="warning"}
  ::list{type="warning"}
  - The PSP core is **unsupported** on Safari!
  ::
::

::alert{type="warning"}
  ::list{type="warning"}
  - Support will not be given for game compatibility and graphical bugs!
  ::
::

## Code Example

```html
<div style='width:640px;height:480px;max-width:100%'>
    <div id='game'></div>
</div>

<script type='text/javascript'>
    EJS_player = '#game';
    
    // Can also be ppsspp
    EJS_core = 'psp';
    
    // URL to Game rom
    EJS_gameUrl = '';
    
    // Path to the data directory
    EJS_pathtodata = 'data/';

    // PSP requires threads
    EJS_threads = true;
</script>
<script src='data/loader.js'></script>
```

### CORES

The *psp* system supports 1 core
- `ppsspp`

If set to `psp`, emulator will use the `ppsspp` core.
