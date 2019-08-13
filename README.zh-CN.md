# rn-components-kit

[English](./README.md) | 中文

常用React Native组件库。

## 快速上手

### 安装

你可以通过下面的命令安装`rn-components-kit`:

```bash
npm install rn-components-kit --save
```

```js
import React from 'react';
import {Badge} from ' @rn-components-kit/badge';

const TestComponent = () => <Badge/>;
```

### 按需加载

上述的方法将会把所有的组件打入进`bundle`内，即使你没有用到所有的组件。如果你想减少包大小，你可以这样引入：

```bash
npm install @rn-components-kit/badge --save
```

```js
import React from 'react';
import {Badge} from ' @rn-components-kit/badge';

const TestComponent = () => <Badge/>;
```

事实上，我们也推荐你使用这种方式引入组件。

### 运行示例

我们创建了一个`app`专门用来演示每个组件的使用方法以及运行效果，你可以点击[这里](./example)查看示例代码。如果你想运行这个例子，你需要先下载本仓库到本地。

```bash
git clone https://github.com/SmallStoneSK/rn-components-kit.git

npm install

# for iOS
react-native run-ios

# for android
react-native run-android
```

以下是`app`运行示例的截图

<div>
  <img width="19%" src="./screenshots/app.png"/>
  <img width="19%" src="./screenshots/badge.png"/>
  <img width="19%" src="./screenshots/button.png"/>
  <img width="19%" src="./screenshots/carousel.png"/>
  <img width="19%" src="./screenshots/checkbox.png"/>
  <img width="19%" src="./screenshots/deck-swiper.png"/>
  <img width="19%" src="./screenshots/divider.png"/>
  <img width="19%" src="./screenshots/icon.png"/>
  <img width="19%" src="./screenshots/progress.png"/>
  <img width="19%" src="./screenshots/radio.png"/>
  <img width="19%" src="./screenshots/rating.png"/>
  <img width="19%" src="./screenshots/scroll-picker.png"/>
  <img width="19%" src="./screenshots/skeleton.png"/>
  <img width="19%" src="./screenshots/slider.png"/>
  <img width="19%" src="./screenshots/spin.png"/>
  <img width="19%" src="./screenshots/swipe-out.png"/>
  <img width="19%" src="./screenshots/switch.png"/>
  <img width="19%" src="./screenshots/tag.png"/>
  <img width="19%" src="./screenshots/tooltip.png"/>
</div>

## 组件库

|组件|链接|版本|
|---|---|----|
|badge|[文档](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Badge/README.zh-CN.md)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/badge.svg)](https://www.npmjs.com/package/@rn-components-kit/badge)|
|button|[文档](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Button/README.zh-CN.md)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/button.svg)](https://www.npmjs.com/package/@rn-components-kit/button)|
|carousel|[文档](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Carousel/README.zh-CN.md)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/carousel.svg)](https://www.npmjs.com/package/@rn-components-kit/carousel)|
|checkbox|[文档](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/CheckBox/README.zh-CN.md)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/checkbox.svg)](https://www.npmjs.com/package/@rn-components-kit/checkbox)|
|deck-swiper|[文档](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/DeckSwiper/README.zh-CN.md)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/deck-swiper.svg)](https://www.npmjs.com/package/@rn-components-kit/deck-swiper)|
|divider|[文档](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Divider/README.zh-CN.md)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/divider.svg)](https://www.npmjs.com/package/@rn-components-kit/divider)|
|icon|[文档](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Icon/README.zh-CN.md)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/icon.svg)](https://www.npmjs.com/package/@rn-components-kit/icon)|
|progress|[文档](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Progress/README.zh-CN.md)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/progress.svg)](https://www.npmjs.com/package/@rn-components-kit/progress)|
|radio|[文档](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Radio/README.zh-CN.md)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/radio.svg)](https://www.npmjs.com/package/@rn-components-kit/radio)|
|rating|[文档](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Rating/README.zh-CN.md)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/rating.svg)](https://www.npmjs.com/package/@rn-components-kit/rating)|
|scroll-picker|[文档](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/ScrollPicker/README.zh-CN.md)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/scroll-picker.svg)](https://www.npmjs.com/package/@rn-components-kit/scroll-picker)|
|skeleton|[文档](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Skeleton/README.zh-CN.md)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/skeleton.svg)](https://www.npmjs.com/package/@rn-components-kit/skeleton)|
|slider|[文档](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Slider/README.zh-CN.md)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/slider.svg)](https://www.npmjs.com/package/@rn-components-kit/slider)|
|spin|[文档](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Spin/README.zh-CN.md)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/spin.svg)](https://www.npmjs.com/package/@rn-components-kit/spin)|
|swipe-out|[文档](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/SwipeOut/README.zh-CN.md)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/swipe-out.svg)](https://www.npmjs.com/package/@rn-components-kit/swipe-out)|
|switch|[文档](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Switch/README.zh-CN.md)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/switch.svg)](https://www.npmjs.com/package/@rn-components-kit/switch)|
|tag|[文档](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Tag/README.zh-CN.md)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/tag.svg)](https://www.npmjs.com/package/@rn-components-kit/tag)|
|text|[文档](https://github.com/SmallStoneSK/rn-components-kit/blob/master/packages/Text/README.zh-CN.md)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/text.svg)](https://www.npmjs.com/package/@rn-components-kit/text)|
|tooltip|[文档](https://github.com/SmallStoneSK/rn-components-kit/blob/master/packages/Tooltip/README.zh-CN.md)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/tooltip.svg)](https://www.npmjs.com/package/@rn-components-kit/tooltip)|

## 常见问题

**问:** 如果你遇到诸如`No component found for view with name "ARTXXX"`之类的报错，那是因为你的项目还没有集成`ART`模块。

**答:** 你需要：

1. 使用Xcode打开项目下的ios工程，`Libraries` -> `Add Files to` -> `node_modules/react-native/Libraries/ART/ART.xcodeproj`。
2. 点击项目根目录，找到`Linked Frameworks and Libraries`，点击`+`选择`libART.a`，然后重新编译工程。
3. 重新编译完成后，重新运行命令`react-native run-ios/android`，重启项目。

## License

[MIT LICENSE](./LICENSE)
