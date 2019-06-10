# SwipeOut

[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/swipe-out.svg)](https://www.npmjs.com/package/@rn-components-kit/swipe-out)

English | [中文](./README.zh-CN.md)

iOS-style swipe-out buttons that appear from behind a component. It supports the following features:

- `left` and `right` two directions
- multiple hidden buttons
- fully customized hidden part

## How to use

```bash
npm install @rn-components-kit/swipe-out --save
```

|Preview|Code|
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

## Reference

### Props

#### `style`

Allow you to customizr style

|Type|Required|Default|
|----|--------|-------|
|object|no|-|

#### `left`

The config for left hidden part. It supports followings:

1. function[() => React.ReactElement]: allows you to fully customize the hidden component
2. object[Option]: a pre-setted style for button, you need to specify `title`, `color` and `onPress`
3. array[Option[]]: multiple buttons

**Option:**

- title[string]: text to display in button
- color[string]: background color of button
- onPress[function]: callback will be triggered when pressing the button

|Type|Required|Default|
|----|--------|-------|
|() => React.ReactElement \| Option \| Option[] \| null|no|-|

#### `right`

The config for right hidden part (same to left)

|Type|Required|Default|
|----|--------|-------|
|() => React.ReactElement \| Option \| Option[] \| null|no|-|

#### `onBeginDragging`

```js
() => void
```

A callback will be triggered when you begin to drag SwipeOut

|Type|Required|Default|
|----|--------|-------|
|function|no|() => {}|

#### `onEndDragging`

```js
() => void
```

A callback will be triggered when dragging operation ends

|Type|Required|Default|
|----|--------|-------|
|function|no|() => {}|
