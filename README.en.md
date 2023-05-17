<h1 align="center">
Air Conditioner
</h1>

<p align="center">
<a href="https://github.com/zixikm520/air-conditioner" target="_blank">
<img src="https://github.com/zixikm520/air-conditioner/workflows/Github%20Pages/badge.svg" alt="GitHub Pages" />
</a>
</p>

<p align="center">
<a href="./README.md">中文文档</a> | English Docs
</p>

<p align="center">
Cloud air conditioner. Portable air conditioner. Invite a cool breeze into your summer life!
</p>
<br>

> History: [云空调，便携小空调｜路的小站](https://github.com/zixikm520/air-conditioner/)

- Machine Only[main]：[www.xiangyuni.cn](https://www.xiangyuni.cn)
- Test Machine[dev]：[www.xiangyuni.cn](www.xiangyuni.cn)
- 等级代挂：<https://qqdgw1.gdxfsh.org/>

## Features

### Advantages

- 🕐 Turn on the air conditioner any time and anywhere
- 📱 Portable
- 🔋 Low power consumption（Drawn with `HTML CSS` instead of `Canvas`）
- 🔊 Noise is negligible
- 🎮 Easy to use
- 🔧 Swift installation

### Limitations

- 💨 Wind not included

## Installation

### iframe

```html
<iframe height="740" src="https://www.xiangyuni.cn"></iframe>
```

Quickly install an air conditioner on your website.

Sample Room：[AC Room](https://github.com/zixikm520/air-conditioner/)

### Home Installation Service

- Hugo: <https://github.com/kuole-o/Hugo-air-conditioner>

## Deploy It Yourself

### Docker

You can use the following environment variables to customize the configuration.

- `AC_NGINX_DOMAIN` Set domain name
- `AC_NGINX_PORT` Set listening port

### Tencent CloudBase

Developed and deployed based on Tencent's open source project [CloudBase Framework](https://github.com/Tencent/cloudbase-framework). One-click deploying is supported.

[![腾讯云｜Deploy to CloudBase](https://main.qcloudimg.com/raw/67f5a389f1ac6f3b4d04c7256438e44f.svg)](https://console.cloud.tencent.com/tcb/env/index?action=CreateAndDeployCloudBaseProject&appUrl=https%3A%2F%2Fgithub.com%2FYunYouJun%2Fair-conditioner%2F&branch=main)

## Dev

```bash
# yarn dev
yarn start
# http://localhost:3000/

yarn build
# ./build
```

### Environment Variables

```bash
cp .env.example .env
```

```bash
# Disable Advertisement
VITE_DISABLE_ADSENSE=true
```

## Todo

- [x] Air Conditioner
  - [x] Energy Label
  - [x] Temperature Range（16-31˚C）
  - [x] Wind css
  - [x] Sound Effects
    - [x] Buttons
    - [x] Running sound
    - [ ] Import more sounds from [喜马拉雅](https://m.ximalaya.com/sleepaudio/6?mixedTrackIds=331526646&utm_source=smxkt)
- [x] Follow system color schemes

## Ref

- Numbers font: [Digital 7](https://www.dafont.com/digital-7.font)，Free for personal use
- Working sounds of the AC: [Air Extractor Fan | freesound](https://freesound.org/people/InspectorJ/sounds/403664/)

## [Sponsors](https://qqdgw1.gdxfsh.org/)

<p align="center">
  <a href="https://qqdgw1.gdxfsh.org/">
    <img src=''/>
  </a>
</p>
