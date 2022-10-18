---
sidebar_position: 5
---

# Base sensors filters

![Filters](/img/filter.png#thumbnail)

Some sensors allows to specify filters which allows transformation of value before sending it to MQTT.

Currently available sensors to filter values are:

- [Dallas](dallas)
- [LM75](lm75)
- [MCP9808](mcp9808)
- [ADC](adc)

Filters are always list of dictionary, where key is name of operation and value is value to use in operation eg

```yaml
filters:
  - round: 2
```

means that filter will round sensor value to 2 decimal places.

## Configuration variables:

- **filters** (_Optional_, list, default: See each sensor option) - filter list.

## Available filters

### offset

Adds a constant value to each sensor value.

```yaml
- platform: dallas
  ...
  filters:
    - offset: 5
```

### round

Round sensor value to X digits after .

```yaml
- platform: dallas
  ...
  filters:
    - round: 2
```

### multiply

Multply sensor value by constant value.

```yaml
- platform: dallas
  ...
  filters:
    - multiply: 1.5
```

### filter_out

Filter out value if it is equal to constant value

```yaml
- platform: dallas
  ...
  filters:
    - filter_out: 17
```

### filter_out_greater

Filter out value if it is greater than constant value

```yaml
- platform: dallas
  ...
  filters:
    - filter_out_greater: 17
```

### filter_out_lower

Filter out value if it is lower than constant value

```yaml
- platform: dallas
  ...
  filters:
    - filter_out_lower: 17
```
