# Configuration

Configuration is based on a yaml file. By default it's called config.yaml or configuration.yaml.
Yaml supports file nesting, so it's more readable.
When you see:

```yaml
key: !include file.yaml
```

it means that `key` section will be read from `file.yaml`.
boneIO app supports several sections.

```yaml
key: !include_files file.yaml file2.yaml file3.yaml
```

it means that `key` section will be read from 3 files `file.yaml`. `file2.yaml`, `file3.yaml`.

```yaml
key: !include_dir_list directory
```

it means that `key` section will be read from all files in `directory`.
