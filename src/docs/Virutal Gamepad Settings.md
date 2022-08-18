
# Virutal Gamepad Settings

If you need another layout for the virtual gamepad, you can map it yourself.

Example:

```js
EJS_VirtualGamepadSettings = [
    {
        type: "button",
        text: "B",
        id: "b",
        location: "right",
        left: -10,
        top: 70,
        input_value: 0
    },
    {
        type: "button",
        text: "A",
        id: "a",
        location: "right",
        left: 60,
        top: 70,
        input_value: 8
    },
    {
        type: "zone",
        location: "left",
        left: "50%",
        top: "50%"
    },
    {
        type: "button",
        text: "Start",
        id: "start",
        location: "center",
        left: 60,
        input_value: 3
    },
    {
        type: "button",
        text: "Select",
        id: "select",
        location: "center",
        left: -5,
        input_value: 2
    }
]
```

Types:

`zone`: the gamepad joystick.

`button`: just a button.



## Values needed for `zone`

`type` must be set to `zone`.

`location`: The area to place the joystick. Must be `top`, `left`, `center`, or `right`.

`left`: the css left value.

`right`: the css right value.


## Values needed for `button`

`type` must be set to `button`.

`location`: The area to place the joystick. Must be `top`, `left`, `center`, or `right`.

`text`: The inner text of the button.

`block`: Will make the button appear as a block.

`left` (optional): the css left value. Must be a number. Value is in `px`.

`right` (optional): the css right value. Must be a number. Value is in `px`.

`top` (optional): the css top value. Must be a number. Value is in `px`.

`id`: The ID of the button. Must be unique.

`input_value`: The input value. Available options can be found [here](https://github.com/ethanaobrien/emulatorjs/blob/018c39d4065b866487f8f18ca88c9488eab69a6d/data/emu-main.js#L2998).

`input_new_cores`: The input value for new cores. Available options can be found [here](https://github.com/ethanaobrien/emulatorjs/blob/018c39d4065b866487f8f18ca88c9488eab69a6d/data/emu-main.js#L2998).
