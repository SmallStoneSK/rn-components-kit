# Divider

[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/divider.svg)](https://www.npmjs.com/package/@rn-components-kit/divider)

[English](./README.md) | 中文

分割线组件，支持两种方向: `horizontal` 和 `vertical`.

## 使用

```bash
npm install @rn-components-kit/divider --save
```

|预览|代码|
|------------|:---------:|
|<img width="375" src="./preview/horizontal-divider.png"/>|[Demo1 Code](./demos/Demo1.js)|
|<img width="375" src="./preview/vertical-divider.png"/>|[Demo2 Code](./demos/Demo2.js)|

## Props

- [`style`](#style)
- [`color`](#color)
- [`orientation`](#orientation)
- [`margin`](#margin)
- [`padding`](#padding)

---

## 文档

### Props

#### `style`

自定义样式

|类型|必填|默认值|
|----|--------|-------|
|object|否|-|

#### `color`

分割线颜色

|类型|必填|默认值|
|----|--------|-------|
|string|否|'#DFDFDF'|

#### `orientation`

分割线方向，一共支持水平/垂直两种

|类型|必填|默认值|
|----|--------|-------|
|enum(`'horizontal'`, `'vertical'`)|否|'horizontal'|

#### `margin`

副轴方向上与两边的外边距

|类型|必填|默认值|
|----|--------|-------|
|number|否|0|

#### `padding`

主轴方向上与两边的内边距

|类型|必填|默认值|
|----|--------|-------|
|number|否|0|