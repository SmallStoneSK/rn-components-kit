# Switch

[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/switch.svg)](https://www.npmjs.com/package/@rn-components-kit/switch)

[English](./README.md) | 中文

开关选择器，支持以下特性:

- 自定义颜色
- 自定义大小
- 两种风格: `cupertino`和`material`

## 使用

```bash
npm install @rn-components-kit/switch --save
```

|预览|代码|
|------------|:---------:|
|<img width="375" src="./preview/various-sizes-switch.png"/>|[Demo1 Code](./demos/Demo1.js)|
|<img width="375" src="./preview/various-colors-switch.png"/>|[Demo2 Code](./demos/Demo2.js)|
|<img width="375" src="./preview/cupertino-vs-material-switch.png"/>|[Demo3 Code](./demos/Demo3.js)|
|<img width="375" src="./preview/enabled-vs-disabled-switch.gif"/>|[Demo4 Code](./demos/Demo4.js)|
|<img width="375" src="./preview/switch-value-change-callback.gif"/>|[Demo5 Code](./demos/Demo5.js)|

## Props

- [`style`](#style)
- [`type`](#type)
- [`value`](#value)
- [`disabled`](#disabled)
- [`width`](#width)
- [`height`](#height)
- [`thumbRadius`](#thumbRadius)
- [`thumbColor`](#thumbColor)
- [`trackOnColor`](#trackOnColor)
- [`trackOffColor`](#trackOffColor)
- [`onValueChange`](#onValueChange)

## 文档

### Props

#### `style`

自定义样式

|类型|必填|默认值|
|----|--------|-------|
|object|否|-|

#### `type`

两种风格(IOS的`cupertino`风格和Android的`material`风格)

|类型|必填|默认值|
|----|--------|-------|
|枚举值(`'cupertino'`, `'material'`)|否|'cupertino'|

#### `value`

switch开关初始时是否打开

|类型|必填|默认值|
|----|--------|-------|
|boolean|否|false|

#### `disabled`

switch开关是否禁用

|类型|必填|默认值|
|----|--------|-------|
|boolean|否|false|

#### `width`

switch开关的宽度

|类型|必填|默认值|
|----|--------|-------|
|number|否|40|

#### `height`

switch开关中`轨道`的高度

|类型|必填|默认值|
|----|--------|-------|
|number|否|20|

#### `thumbRadius`

switch开关中`圆形按钮`的半径

|类型|必填|默认值|
|----|--------|-------|
|number|否|8|

#### `thumbColor`

switch开关中`圆形按钮`的颜色

|类型|必填|默认值|
|----|--------|-------|
|string|否|'#FFF'|

#### `trackOnColor`

switch开关处于`打开`状态时，`轨道`的颜色

|类型|必填|默认值|
|----|--------|-------|
|string|否|'#79D472'|

#### `trackOffColor`

switch开关处于`关闭`状态时，`轨道`的颜色

|类型|必填|默认值|
|----|--------|-------|
|string|否|'#CCC'|

#### `onValueChange`

```js
(value: boolean) => void
```

switch开关状态改变时的回调函数

|类型|必填|默认值|
|----|--------|-------|
|function|否|() => {}|
