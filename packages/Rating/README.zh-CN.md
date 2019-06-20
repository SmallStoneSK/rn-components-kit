# Rating

[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/rating.svg)](https://www.npmjs.com/package/@rn-components-kit/rating)

[English](./README.md) | 中文

评分组件，支持以下特性：

- 支持`点选`和`滑动`操作进行评分
- 自定义图标样式（包括`类型`，`颜色`，`大小`）
- 支持不同的滑动步长（例如：0.1/0.2/0.5/1）

## 使用

```bash
npm install @rn-components-kit/rating --save
```

|预览|代码|
|------------|:---------:|
|<img width="375" src="./preview/basic-usage.gif"/>|[Demo1 Code](./demos/Demo1.js)|
|<img width="375" src="./preview/customized-icon.gif"/>|[Demo2 Code](./demos/Demo2.js)|
|<img width="375" src="./preview/different-step.gif"/>|[Demo3 Code](./demos/Demo3.js)|

## Props

- [`style`](#style)
- [`step`](#step)
- [`total`](#total)
- [`value`](#value)
- [`iconGap`](#iconGap)
- [`iconSize`](#iconSize)
- [`disabled`](#disabled)
- [`activeIconType`](#activeIconType)
- [`activeIconColor`](#activeIconColor)
- [`inActiveIconType`](#inActiveIconType)
- [`inActiveIconColor`](#inActiveIconColor)
- [`onValueChange`](#onValueChange)

## 文档

### Props

#### `style`

自定义样式

|类型|必填|默认值|
|----|--------|-------|
|object|否|-|

#### `step`

评分组件每滑动一格增长的分数

|类型|必填|默认值|
|----|--------|-------|
|枚举值(`0.1`, `0.2`, `0.5`, `1`)|否|1|

#### `total`

星星总数

|类型|必填|默认值|
|----|--------|-------|
|number|否|5|

#### `value`

当前值（与高亮的星星数量相对应）

|类型|必填|默认值|
|----|--------|-------|
|number|否|0|

#### `iconGap`

星星之间的间隙距离

|类型|必填|默认值|
|----|--------|-------|
|number|否|4|

#### `iconSize`

星星的大小

|类型|必填|默认值|
|----|--------|-------|
|number|否|20|

#### `disabled`

`点选`和`滑动`评分操作是否禁用

|类型|必填|默认值|
|----|--------|-------|
|boolean|否|false|

#### `activeIconType`

高亮星星图标类型

|类型|必填|默认值|
|----|--------|-------|
|[枚举值](https://github.com/SmallStoneSK/rn-components-kit/blob/master/packages/Icon/README.zh-CN.md)|否|'star-fill'|

#### `activeIconColor`

高亮星星图标颜色

|类型|必填|默认值|
|----|--------|-------|
|string|否|'#FADB14'|

#### `inActiveIconType`

未高亮星星图标类型

|类型|必填|默认值|
|----|--------|-------|
|[枚举值](https://github.com/SmallStoneSK/rn-components-kit/blob/master/packages/Icon/README.zh-CN.md)|否|'star-fill'|

#### `inActiveIconColor`

未高亮星星图标颜色

|类型|必填|默认值|
|----|--------|-------|
|string|否|'#E8E8E8'|

#### `onValueChange`

```js
(value: number) => void
```

当评分值发生变化时，会触发该回调函数

|类型|必填|默认值|
|----|--------|-------|
|function|否|() => {}|
