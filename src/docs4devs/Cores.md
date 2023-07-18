# Cores

This page will tell you the backend emulator for each core.

## Available Cores

- `fceumm`: default `nes` core
- `nestopia`: `nes` core
- `snes9x`: default `snes` core
- `gambatte`: default `gb` core
- `mgba`: default `gba` core
- `beetle_vb`: default `vb` core
- `melonds`: default `nds` core
- `desmume2015`: `nds` core
- `a5200`: default `a5200` core
- `mame2003`: default `mame2003` core
- `fbalpha2012_cps1`: default `arcade` core
- `fbalpha2012_cps2`: `arcade` core
- `mednafen_psx_hw`: default `psx` core
- `virtualjaguar`: default `jaguar` core
- `handy`: default `lynx` core
- `yabause`: default `segaSaturn` core
- `genesis_plus_gx`: default `segaMS`, `segaMD`, `segaGG`, and `segaCD` core
- `mupen64plus_next`: default `n64` core
- `opera`: default `3do` core
- `prosystem`: default `atari7800` core
- `stella2014`: default `atari2600` core


## Description

### `fceumm` (default `nes` core)

- Backend: `fceumm`
- Repository: [libretro-fceumm](https://github.com/libretro/libretro-fceumm)
- Changes: None
- Example:

```js
EJS_core = 'fceumm';
```

-or-

```js
EJS_core = 'nes';
```

### `nestopia` (`nes` core)

- Backend: `nestopia`
- Repository: [nestopia](https://github.com/ethanaobrien/nestopia)
- Changes: TO DOCUMENT
- Example:

```js
EJS_core = 'nestopia';
```

### `snes9x` (default `snes` core)

- Backend: `snes9x`
- Repository: [snes9x](https://github.com/ethanaobrien/snes9x)
- Changes: Fixes emscripten build target
- Example:

```js
EJS_core = 'snes9x';
```

-or-

```js
EJS_core = 'snes';
```

### `gambatte` (default `gb` core)

- Backend: `gambatte`
- Repository: [gambatte-libretro](https://github.com/libretro/gambatte-libretro)
- Changes: None
- Example:

```js
EJS_core = 'gambatte';
```

-or-

```js
EJS_core = 'gb';
```

### `mgba` (default `gba` core)

- Backend: `mgba`
- Repository: [mgba](https://github.com/libretro/mgba)
- Changes: None
- Example:

```js
EJS_core = 'mgba';
```

-or-

```js
EJS_core = 'gba';
```

### `beetle_vb` (default `vb` core)

- Backend: `beetle-vb`
- Repository: [beetle-vb-libretro](https://github.com/ethanaobrien/beetle-vb-libretro)
- Changes: Fixes emscripten build target
- Example:

```js
EJS_core = 'beetle_vb';
```

-or-

```js
EJS_core = 'vb';
```

### `mupen64plus_next` (default `n64` core)

- Backend: `mupen64plus_next`
- Repository: [mupen64plus-libretro-nx](https://github.com/ethanaobrien/mupen64plus-libretro-nx)
- Changes: Makes the entire thing compatible with WebAssembly
- Example:

```js
EJS_core = 'mupen64plus_next';
```

-or-

```js
EJS_core = 'n64';
```

### `melonds` (default `nds` core)

- Backend: `melonds`
- Repository: [melonds](https://github.com/ethanaobrien/melonds)
- Changes: Fix `--no-undefined` compiler crash
- Example:

```js
EJS_core = 'melonds';
```

-or-

```js
EJS_core = 'nds';
```

### `desmume2015` (`nds` core)

- Backend: `desmume2015`
- Repository: [desmume2015](https://github.com/libretro/desmume2015)
- Changes: None
- Example:

```js
EJS_core = 'desmume2015';
```

### `a5200` (default `a5200` core)

- Backend: `a5200`
- Repository: [a5200](https://github.com/ethanaobrien/a5200)
- Changes: Fixes emscripten build target

```js
EJS_core = 'a5200';
```

### `mame2003` (default `mame2003` core)

- Backend: `mame2003-libretro`
- Repository: [mame2003-libretro](https://github.com/libretro/mame2003-libretro)
- Changes: None

```js
EJS_core = 'mame2003';
```

### `fbalpha2012_cps1` (default `arcade` core)

- Backend: `fbalpha2012_cps1`
- Repository: [fbalpha2012_cps1](https://github.com/libretro/fbalpha2012_cps1)
- Changes: None
- Example:

```js
EJS_core = 'fbalpha2012_cps1';
```

-or-

```js
EJS_core = 'arcade';
```

### `fbalpha2012_cps2` (`arcade` core)

- Backend: `fbalpha2012_cps2`
- Repository: [fbalpha2012_cps2](https://github.com/libretro/fbalpha2012_cps2)
- Changes: None
- Example:

```js
EJS_core = 'fbalpha2012_cps2';
```

### `mednafen_psx_hw` (default `psx` core)

- Backend: `beetle-psx-libretro`
- Repository: [beetle-psx-libretro](https://github.com/libretro/beetle-psx-libretro)
- Changes: Hardware turned on
- Example:

```js
EJS_core = 'mednafen_psx_hw';
```

-or-

```js
EJS_core = 'psx';
```

### `mednafen_psx` (`psx` core)

- Backend: `beetle-psx-libretro`
- Repository: [beetle-psx-libretro](https://github.com/libretro/beetle-psx-libretro)
- Changes: None
- Example:

```js
EJS_core = 'mednafen_psx';
```
