# Progress

[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/progress.svg)](https://www.npmjs.com/package/@rn-components-kit/progress)

English | [中文](./README.zh-CN.md)

Display the current progress of an operation flow. It supports the following features:

- `line` and `circle` two types of progress bar
- `normal`, `active`, `success` and `fail` four status for progress bar
- customized color and linear gradient supporting for line progress bar
- customized percent formatter, even fully control of customization for you to render info area

:warning: **NOTE**

As Progress supports linear gradient option, you should add `react-native-linear-gradient` into your project. If you havn't do this, you can follow the instructions [here](https://github.com/react-native-community/react-native-linear-gradient).

## How to use

```bash
npm install @rn-components-kit/progress --save
```

|Preview|Code|
|------------|:---------:|
|<img width="375" src="./preview/line-progress-bar.gif"/>|[Demo1 Code](./demos/Demo1.js)|
|<img width="375" src="./preview/colorful-supports-gradient.gif"/>|[Demo2 Code](./demos/Demo2.js)|
|<img width="375" src="./preview/circular-progress-bar.png"/>|[Demo3 Code](./demos/Demo3.js)|
|<img width="375" src="./preview/dynamic-percent-changing-animation.gif"/>|[Demo4 Code](./demos/Demo4.js)|
|<img width="375" src="./preview/customized-percent-formatter.png"/>|[Demo5 Code](./demos/Demo5.js)|

## Props

- [`style`](#style)
- [`type`](#type)
- [`percent`](#percent)
- [`status`](#status)
- [`lineWidth`](#lineWidth)
- [`color`](#color)
- [`trackColor`](#trackColor)
- [`radius`](#radius)
- [`showInfo`](#showInfo)
- [`lineInfoTextStyle`](#lineInfoTextStyle)
- [`circleInfoTextStyle`](#circleInfoTextStyle)
- [`percentFormatter`](#percentFormatter)
- [`renderInfo`](#renderInfo)

## Reference

### Props

#### `style`

Allows you to customize style

|Type|Required|Default|
|----|--------|-------|
|object|no|-|

#### `type`

Determine progress bar's type

|Type|Required|Default|
|----|--------|-------|
|enum(`'line'`, `'circle'`)|no|'line'|

#### `percent`

Current completion percentage (must be between 0 and 100)

|Type|Required|Default|
|----|--------|-------|
|number|no|0|

#### `status`

Status of progress

- normal: task is doing (0 <= percent < 100)
- active: an pulse animation (only works for line progress bar)
- success: task 100% completed (default green color)
- fail: task failed (default red color)

|Type|Required|Default|
|----|--------|-------|
|enum(`'normal'`, `'active'`, `'success'`, `'fail'`)|no|'normal'|

#### `lineWidth`

Line width of progress bar

|Type|Required|Default|
|----|--------|-------|
|number|no|6|

#### `color`

Highlight color of progress bar

|Type|Required|Default|
|----|--------|-------|
|string|no|'#40A9FF'|

#### `trackColor`

Color of progress track

|Type|Required|Default|
|----|--------|-------|
|string|no|'#EFEFEF'|

#### `radius`

Radius of circle (only works when type is `'circle'`)

|Type|Required|Default|
|----|--------|-------|
|number|no|50|

#### `showInfo`

Determines whether to display info area (percent tip and icon)

|Type|Required|Default|
|----|--------|-------|
|boolean|no|true|

#### `lineInfoTextStyle`

Allows you to customize percent tip's style (only works when type is `'line'`)

|Type|Required|Default|
|----|--------|-------|
|object|no|-|

#### `circleInfoTextStyle`

Allows you to customize percent tip's style (only works when type is `'circle'`)

|Type|Required|Default|
|----|--------|-------|
|object|no|-|

#### `percentFormatter`

```js
(value: number) => string
```

Progress will pass value to percentFormatter, and display its return value in info area

|Type|Required|Default|
|----|--------|-------|
|function|no|value => `${value}%`|

#### `renderInfo`

```js
() => React.ReactElement
```

Allow you to fully customize info area

|Type|Required|Default|
|----|--------|-------|
|function|no|-|
