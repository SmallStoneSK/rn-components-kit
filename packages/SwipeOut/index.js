import React from 'react';

import {
  View,
  Easing,
  Animated,
  Dimensions,
  StyleSheet,
  PanResponder,
  TouchableOpacity
} from 'react-native';

import {Text} from '@rn-components-kit/text';

const MOVING_THRESHOLD = 20;
const {width: WINDOW_WIDTH} = Dimensions.get('window');

export class SwipeOut extends React.PureComponent {

  static defaultProps = {
    onBeginDragging: () => {},
    onEndDragging: () => {}
  };

  isReboundAnimating = false;
  leftSize = {width: 0, height: 0};
  rightSize = {width: 0, height: 0};
  animatedValue = new Animated.Value(0);
  state = {leftReady: false, rightReady: false};

  componentWillMount() {
    this.initPanResponders();
  }

  initPanResponders() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onStartShouldSetPanResponderCapture: () => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return !this.isReboundAnimating && Math.abs(gestureState.dx) > 5;
      },
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        return !this.isReboundAnimating && Math.abs(gestureState.dx) > 5;
      },
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: () => {
        this.props.onBeginDragging();
        this.startValue = this.animatedValue._value;
      },
      onPanResponderMove: (evt, gestureState) => {
        this.animatedValue.setValue(gestureState.dx + this.startValue);
      },
      onPanResponderEnd: (evt, gestureState) => {
        const {dx} = gestureState;
        const curValue = this.startValue + dx;
        if(this.startValue === 0) {
          if(dx > 0 && dx >= MOVING_THRESHOLD && this.leftSize.width > 0) {
            this.playReboundAnimation('left');
          } else if(dx < 0 && Math.abs(dx) >= MOVING_THRESHOLD && this.rightSize.width > 0) {
            this.playReboundAnimation('right');
          } else {
            this.playReboundAnimation('reset');
          }
        } else if(this.startValue > 0) {
          if(dx < 0 && Math.abs(dx) >= MOVING_THRESHOLD && curValue > -MOVING_THRESHOLD) {
            this.playReboundAnimation('reset');
          } else if(dx < 0 && Math.abs(dx) >= MOVING_THRESHOLD && curValue <= -MOVING_THRESHOLD) {
            this.playReboundAnimation('right');
          } else {
            this.playReboundAnimation('left');
          }
        } else {
          if(dx > 0 && dx >= MOVING_THRESHOLD && curValue < MOVING_THRESHOLD) {
            this.playReboundAnimation('reset');
          } else if(dx > 0 && dx >= MOVING_THRESHOLD && curValue >= MOVING_THRESHOLD) {
            this.playReboundAnimation('left');
          } else {
            this.playReboundAnimation('right');
          }
        }
        this.props.onEndDragging();
      }
    });
  }

  initAnimatedStyle() {

    // calculate the interpolated input/output range
    const inputRange = [-1, 0, 1];
    const outputRange = [0, 0, 0];
    if(this.leftSize.width) {
      inputRange.push(this.leftSize.width, WINDOW_WIDTH);
      outputRange.push(this.leftSize.width, this.leftSize.width + 30);
    }
    if(this.rightSize.width) {
      inputRange.unshift(-WINDOW_WIDTH, -this.rightSize.width);
      outputRange.unshift(-this.rightSize.width - 30, -this.rightSize.width);
    }

    this.transformStyle = {
      transform: [
        {translateX: this.animatedValue.interpolate({inputRange, outputRange})}
      ]
    };
  }

  playReboundAnimation(type) {

    // flag: it is performing rebound animation
    this.isReboundAnimating = true;

    // calculate the toValue for this.animatedValue
    let toValue = 0;
    if(type === 'left') {
      toValue = this.leftSize.width;
    } else if(type === 'right') {
      toValue = -this.rightSize.width;
    }

    // perform animation
    Animated.timing(this.animatedValue, {
      toValue,
      duration: 200,
      isInteraction: false,
      useNativeDriver: true,
      easing: Easing.bezier(.5, 0, .5, 1)
    }).start(() => {
      this.isReboundAnimating = false;
      this.animatedValue.setValue(toValue);
    });
  }

  onLayout = (evt, direction) => {
    this[`${direction}Size`] = {
      width: Helper.get(evt, 'nativeEvent.layout.width', 0),
      height: Helper.get(evt, 'nativeEvent.layout.height', 0)
    };
    this.initAnimatedStyle();
    this.setState({[`${direction}Ready`]: true});
  }

  renderBody() {
    return (
      <Animated.View style={this.transformStyle} {...this.panResponder.panHandlers}>
        {this.props.children}
      </Animated.View>
    );
  }

  renderHiddenContent(option) {
    if(!option) {
      return null;
    } else if(typeof option === 'function') {
      return option();
    } else if(Array.isArray(option)) {
      return (
        <View style={styles.hiddenBtnWrapper}>
          {option.map((item, index) => this.renderHiddenContent({key: index, ...item}))}
        </View>
      );
    } else {
      const {key, title, color = '#EC4E3D', onPress} = option;
      if(!onPress) {
        console.warn('SwipeOut Warn: onPress is needed in left/right option.');
      }
      return (
        <TouchableOpacity key={key} style={[styles.hiddenBtn, {backgroundColor: color}]} onPress={onPress}>
          <Text style={styles.hiddenTitleText}>{title}</Text>
        </TouchableOpacity>
      );
    }
  }

  renderLeft() {
    const {left} = this.props;
    const {leftReady} = this.state;
    return left && (
      <Animated.View
        style={[styles.leftWrapper, this.transformStyle, leftReady ? {left: -this.leftSize.width} : {opacity: 0}]}
        onLayout={evt => this.onLayout(evt, 'left')}
      >
        {this.renderHiddenContent(left)}
      </Animated.View>
    );
  }

  renderRight() {
    const {right} = this.props;
    const {rightReady} = this.state;
    return right && (
      <Animated.View
        style={[styles.rightWrapper, this.transformStyle, rightReady ? {right: -this.rightSize.width} : {opacity: 0}]}
        onLayout={evt => this.onLayout(evt, 'right')}
      >
        {this.renderHiddenContent(right)}
      </Animated.View>
    );
  }

  render() {
    const {style} = this.props;
    return (
      <View style={[style, styles.container]}>
        {this.renderBody()}
        {this.renderLeft()}
        {this.renderRight()}
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
  }
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden'
  },
  leftWrapper: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    justifyContent: 'center'
  },
  rightWrapper: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    justifyContent: 'center'
  },
  hiddenBtnWrapper: {
    flexDirection: 'row',
    height: '100%'
  },
  hiddenBtn: {
    justifyContent: 'center',
    paddingHorizontal: 15,
    height: '100%'
  },
  hiddenTitleText: {
    fontSize: 15,
    color: '#FFF'
  }
});
