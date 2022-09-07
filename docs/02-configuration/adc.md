---
sidebar_position: 7
---

# ADC sensors

![ADC](/img/adc.png)

## Example config

```yaml title="Example config"
adc:
  - id: adc1
    pin: P9_39
    filters:
      - multiply: 1.8
      - round: 2
```

## Configuration variables:

- **id** (_Optional_, string, default: value of `{pin}`) - uniquely identifies this device in MQTT and Home Assistant.
- **pin** (**Required**, string, allowed_values: `['P9_33', 'P9_35', 'P9_36', 'P9_37', 'P9_38', 'P9_39', 'P9_40']`) - ADC GPIO id of Beaglebone board.
- **update_interval** (_Optional_, timeperiod, default: 60s) - update interval after each ADC value is checked.
- **filters** (_Optional_, list, default: default value is in example above) - filter list. See [Filters](filters) to learn more.
