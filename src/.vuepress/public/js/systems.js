window.systems = [
    {
        "name": "NES / Famicon",
        "netplay": true,
        "lightgun": true,
        "core": "nes",
        "bios": true,
        "mouse": false,
        "multitap": false
    },
    {
        "name": "SNES",
        "netplay": true,
        "lightgun": false,
        "core": "snes",
        "bios": false,
        "mouse": true,
        "multitap": true
    },
    {
        "name": "Gameboy | Color",
        "netplay": false,
        "lightgun": false,
        "core": "gb",
        "bios": true,
        "mouse": false,
        "multitap": false
    },
    {
        "name": "Game Boy Advance",
        "netplay": false,
        "lightgun": false,
        "core": "gba",
        "bios": true,
        "mouse": false,
        "multitap": false
    },
    {
        "name": "Virtual Boy",
        "netplay": false,
        "lightgun": false,
        "core": "vb",
        "bios": false,
        "mouse": false,
        "multitap": false
    },
    {
        "name": "Nintendo 64",
        "netplay": true,
        "lightgun": false,
        "core": "n64",
        "bios": false,
        "mouse": false,
        "multitap": false
    },
    {
        "name": "Nintendo DS",
        "netplay": false,
        "lightgun": false,
        "core": "nds",
        "bios": false,
        "mouse": false,
        "multitap": false
    },
    {
        "name": "Sega Master System",
        "netplay": true,
        "lightgun": false,
        "core": "segaMS",
        "bios": false,
        "mouse": false,
        "multitap": false
    },
    {
        "name": "Sega Game Gear",
        "netplay": false,
        "lightgun": false,
        "core": "segaGG",
        "bios": false,
        "mouse": false,
        "multitap": false
    },
    {
        "name": "Sega Mega Drive",
        "netplay": true,
        "lightgun": false,
        "core": "segaMD",
        "bios": false,
        "mouse": false,
        "multitap": false
    },
    {
        "name": "Sega 32X",
        "netplay": true,
        "lightgun": false,
        "core": "sega32x",
        "bios": false,
        "mouse": false,
        "multitap": false
    },
    {
        "name": "Sega Saturn",
        "netplay": false,
        "lightgun": false,
        "core": "segaSaturn",
        "bios": true,
        "mouse": false,
        "multitap": false
    },
    {
        "name": "Sega CD",
        "netplay": true,
        "lightgun": false,
        "core": "segaCD",
        "bios": true,
        "mouse": false,
        "multitap": false
    },
    {
        "name": "Atari 2600",
        "netplay": false,
        "lightgun": false,
        "core": "atari2600",
        "bios": false,
        "mouse": false,
        "multitap": false
    },
    {
        "name": "Atari 7800",
        "netplay": false,
        "lightgun": false,
        "core": "atari7800",
        "bios": false,
        "mouse": false,
        "multitap": false
    },
    {
        "name": "Atari Lynx",
        "netplay": false,
        "lightgun": false,
        "core": "lynx",
        "bios": false,
        "mouse": false,
        "multitap": false
    },
    {
        "name": "Atari Jaguar",
        "netplay": false,
        "lightgun": false,
        "core": "jaguar",
        "bios": false,
        "mouse": false,
        "multitap": false
    },
    {
        "name": "Wanderswan | Color",
        "netplay": true,
        "lightgun": false,
        "core": "ws",
        "bios": true,
        "mouse": false,
        "multitap": false
    },
    {
        "name": "MSX",
        "netplay": false,
        "lightgun": false,
        "core": "msx",
        "bios": true,
        "mouse": false,
        "multitap": false
    },
    {
        "name": "Neo Geo Poket",
        "netplay": false,
        "lightgun": false,
        "core": "ngp",
        "bios": false,
        "mouse": false,
        "multitap": false
    },
    {
        "name": "TurboGrafs-16 | PC Engine",
        "netplay": true,
        "lightgun": false,
        "core": "pce",
        "bios": true,
        "mouse": false,
        "multitap": false
    },
    {
        "name": "3DO",
        "netplay": false,
        "lightgun": false,
        "core": "3do",
        "bios": true,
        "mouse": false,
        "multitap": false
    },
    {
        "name": "Playstation",
        "netplay": false,
        "lightgun": false,
        "core": "psx",
        "bios": true,
        "mouse": false,
        "multitap": false
    },
    {
        "name": "Arcade",
        "netplay": true,
        "lightgun": false,
        "core": "arcade",
        "bios": true,
        "mouse": false,
        "multitap": false
    }
]
systems.sort(function(a, b) {
    return a.name.localeCompare(b.name)
})

