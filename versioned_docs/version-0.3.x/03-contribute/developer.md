---
sidebar_position: 2
---

# Developer guide

## Prepare VENV

Create fork on https://github.com/boneIO-eu/app_bbb.git and clone it on beagleboard using command below.
replace last line with your forked repo.

![Fork](/img/fork.png)

```bash
mkdir ~/boneio_development
python3 -m venv ~/boneio_development/venv
source ~/boneio_development/venv/bin/activate
cd ~/boneio_development
git clone git@github.com/<yourusername>/app_bbb.git
```

Below instruction assume you are still in activated venv.

```
source ~/boneio_development/venv/bin/activate
```

## Install Dependencies

```bash
cd app_bbb
pip3 install -r requirements.txt
pip3 install -e .
```

Now you're ready to add new features to app, prepare config.yaml, test it and create Pull Request later!

## Updating your repo

If your repo is not up to date with current version you have to `git rebase` it.

To do so, do in your repository:

```bash
git remote add upstream https://github.com/boneIO-eu/app_bbb.git
```

```bash
git fetch upstream dev
git rebase upstream/dev
```

You might need to rebase your branch.
Read more at Home Assistant developer guide: https://developers.home-assistant.io/docs/development_catching_up/
