import * as React from 'react';

import {
  View,
  Animated
} from 'react-native';

import {withSpin} from './withSpin';

const RECT_NUM = 5;
const RECT_GAP = 5;
const RECT_WIDTH = 10;
const RECT_HEIGHT = 30;
const DOT_NUM = 3;
const DOT_RADIUS = 20;

class WaveBase extends React.PureComponent {

  static defaultProps = {
    scale: 1,
    type: 'rect',
    color: '#40A9FF',
    duration: 700
  };

  animatedValues = [];

  constructor(props) {
    super(props);
    if(!['rect', 'dot'].includes(props.type)) {
      console.error('Spin Error: wave\'s type must be rect or dot');
    }
  }

  initAnimatedStyles() {
    const {style, type, scale, color} = this.props;
    if(type === 'rect') {
      const baseRectWidth = RECT_WIDTH * scale;
      const baseRectHeight = RECT_HEIGHT * scale;
      this.containerStyle = [
        style,
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: (RECT_NUM * RECT_WIDTH + (RECT_NUM - 1) * RECT_GAP) * scale,
          height: baseRectHeight * 2.5
        }
      ];
      new Array(RECT_NUM).fill(1).forEach((_, idx) => {
        this.animatedValues.push(new Animated.Value(0));
        this[`rect${idx}Style`] = {
          width: baseRectWidth,
          height: baseRectHeight,
          backgroundColor: color,
          transform: [{
            scaleY: this.animatedValues[idx].interpolate({
              inputRange: [0, 1, 2],
              outputRange: [1, 2.5, 1]
            })
          }]
        };
      });
    } else {
      this.containerStyle = [
        style,
        {
          flexDirection: 'row',
          width: 100 * scale,
          height: DOT_RADIUS * 2 * scale
        }
      ];
      this.dotWrapperStyle = {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      };
      const baseRadius = DOT_RADIUS * scale;
      new Array(DOT_NUM).fill(1).forEach((_, idx) => {
        this.animatedValues.push(new Animated.Value(0));
        this[`dot${idx}Style`] = {
          width: baseRadius,
          height: baseRadius,
          backgroundColor: color,
          borderRadius: baseRadius / 2,
          opacity: this.animatedValues[idx].interpolate({inputRange: [0, 1, 2], outputRange: [0, 1, 0]}),
          transform: [{
            scale: this.animatedValues[idx].interpolate({inputRange: [0, 1, 2], outputRange: [0, 1, 0]})
          }]
        };
      });
    }
  }

  playAnimation() {
    const {type, duration} = this.props;
    const delay = type === 'rect' ? 100 : 150;
    this.animatedValues.forEach(item => item.setValue(0));
    this.animation = Animated.stagger(delay, this.animatedValues.map(item => {
      return Animated.sequence([
        Animated.timing(item, {toValue: 1, duration: duration / 2, useNativeDriver: true, isInteraction: false}),
        Animated.timing(item, {toValue: 2, duration: duration / 2, useNativeDriver: true, isInteraction: false})
      ]);
    }));
    this.animation.start(() => this.playAnimation());
  }

  renderRectWave() {
    return (
      <View style={this.containerStyle}>
        {this.animatedValues.map((_, idx) => (
          <Animated.View key={idx} style={this[`rect${idx}Style`]}/>
        ))}
      </View>
    );
  }

  renderDotWave() {
    return (
      <View style={this.containerStyle}>
        {this.animatedValues.map((_, idx) => (
          <View key={idx} style={this.dotWrapperStyle}>
            <Animated.View style={this[`dot${idx}Style`]}/>
          </View>
        ))}
      </View>
    );
  }

  render() {
    const {type} = this.props;
    if(type === 'rect') {
      return this.renderRectWave();
    } else {
      return this.renderDotWave();      
    }
  }
}

export const Wave = withSpin(WaveBase);
