# Cores

This page will tell you the backend emulator for each core.

*Please note that the documentation is not and will not be available for the old cores*

## Available Cores

- `fceumm`: default `nes` core<br>
- `nestopia`: `nes` core<br>
- `snes9x`: default `snes` core<br>
- `gambatte`: default `gb` core<br>
- `mgba`: default `gba` core<br>
- `beetle_vb`: default `vb` core<br>
- `melonds`: default `nds` core<br>
- `desmume2015`: `nds` core<br>
- `a5200`: default `a5200` core<br>
- `mame2003`: default `mame2003` core<br>
- `fbalpha2012_cps1`: default `arcade` core<br>
- `fbalpha2012_cps2`: `arcade` core<br>
- `mednafen_psx_hw`: default `psx` core<br>
- `mednafen_psx`: `psx` core<br>



## Description

### `fceumm` (default `nes` core)

- Backend: `fceumm`
- Repository: [libretro-fceumm](https://github.com/libretro/libretro-fceumm)
- Changes: None
- Example:
```
EJS_core = 'fceumm';
```
-or-
```
EJS_core = 'nes';
```

### `nestopia` (`nes` core)

- Backend: `nestopia`
- Repository: [nestopia](https://github.com/ethanaobrien/nestopia)
- Changes: TO DOCUMENT
- Example:
```
EJS_core = 'nestopia';
```


### `snes9x` (default `snes` core)

- Backend: `snes9x`
- Repository: [snes9x](https://github.com/ethanaobrien/snes9x)
- Changes: Fixes emscripten build target
- Example:
```
EJS_core = 'snes9x';
```
-or-
```
EJS_core = 'snes';
```


### `gambatte` (default `gb` core)

- Backend: `gambatte`
- Repository: [gambatte-libretro](https://github.com/libretro/gambatte-libretro)
- Changes: None
- Example:
```
EJS_core = 'gambatte';
```
-or-
```
EJS_core = 'gb';
```


### `mgba` (default `gba` core)

- Backend: `mgba`
- Repository: [mgba](https://github.com/libretro/mgba)
- Changes: None
- Example:
```
EJS_core = 'mgba';
```
-or-
```
EJS_core = 'gba';
```


### `beetle_vb` (default `vb` core)

- Backend: `beetle-vb`
- Repository: [beetle-vb-libretro](https://github.com/ethanaobrien/beetle-vb-libretro)
- Changes: Fixes emscripten build target
- Example:
```
EJS_core = 'beetle_vb';
```
-or-
```
EJS_core = 'vb';
```


### `mupen64plus_next` (default `n64` core)

- Backend: `mupen64plus_next`
- Repository: [mupen64plus-libretro-nx](https://github.com/ethanaobrien/mupen64plus-libretro-nx)
- Changes: Makes the entire thing compatible with WebAssembly
- Example:
```
EJS_core = 'mupen64plus_next';
```
-or-
```
EJS_core = 'n64';
```


### `melonds` (default `nds` core)

- Backend: `melonds`
- Repository: [melonds](https://github.com/ethanaobrien/melonds)
- Changes: Fix `--no-undefined` compiler crash
- Example:
```
EJS_core = 'melonds';
```
-or-
```
EJS_core = 'nds';
```


### `desmume2015` (`nds` core)

- Backend: `desmume2015`
- Repository: [desmume2015](https://github.com/libretro/desmume2015)
- Changes: None
- Example:
```
EJS_core = 'desmume2015';
```


### `a5200` (default `a5200` core)

- Backend: `a5200`
- Repository: [a5200](https://github.com/ethanaobrien/a5200)
- Changes: Fixes emscripten build target
```
EJS_core = 'a5200';
```


### `mame2003` (default `mame2003` core)

- Backend: `mame2003-libretro`
- Repository: [mame2003-libretro](https://github.com/libretro/mame2003-libretro)
- Changes: None
```
EJS_core = 'mame2003';
```


### `fbalpha2012_cps1` (default `arcade` core)

- Backend: `fbalpha2012_cps1`
- Repository: [fbalpha2012_cps1](https://github.com/libretro/fbalpha2012_cps1)
- Changes: None
- Example:
```
EJS_core = 'fbalpha2012_cps1';
```
-or-
```
EJS_core = 'arcade';
```


### `fbalpha2012_cps2` (`arcade` core)

- Backend: `fbalpha2012_cps2`
- Repository: [fbalpha2012_cps2](https://github.com/libretro/fbalpha2012_cps2)
- Changes: None
- Example:
```
EJS_core = 'fbalpha2012_cps2';
```


### `mednafen_psx_hw` (default `psx` core)

- Backend: `beetle-psx-libretro`
- Repository: [beetle-psx-libretro](https://github.com/libretro/beetle-psx-libretro)
- Changes: Hardware turned on
- Example:
```
EJS_core = 'mednafen_psx_hw';
```
-or-
```
EJS_core = 'psx';
```


### `mednafen_psx` (`psx` core)

- Backend: `beetle-psx-libretro`
- Repository: [beetle-psx-libretro](https://github.com/libretro/beetle-psx-libretro)
- Changes: None
- Example:
```
EJS_core = 'mednafen_psx';
```

