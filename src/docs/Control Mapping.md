# Control Mapping

Custom controls can be set with the `EJS_Settings` variable

An example of what `EJS_Settings` would be set to is below
```
EJS_Settings = {
    defaultControllers:{"0":{"0":{"value":"88","value2":"1"},"1":{"value":"83","value2":"3"},"2":{"value":"16","value2":"8"},"3":{"value":"13","value2":"9"},"4":{"value":"38","value2":"12"},"5":{"value":"40","value2":"13"},"6":{"value":"37","value2":"14"},"7":{"value":"39","value2":"15"},"8":{"value":"90","value2":"0"},"9":{"value":"65","value2":"2"},"10":{"value":"81","value2":"4"},"11":{"value":"69","value2":"5"},"12":{"value":"82","value2":"6"},"13":{"value":"87","value2":"7"},"14":{},"15":{},"16":{"value":"72"},"17":{"value":"70"},"18":{"value":"71"},"19":{"value":"84"},"20":{"value":"76"},"21":{"value":"74"},"22":{"value":"75"},"23":{"value":"73"},"24":{},"25":{},"26":{}},"1":{},"2":{},"3":{}}
}
```

The first layer of variables are which player it's for.

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

