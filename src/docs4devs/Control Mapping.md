# Control Mapping

Custom controls can be set with the `EJS_Settings` variable

An example of what `EJS_Settings` would be set to is below

<div class="scrollable-code">

```js
EJS_defaultControls = {
        0: {
            0: {
                'value': 'x',
                'value2': 'BUTTON_2'
            },
            1: {
                'value': 's',
                'value2': 'BUTTON_4'
            },
            2: {
                'value': 'v',
                'value2': 'SELECT'
            },
            3: {
                'value': 'enter',
                'value2': 'START'
            },
            4: {
                'value': 'up arrow',
                'value2': 'DPAD_UP'
            },
            5: {
                'value': 'down arrow',
                'value2': 'DPAD_DOWN'
            },
            6: {
                'value': 'left arrow',
                'value2': 'DPAD_LEFT'
            },
            7: {
                'value': 'right arrow',
                'value2': 'DPAD_RIGHT'
            },
            8: {
                'value': 'z',
                'value2': 'BUTTON_1'
            },
            9: {
                'value': 'a',
                'value2': 'BUTTON_3'
            },
            10: {
                'value': 'q',
                'value2': 'LEFT_TOP_SHOULDER'
            },
            11: {
                'value': 'e',
                'value2': 'RIGHT_TOP_SHOULDER'
            },
            12: {
                'value': 'tab',
                'value2': 'LEFT_BOTTOM_SHOULDER'
            },
            13: {
                'value': 'r',
                'value2': 'RIGHT_BOTTOM_SHOULDER'
            },
            14: {
                'value': '',
                'value2': 'LEFT_STICK',
            },
            15: {
                'value': '',
                'value2': 'RIGHT_STICK',
            },
            16: {
                'value': 'h',
                'value2': 'LEFT_STICK_X:+1'
            },
            17: {
                'value': 'f',
                'value2': 'LEFT_STICK_X:-1'
            },
            18: {
                'value': 'g',
                'value2': 'LEFT_STICK_Y:+1'
            },
            19: {
                'value': 't',
                'value2': 'LEFT_STICK_Y:-1'
            },
            20: {
                'value': 'l',
                'value2': 'RIGHT_STICK_X:+1'
            },
            21: {
                'value': 'j',
                'value2': 'RIGHT_STICK_X:-1'
            },
            22: {
                'value': 'k',
                'value2': 'RIGHT_STICK_Y:+1'
            },
            23: {
                'value': 'i',
                'value2': 'RIGHT_STICK_Y:-1'
            },
            24: {
                'value': '1'
            },
            25: {
                'value': '2'
            },
            26: {
                'value': '3'
            },
            27: {
                'value': 'add'
            },
            28: {
                'value': 'space'
            },
            29: {
                'value': 'subtract'
            },
        },
        1: {},
        2: {},
        3: {}
    }
```
</div>

The first layer of variables are which player it's for.

`0`: Player 1

`1`: Player 2

`2`: Player 3

`3`: Player 4

The second layer, within all the controllers are the default keycodes. The array below contains the titles for all the letters.

<div class="scrollable-code">

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
    26: 'CHANGE STATE SLOT',
    27: 'FAST FORWARD',
    28: 'SLOW MOTION',
    29: 'REWIND'
}
```
</div>

From here, you can set the default button

`value`: The default mapping for the keyboard.

`value2`: The default mapping for a connectable controller.

For Keyboards, get the `event.key` property of the default key you want to choose. [This tool](https://keyjs.dev/) can tell you the key name.

For Controllers, the keycode is unique to the controller being used. You can use the control setting screen to find what the code is for your controller.
