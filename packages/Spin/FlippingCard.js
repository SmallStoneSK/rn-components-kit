import * as React from 'react';

import {
  View,
  Animated
} from 'react-native';

import {withSpin} from './withSpin';

const SIZE = 50;
const INTERPOLATES = [
  {percent: 0, rotateX: '0deg', rotateY: '0deg'},
  {percent: .5, rotateX: '180deg', rotateY: '0deg'},
  {percent: 1, rotateX: '180deg', rotateY: '180deg'}
];

class FlippingCardBase extends React.PureComponent {

  static defaultProps = {
    scale: 1,
    color: '#40A9FF',
    duration: 1200
  };

  initAnimatedStyles() {
    const {style, color, scale} = this.props;
    this.animatedValue = new Animated.Value(0);
    this.cardStyle = {
      width: SIZE * scale,
      height: SIZE * scale,
      backgroundColor: color,
      transform: [
        {perspective: 100},
        ...['rotateX', 'rotateY'].map(key => ({
          [key]: this.animatedValue.interpolate({
            inputRange: INTERPOLATES.map(interpolate => interpolate.percent),
            outputRange: INTERPOLATES.map(interpolate => interpolate[key])
          })
        }))
      ]
    };
    this.containerStyle = [style, {width: SIZE * scale, height: SIZE * scale}];
  }

  playAnimation() {
    const {duration} = this.props;
    this.animatedValue.setValue(0);
    this.animation = Animated.sequence(INTERPOLATES.slice(1).map(item => {
      return Animated.timing(this.animatedValue, {
        isInteraction: false,
        useNativeDriver: true,
        toValue: item.percent,
        duration: duration / 2,
      });
    }));
    this.animation.start(() => this.playAnimation());
  }

  render() {
    return (
      <View style={this.containerStyle}>
        <Animated.View style={this.cardStyle}/>
      </View>
    );
  }
}

export const FlippingCard = withSpin(FlippingCardBase);
