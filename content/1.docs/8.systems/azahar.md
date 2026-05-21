---
bottom: false
---
# 3DS

::alert{type="info"}
  ::list{type="info"}
  - This core requires that `EJS_threads = true` in order to function. Please see the [options](/docs/options#ejs_threads) page for more information.
  ::
::

## Code Example

```html
<div style='width:640px;height:480px;max-width:100%'>
    <div id='game'></div>
</div>

<script type='text/javascript'>
    EJS_player = '#game';
    
    // Can also be azahar
    EJS_core = '3ds';
    
    // URL to Game rom
    EJS_gameUrl = '';
    
    // Path to the data directory
    EJS_pathtodata = 'data/';

    // 3DS requires threads
    EJS_threads = true;
</script>
<script src='data/loader.js'></script>
```

### CORES

The *3ds* system supports 1 core
- `azahar`

If set to `3ds`, emulator will use the `azahar` core.
