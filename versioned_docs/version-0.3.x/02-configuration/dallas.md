---
sidebar_position: 9
---

# Dallas DS18B20

![Dallas](/img/ds18b20.png#thumbnail)

DS18B20 is a 1-wire temperature sensor.
Currently in boneIO it can be connected only through [DS2482](./ds2482).
Read [DS2482](./ds2482). to find out how to retrieve address of your DS18B20.

## Example config

```yaml title="Example config"
ds2482:
  id: ds2482
  address: 0x18

dallas:
  - id: temperature
    address: 0x6e0300a279d76428
    ds2482_id: ds2482
    update_interval: 60s
```

## Configuration variables:

- **id** (_Optional_, string, default: Address of I2C device) - uniquely identifies this device in MQTT and Home Assistant
- **address** (**Required**, int) - Address of Dallas device
- **ds2482_id** (Optional, string) - DS2482 id defined in ds2482 section.
- **show_in_ha** (_Optional_, boolean, default: True) - Send autodiscovery message to Home Assistant.
- **update_interval** (_Optional_, timeperiod, default: 60 seconds) - how often this sensor should update
