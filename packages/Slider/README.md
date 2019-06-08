# Slider

[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/slider.svg)](https://www.npmjs.com/package/@rn-components-kit/slider)

English | [中文](./README.zh-CN.md)

Sliders allow users to select a value from a fixed set of options. It supports the following features:

- `horizontal` and `vertical` two directions
- `one` or `two` thumbs two modes
- customized style for track and thumb
- friendly tooltip and fully customized tip formatter

## How to use

```bash
npm install @rn-components-kit/slider --save
```

|Preview|Code|
|------------|:---------:|
|<img width="375" src="./preview/horizontal-slider.gif"/>|[Demo1 Code](./demos/Demo1.js)|
|<img width="375" src="./preview/vertical-slider.gif"/>|[Demo2 Code](./demos/Demo2.js)|
|<img width="375" src="./preview/customized-tip.gif"/>|[Demo3 Code](./demos/Demo3.js)|
|<img width="375" src="./preview/customized-track-and-thumb.gif"/>|[Demo4 Code](./demos/Demo4.js)|

## Props

- [`style`](#style)
- [`min`](#min)
- [`max`](#max)
- [`step`](#step)
- [`multi`](#multi)
- [`vertical`](#vertical)
- [`showTip`](#showTip)
- [`tipContainerStyle`](#tipContainerStyle)
- [`tipTextStyle`](#tipTextStyle)
- [`trackColor`](#trackColor)
- [`selectedTrackColor`](#selectedTrackColor)
- [`thumbStyle`](#thumbStyle)
- [`renderThumb`](#renderThumb)
- [`tipFormatter`](#tipFormatter)
- [`onValueChange`](#onValueChange)
- [`onBeginSliding`](#onBeginSliding)
- [`onEndSliding`](#onEndSliding)

## Reference

### Props

#### `style`

Allows you to customize style

|Type|Required|Default|
|----|--------|-------|
|object|no|-|

#### `min`

The minimum value that thumb can slide to

|Type|Required|Default|
|----|--------|-------|
|numer|no|0|

#### `max`

The maximum value that thumb can slide to

|Type|Required|Default|
|----|--------|-------|
|number|no|100|

#### `step`

The granularity the slider can step through values. (Must greater than 0, and be divided by `(max - min)`)

|Type|Required|Default|
|----|--------|-------|
|number|no|1|

#### `multi`

Determines whether one or two thumbs in slider

|Type|Required|Default|
|----|--------|-------|
|boolean|no|false|

#### `vertical`

Determines whether slider is horizontal or vertical

|Type|Required|Default|
|----|--------|-------|
|boolean|no|false|

#### `showTip`

Determines whether tooltip is shown when dragging the thumb

|Type|Required|Default|
|----|--------|-------|
|boolean|no|false|

#### `tipContainerStyle`

Allows you to customize tooltip's container style (e.g. size, backgroundColor)

|Type|Required|Default|
|----|--------|-------|
|object|no|-|

#### `tipTextStyle`

Allows you to customize tooltip's text style (e.g. fontSize, color)

|Type|Required|Default|
|----|--------|-------|
|object|no|-|

#### `trackColor`

Color of track

|Type|Required|Default|
|----|--------|-------|
|string|no|'#DDD'|

#### `selectedTrackColor`

Color of track's selected part

|Type|Required|Default|
|----|--------|-------|
|string|no|'#40A9FF'|

#### `thumbStyle`

Allows you to customize thumb's style (e.g. color, size, shadow)

|Type|Required|Default|
|----|--------|-------|
|object|no|-|

#### `renderThumb`

```js
() => void
```

Allows you to fully customize thumb module

|Type|Required|Default|
|----|--------|-------|
|function|no|() => {}|

#### `tipFormatter`

```js
(value: number) => string
```

Slider will pass value to tipFormatter, and display its return value in tooltip

|Type|Required|Default|
|----|--------|-------|
|function|no|value => value.toString()|

#### `onValueChange`

```js
(value: number) => void
```

A callback will be triggered when slider's value changes

|Type|Required|Default|
|----|--------|-------|
|function|no|() => {}|

#### `onBeginSliding`

```js
() => void
```

A callback will be triggered when slider starts to slide

|Type|Required|Default|
|----|--------|-------|
|function|no|() => {}|

#### `onBeginSliding`

```js
() => void
```

A callback will be triggered when slider ends to slide

|Type|Required|Default|
|----|--------|-------|
|function|no|() => {}|
