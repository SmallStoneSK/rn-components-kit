import * as React from 'react';

import {
  View,
  Easing,
  Animated
} from 'react-native';

import {withSpin} from './withSpin';

const SIZE = 80;
const CUBE_SIZE = 25;
const CUBE_SCALE = .6;
const INTERPOLATES = [
  {
    percent: 0,
    cube1: {translateX: 0, translateY: 0, scale: 1, rotate: '0deg'},
    cube2: {translateX: SIZE - CUBE_SIZE, translateY: SIZE - CUBE_SIZE, scale: 1, rotate: '0deg'}
  },
  {
    percent: 1,
    cube1: {translateX: SIZE - CUBE_SIZE * CUBE_SCALE * 1.5, translateY: -CUBE_SIZE * CUBE_SCALE * .5, scale: CUBE_SCALE, rotate: '90deg'},
    cube2: {translateX: -CUBE_SIZE * CUBE_SCALE * .5, translateY: SIZE - CUBE_SIZE * CUBE_SCALE * 1.5, scale: CUBE_SCALE, rotate: '90deg'}
  },
  {
    percent: 2,
    cube1: {translateX: SIZE - CUBE_SIZE, translateY: SIZE - CUBE_SIZE, scale: 1, rotate: '180deg'},
    cube2: {translateX: 0, translateY: 0, scale: 1, rotate: '180deg'}
  },
  {
    percent: 3,
    cube1: {translateX: -CUBE_SIZE * CUBE_SCALE * .5, translateY: SIZE - CUBE_SIZE * CUBE_SCALE * 1.5, scale: CUBE_SCALE, rotate: '270deg'},
    cube2: {translateX: SIZE - CUBE_SIZE * CUBE_SCALE * 1.5, translateY: -CUBE_SIZE * CUBE_SCALE * .5, scale: CUBE_SCALE, rotate: '270deg'}
  },
  {
    percent: 4,
    cube1: {translateX: 0, translateY: 0, scale: 1, rotate: '360deg'},
    cube2: {translateX: SIZE - CUBE_SIZE, translateY: SIZE - CUBE_SIZE, scale: 1, rotate: '360deg'}
  }
];

class RollingCubesBase extends React.PureComponent {

  static defaultProps = {
    scale: 1,
    color: '#40A9FF',
    duration: 2200
  };

  animatedValues = [];

  initAnimatedStyles() {
    const {style, scale, color} = this.props;
    this.containerStyle = [style, {width: SIZE * scale,height: SIZE * scale}];
    [0, 1].forEach(n => {
      this.animatedValues[n] = new Animated.Value(0);
      this[`cube${n}Style`] = {
        position: 'absolute',
        width: CUBE_SIZE * scale,
        height: CUBE_SIZE * scale,
        backgroundColor: color,
        transform: ['translateX', 'translateY', 'scale', 'rotate'].map(key => ({
          [key]: this.animatedValues[n].interpolate({
            inputRange: [0, 1, 2, 3, 4],
            outputRange: INTERPOLATES.map(item => {
              const val = item[`cube${n + 1}`][key];
              return key === 'rotate' ? val : val * scale;
            })
          })
        }))
      };
    });
  }

  playAnimation() {
    const {duration} = this.props;
    this.animatedValues.forEach(item => item.setValue(0));
    this.animation = Animated.sequence(INTERPOLATES.slice(1).map((interpolate) => {
      return Animated.parallel(this.animatedValues.map(animatedValue => (
        Animated.timing(animatedValue, {
          isInteraction: false,
          useNativeDriver: true,
          duration: duration / 4,
          toValue: interpolate.percent,
          easing: Easing.bezier(.5, 0, .5, 1)
        })
      )));
    }));
    this.animation.start(() => this.playAnimation());
  }

  render() {
    return (
      <View style={this.containerStyle}>
        {this.animatedValues.map((_, idx) => (
          <Animated.View key={idx} style={this[`cube${idx}Style`]}/>
        ))}
      </View>
    );
  }
}

export const RollingCubes = withSpin(RollingCubesBase);
