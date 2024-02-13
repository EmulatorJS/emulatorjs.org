# Sega Master System

## Code example

```html
<div style='width:640px;height:480px;max-width:100%'>
    <div id='game'></div>
</div>

<script type='text/javascript'>

    EJS_player = '#game';
    
    // Can also be genesis_plus_gx or picodrive
    EJS_core = 'segaMS';

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
| `bios_E.sms` | MasterSystem EU BIOS | `840481177270d5642a14ca71ee72844c`
| `bios_U.sms` | MasterSystem US BIOS | `840481177270d5642a14ca71ee72844c`
| `bios_J.sms` | MasterSystem JP BIOS | `24a519c53f67b00640d0048ef7089105`

<!-- EU & US have the same checksum? 
 according to https://docs.libretro.com/library/genesis_plus_gx/, they do... Weird
-->

### CORES


::: warning
This the `picodrive` is currently broken. See [this](https://github.com/EmulatorJS/EmulatorJS/issues/579) github issue
:::

The *segaMS* system supports 3 cores
- `smsplus`
- `genesis_plus_gx`
- `picodrive`

If set to `segaMS`, emulator will use the `smsplus` core.
