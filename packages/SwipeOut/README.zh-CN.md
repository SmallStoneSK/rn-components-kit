# SwipeOut

[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/swipe-out.svg)](https://www.npmjs.com/package/@rn-components-kit/swipe-out)

[English](./README.md) | 中文

iOS样式的滑动隐藏按钮组件，支持以下特性：

- 支持`左`和`右`两个方向滑出
- 隐藏部分支持多个按钮配置
- 隐藏部分完全自定义

## 使用

```bash
npm install @rn-components-kit/swipe-out --save
```

|预览|代码|
|------------|:---------:|
|<img width="375" src="./preview/swipe-out-from-left-and-right.gif"/>|[Demo1 Code](./demos/Demo1.js)|
|<img width="375" src="./preview/multiple-hidden-buttons.gif"/>|[Demo2 Code](./demos/Demo2.js)|
|<img width="375" src="./preview/customized-hidden-part.gif"/>|[Demo3 Code](./demos/Demo3.js)|

## Props

- [`style`](#style)
- [`left`](#left)
- [`right`](#right)
- [`onBeginDragging`](#onBeginDragging)
- [`onEndDragging`](#onEndDragging)

## 文档

### Props

#### `style`

自定义样式

|类型|必填|默认值|
|----|--------|-------|
|object|否|-|

#### `left`

左边的隐藏部分配置，支持以下几种：

1. function[() => React.ReactElement]: 完全自定义隐藏部分
2. object[Option]: 内置按钮样式，你只需指定`title`，`color`和`onPress`几个值即可
3. array[Option[]]: 多按钮

**Option:**

- title[string]: 按钮中显示的文案
- color[string]: 按钮的背景颜色
- onPress[function]: 点击按钮时的回调函数

|类型|必填|默认值|
|----|--------|-------|
|() => React.ReactElement \| Option \| Option[] \| null|否|-|

#### `right`

右边的隐藏部分配置（同上述的left）

|类型|必填|默认值|
|----|--------|-------|
|() => React.ReactElement \| Option \| Option[] \| null|否|-|

#### `onBeginDragging`

```js
() => void
```

当你开始拖拽SwipeOut时触发的回调函数

|类型|必填|默认值|
|----|--------|-------|
|function|否|() => {}|

#### `onEndDragging`

```js
() => void
```

当拖拽SwipeOut动作结束时触发的回调函数

|类型|必填|默认值|
|----|--------|-------|
|function|否|() => {}|
