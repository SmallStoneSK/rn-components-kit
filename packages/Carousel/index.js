import * as React from 'react';

import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

export class Carousel extends React.PureComponent {

  static defaultProps = {
    initialIndex: 0,
    draggable: true,
    vertical: false,
    itemWidth: 0,
    itemHeight: 0,
    gap: 0,
    loop: false,
    cloneCount: 3,
    centerModeEnabled: false,
    autoPlay: false,
    autoPlayDelay: 3000,
    showPagination: false,
    onIndexChange: () => {}
  };

  initialized = false;
  autoPlayTimer = null;
  state = {
    curIndex: this.props.initialIndex,
    children: Helper.makeChildren(this.props)
  };

  constructor(...args) {
    super(...args);
    // check whether params are valid
    const {vertical, centerModeEnabled, width, height, itemWidth, itemHeight} = this.props;
    if(vertical && (!height || !itemHeight)) {
      console.error('Carousel error: when carousel is vertical mode, height and itemHeight must be set.');
      return;
    }
    if(!vertical && (!width || !itemWidth)) {
      console.error('Carousel error: when carousel is horizontal mode, width and itemWidth must be set.');
      return;
    }
    if(centerModeEnabled && (this.snapToInterval > (vertical ? height : width))) {
      console.error(`Carousel error: when center mode is enabled, ${vertical ? 'itemHeight' : 'itemWidth'} + gap should be smaller than carousel's ${vertical ? 'height' : 'width'}.`);
      return;
    }
  }

  componentDidMount() {
    this.enableAutoPlay();
  }

  componentWillReceiveProps(nextProps) {

    // when data changes, children should be re-generated
    if(nextProps.data !== this.props.data) {
      this.setState({children: Helper.makeChildren(nextProps)});
    }

    // [fix android bug]
    // when carousel stays at last one and children count decreases, it should scroll to last
    const maxAvailableIndex = React.Children.count(nextProps.children) - 1;
    if (this.state.curIndex > maxAvailableIndex) {
      this.setState({curIndex: maxAvailableIndex});
      this.scrollToIndex({index: maxAvailableIndex, animated: false});
    }
  }

  componentWillUnmount() {
    this.disableAutoPlay();
  }

  get snapToInterval() {
    const {vertical, itemWidth, itemHeight, gap} = this.props;
    return (vertical ? itemHeight : itemWidth) + gap;
  }

  get totalCount() {
    return React.Children.count(this.props.children);
  }

  enableAutoPlay() {
    if(this.props.autoPlay) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = setInterval(() => {
        this.scrollToNext();
      }, this.props.autoPlayDelay);
    }
  }

  disableAutoPlay() {
    if(this.props.autoPlay) {
      clearInterval(this.autoPlayTimer);
    }
  }

  updateIndex(toIndex) {
    const {curIndex} = this.state;
    const {onIndexChange} = this.props;
    toIndex = Helper.clamp(toIndex, 0, this.totalCount - 1);
    if(toIndex !== curIndex) {
      onIndexChange(curIndex, toIndex);
      this.setState({curIndex: toIndex});
    }
  }

  scrollToIndex({index, animated = false}) {

    const {loop, vertical, centerModeEnabled, cloneCount} = this.props;

    // when loop is enabled, index should be adjusted because there are clones in prev/next area
    if(loop) {
      index += cloneCount;
    }

    // When centered mode is enabled, scroll distance contains a delta value.
    let delta = 0;
    if(centerModeEnabled && loop) {
      delta = ((vertical ? this.size.height : this.size.width) - this.snapToInterval) / 2;
    }

    if(vertical) {
      const offset = index * this.snapToInterval - delta;
      this.svRef && this.svRef.scrollTo({y: offset, animated});
    } else {
      const offset = index * this.snapToInterval - delta;
      this.svRef && this.svRef.scrollTo({x: offset, animated});
    }
  }

  scrollToPrev() {
    const {curIndex} = this.state;
    const toIndex = (curIndex - 1 + this.totalCount) % this.totalCount;
    this.updateIndex(toIndex);
    this.scrollToIndex({index: this.props.loop ? (curIndex - 1) : toIndex, animated: true});
  }

  scrollToNext() {
    const {curIndex} = this.state;
    const toIndex = (curIndex + 1 + this.totalCount) % this.totalCount;
    this.updateIndex(toIndex);
    this.scrollToIndex({index: this.props.loop ? (curIndex + 1) : toIndex, animated: true});
  }

  onLayout = evt => {

    this.size = {
      width: Helper.get(evt, 'nativeEvent.layout.width', 1),
      height: Helper.get(evt, 'nativeEvent.layout.height', 1)
    };

    if(this.initialized) {
      return;
    } else {
      this.initialized = true;
    }

    const {initialIndex} = this.props;
    if(initialIndex < 0 || initialIndex > this.totalCount - 1) {
      console.error(`Carousel error: initialIndex ${initialIndex} is invalid, it should be >= 0 and <= ${this.totalCount - 1}`);
      return;
    }

    this.scrollToIndex({index: initialIndex});
  }

  onBeginDrag = () => {
    this.disableAutoPlay();
  }

  onScrollEnd = evt => {

    const {loop, vertical, centerModeEnabled, cloneCount} = this.props;
    const {x, y} = Helper.get(evt, 'nativeEvent.contentOffset', {});

    // When centered mode is enabled, scroll distance contains a delta value.
    let delta = 0;
    if(centerModeEnabled) {
      delta = ((vertical ? this.size.height : this.size.width) - this.snapToInterval) / 2;
    }

    // Interpolates current scroll value to item index
    let toIndex;
    if(vertical) {
      toIndex = Math.round((y - delta) / this.snapToInterval);
    } else {
      toIndex = Math.round((x - delta) / this.snapToInterval);
    }

    // When loop mode is enabled, there are clones of item in prev/next area,
    // so toIndex should be adjusted. On the other hand, if carousel is in prev/next
    // area (unsafe) now, it should scroll to center area (safe) after scrolling ends.
    if(loop) {
      if(toIndex < cloneCount) {
        toIndex = this.totalCount - cloneCount + toIndex;
        this.scrollToIndex({index: toIndex});
      } else if(toIndex < this.totalCount + cloneCount) {
        toIndex -= cloneCount;
      } else {
        toIndex -= this.totalCount + cloneCount;
        this.scrollToIndex({index: toIndex});
      }
    }

    this.enableAutoPlay();
    this.updateIndex(toIndex);
  }

  renderPagination() {

    // not show pagination
    if (!this.props.showPagination || this.totalCount <= 1) {
      return null;
    }

    // custom pagination style
    const {curIndex} = this.state;
    const {renderPagination} = this.props;
    if(typeof renderPagination === 'function') {
      return renderPagination({curIndex, total: this.totalCount});
    }

    // default pagination style
    const {paginationStyle, dotStyle, curDotStyle} = this.props;
    return (
      <View style={paginationStyle || styles.pagination}>
        {new Array(this.totalCount).fill(1).map((_, idx) => {
          const isCur = idx === curIndex;
          const style = [
            dotStyle || styles.dot,
            isCur && (curDotStyle || styles.curDot)
          ];
          return <View key={idx} style={style}/>;
        })}
      </View>
    );
  }

  render() {
    const {children} = this.state;
    const {style, width, height, vertical, loop, centerModeEnabled, draggable, ...rest} = this.props;
    const snapToAlignment = (centerModeEnabled && loop) ? 'center' : 'start';
    return (
      <View>
        <View style={[style, width && {width}, height && {height}]} onLayout={this.onLayout}>
          <ScrollView
            {...rest}
            ref={_ => this.svRef = _}
            horizontal={!vertical}
            decelerationRate={'fast'}
            scrollEnabled={draggable}
            snapToAlignment={snapToAlignment}
            snapToInterval={this.snapToInterval}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            onScrollBeginDrag={this.onBeginDrag}
            onMomentumScrollEnd={this.onScrollEnd}
          >
            {children}
          </ScrollView>
        </View>
        {this.renderPagination()}
      </View>
    );
  }
}

const Helper = {
  get(obj, keyChain, defaultValue) {

    if(!obj || !keyChain || !(obj instanceof Object) || (typeof keyChain !== 'string')) {
      return defaultValue;
    }

    let tmpValue = obj;
    const keys = keyChain.split('.');
    for(const key of keys) {
      if(typeof tmpValue[key] !== 'undefined') {
        tmpValue = tmpValue[key];
      } else {
        return defaultValue;
      }
    }

    return tmpValue;
  },
  clamp(val, min, max) {
    return min < max
      ? (val < min ? min : val > max ? max : val)
      : (val < max ? max : val > min ? min : val);
  },
  makeChildren(props) {

    const {loop, children, cloneCount} = props;
    const total = React.Children.count(children);

    if(total <= 0) {
      return children;
    }

    if(!loop) {
      return React.Children.map(children, (child, idx) => (
        <View key={idx} style={Helper.makeChildStyle(props, idx, total)}>
          {React.cloneElement(child)}
        </View>
      ));
    }
    
    const childrenArray = React.Children.toArray(children);
    const prev = childrenArray.slice(-cloneCount);
    const next = childrenArray.slice(0, cloneCount);
    return prev
      .concat(childrenArray, next)
      .map((child, idx) => (
        <View key={idx} style={Helper.makeChildStyle(props, idx, total)}>
          {React.cloneElement(child)}
        </View>
      ));
  },
  makeChildStyle(props, index, total) {

    const {width, height, itemWidth, itemHeight, gap, loop, vertical, centerModeEnabled} = props;

    if(
      (vertical && (!height || !itemHeight)) ||
      (!vertical && (!width || !itemWidth))
    ) {
      return null;
    }

    if(centerModeEnabled) {
      let prevDelta = 0;
      let nextDelta = 0;
      if(index === 0) {
        if(!loop) {
          if(vertical) {
            prevDelta = (height - itemHeight - gap) / 2;
          } else {
            prevDelta = (width - itemWidth - gap) / 2;
          }
        }
      } else if(index === total - 1) {
        if(!loop) {
          if(vertical) {
            nextDelta = (height - itemHeight - gap) / 2;
          } else {
            nextDelta = (width - itemWidth - gap) / 2;
          }
        }
      }
      return vertical
        ? {marginTop: gap / 2 + prevDelta, marginBottom: gap / 2 + nextDelta}
        : {marginLeft: gap / 2 + prevDelta, marginRight: gap / 2 + nextDelta};
    } else {
      if(index < total - 1) {
        return vertical ? {marginTop: gap} : {marginLeft: gap};
      } else {
        return vertical
          ? {marginTop: gap, marginBottom: height - itemHeight - gap}
          : {marginLeft: gap, marginRight: loop ? 0 : (width - itemWidth - gap)};
      }
    }
  }
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  dot: {
    marginHorizontal: 3,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E4E4E4'
  },
  curDot: {
    backgroundColor: '#0086F6'
  }
});
