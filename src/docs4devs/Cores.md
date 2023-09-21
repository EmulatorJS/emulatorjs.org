# Cores

This page will tell you the backend emulator for each core.

## Available Cores

- [`fceumm`: default `nes` core](../github/docs/Systems/NES-Famicom.html)
- [`nestopia`: `nes` core](../github/docs/Systems/NES-Famicom.html)
- [`snes9x`: default `snes` core](../github/docs/Systems/SNES.html)
- [`gambatte`: default `gb` core](../github/docs/Systems/Nintendo%20Game%20Boy.html)
- [`mgba`: default `gba` core (Supports threads)](../github/docs/Systems/Nintendo%20Game%20Boy%20Advance.html)
- [`beetle_vb`: default `vb` core](../github/docs/Systems/Virtual%20Boy.html)
- [`melonds`: default `nds` core](../github/docs/Systems/Nintendo%20DS.html)
- [`desmume2015`: `nds` core](../github/docs/Systems/Nintendo%20DS.html)
- [`a5200`: default `a5200` core](../github/docs/Systems/Atari%205200.html)
- [`mame2003_plus`: `mame2003` core](../github/docs/Systems/MAME%202003.html)
- [`mame2003`: default `mame2003` core](../github/docs/Systems/MAME%202003.html)
- [`fbneo`: default `arcade` core](../github/docs/Systems/Arcade.html)
- [`fbalpha2012_cps1`: `arcade` core](../github/docs/Systems/Arcade.html)
- [`fbalpha2012_cps2`: `arcade` core](../github/docs/Systems/Arcade.html)
- [`pcsx_rearmed`: default `psx` core (Supports threads)](../github/docs/Systems/PlayStation.html)
- [`mednafen_psx_hw`: `psx` core (Supports threads)](../github/docs/Systems/PlayStation.html)
- [`virtualjaguar`: default `jaguar` core](../github/docs/Systems/Atari%20Jaguar.html)
- [`handy`: default `lynx` core](../github/docs/Systems/Atari%20Lynx.html)
- [`yabause`: default `segaSaturn` core (Supports threads)](../github/docs/Systems/Sega%20Saturn.html)
- `genesis_plus_gx`: default [`segaMS`](../github/docs/Systems/Sega%20Master%20System.html), [`segaMD`](../github/docs/Systems/Sega%20Mega%20Drive.html), [`segaGG`](../github/docs/Systems/Sega%20Game%20Gear.html), and [`segaCD`](../github/docs/Systems/Sega%20CD.html) core
- [`mupen64plus_next`: default `n64` core (Supports threads)](../github/docs/Systems/Nintendo%2064.html)
- [`parallel-n64`: `n64` core (Supports threads)](../github/docs/Systems/Nintendo%2064.html)
- [`opera`: default `3do` core (Supports threads)](../github/docs/Systems/3DO.html)
- [`prosystem`: default `atari7800` core](../github/docs/Systems/Atari%207800.html)
- [`stella2014`: default `atari2600` core](../github/docs/Systems/Atari%202600.html)
- [`picodrive`: default `sega32x` core](../github/docs/Systems/Sega%2032X.html)
- `mednafen_pce`: default `pce` core
- `mednafen_pcfx`: default `pcfx` core
- `mednafen_ngp`: default `ngp` core
- `mednafen_wswan`: default `ws` core
- `gearcoleco`: default `coleco` core


## Unavailable cores (that reasons are known)
- [Citra (3DS)](https://citra-emu.org/). Compiles with patches, but requires hardware rendering.
- [PPSSPP (PSP)](https://www.ppsspp.org/). Compiles with patches. Has issues with mmap and the interpreter that will cause the page to freeze after 2-3 frames.
- [Dolphin (Wii/Gamecube)](https://dolphin-emu.org/). Uses cmake. Not actually tested, but inferred to have the same issues as ppsspp, since ppsspp and dolphin have the same memory mapping backend.


