# Commodore Amiga

## Code example

```html
<div style='width:640px;height:480px;max-width:100%'>
    <div id='game'></div>
</div>

<script type='text/javascript'>

    EJS_player = '#game';
    
    EJS_core = 'amiga';

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

| Name | Amiga Forever | Description | MD5 Checksum |
|------|---------------|--------------|-------------|
| `kick33180.A500`     | amiga-os-120.rom          | Kickstart v1.2 rev 33.180          | `85ad74194e87c08904327de1a9443b7a` |
| `kick34005.A500`     | amiga-os-130.rom          | Kickstart v1.3 rev 34.005          | `82a21c1890cae844b3df741f2762d48d` |
| `kick37175.A500`     | amiga-os-204.rom          | Kickstart v2.04 rev 37.175         | `dc10d7bdd1b6f450773dfb558477c230` |
| `kick37350.A600`     | amiga-os-205-a600.rom     | Kickstart v2.05 rev 37.350         | `465646c9b6729f77eea5314d1f057951` |
| `kick40063.A600`     | amiga-os-310-a600.rom     | Kickstart v3.1 rev 40.063          | `e40a5dfb3d017ba8779faba30cbd1c8e` |
| `kick39106.A1200`    | amiga-os-300-a1200.rom    | Kickstart v3.0 rev 39.106          | `b7cc148386aa631136f510cd29e42fc3` |
| `kick40068.A1200`    | amiga-os-310-a1200.rom    | Kickstart v3.1 rev 40.068          | `646773759326fbac3b2311fd8c8793ee` |
| `kick39106.A4000`    | amiga-os-300-a4000.rom    | Kickstart v3.0 rev 39.106          | `9b8bdd5a3fd32c2a5a6f5b1aefc799a5` |
| `kick40068.A4000`    | amiga-os-310-a4000.rom    | Kickstart v3.1 rev 40.068          | `9bdedde6a4f33555b4a270c8ca53297d` |
| `kick34005.CDTV`     | amiga-os-130-cdtv-ext.rom | CDTV extended ROM v1.00            | `89da1838a24460e4b93f4f0c5d92d48d` |
| `kick40060.CD32`     | amiga-os-310-cd32.rom     | CD32 Kickstart v3.1 rev 40.060     | `5f8924d013dd57a89cf349f4cdedc6b1` |
| `kick40060.CD32.ext` | amiga-os-310-cd32-ext.rom | CD32 extended ROM rev 40.060       | `bb72565701b1b6faece07d68ea5da639` |
| `kick40060.CD32`     |                           | CD32 KS + extended v3.1 rev 40.060 | `f2f241bf094168cfb9e7805dc2856433` |

### CORES

The *amiga* system supports 1 core
- `puae`

If set to `amiga`, emulator will use the `puae` core.
