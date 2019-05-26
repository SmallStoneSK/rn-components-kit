import * as React from 'react';

import {
  View,
  Animated,
  StyleSheet,
} from 'react-native';

import {Text} from '@rn-components-kit/text';

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export class Badge extends React.PureComponent {

  static defaultProps = {
    dot: true,
    color: '#F5222D',
    count: 0,
    overflowCount: 99,
    showZero: false,
    offsetX: 0,
    offsetY: 0,
  };

  componentWillMount() {
    this.initAnimatedStyles();
  }

  componentWillReceiveProps(nextProps) {
    const curAnimatedValue = Helper.getAnimatedValue(this.props);
    const nextAnimatedValue = Helper.getAnimatedValue(nextProps);
    if(curAnimatedValue !== nextAnimatedValue) {
      this.playAnimation(nextAnimatedValue);
    }
  }

  componentWillUnmount() {
    this.stopAnimation();
  }

  initAnimatedStyles() {
    this.animatedValue = new Animated.Value(Helper.getAnimatedValue(this.props));
    this.pureDotStyle = {
      opacity: this.animatedValue.interpolate({
        inputRange: [-Infinity, 0, 1, Infinity],
        outputRange: [0, 0, 1, 1]
      }),
      transform: [{
        scale: this.animatedValue.interpolate({
          inputRange: [-Infinity, 0, 1, Infinity],
          outputRange: [0, 0, 1, 1]
        })
      }]
    };
    this.dotWithContentStyle = {
      opacity: this.animatedValue.interpolate({
        inputRange: [-Infinity, 0, 1, Infinity],
        outputRange: [0, 0, 1, 1]
      }),
      width: this.animatedValue.interpolate({
        inputRange: [-Infinity, 0, ...numArray],
        outputRange: [0, 0, ...numArray.map(n => 8 * n + 10)]
      }),
      height: this.animatedValue.interpolate({
        inputRange: [-Infinity, 0, 1, Infinity],
        outputRange: [0, 0, 18, 18]
      })
    };
  }

  playAnimation(toValue) {
    this.stopAnimation();
    this.animation = Animated.timing(this.animatedValue, {
      duration: 200,
      toValue: toValue
    });
    this.animation.start();
  }

  stopAnimation() {
    this.animation && this.animation.stop();
  }

  renderBadgeWithChildren() {
    const {offsetX, offsetY} = this.props;
    return (
      <View style={styles.container}>
        {this.props.children}
        <View style={styles.fixedContainer}>
          <View style={[styles.offsetView, {transform: [{translateX: offsetX}, {translateY: offsetY}]}]}>
            {this.renderBadgeWithoutChildren()}            
          </View>
        </View>
      </View>
    );
  }

  renderBadgeWithoutChildren() {

    const {dot, color} = this.props;

    // shown as a pure dot
    if(dot) {
      return <Animated.View style={[styles.pureDot, {backgroundColor: color}, this.pureDotStyle]}/>;
    }

    // shown as number within dot
    return (
      <Animated.View style={[styles.dotWrapper, {backgroundColor: color}, this.dotWithContentStyle]}>
        <Text style={styles.dotText}>{Helper.getShowText(this.props)}</Text>
      </Animated.View>
    );
  }

  render() {
    return (
      <View style={this.props.style}>
        {this.props.children ? this.renderBadgeWithChildren() : this.renderBadgeWithoutChildren()}
      </View>
    );
  }
}

const Helper = {
  getShowText(props) {
    const {count, overflowCount, showZero} = props;
    if(count > 0) {
      return count > overflowCount ? `${overflowCount}+` : `${count}`;
    } else if(count < 0){
      return '';
    } else {
      return showZero ? '0' : '';
    }
  },
  getAnimatedValue(props) {
    const {dot, count, showZero} = props;
    if(dot) {
      return 1;
    }
    if(count > 0) {
      return Helper.getShowText(props).length;
    }
    if(showZero && count === 0) {
      return 1;
    }
    return 0;
  }
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'baseline',
    overflow: 'visible'
  },
  fixedContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    overflow: 'visible'
  },
  offsetView: {
    left: '50%',
    top: '-50%'
  },
  pureDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#FFF'
  },
  dotWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#FFF'
  },
  dotText: {
    fontSize: 12,
    color: '#FFF'
  }
});
