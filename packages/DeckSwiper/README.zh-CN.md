# DeckSwiper

[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/deck-swiper.svg)](https://www.npmjs.com/package/@rn-components-kit/deck-swiper)

English | [中文](./README.zh-CN.md)

DeckSwiper让你一次评估一个选项，而不是从一组选项中进行选择。

## 使用

```bash
npm install @rn-components-kit/deck-swiper --save
```

|预览|代码|
|------------|:---------:|
|<img width="375" src="./preview/basic-usage.gif"/>|[Demo1 Code](./demos/Demo1.js)|

## Props

- [`style`](#style)
- [`data`](#data)
- [`cardWidth`](#cardWidth)
- [`cardHeight`](#cardHeight)
- [`renderCard`](#renderCard)
- [`renderBottom`](#renderBottom)
- [`onSwipeLeft`](#onSwipeLeft)
- [`onSwipeRight`](#onSwipeRight)
- [`onBeginDragging`](#onBeginDragging)
- [`onEndDragging`](#onEndDragging)

## Methods

- [`prev`](#prev)
- [`next`](#next)

## Reference

### Props

#### `style`

自定义样式

|类型|必填|默认值|
|----|--------|-------|
|object|否|-|

#### `data`

卡片的数据源

|类型|必填|默认值|
|----|--------|-------|
|T[]|是|-|

#### `cardWidth`

卡片宽度（对于动画的计算十分重要）

|类型|必填|默认值|
|----|--------|-------|
|number|是|-|

#### `cardHeight`

卡片高度（对于动画的计算十分重要）

|类型|必填|默认值|
|----|--------|-------|
|number|是|-|

#### `renderCard`

```js
(params: {item: T, index: number}) => React.ReactElement | null
```

从data数据源中取出数据，调用该方法渲染卡片

|类型|必填|默认值|
|----|--------|-------|
|function|是|-|

#### `renderBottom`

```js
() => React.ReactElement | null
```

当所有卡片都被划完时，该方法会被调用并返回一个最底下的组件

|类型|必填|默认值|
|----|--------|-------|
|function|否|-|

#### `onSwipeLeft`

```js
(from: number, to: number) => void
```

当卡片从左侧划出时触发的回调函数

|类型|必填|默认值|
|----|--------|-------|
|function|否|() => {}|

#### `onSwipeRight`

```js
(from: number, to: number) => void
```

当卡片从右侧划出时触发的回调函数

|类型|必填|默认值|
|----|--------|-------|
|function|否|() => {}|

#### `onBeginDragging`

```js
() => void
```

当开始拖拽DeckSwiper时触发的回调函数

|类型|必填|默认值|
|----|--------|-------|
|function|否|() => {}|

#### `onEndDragging`

```js
() => void
```

当拖拽DeckSwiper动作结束时触发的回调函数

|类型|必填|默认值|
|----|--------|-------|
|function|否|() => {}|

### Methods

#### `prev`

```js
prev()
```

划至上一个卡片

#### `next`

```js
next()
```

划至下一个卡片
