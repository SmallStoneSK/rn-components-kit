# Skeleton

[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/skeleton.svg)](https://www.npmjs.com/package/@rn-components-kit/skeleton)

English | [中文](./README.zh-CN.md)

Provide a placeholder while you wait for content to load, or to visualise content that doesn't exist yet. It supports the following features:

- `avatar`, `title`, `paragraph` three parts all can be customized
- HOC component `withSkeleton` for you to fully customize skeleton

:warning: **NOTE**

If you use `withSkeleton` with decorator syntax, you should also install `@babel/plugin-proposal-decorators`.

## How to use

```bash
npm install @rn-components-kit/skeleton --save
```

|Preview|Code|
|------------|:---------:|
|<img width="375" src="./preview/default-skeleton.gif"/>|[Demo1 Code](./demos/Demo1.js)|
|<img width="375" src="./preview/customize-skeleton.gif"/>|[Demo2 Code](./demos/Demo2.js)|

## Props

- [`style`](#style)
- [`avatar`](#avatar)
- [`title`](#title)
- [`paragraph`](#paragraph)

## Reference

### Props

#### `style`

Allows you to customize style

|Type|Required|Default|
|----|--------|-------|
|object|no|-|

#### `avatar`

Show avatar placeholder (if false, avatar placeholder will not be shown)

|Type|Required|Default|
|----|--------|-------|
|boolean \| `AvatarProps`|no|true|

**AvatarProps**

- **style** [object]: Allow you to customize avatar module's style 
- **size** [number]: The width and height of avatar. (default 20)
- **shape** [enum(`'circle'`, `'square'`)]: The shape of avatar. (default 'circle')

#### `title`

Show title placeholder (if false, title placeholder will not be shown)

|Type|Required|Default|
|----|--------|-------|
|boolean \| `TitleProps`|no|true|

**TitleProps**

- **style** [object]: Allow you to customize title block's style
- **width** [number | string]: The width of title block
- **height** [number]: The height of title block. (default 15)

#### `paragraph`

Show paragraph placeholder (if false, title paragraph will not be shown)

|Type|Required|Default|
|----|--------|-------|
|boolean \| `ParagraphProps`|no|true|

**ParagraphProps**

- **style** [object]: Allow you to customize paragraph module's style
- **rows** [number]: The count of paragraph block lines. (default 3)
- **widths** [Array<number | string>]: An array of each block's width (if undefined or null, default 100%)
- **heights** [Array<number>]: An array of each block's height (if undefined or null, default 15)

## Props for withSkeleton

- [`options`](#options)

## Reference for withSkeleton

#### `options`

Config for skeleton

|Type|Required|Default|
|----|--------|-------|
|`withSkeletonOptions`|no|{duraion: 1000, minOpacity: 0.2, maxOpacity: 1}|

**withSkeletonOptions**

- **duraion** [number]: How long a loop animation lasts (default: 1000)
- **minOpacity** [number]: The minimum opacity value during animation (default: 0.2)
- **maxOpacity** [number]: The maximum opacity value during animation (default: 1)
