# Control Mapping

Custom controls can be set with the `EJS_Settings` variable

An example of what `EJS_Settings` would be set to is below

```js
EJS_defaultControls = {"0":{"0":{"value":"x"},"1":{"value":"s"},"2":{"value":"v"},"3":{"value":"enter"},"4":{"value":"arrowup"},"5":{"value":"arrowdown"},"6":{"value":"arrowleft"},"7":{"value":"arrowright"},"8":{"value":"z"},"9":{"value":"a"},"10":{"value":"q"},"11":{"value":"e"},"12":{"value":"e"},"13":{"value":"w"},"14":{},"15":{},"16":{"value":"h"},"17":{"value":"f"},"18":{"value":"g"},"19":{"value":"t"},"20":{"value":"l"},"21":{"value":"j"},"22":{"value":"k"},"23":{"value":"i"},"24":{},"25":{},"26":{}},"1":{},"2":{},"3":{}}
```

The first layer of variables are which player it's for.

`0`: Player 1

`1`: Player 2

`2`: Player 3

`3`: Player 4

The second layer, within all the controllers are the default keycodes. The array below contains the titles for all the letters.

```js
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

For Keyboards, get the `event.key` property of the default key you want to choose. [This tool](https://www.toptal.com/developers/keycode) can tell you the key name.

For Controllers, the keycode is unique to the controller being used. You can use the control setting screen to find what the code is for your controller.
