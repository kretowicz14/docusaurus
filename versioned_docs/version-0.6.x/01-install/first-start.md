---
sidebar_position: 1
---

# Software Installation

BeagleBone shortcut is BBB.

1. Connect BeagleBone to boneIO backplane and plug-in network cable.
2. Find BBB in your network.
3. Connect via ssh with username **debian**. Default password is **temppwd**.
4. Change default password by running

```bash
passwd
```

## Update your BBB

(click Yes if needed to perform upgrade). First upgrade can take ~30mins.

```bash
sudo apt-get update && sudo apt-get dist-upgrade
```

```bash
reboot
```

## Add uEnv to enable all possible PINS

Edit `/boot/uEnv.txt` and uncomment following lines (eg by using `nano`)

```bash
disable_uboot_overlay_video=1
disable_uboot_overlay_audio=1
disable_uboot_overlay_wireless=1
```

## Disable unnecessary services

(if you need some you can just avoid disabling it).

```bash
sudo systemctl disable bonescript-autorun nginx wpa_supplicant bonescript.socket cloud9.socket cryptsetup.target
```

```bash
reboot
```

## Install dependencies

```bash
sudo apt-get install libopenjp2-7-dev libatlas-base-dev python3-venv
```

There are 2 ways to install BoneIO app.

## Semi auto installation

Follow on screen instruction. If you read `-devX` version of the docs this way of installation won't work!

```bash
bash -c "$(wget -qLO - https://github.com/boneIO-eu/app_bbb/raw/main/install_script.sh)"
```

,

## Manual installation

**Preffered way.**

Let's assume installing as default debian user in home directory and Python 3.7 as base.

### Prepare VENV

```bash
export BONEIOPATH=~/boneio
mkdir $BONEIOPATH
python3 -m venv $BONEIOPATH/venv
source $BONEIOPATH/venv/bin/activate
pip3 install --upgrade pip
pip3 install boneIO==0.5.0
cp $BONEIOPATH/venv/lib/python3.7/site-packages/boneio/example_config/*.yaml $BONEIOPATH/
```

Now edit `~/boneio/config.yaml`

### Run manually with debug flag

```bash
# export BONEIOPATH=~/boneio
source ~/boneio/venv/bin/activate
boneio run -c ~/boneio/config.yaml -dd
```

### Create startup script

Create file `~/boneio/boneio.service

```bash
[Unit]
Description=boneIO
After=multi-user.target

[Service]
Type=simple
ExecStart=/home/debian/boneio/venv/bin/boneio run -c /home/debian/boneio/config.yaml

[Install]
WantedBy=multi-user.target
```

Copy file to systemd and enable it.

```
sudo cp ~/boneio/boneio.service /lib/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now boneio
```
