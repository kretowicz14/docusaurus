---
sidebar_position: 3
---

# OLED

![OLED](/img/oled.jpg)

OLED display uses I2C communication.

## Example config

```yaml title="Example config"
oled:
  enabled: yes
  screensaver_timeout: 30 s
  screens:
    - uptime
    - network
    - cpu
    - disk
    - memory
    - swap
    - outputs
```

## Configuration variables:

- **enabled** (_Optional_, boolean, default: False) - Enable or disable built-in display.
- **screensaver_timeout** (_Optional_, timeperiod, default: 60 seconds) - Screensaver timeout. How long to wait for timeout. 0 means that screensaver is disabled. Minimum is 1 second.
- **screens** (_Optional_, list, default: See example) - Screens to display on OLED. It will be presented in same order as defined in list.
