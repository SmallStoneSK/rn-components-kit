# DeckSwiper

[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/deck-swiper.svg)](https://www.npmjs.com/package/@rn-components-kit/deck-swiper)

[English](./README.md) | 中文

Deck Swiper helps you evaluate one option at a time, instead of selecting from a set of options.

## How to use

```bash
npm install @rn-components-kit/deck-swiper --save
```

|Preview|Code|
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

Allow you to customizr style

|Type|Required|Default|
|----|--------|-------|
|object|no|-|

#### `data`

Data source of cards

|Type|Required|Default|
|----|--------|-------|
|T[]|yes|-|

#### `cardWidth`

Width of card (it is important to help calculate animation)

|Type|Required|Default|
|----|--------|-------|
|number|yes|-|

#### `cardHeight`

Height of card (it is important to help calculate animation)

|Type|Required|Default|
|----|--------|-------|
|number|yes|-|

#### `renderCard`

```js
(params: {item: T, index: number}) => React.ReactElement | null
```

Takes an item from data and renders it into the swiper

|Type|Required|Default|
|----|--------|-------|
|function|yes|-|

#### `renderBottom`

```js
() => React.ReactElement | null
```

When all cards are swiped, it will be called and returns bottom layer component

|Type|Required|Default|
|----|--------|-------|
|function|no|-|

#### `onSwipeLeft`

```js
(from: number, to: number) => void
```

A callback will be triggered when card is swiped left

|Type|Required|Default|
|----|--------|-------|
|function|no|() => {}|

#### `onSwipeRight`

```js
(from: number, to: number) => void
```

A callback will be triggered when card is swiped right

|Type|Required|Default|
|----|--------|-------|
|function|no|() => {}|

#### `onBeginDragging`

```js
() => void
```

A callback will be triggered when you begin to drag DeckSwiper

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

### Methods

#### `prev`

```js
prev()
```

Swipes to previous card

#### `next`

```js
next()
```

Swipes to next card
