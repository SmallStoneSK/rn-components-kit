# Tooltip

[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/tooltip.svg)](https://www.npmjs.com/package/@rn-components-kit/tooltip)

[English](./README.md) | 中文

当用户点击某个元素，展示一个气泡框，支持以下特性：

- 气泡框支持`top`和`bottom`两个方向
- 完全自定义气泡框内容

## 使用

```bash
npm install @rn-components-kit/tooltip --save
```

|预览|代码|
|------------|:---------:|
|<img width="375" src="./preview/tooltip-usages.gif"/>|[Demo1 Code](./demos/Demo1.js)|

## Props

- [`style`](#style)
- [`popup`](#popup)
- [`popupContainerStyle`](#popupContainerStyle)
- [`popupTextStyle`](#popupTextStyle)
- [`showCaret`](#showCaret)
- [`backgroundColor`](#backgroundColor)
- [`overlayColor`](#overlayColor)
- [`placement`](#placement)
- [`onOpen`](#o否pen)
- [`onClose`](#onClose)

## Methods

- [`open`](#open)
- [`close`](#close)

## 文档

### Props

#### `style`

自定义样式

|类型|必填|默认值|
|----|--------|-------|
|object|否|-|

#### `popup`

当元素被点击时，展示的弹出气泡框内容。如果传的是一个`string`，气泡框内容将会用`Text`组件包裹该字符串。你也可以传一个`ReactElement`来完全自定义气泡框中的内容

|类型|必填|默认值|
|----|--------|-------|
|string \| ReactElement|是|-|

#### `popupContainerStyle`

自定义弹出气泡框容器样式

|类型|必填|默认值|
|----|--------|-------|
|object|否|-|

#### `popupTextStyle`

自定义弹出气泡框文字样式（仅当`popup`传的是一个`string`时生效）

|类型|必填|默认值|
|----|--------|-------|
|object|否|-|

#### `showCaret`

是否展示小三角形

|类型|必填|默认值|
|----|--------|-------|
|boolean|否|true|

#### `backgroundColor`

气泡框的背景颜色（如果showCaret是true，这将也是小三角形的背景颜色）

|类型|必填|默认值|
|----|--------|-------|
|string|否|'rgba(0,0,0,.8)'|

#### `overlayColor`

蒙版浮层背景颜色（可以通过rgba来控制蒙版浮层的透明度）

|类型|必填|默认值|
|----|--------|-------|
|string|否|'rgba(0,0,0,.1)'|

#### `placement`

控制气泡框出现的方向

|类型|必填|默认值|
|----|--------|-------|
|enum(`'top'`, `'bottom'`)|否|'bottom'|

#### `onOpen`

```js
() => void
```

当气泡框弹出时触发的回调函数

|类型|必填|默认值|
|----|--------|-------|
|function|否|() => {}|

#### `onClose`

```js
() => void
```

当气泡框消散时触发的回调函数

|类型|必填|默认值|
|----|--------|-------|
|function|否|() => {}|

### Methods

#### `open`

```js
open()
```

一般情况下，Tooltip组件已经接管了气泡框打开/关闭的工作。但是某些场景下，你也可以手动调用这个方法来打开气泡框

#### `close`

```js
close()
```

一般情况下，Tooltip组件已经接管了气泡框打开/关闭的工作。但是某些场景下，你也可以手动调用这个方法来关闭气泡框
