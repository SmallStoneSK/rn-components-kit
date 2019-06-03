# Spin

[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/spin.svg)](https://www.npmjs.com/package/@rn-components-kit/spin)

[English](./README.md) | 中文

用于展示页面或区块的加载中状态。支持以下7种不同动画类型：

- [`Ladder`](#props-for-ladder)
- [`Rainbow`](#props-for-rainbow)
- [`Wave`](#props-for-wave)
- [`RollingCubes`](#props-for-rollingcubes)
- [`ChasingCircles`](#props-for-chasingcircles)
- [`Pulse`](#props-for-pulse)
- [`FlippingCard`](#props-for-flippingcard)

## 使用

```bash
npm install @rn-components-kit/spin --save
```

|预览|代码|
|------------|:---------:|
|<img width="375" src="./preview/ladder.gif"/>|[Demo1 Code](./demos/Demo1.js)|
|<img width="375" src="./preview/rainbow.gif"/>|[Demo2 Code](./demos/Demo2.js)|
|<img width="375" src="./preview/wave.gif"/>|[Demo3 Code](./demos/Demo3.js)|
|<img width="375" src="./preview/rolling-cubes.gif"/>|[Demo4 Code](./demos/Demo4.js)|
|<img width="375" src="./preview/chasing-circles.gif"/>|[Demo5 Code](./demos/Demo5.js)|
|<img width="375" src="./preview/pulse.gif"/>|[Demo6 Code](./demos/Demo6.js)|
|<img width="375" src="./preview/flipping-card.gif"/>|[Demo7 Code](./demos/Demo7.js)|

## 文档

## Props for Ladder

#### `style`

自定义样式

|类型|必填|默认值|
|----|--------|-------|
|object|否|-|

#### `scale`

组件放大缩小的比例

|类型|必填|默认值|
|----|--------|-------|
|number|否|1|

#### `duration`

一次动画循环播放的时间

|类型|必填|默认值|
|----|--------|-------|
|number|否|5000|

#### `color`

组件内各元素的颜色

|类型|必填|默认值|
|----|--------|-------|
|string|否|'#40A9FF'|

## Props for Rainbow

#### `style`

自定义样式

|类型|必填|默认值|
|----|--------|-------|
|object|否|-|

#### `scale`

组件放大缩小的比例

|类型|必填|默认值|
|----|--------|-------|
|number|否|1|

#### `duration`

一次动画循环播放的时间

|类型|必填|默认值|
|----|--------|-------|
|number|否|5000|

#### `colors`

彩虹的`5`种颜色

|类型|必填|默认值|
|----|--------|-------|
|string[]|否|['#EA7671', '#81D2B4', '#A963B8', '#70ACF6', '#F4B860']|

## Props for Wave

#### `style`

自定义样式

|类型|必填|默认值|
|----|--------|-------|
|object|否|-|

#### `type`

波的类型

|类型|必填|默认值|
|----|--------|-------|
|枚举值(`'rect'`, `'dot'`)|否|'rect'|

#### `scale`

组件放大缩小的比例

|类型|必填|默认值|
|----|--------|-------|
|number|否|1|

#### `duration`

一次动画循环播放的时间

|类型|必填|默认值|
|----|--------|-------|
|number|否|5000|

#### `color`

组件内各元素的颜色

|类型|必填|默认值|
|----|--------|-------|
|string|否|'#40A9FF'|


## Props for RollingCubes

#### `style`

自定义样式

|类型|必填|默认值|
|----|--------|-------|
|object|否|-|

#### `scale`

组件放大缩小的比例

|类型|必填|默认值|
|----|--------|-------|
|number|否|1|

#### `duration`

一次动画循环播放的时间

|类型|必填|默认值|
|----|--------|-------|
|number|否|2200|

#### `color`

组件内各元素的颜色

|类型|必填|默认值|
|----|--------|-------|
|string|否|'#40A9FF'|

## Props for ChasingCircles

#### `style`

自定义样式

|类型|必填|默认值|
|----|--------|-------|
|object|否|-|

#### `scale`

组件放大缩小的比例

|类型|必填|默认值|
|----|--------|-------|
|number|否|1|

#### `duration`

一次动画循环播放的时间

|类型|必填|默认值|
|----|--------|-------|
|number|否|1800|

#### `color`

组件内各元素的颜色

|类型|必填|默认值|
|----|--------|-------|
|string|否|'#40A9FF'|

## Props for Pulse

#### `style`

自定义样式

|类型|必填|默认值|
|----|--------|-------|
|object|否|-|

#### `scale`

组件放大缩小的比例

|类型|必填|默认值|
|----|--------|-------|
|number|否|1|

#### `duration`

一次动画循环播放的时间

|类型|必填|默认值|
|----|--------|-------|
|number|否|2000|

#### `color`

组件内各元素的颜色

|类型|必填|默认值|
|----|--------|-------|
|string|否|'#40A9FF'|

## Props for FlippingCard

#### `style`

自定义样式

|类型|必填|默认值|
|----|--------|-------|
|object|否|-|

#### `scale`

组件放大缩小的比例

|类型|必填|默认值|
|----|--------|-------|
|number|否|1|

#### `duration`

一次动画循环播放的时间

|类型|必填|默认值|
|----|--------|-------|
|number|否|1200|

#### `color`

组件内各元素的颜色

|类型|必填|默认值|
|----|--------|-------|
|string|否|'#40A9FF'|
