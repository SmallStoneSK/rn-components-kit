# rn-components-kit

English | [中文](./README.zh-CN.md)

A series of commonly used react-native components.

## Quick Start

### Installation

You can install `rn-components-kit` by following:

```bash
npm install rn-components-kit --save
```

```js
import React from 'react';
import {Badge} from ' @rn-components-kit/badge';

const TestComponent = () => <Badge/>;
```

### Import On Demand

The above usage would import whole components into bundle even if you have not use all of them. However, if you want to import component on demand, you can do like following:

```bash
npm install @rn-components-kit/badge --save
```

```js
import React from 'react';
import {Badge} from ' @rn-components-kit/badge';

const TestComponent = () => <Badge/>;
```

In fact, we recommend you to adopt this usage.

### Running Examples

We create an app to provide many examples for each component, you can look at them at [here](./example). If you want to run it, you should clone this repo at first.

```bash
git clone https://github.com/SmallStoneSK/rn-components-kit.git

npm install

# for iOS
react-native run-ios

# for android
react-native run-android
```

Following are screenshots for each component's examples:

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

## Components

|component|Link|version|
|---------|----|-------|
|badge|[Document](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Badge)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/badge.svg)](https://www.npmjs.com/package/@rn-components-kit/badge)|
|button|[Document](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Button)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/button.svg)](https://www.npmjs.com/package/@rn-components-kit/button)|
|carousel|[Document](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Carousel)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/carousel.svg)](https://www.npmjs.com/package/@rn-components-kit/carousel)|
|checkbox|[Document](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/CheckBox)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/checkbox.svg)](https://www.npmjs.com/package/@rn-components-kit/checkbox)|
|deck-swiper|[Document](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/DeckSwiper)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/deck-swiper.svg)](https://www.npmjs.com/package/@rn-components-kit/deck-swiper)|
|divider|[Document](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Divider)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/divider.svg)](https://www.npmjs.com/package/@rn-components-kit/divider)|
|icon|[Document](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Icon)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/icon.svg)](https://www.npmjs.com/package/@rn-components-kit/icon)|
|progress|[Document](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Progress)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/progress.svg)](https://www.npmjs.com/package/@rn-components-kit/progress)|
|radio|[Document](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Radio)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/radio.svg)](https://www.npmjs.com/package/@rn-components-kit/radio)|
|rating|[Document](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Rating)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/rating.svg)](https://www.npmjs.com/package/@rn-components-kit/rating)|
|scroll-picker|[Document](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/ScrollPicker)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/scroll-picker.svg)](https://www.npmjs.com/package/@rn-components-kit/scroll-picker)|
|skeleton|[Document](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Skeleton)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/skeleton.svg)](https://www.npmjs.com/package/@rn-components-kit/skeleton)|
|slider|[Document](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Slider)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/slider.svg)](https://www.npmjs.com/package/@rn-components-kit/slider)|
|spin|[Document](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Spin)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/spin.svg)](https://www.npmjs.com/package/@rn-components-kit/spin)|
|swipe-out|[Document](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/SwipeOut)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/swipe-out.svg)](https://www.npmjs.com/package/@rn-components-kit/swipe-out)|
|switch|[Document](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Switch)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/switch.svg)](https://www.npmjs.com/package/@rn-components-kit/switch)|
|tag|[Document](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Tag)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/tag.svg)](https://www.npmjs.com/package/@rn-components-kit/tag)|
|text|[Document](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Text)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/text.svg)](https://www.npmjs.com/package/@rn-components-kit/text)|
|tooltip|[Document](https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Tooltip)|[![NPM version](https://img.shields.io/npm/v/@rn-components-kit/tooltip.svg)](https://www.npmjs.com/package/@rn-components-kit/tooltip)|

## FAQ

**Q:** If you encounter the problem like **No component found for view with name "ARTXXX"**, that's because the `ART` module has not been integrated in your project.

**A:** You should:

1. Use Xcode to open your ios project, `Libraries` -> `Add Files to` -> `node_modules/react-native/Libraries/ART/ART.xcodeproj`.
2. Click the root of project, find `Linked Frameworks and Libraries`, click `+` to add `libART.a` and rebuild the project.
3. After having rebuilded, re-run command `react-native run-ios/android` to start your project.


## License

[MIT LICENSE](./LICENSE)
