---
sidebar_position: 5
---

# Modbus sensors

![Modbus sensors](/img/modbus_sensors.png)

## Dependency modules

```yaml
modbus
```

Modbus sensors component.
**You need to know address of device you want to connect to!**
Supported devices:

| Device                          | Model name |
| ------------------------------- | ---------- |
| Eastron SDM630[^1] Energy meter | sdm630     |
| Eastron SDM120[^1] Energy meter | sdm120     |
| Sofar Solar PV Inverter         | sofar      |

## Example config

```yaml title="Example config"
modbus:
  uart: uart1

modbus_sensors:
  - id: sofar1
    model: sofar
    address: 1
  - id: sdm1
    model: sdm630
    address: 32
```

## Configuration variables:

- **id** (**Required**, string) - uniquely identifies this device in MQTT and Home Assistant
- **address** (**Required**, string) - modbus address of the device you want to communicate with.
- **model** (**Required**, string) - model schema to use. Check table above to get model name.
- **update_interval** (_Optional_, timeperiod, default: 60 seconds) - update interval. Modbus connection is pretty cpu intensive so customize with care. Minimum is 1 second, but recommended minimum is 10 secs.

[^1]: Those energy metters can be found in two versions and only one supports Modbus - sometimes it's marked with suffix `M` (`SDM120M` / `SDM6301M`), other time `Modbus` is mentioned in the title. Don't confuse it with cheaper version with suffix `D` (`SDM120D` / `SDM6301D`) - it doesn't support Modbus communication so it can't be connected with Bone.io.
