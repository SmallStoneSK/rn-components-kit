import * as React from 'react';

import {
  View,
  Animated
} from 'react-native';

import {withSpin} from './withSpin';

const SIZE = 60;
const CIRCLE_RADIUS = 30;
const INTERPOLATES = [
  {opacity: [1, .8, 1], scale: [0, 1, 0]},
  {opacity: [.8, 1, .8], scale: [1, 0, 1]}
];

export class PulseBase extends React.PureComponent {

  static defaultProps = {
    scale: 1,
    color: '#40A9FF',
    duration: 2000
  };

  initAnimatedStyles() {
    const {style, color, scale} = this.props;
    this.animatedValue = new Animated.Value(0);
    [0, 1].forEach(n => {
      this[`circle${n}Style`] = {
        position: 'absolute',
        width: CIRCLE_RADIUS * 2 * scale,
        height: CIRCLE_RADIUS * 2 * scale,
        borderRadius: CIRCLE_RADIUS * scale,
        backgroundColor: color,
        opacity: this.animatedValue.interpolate({inputRange: [0, 1, 2], outputRange: INTERPOLATES[n].opacity}),
        transform: [{scale: this.animatedValue.interpolate({inputRange: [0, 1, 2], outputRange: INTERPOLATES[n].scale})}]
      };
    });
    this.containerStyle = [
      style,
      {
        justifyContent: 'center',
        alignItems: 'center',
        width: SIZE * scale,
        height: SIZE * scale
      }
    ];
  }

  playAnimation() {
    const {duration} = this.props;
    this.animatedValue.setValue(0);
    this.animation = Animated.sequence([1, 2].map(toValue => (
      Animated.timing(this.animatedValue, {
        toValue,
        isInteraction: false,
        useNativeDriver: true,
        duration: duration / 2
      })
    )));
    this.animation.start(() => this.playAnimation());
  }

  render() {
    return (
      <View style={this.containerStyle}>
        <Animated.View style={this.circle0Style}/>
        <Animated.View style={this.circle1Style}/>
      </View>
    );
  }
}

export const Pulse = withSpin(PulseBase);
