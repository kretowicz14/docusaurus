---
sidebar_position: 11
---

# Cover

![Cover](/img/cover.png)

Cover module. It can be used with cover board and relay board as well.
**This is experimental module, so testers needed!**

## Example config

```yaml title="Example config"
cover:
  - id: kitchen
    open_relay: mcp1-gpb5a
    close_relay: mcp1-gpb4a
    open_time: 22s
    close_time: 22s
    show_in_ha: yes
    restore_state: yes
```

## Configuration variables:

- **id** (**Required**, string) - uniquely identifies this device in MQTT and Home Assistant.
- **open_relay** (**Required**, string) - Relay ID which opens a cover. It has to be set in `output` section.
- **close_relay** (**Required**, string) - Relay ID which closes a cover. It has to be set in `output` section.
- **open_time** (**Required**, timeperiod) - Time to open a cover. Example 20 seconds.
- **close_time** (**Required**, timeperiod) - Time to close a cover. Example 30 sec.
- **device_class** (Optional, string, allowed_values: `['awning', 'blind', 'curtain', 'damper', 'door', 'garage', 'gate', 'shade', 'shutter', 'window']`) - Type of device to see in Home Assistant.
- **show_in_ha** (_Optional_, boolean, default: True) - Send autodiscovery message to Home Assistant.
- **restore_state** (_Optional_, boolean, default: False) - You can enable restore_state option. It's bit experimental. It saves state of relay or cover in `state.json` file, which is located in same directory as your `config.json`. **If `output_type` is None, then this value is overwritten to False!**
