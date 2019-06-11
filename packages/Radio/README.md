# Radio

[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/radio.svg)](https://www.npmjs.com/package/@rn-components-kit/radio)

English | [中文](./README.zh-CN.md)

Radio buttons allow users to select one option from a set. It supports following features:

- disable click
- customized checked/unChecked icon
- three animation types

## How to use

```bash
npm install @rn-components-kit/radio --save
```

|Preview|Code|
|------------|:---------:|
|<img width="375" src="./preview/basic-usage-radio.gif"/>|[Demo1 Code](./demos/Demo1.js)|
|<img width="375" src="./preview/disabled-radio.gif"/>|[Demo2 Code](./demos/Demo2.js)|
|<img width="375" src="./preview/customized-icon-style.gif"/>|[Demo3 Code](./demos/Demo3.js)|
|<img width="375" src="./preview/three-animation-types.gif"/>|[Demo4 Code](./demos/Demo4.js)|

## Reference

### Props for Radio.Group

- [`style`](#style)
- [`defaultValue`](#defaultValue)
- [`onValueChange`](#onValueChange)

#### `style`

Allow you to customize style

|Type|Required|Default|
|----|--------|-------|
|object|no|-|

#### `defaultValue`

Default value to speficy which radio button is selected initially

|Type|Required|Default|
|----|--------|-------|
|any|no|-|

#### `onValueChange`

```js
(value: any) => void
```

|Type|Required|Default|
|----|--------|-------|
|function|no|() => {}|

A callback will be triggered when selected value changes

### Props for Radio.Button

- [`style`](#style)
- [`value`](#value)
- [`title`](#title)
- [`titleStyle`](#titleStyle)
- [`iconSize`](#iconSize)
- [`disabled`](#disabled)
- [`checked`](#checked)
- [`checkedIconType`](#checkedIconType)
- [`checkedIconColor`](#checkedIconColor)
- [`checkedImage`](#checkedImage)
- [`unCheckedIconType`](#unCheckedIconType)
- [`unCheckedIconColor`](#unCheckedIconColor)
- [`unCheckedImage`](#unCheckedImage)
- [`animationType`](#animationType)
- [`onPress`](#onPress)

#### `style`

Allow you to customize style

|Type|Required|Default|
|----|--------|-------|
|object|no|-|

#### `value`

According to value for comparison, to determine whether the selected

|Type|Required|Default|
|----|--------|-------|
|any|yes|-|

#### `title`

Title of radio button

|Type|Required|Default|
|----|--------|-------|
|string|yes|-|

#### `titleStyle`

Allows you to customize title's style

|Type|Required|Default|
|----|--------|-------|
|object|no|-|

#### `iconSize`

Size of icon (or width and height for image, if you specify checkedImage/unCheckedImage)

|Type|Required|Default|
|----|--------|-------|
|number|no|20|

#### `disabled`

Determines whether radio button is available

|Type|Required|Default|
|----|--------|-------|
|boolean|no|false|

#### `checked`

Flag for checking the icon

|Type|Required|Default|
|----|--------|-------|
|boolean|no|false|

#### `checkedIconType`

Checked icon ([Icon Preset](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Icon))

|Type|Required|Default|
|----|--------|-------|
|string|no|'check-radio'|

#### `checkedIconColor`

Color of checked icon

|Type|Required|Default|
|----|--------|-------|
|string|no|'#1890FF'|

#### `checkedImage`

If you are not satisfied with icon preset, you can specify an image for checked icon

|Type|Required|Default|
|----|--------|-------|
|string|no|-|

#### `unCheckedIconType`

UnChecked icon ([Icon Preset](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Icon))

|Type|Required|Default|
|----|--------|-------|
|string|no|'circle'|

#### `unCheckedIconColor`

Color of unChecked icon

|Type|Required|Default|
|----|--------|-------|
|string|no|'#BFBFBF'|

#### `unCheckedImage`

If you are not satisfied with icon preset, you can specify an image for unChecked icon

|Type|Required|Default|
|----|--------|-------|
|string|no|-|

#### `animationType`

Determines which animation is adpoted when checked value changes

- none: no animation
- opacity: fade in/out
- size: zoom in/out

|Type|Required|Default|
|----|--------|-------|
|enum(`'none'`, `'opacity'`, `'size'`)|no|'size'|

#### `onPress`

```js
() => void
```

A callback will be triggered when radio button is pressed

|Type|Required|Default|
|----|--------|-------|
|function|no|() => {}|
