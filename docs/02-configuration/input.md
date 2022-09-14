---
sidebar_position: 9
---

# Input module

![Input](/img/input.png)

GPIO Inputs used in input board.
For switch mode mqtt message is send for actions `single`, `double` and `long` presses.
For sensor mode mqtt message is send for actions `pressed`, `released`.

## Example config

```yaml title="Example config"
input:
  - id: IN_29
    pin: P8_36
    actions:
      single:
        - action: output
          pin: light
          action_output: toggle
  - id: IN_30
    pin: P8_35
    kind: sensor
    actions:
      pressed:
        - action: mqtt
          topic: boneiohome2/cmd/cover/kitchen/set
          action_mqtt_msg: 'ON'
      released:
        - action: cover
          pin: kitchen
          action_cover: stop
```

## Configuration variables:

- **id** (_Optional_, string, default: value of `{pin}`) - uniquely identifies this device in MQTT and Home Assistant.
- **pin** (**Required**, string) - GPIO id of Beaglebone board eg `P9_33`.
- **gpio_mode** (_Optional_, string, default: `gpio`, allowed_values: `['gpio', 'gpio_pu', 'gpio_pd', 'gpio_input']`) - How to run this gpio. gpio means default gpio mode. gpio_pu = gpio pull up, gpio_pd = gpio pull down, gpio_input - to be checked.
- **bounce_time** (_Optional_, timeperiod, default: 25 ms) - bounce time for GPIO to invoke callback. Use if default doesn't work for you. Making it to high might break click events functions for switch kind.
- **show_in_ha** (_Optional_, boolean, default: True) - Send autodiscovery message to Home Assistant.
- **inverted** (_Optional_, boolean, default: False) - Invert value of sensor input displayed in MQTT.
- **kind** (_Optional_, string, default: switch, allowed_values: `['switch', 'sensor']`) - Type of device to send to Home Assistant. This kind indicate actions you can use.
- **actions** (Optional, dictionary) - dictionary of predefined actions ([single, double, long], [pressed, released]).

## Action for kind SWITCH

- **single** (_Optional_, list): list of actions to use if switch is single pressed.
- **double** (_Optional_, list): list of actions to use if switch is double pressed.
- **long** (_Optional_, list): list of actions to use if switch is long pressed.

## Action for kind SENSOR

- **pressed** (_Optional_, list): list of actions to use if sensor is pressed.
- **released** (_Optional_, list): list of actions to use if sensor is released.

## Action variables for action list

- **action** (_Optional_, string, default: output, allowed_values: `['mqtt', 'output', 'cover']`) - action type. Output and cover means that command is send directly to output relay or cover. This mode doesn't need network to work. Mqtt mean that there is extra action send to mqtt. For example you can directly control second boneIO!
- **pin** (Optional, string) - output pin id to perform action on. Use only with action type `output` or `cover`.
- **topic** (Optional, string) - topic to use if `mqtt` action is chosen
- **action_cover** (Optional, string, allowed_values: `['toggle', 'open', 'close', 'stop', 'toggle_open', 'toggle_close']`) - action to perform on `cover` type action. `toggle` is actions between open/close. `toggle_open` means actions between open/stop, `toggle_close` means actions between close/stop.
- **action_output** (Optional, string, allowed_values: `['toggle', 'on', 'off']`) - action to perform on `output` type action.
- **action_mqtt_msg** (Optional, string) - message to send to mqtt topic if action is `mqtt`.
