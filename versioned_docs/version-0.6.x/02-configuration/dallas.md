---
sidebar_position: 9
---

# Dallas DS18B20

![Dallas](/img/ds18b20.png#thumbnail)

DS18B20 is a 1-wire temperature sensor.
You can use [DS2482](./ds2482). to connect Dallas sensor or OneWire gpio pin (P9.14 only!).
To configure OneWire GPIO follow below instructions. If you have DS2482, first configure DS2482 section, then configure sensor list.

## Configure P9.12 One Wire

Login to your Beaglebone via ssh.
Edit `/boot/uEnv.txt` with file editor (you need to use sudo eg `sudo nano /boot/uEnv.txt`)
Uncomment (remove # from the beginning) following line:

```bash
uboot_overlay_addr4=/lib/firmware/BB-W1-P9.12-00A0.dtbo
```

Reboot device.

## Example config

```yaml title="Example config"
dallas:
  id: mydallas

sensor:
  - platform: dallas
    id: temperature
    address: 0x6e0300a279d76428
    bus_id: mydallas
    update_interval: 60s
    filters:
      - round: 2
      - offset: 5
```

## Configuration variables:

- **platform** (**Required**, string, default: dallas) - currently only Dallas is supported in platform variable. Define it to avoid problems in future versions.
- **id** (_Optional_, string, default: Address of I2C device) - uniquely identifies this device in MQTT and Home Assistant
- **address** (**Required**, int) - Address of Dallas device
- **bus_id** (Optional, string) - DS2482 id defined in ds2482 section or dallas id. Default to Dallas bus id.
- **show_in_ha** (_Optional_, boolean, default: True) - Send autodiscovery message to Home Assistant.
- **update_interval** (_Optional_, timeperiod, default: 60 seconds) - how often this sensor should update
- **unit_of_measurement** (_Optional_, string, default: `°C`) - unit of measurement of the sensor. This does not make any math to switch between units!
- **filters** (_Optional_, list, default: `- round: 2`) - filter list. See [Filters](filters) to learn more.
