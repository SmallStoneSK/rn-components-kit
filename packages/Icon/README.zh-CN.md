# Icon

[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/icon.svg)](https://www.npmjs.com/package/@rn-components-kit/icon)

[English](./README.md) | 中文

语义化的矢量图形。支持以下特性:

- 自定义大小
- 自定义颜色
- 内置集成[Ant-Design Preset](https://ant.design/components/icon/)

:warning: **注意：确保你的项目已经集成了ART模块**

如果你遇到诸如`No component found for view with name "ARTXXX"`之类的报错，那是因为你的项目还没有集成`ART`模块。你需要：

1. 使用Xcode打开项目下的ios工程，`Libraries` -> `Add Files to` -> `node_modules/react-native/Libraries/ART/ART.xcodeproj`。
2. 点击项目根目录，找到`Linked Frameworks and Libraries`，点击`+`选择`libART.a`，然后重新编译工程。
3. 重新编译完成后，重新运行命令`react-native run-ios/android`，重启项目。

## 使用

```bash
npm install @rn-components-kit/icon --save
```

|预览|代码|
|------------|:---------:|
|<img width="375" src="./preview/various-sizes-icon.png"/>|[Demo1 Code](./demos/Demo1.js)|
|<img width="375" src="./preview/various-types-icon.png"/>|[Demo2 Code](./demos/Demo2.js)|
|<img width="375" src="./preview/various-colors-icon.png"/>|[Demo3 Code](./demos/Demo3.js)|

## Props

- [`style`](#style)
- [`color`](#color)
- [`size`](#size)
- [`type`](#type)

## 文档

### Props

#### `style`

自定义样式

|类型|必填|默认值|
|----|--------|-------|
|object|否|-|

#### `color`

图标颜色

|类型|必填|默认值|
|----|--------|-------|
|string|否|'#333'|

#### `size`

图标大小

|类型|必填|默认值|
|----|--------|-------|
|number|否|15|

#### `type`

图标类型, 内置集成[Ant-Design Preset](https://ant.design/components/icon/)

|类型|必填|默认值|
|----|--------|-------|
|[枚举值](#图标类型)|是|-|

## 图标类型

![Icon Types](./preview/iconTypes.png)