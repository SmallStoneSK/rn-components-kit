import * as React from 'react';

import {
  Easing,
  Animated,
} from 'react-native';

import {withSpin} from './withSpin';

const SIZE = 100;
const CIRCLE_RADIUS = 30;
const INTERPOLATES = [
  {scale: [0, 1, 0]},
  {scale: [1, 0, 1]},
];

class ChasingCirclesBase extends React.PureComponent {

  static defaultProps = {
    scale: 1,
    color: '#40A9FF',
    duration: 1800
  }

  initAnimatedStyles() {
    const {style, color, scale} = this.props;
    this.animatedValue = new Animated.Value(0);
    [0, 1].forEach(n => {
      this[`circle${n}Style`] = {
        position: 'absolute',
        [n === 0 ? 'top' : 'bottom']: 0,
        width: CIRCLE_RADIUS * 2 * scale,
        height: CIRCLE_RADIUS * 2 * scale,
        borderRadius: CIRCLE_RADIUS * scale,
        backgroundColor: color,
        transform: [{
          scale: this.animatedValue.interpolate({
            inputRange: [0, 1, 2],
            outputRange: INTERPOLATES[n].scale
          })
        }]
      };
    });
    this.containerStyle = [
      style, 
      {
        alignItems: 'center',
        width: SIZE * scale,
        height: SIZE * scale,
        transform: [{
          rotate: this.animatedValue.interpolate({
            inputRange: [0, 2],
            outputRange: ['0deg', '360deg']
          })
        }]
      }
    ];
  }

  playAnimation() {
    const {duration} = this.props;
    this.animatedValue.setValue(0);
    this.animation = Animated.timing(this.animatedValue, {
      duration,
      toValue: 2,
      isInteraction: false,
      useNativeDriver: true,
      easing: Easing.linear,
    });
    this.animation.start(() => this.playAnimation());
  }

  render() {
    return (
      <Animated.View style={this.containerStyle}>
        <Animated.View style={this.circle0Style}/>
        <Animated.View style={this.circle1Style}/>
      </Animated.View>
    );
  }
}

export const ChasingCircles = withSpin(ChasingCirclesBase);
