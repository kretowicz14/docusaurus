---
sidebar_position: 1
---

# Testing dev version

## Prepare VENV

You can check current test version here https://pypi.org/project/boneio/#history

Assume test version is boneio==0.3.0.dev3

```bash
mkdir ~/boneio_test
python3 -m venv ~/boneio_test/venv
source ~/boneio_test/venv/bin/activate
pip3 install boneio==0.3.0.dev3
```

Now prepare your config according to release notes.
