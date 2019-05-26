# Badge

[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/badge.svg)](https://www.npmjs.com/package/@rn-components-kit/badge)

English | [中文](./README.zh-CN.md)

Small numerical value or status descriptor for UI elements. It supports the following features:

- pure dot and number within dot two styles
- customize color
- friendly animation

:warning: **NOTE**

Badge supports `<Badge>{your component}</Badge>` and `<Badge/>` two kinds of usages. When you pass a component as children to Badge (namely the first usage), the red point would be placed at the upper-right corner of your component automatically.

However, as the problem of `overflow: visible is not supported on Android` was not resolved until react-native@0.57 ([change log](https://github.com/react-native-community/releases/blob/master/CHANGELOG.md#android-specific-additions-3) and [commit b81c8b5](https://github.com/facebook/react-native/commit/b81c8b5)), Badge would be clipped on Android. Therefore, if your react-native's version is smaller than 0.57, you can use the second usage which renders a red point so that you can place it by yourself.

## How to use

```bash
npm install @rn-components-kit/badge --save
```

|Preview|Code|
|------------|:---------:|
|<img width="375" src="./preview/pure-dot-style.png"/>|[Demo1 Code](./demos/Demo1.js)|
|<img width="375" src="./preview/number-within-dot-style.png"/>|[Demo2 Code](./demos/Demo2.js)|
|<img width="375" src="./preview/customize-color-badge.png"/>|[Demo3 Code](./demos/Demo3.js)|
|<img width="375" src="./preview/friendly-animation-badge.gif"/>|[Demo4 Code](./demos/Demo4.js)|

## Props

- [`style`](#style)
- [`dot`](#dot)
- [`color`](#color)
- [`count`](#count)
- [`overflowCount`](#overflowCount)
- [`showZero`](#showZero)
- [`offsetX`](#offsetX)
- [`offsetY`](#offsetY)


## Reference

### Props

#### `style`

Allow you to customize style

|Type|Required|Default|
|----|--------|-------|
|object|no|-|

#### `dot`

Determines whether it is rendered as a dot without number in it

|Type|Required|Default|
|----|--------|-------|
|string|no|true|

#### `color`

Determines the dot's color

|Type|Required|Default|
|----|--------|-------|
|string|no|'#F5222D'|

#### `count`

If you specify the count prop, you should set dot prop `false` as well (they are two exclusive modes). And in this case, this number would be rendered at the center of dot

|Type|Required|Default|
|----|--------|-------|
|number|no|0|

#### `overflowCount`

Max count to show. If count is greater than overflowCount, it will be displayed as `${overflowCount}+`

|Type|Required|Default|
|----|--------|-------|
|number|no|99|

#### `showZero`

Determines whether it should be shown when count is 0

|Type|Required|Default|
|----|--------|-------|
|string|no|false|

#### `offsetX`

If you are not satisfied with the dot's position (upper-right corner), you can adjust it through `offsetX/offsetY`

|Type|Required|Default|
|----|--------|-------|
|number|no|0|

#### `offsetY`

If you are not satisfied with the dot's position (upper-right corner), you can adjust it through `offsetX/offsetY`

|Type|Required|Default|
|----|--------|-------|
|number|no|0|
