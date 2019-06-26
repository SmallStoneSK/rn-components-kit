# Button

[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/button.svg)](https://www.npmjs.com/package/@rn-components-kit/button)

English | [中文](./README.zh-CN.md)

Button component. It supports the following features:

- `default`, `primary`, `success`, `warning` and `danger` five themes
- `small`, `default` and `large` three sizes
- `square`, `default` and `round` three shapes
- supports `icon` buttons and customize icon direction
- supports `outline` style button
- supports `block` level button
- supports `link` style button

## How to use

```bash
npm install @rn-components-kit/button --save
```

|Preview|Code|
|------------|:---------:|
|<img width="375" src="./preview/button-types.png"/>|[Demo1 Code](./demos/Demo1.js)|
|<img width="375" src="./preview/button-sizes.png"/>|[Demo2 Code](./demos/Demo2.js)|
|<img width="375" src="./preview/button-shapes.png"/>|[Demo3 Code](./demos/Demo3.js)|
|<img width="375" src="./preview/icon-buttons.png"/>|[Demo4 Code](./demos/Demo4.js)|
|<img width="375" src="./preview/block-buttons.png"/>|[Demo5 Code](./demos/Demo5.js)|
|<img width="375" src="./preview/link-buttons.png"/>|[Demo6 Code](./demos/Demo6.js)|
|<img width="375" src="./preview/outline-buttons.png"/>|[Demo7 Code](./demos/Demo7.js)|

## Props

- [`style`](#style)
- [`text`](#text)
- [`icon`](#icon)
- [`iconLeft`](#iconLeft)
- [`type`](#type)
- [`size`](#size)
- [`shape`](#shape)
- [`block`](#block)
- [`outline`](#outline)
- [`link`](#link)

## Methods

- [`updatePreset`](#updatePreset)

## Reference

### Props

#### `style`

Allow you to customize style

|Type|Required|Default|
|----|--------|-------|
|object|no|-|

#### `text`

Text to display in button

|Type|Required|Default|
|----|--------|-------|
|string|no|-|

#### `icon`

Icon to display in button

|Type|Required|Default|
|----|--------|-------|
|[Icon Preset](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Icon#icon-types)|no|-|

#### `iconLeft`

Determines icon's direction in button is left or right

|Type|Required|Default|
|----|--------|-------|
|boolean|no|true|

#### `type`

Button type, determines button's theme

|Type|Required|Default|
|----|--------|-------|
|enum(`'default'` \| `'primary'` \| `'success'` \| `'warning'` \| `'danger'` \| `'link'`)|no|'default'|

#### `size`

Button size

|Type|Required|Default|
|----|--------|-------|
|enum(`'small'` \| `'default'` \| `'large'`)|no|'default'|

#### `shape`

Button Shape

|Type|Required|Default|
|----|--------|-------|
|enum(`'default'` \| `'round'` \| `'square'`)|no|'default'|

#### `block`

Block level button

|Type|Required|Default|
|----|--------|-------|
|boolean|no|false|

#### `outline`

Applies outline button style

|Type|Required|Default|
|----|--------|-------|
|boolean|no|false|

#### `link`

Applies link button style

|Type|Required|Default|
|----|--------|-------|
|boolean|no|false|

### Methods

#### `updatePreset`

```js
updatePreset(preset);
```

This method offers an opportunity to change button presetted style. The preset is:

```json
{
  "theme": {
    "default": "#EFEFEF",
    "primary": "#40A9FF",
    "warning": "#E6A23C",
    "danger": "#D9534F",
    "success": "#67C23A"
  },
  "small": {
    "fontSize": 12,
    "borderRadius": 4,
    "paddingHorizontal": 10,
    "paddingVertical": 5,
    "iconTextSpacing": 5
  },
  "default": {
    "fontSize": 14,
    "borderRadius": 4,
    "paddingHorizontal": 12,
    "paddingVertical": 6,
    "iconTextSpacing": 7
  },
  "large": {
    "fontSize": 18,
    "borderRadius": 4,
    "paddingHorizontal": 16,
    "paddingVertical": 10,
    "iconTextSpacing": 9
  }
}
```
