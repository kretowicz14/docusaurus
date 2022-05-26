---
sidebar_position: 3
---

# Modbus sensor

Adding a modbus sensor is pretty easy.
Follow developer guide in this section, copy eg sdm120.json to be your template (https://raw.githubusercontent.com/boneIO-eu/app_bbb/dev/boneio/sensor/modbus/sdm120.json)

## Configuration variables:

- **model** - model to show in Home Assistant.
- **registers_base** - array of registers. You can read multiple registers at once, it's more CPU friendly.
  - **base** - start index to read
  - **length** - how many registers to read
  - **registers** - array how to interpret data received from modbus device
    - **name**: Name of sensor
    - **address** - address to read
    - **unit_of_measurement** - unit of measurement
    - **state_class** - either measurement, total, total_increasing. Read more https://developers.home-assistant.io/docs/core/entity/sensor/
    - **device_class** - device class to display in HA - https://developers.home-assistant.io/docs/core/entity/sensor/
    - **return_type**: which function to use to parse data - check out modbus sensor source code.
