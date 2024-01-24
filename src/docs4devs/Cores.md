# Cores

This page will tell you the backend emulator for each core.

## Available Cores

- [`fceumm`: default `nes` core](/systems/NES-Famicom.html)
- [`nestopia`: `nes` core](/systems/NES-Famicom.html)
- [`snes9x`: default `snes` core](/systems/SNES.html)
- [`gambatte`: default `gb` core](/systems/Nintendo%20Game%20Boy.html)
- [`mgba`: default `gba` core (Supports threads)](/systems/Nintendo%20Game%20Boy%20Advance.html)
- [`beetle_vb`: default `vb` core](/systems/Virtual%20Boy.html)
- [`melonds`: default `nds` core](/systems/Nintendo%20DS.html)
- [`desmume2015`: `nds` core](/systems/Nintendo%20DS.html)
- [`a5200`: default `a5200` core](/systems/Atari%205200.html)
- [`mame2003_plus`: `mame2003` core](/systems/MAME%202003.html)
- [`mame2003`: default `mame2003` core](/systems/MAME%202003.html)
- [`fbneo`: default `arcade` core](/systems/Arcade.html)
- [`fbalpha2012_cps1`: `arcade` core](/systems/Arcade.html)
- [`fbalpha2012_cps2`: `arcade` core](/systems/Arcade.html)
- [`pcsx_rearmed`: default `psx` core (Supports threads)](/systems/PlayStation.html)
- [`mednafen_psx_hw`: `psx` core (Supports threads)](/systems/PlayStation.html)
- [`virtualjaguar`: default `jaguar` core](/systems/Atari%20Jaguar.html)
- [`handy`: default `lynx` core](/systems/Atari%20Lynx.html)
- [`yabause`: default `segaSaturn` core (Supports threads)](/systems/Sega%20Saturn.html)
- `genesis_plus_gx`: default [`segaMS`](/systems/Sega%20Master%20System.html), [`segaMD`](/systems/Sega%20Mega%20Drive.html), [`segaGG`](/systems/Sega%20Game%20Gear.html), and [`segaCD`](/systems/Sega%20CD.html) core
- [`mupen64plus_next`: default `n64` core (Supports threads)](/systems/Nintendo%2064.html)
- [`parallel-n64`: `n64` core (Supports threads)](/systems/Nintendo%2064.html)
- [`opera`: default `3do` core (Supports threads)](/systems/3DO.html)
- [`prosystem`: default `atari7800` core](/systems/Atari%207800.html)
- [`stella2014`: default `atari2600` core](/systems/Atari%202600.html)
- [`picodrive`: default `sega32x` core](/systems/Sega%2032X.html) (this core is currently broken. See [this](https://github.com/EmulatorJS/EmulatorJS/issues/579) github issue)
- `mednafen_pce`: default `pce` core
- `mednafen_pcfx`: default `pcfx` core
- `mednafen_ngp`: default `ngp` core
- `mednafen_wswan`: default `ws` core
- `gearcoleco`: default `coleco` core
- `vice_x64`: default `c64` core
- `puae`: default `amiga` core


## Unavailable cores (that reasons are known)
- [Citra (3DS)](https://citra-emu.org/). Compiles with patches, but requires hardware rendering.
- [PPSSPP (PSP)](https://www.ppsspp.org/). Compiles with patches. Has issues with mmap and the interpreter that will cause the page to freeze after 2-3 frames.
- [Dolphin (Wii/Gamecube)](https://dolphin-emu.org/). Uses cmake. Not actually tested, but inferred to have the same issues as ppsspp, since ppsspp and dolphin have the same memory mapping backend.
