import * as React from 'react';

import {
  View,
  Animated
} from 'react-native';

import {withSpin} from './withSpin';

const GAP = 6;
const BAR_WIDTH = 10;
const BAR_HEIGHT = 50;
const INTERPOLATES = [
  {percent: 0, x: 0, y: 0},
  {percent: .07, x: .7, y: -1.3},
  {percent: .1, x: 1, y: -1},
  {percent: .17, x: 1.7, y: -2.3},
  {percent: .2, x: 2, y: -2},
  {percent: .27, x: 2.7, y: -3.3},
  {percent: .3, x: 3, y: -3},
  {percent: .37, x: 3.7, y: -4.3},
  {percent: .4, x: 4, y: -4},
  {percent: .5, x: 4, y: 0},
  {percent: .5, x: 4, y: 0},
  {percent: .57, x: 3.3, y: -1.3},
  {percent: .6, x: 3, y: -1},
  {percent: .67, x: 2.3, y: -2.3},
  {percent: .7, x: 2, y: -2},
  {percent: .77, x: 1.3, y: -3.3},
  {percent: .8, x: 1, y: -3},
  {percent: .87, x: .3, y: -4.3},
  {percent: .9, x: 0, y: -4},
  {percent: 1, x: 0, y: 0},
];

class LadderBase extends React.PureComponent {

  static defaultProps = {
    scale: 1,
    color: '#40A9FF',
    duration: 5000
  }

  makeBallStyle() {
    const {color, scale} = this.props;
    const baseHeight = BAR_HEIGHT * scale * .2;
    return {
      position: 'absolute',
      left: 0,
      bottom: baseHeight,
      width: BAR_WIDTH * scale,
      height: BAR_WIDTH * scale,
      borderRadius: BAR_WIDTH * scale * .5,
      backgroundColor: color,
      transform:[
        {
          translateX: this.animatedValue.interpolate({
            inputRange: INTERPOLATES.map(item => item.percent),
            outputRange: INTERPOLATES.map(item => item.x * (BAR_WIDTH + GAP) * scale)
          })
        },
        {
          translateY: this.animatedValue.interpolate({
            inputRange: INTERPOLATES.map(item => item.percent),
            outputRange: INTERPOLATES.map(item => item.y * baseHeight)
          })
        },
      ]
    };
  }

  makeContainerStyle() {
    const {scale, style} = this.props;
    return [
      style,
      {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: 74 * scale,
        height: 74 * scale
      }
    ];
  }

  makeBarStyle(inputRange, outputRange) {
    const {color, scale} = this.props;
    return {
      width: BAR_WIDTH * scale,
      backgroundColor: color,
      height: this.animatedValue.interpolate({
        inputRange,
        outputRange: outputRange.map(_ => BAR_HEIGHT * scale * _)
      })
    };
  }

  initAnimatedStyles() {
    this.animatedValue = new Animated.Value(0);
    this.ballStyle = this.makeBallStyle();
    this.containerStyle = this.makeContainerStyle();
    this.bar1Style = this.makeBarStyle([0, .4, .5, .9, 1], [.2, .2, 1, 1, .2]);
    this.bar2Style = this.makeBarStyle([0, .4, .5, .9, 1], [.4, .4, .8, .8, .4]);
    this.bar3Style = this.makeBarStyle([0, .4, .5, .9, 1], [.6, .6, .6, .6, .6]);
    this.bar4Style = this.makeBarStyle([0, .4, .5, .9, 1], [.8, .8, .4, .4, .8]);
    this.bar5Style = this.makeBarStyle([0, .4, .5, .9, 1], [1, 1, .2, .2, 1]);
  }

  playAnimation() {
    const {duration} = this.props;
    this.animatedValue.setValue(0);
    const percents = Object.values(INTERPOLATES);
    this.animation = Animated.sequence(percents.map(({percent}) => {
      return Animated.timing(this.animatedValue, {
        toValue: percent,
        isInteraction: false,
        duration: duration / percents.length
      });
    }));
    this.animation.start(() => this.playAnimation());
  }

  render() {
    return (
      <View style={this.containerStyle}>
        <Animated.View style={this.bar1Style}/>
        <Animated.View style={this.bar2Style}/>
        <Animated.View style={this.bar3Style}/>
        <Animated.View style={this.bar4Style}/>
        <Animated.View style={this.bar5Style}/>
        <Animated.View style={this.ballStyle}/>
      </View>
    );
  }
}

export const Ladder = withSpin(LadderBase);
