# Configuration

Configuration is based on a yaml file. By default it's called config.yaml or configuration.yaml.
Yaml supports file nesting, so it's more readable.
When you see

```yaml
key: !include file.yaml
```

it means that `key` section will be read from `file.yaml`.
boneIO app supports several sections.
