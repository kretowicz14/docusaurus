---
sidebar_position: 2
---

# Logger

<img src="/img/logger.png"  width="120" height="120" />

The logger component automatically logs all log messages to STDOUT.

If you are running boneIO as a service, then all logs should be visible via command `journalctl -u boneio` or `journalctl -f`.

Default log level is `INFO`.
If you run boneIO app from command line, there are arguments:
`-d` or `-dd` eg

```bash
boneio run -c config.yaml -d
boneio run -c config.yaml -dd
```

- **-d** - means that debug logs will be shown for application, but not submodules, like mqtt client, modbus bus.
- **-dd** - means that debug logs will be shown for app and submodules.

Debug logger can be configured via yaml.

## Example config

```yaml title="Example config"
logger:
  default: DEBUG
  logs:
    pymodbus.client: DEBUG
```

## Configuration variables:

- **default** (Optional, string) - Default log level for application.
- **logs**- Manually specify log level for submodules of application as dict, where key is the name of the logger module and value is log level to set.
