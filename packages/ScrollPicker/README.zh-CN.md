# ScrollPicker

[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/scroll-picker.svg)](https://www.npmjs.com/package/@rn-components-kit/scroll-picker)

[English](./README.md) | 中文

滚动选择器，支持以下特性：

- 抹平`Android`和`iOS`平台的交互差异
- 支持多项选择器
- 支持级联选择
- `ScrollPicker.Item`支持自定义选项内容

## 使用

```bash
npm install @rn-components-kit/scroll-picker --save
```

|预览|代码|
|------------|:---------:|
|<img width="375" src="./preview/basic-usage.gif"/>|[Demo1 Code](./demos/Demo1.js)|
|<img width="375" src="./preview/cascading.gif"/>|[Demo2 Code](./demos/Demo2.js)|
|<img width="375" src="./preview/customize-option-content.gif"/>|[Demo3 Code](./demos/Demo3.js)|

## Props

- [`style`](#style)
- [`itemHeight`](#itemHeight)
- [`onValueChange`](#onValueChange)

## Reference

### Props

#### `style`

自定义样式

|类型|必填|默认值|
|----|--------|-------|
|object|否|-|

#### `itemHeight`

`ScrollPicker.Item`中的每一项高度

|类型|必填|默认值|
|----|--------|-------|
|number|否|30|

#### `onValueChange`

```js
(value: {[key: string]: any}) => void;
```

当其子项ScrollPicker.Item's的选中项发生变化时，会触发该回调

|类型|必填|默认值|
|----|--------|-------|
|function|否|() => {}|

### Props for ScrollPicker.Item

- [`id`](#id)
- [`flex`](#flex)
- [`data`](#data)
- [`defaultValue`](#defaultValue)
- [`renderItem`](#renderItem)

#### `id`

`ScrollPicker`中的唯一标识符

|类型|必填|默认值|
|----|--------|-------|
|string|是|-|

#### `flex`

在容器中所占的比例

|类型|必填|默认值|
|----|--------|-------|
|number|否|1|

#### `data`

选项的数据源

|类型|必填|默认值|
|----|--------|-------|
|T[]|是|-|

#### `defaultValue`

默认值，用于指定初始时选中某一项（必须是`data`中的一项，如果不是则默认选中`data`第一项）

|类型|必填|默认值|
|----|--------|-------|
|T|否|data[0]|

#### `renderItem`

```js
(params: {item: T, index: number}) => React.ReactElement;
```

自定义选项内容

|类型|必填|默认值|
|----|--------|-------|
|function|是|-|
