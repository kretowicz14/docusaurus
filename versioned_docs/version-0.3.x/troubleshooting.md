---
sidebar_position: 4
---

# Troubleshooting

Most useful command to check boneio app running with systemd.

boneIO won't start.

```bash title="Check if service is running"
systemctl status boneio
```

There are some logs which might indicate what the problem is.
Always check your config, if yaml is properly formatted.

```bash title="Check service logs"
journalctl -u boneio --all
```

```bash title="Check service logs live"
journalctl -u boneio --all -f
```

You might need to customize logger.
Check [Logger page](./configuration/logger) and then press reload logger button in Home Assistant.
