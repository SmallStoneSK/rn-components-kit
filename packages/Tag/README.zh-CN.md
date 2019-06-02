# Tag

[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/tag.svg)](https://www.npmjs.com/package/@rn-components-kit/tag)

[English](./README.md) | 中文

进行标记和分类的小标签。支持以下特性：

- 自定义颜色
- 支持两种风格：`outline`和`solid`
- 可关闭及其关闭事件回调函数

## 使用

```bash
npm install @rn-components-kit/tag --save
```

|预览|代码|
|------------|:---------:|
|<img width="375" src="./preview/colorful-outline-tags.png"/>|[Demo1 Code](./demos/Demo1.js)|
|<img width="375" src="./preview/colorful-solid-tags.png"/>|[Demo2 Code](./demos/Demo2.js)|
|<img width="375" src="./preview/closable-tags.gif"/>|[Demo3 Code](./demos/Demo3.js)|

## Props

- [`style`](#style)
- [`text`](#text)
- [`type`](#type)
- [`color`](#color)
- [`fontSize`](#fontSize)
- [`paddingHorizontal`](#paddingHorizontal)
- [`paddingVertical`](#paddingVertical)
- [`borderRadius`](#borderRadius)
- [`borderColor`](#borderColor)
- [`animatedWhenDisappear`](#animatedWhenDisappear)
- [`animationDuration`](#animationDuration)
- [`closable`](#closable)
- [`onClose`](#onClose)

## 文档

### Props

#### `style`

自定义样式

|类型|必填|默认值|
|----|--------|-------|
|object|否|-|

#### `text`

标签内显示的文字

|类型|必填|默认值|
|----|--------|-------|
|string|是|''|

#### `type`

标签风格 (outline 或 solid)

|类型|必填|默认值|
|----|--------|-------|
|枚举值(`'outline'`, `'solid'`)|否|'outline'|

#### `color`

标签颜色

|类型|必填|默认值|
|----|--------|-------|
|string|否|'#333'|

#### `fontSize`

标签内文本字号大小

|类型|必填|默认值|
|----|--------|-------|
|number|否|14|

#### `paddingHorizontal`

水平方向上内边距值

|类型|必填|默认值|
|----|--------|-------|
|number|否|4|

#### `paddingVertical`

垂直方向上内边距值

|类型|必填|默认值|
|----|--------|-------|
|number|否|1|

#### `borderRadius`

标签边框圆角值

|类型|必填|默认值|
|----|--------|-------|
|number|否|3|

#### `borderColor`

标签边框颜色。如果`borderColor`没有设置，那么默认和`color`保持一致

|类型|必填|默认值|
|----|--------|-------|
|string|否|-|

#### `animatedWhenDisappear`

关闭标签时，是否启用动画

|类型|必填|默认值|
|----|--------|-------|
|boolean|否|false|

#### `animationDuration`

关闭标签动画持续时长(单位: ms)

|类型|必填|默认值|
|----|--------|-------|
|number|否|300|

#### `closable`

标签是否可关闭

|类型|必填|默认值|
|----|--------|-------|
|boolean|否|false|

#### `onClose`

```js
(text: string) => void
```

标签关闭时触发的回调函数

|类型|必填|默认值|
|----|--------|-------|
|function|否|() => {}|
