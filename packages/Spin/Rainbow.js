import * as React from 'react';

import {
  View,
  Easing,
  Animated,
} from 'react-native';

import {withSpin} from './withSpin';

const WRAPPER_SIZE = 100;
const CIRCLE_SIZES = [90, 76, 62, 48, 34];

class RainbowBase extends React.PureComponent {

  static defaultProps = {
    scale: 1,
    duration: 1500,
    colors: ['#EA7671', '#81D2B4', '#A963B8', '#70ACF6', '#F4B860']
  };

  constructor(props) {
    super(props);
    if(props.colors && props.colors.length !== 5) {
      console.error('Spin Error: Rainbow needs five colors.');
    }
  }

  animatedValues = [];

  initAnimatedStyles() {
    const {style, scale, colors} = this.props;
    colors.forEach((color, index) => {
      const circleSize = CIRCLE_SIZES[index] * scale;
      this[`circle${index}Style`] = {
        position: 'absolute',
        bottom: -circleSize / 2,
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        borderWidth: 4 * scale,
        borderColor: color
      };
      this.animatedValues.push(new Animated.Value(0));
      this[`spinWrapper${index}Style`] = {
        position: 'absolute',
        width: WRAPPER_SIZE * scale,
        height: WRAPPER_SIZE * scale,
        transform: [
          {rotateZ: this.animatedValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
          })}
        ]
      };
    });
    this.containerStyle = [
      style,
      {
        width: WRAPPER_SIZE * scale,
        height: WRAPPER_SIZE * scale
      }
    ];
    this.circleWrapperStyle = {
      overflow: 'hidden',
      alignItems: 'center',
      width: WRAPPER_SIZE * scale,
      height: WRAPPER_SIZE * scale / 2
    };
  }

  playAnimation() {
    const {duration} = this.props;
    this.animatedValues.forEach(item => item.setValue(0));
    this.animation = Animated.stagger(50, this.animatedValues.map(item => {
      return Animated.timing(item, {
        toValue: 1,
        duration: duration,
        isInteraction: false,
        easing: Easing.bezier(.175, .885, .32, 1.275)
      });
    }));
    this.animation.start(() => this.playAnimation());
  }

  render() {
    return (
      <View style={this.containerStyle}>
        {this.animatedValues.map((_, idx) => (
          <Animated.View key={idx} style={this[`spinWrapper${idx}Style`]}>
            <View style={this.circleWrapperStyle}>
              <View style={this[`circle${idx}Style`]}/>
            </View>
          </Animated.View>
        ))}
      </View>
    );
  }
}

export const Rainbow = withSpin(RainbowBase);
