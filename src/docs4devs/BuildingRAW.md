# Building RetroArch-Web

*Instructions have only been confirmed working for **Ubuntu**.*

* For simplicity, you can execute [this script.](https://github.com/KingIzzymon/retroarch-web/blob/main/compileretroarchweb.sh)
<br>

### Dependencies

- **[Build Essential]**
- **[PkgConf]**
- **[BinUtils]**
- **[Python]**
- **[Git]**

<br>

```sh
sudo apt install -y         \
    binutils-mips-linux-gnu \
    build-essential         \
    pkgconf                 \
    python3                 \
    git 
```

<br>
<br>

### LibRetro

1. **Clone** the repository.

    ```sh
    git clone https://github.com/libretro/libretro-fceumm.git
    ```

<br>

2. The next steps depend on whether or not you have a `Makefile.libretro` file.
   
   <br>
   
   - Navigate to the folder with the makefile. If it is not in the base directory, look for a folder named libretro.
   
   #### With
   
   - Build with:
   
       ```sh
       emmake make -f Makefile.libretro platform=emscripten
       ```
   
   <br>
   
   #### Without
   
   - Build with:
   
       ```sh
       emmake make platform=emscripten
       ```

<br>

3. Copy the `.bc` file to the RetroArch `/dist-cores/` directory and continue to build the wasm files.

<br>
<br>

### WASM

1. **Clone** the repository.

    ```sh
    git clone https://github.com/ethanaobrien/RetroArch.git
    ```
    
<br>    

2. Navigate to `/dist-scripts/`

<br>

3. Build with:

    ```sh
    emmake ./dist-cores.sh emscripten
    ```

<br>


<!----------------------------------------------------------------------------->

[RetroArch]: https://github.com/libretro/RetroArch
[Fork]: https://github.com/ethanaobrien/RetroArch

[GPLv3]: cores/LICENSE

<!-------------------------------{ Dependencies }------------------------------>

[Build Essential]: https://packages.ubuntu.com/focal/build-essential
[BinUtils]: https://www.gnu.org/software/binutils/
[PkgConf]: http://pkgconf.org/
[Python]: https://www.python.org/
[Git]: https://git-scm.com/

<!---------------------------------{ Badges }---------------------------------->

[Badge GPLv3]: https://img.shields.io/badge/License-GPL_3-blue.svg?style=flat
