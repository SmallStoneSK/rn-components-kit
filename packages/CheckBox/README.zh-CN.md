# CheckBox

[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/checkbox.svg)](https://www.npmjs.com/package/@rn-components-kit/checkbox)

[English](./README.md) | 中文

复选框组件。

## How to use

```bash
npm install @rn-components-kit/checkbox --save
```

|预览|代码|
|------------|:---------:|
|<img width="375" src="./preview/basic-usage-checkbox.gif"/>|[Demo1 Code](./demos/Demo1.js)|
|<img width="375" src="./preview/disabled-checkbox.gif"/>|[Demo2 Code](./demos/Demo2.js)|
|<img width="375" src="./preview/customized-icon-checkbox.png"/>|[Demo3 Code](./demos/Demo3.js)|
|<img width="375" src="./preview/animation-types.gif"/>|[Demo4 Code](./demos/Demo4.js)|

## Props

- [`style`](#style)
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

## 文档

### Props

#### `style`

自定义样式

|类型|必填|默认值|
|----|--------|-------|
|object|否|-|

#### `title`

复选框中的文本信息

|类型|必填|默认值|
|----|--------|-------|
|string|是|-|

#### `titleStyle`

自定义文本样式

|类型|必填|默认值|
|----|--------|-------|
|object|否|-|

#### `iconSize`

选中/未选中icon的大小（当使用checkedImage/unCheckedImage时，图片的宽高就是iconSize）

|类型|必填|默认值|
|----|--------|-------|
|number|否|20|

#### `disabled`

复选框是否可用

|类型|必填|默认值|
|----|--------|-------|
|boolean|否|false|

#### `checked`

复选框是否选中

|类型|必填|默认值|
|----|--------|-------|
|boolean|否|false|

#### `checkedIconType`

选中时展示的图标 ([Icon Preset](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Icon))

|类型|必填|默认值|
|----|--------|-------|
|string|否|'check-square-fill'|

#### `checkedIconColor`

选中图标的颜色

|类型|必填|默认值|
|----|--------|-------|
|string|否|'#1890FF'|

#### `checkedImage`

如果不满意图标集，可以指定图片代替选中时的图标

|类型|必填|默认值|
|----|--------|-------|
|string|否|-|

#### `unCheckedIconType`

未选中时展示的图标 ([Icon Preset](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Icon))

|类型|必填|默认值|
|----|--------|-------|
|string|否|'border'|

#### `unCheckedIconColor`

未选中图标的颜色

|类型|必填|默认值|
|----|--------|-------|
|string|否|'#BFBFBF'|

#### `unCheckedImage`

如果不满意图标集，可以指定图片代替未选中时的图标

|类型|必填|默认值|
|----|--------|-------|
|string|否|-|

#### `animationType`

当选中状态发生变化时，指定过渡动画类型

- none: 没有动画
- opacity: 透明度发生变化，淡入/淡出
- size: 大小发生变化，放大/缩小

|类型|必填|默认值|
|----|--------|-------|
|enum(`'none'`, `'opacity'`, `'size'`)|否|'opacity'|

#### `onPress`

```js
() => void
```

当复选框点击时触发的回调函数

|类型|必填|默认值|
|----|--------|-------|
|function|否|() => {}|