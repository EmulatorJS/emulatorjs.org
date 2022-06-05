# Control Mapping

Custom default controls are possible, and are declared in the `emu-main.js` file.


Search `defaultControllers` in the `emu-main.js` file. The first instance of `defaultControllers` will be the default controls mapping.

The first layer of variables are which controller it is.

`0`: Player 1

`1`: Player 2

`2`: Player 3

`3`: Player 4

<br>

The second layer, within all the controllers are the default keycodes. The array below contains the titles for all the letters.
```
{
    0: 'B',
    1: 'Y',
    2: 'SELECT',
    3: 'START',
    4: 'UP',
    5: 'DOWN',
    6: 'LEFT',
    7: 'RIGHT',
    8: 'A',
    9: 'X',
    10: 'L',
    11: 'R',
    12: 'L2',
    13: 'R2',
    14: 'L3',
    15: 'R3',
    19: 'L STICK UP',
    18: 'L STICK DOWN',
    17: 'L STICK LEFT',
    16: 'L STICK RIGHT',
    23: 'R STICK UP',
    22: 'R STICK DOWN',
    21: 'R STICK LEFT',
    20: 'R STICK RIGHT',
    24: 'QUICK SAVE STATE',
    25: 'QUICK LOAD STATE',
    26: 'CHANGE STATE SLOT'
}
```

From here, you can set the default button

`value`: The default mapping for the keyboard.

`value2`: The default mapping for a connectable controller.

<br>

For Keyboards, get the keycode event of the default key you want to choose. [This tool](https://www.toptal.com/developers/keycode) can tell you the keycode.

For Controllers, the keycode is unique to the controller being used. You can use the control setting screen to find what the code is for your controller.

