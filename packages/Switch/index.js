import * as React from 'react';

import {
  View,
  Animated,
  Platform,
  UIManager,
  StyleSheet,
  LayoutAnimation,
  TouchableOpacity
} from 'react-native';

const ANIMATION_CONFIG = LayoutAnimation.create(
  250,
  LayoutAnimation.Types.easeIn,
  LayoutAnimation.Properties.opacity
);

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export class Switch extends React.PureComponent {

  static defaultProps = {
    value: false,
    disabled: false,
    type: 'cupertino',
    width: 40,
    height: 20,
    thumbRadius: 8,
    thumbColor: '#FFF',
    trackOnColor: '#79D472',
    trackOffColor: '#CCC',
    onValueChange: () => {}
  };

  state = {value: this.props.value};

  constructor(...args) {
    super(...args);
    this.initStyles();
    if(this.props.type === 'material') {
      const {thumbRadius, height} = this.props;
      if(thumbRadius * 2 <= height) {
        console.error('Switch material type is enabled, double thumbRadius should be greater than height.');
      }
    }
  }

  componentWillUnmount() {
    this.animation && this.animation.stop();
  }

  get thumbEdgeGap() {
    const {type, height, thumbRadius} = this.props;
    return type === 'material' ? 0 : Math.abs(height - thumbRadius * 2) / 2;
  }

  get containerStyle() {
    const {disabled} = this.props;
    return [
      styles.container,
      this.containerBasicStyle,
      {opacity: disabled ? .6 : 1}
    ];
  }

  get trackOnStyle() {
    const {height, trackOnColor} = this.props;
    return [
      styles.track,
      {height, borderRadius: height / 2, backgroundColor: trackOnColor}
    ];
  }

  get trackOffStyle() {
    const {height, trackOffColor} = this.props;
    return [
      styles.track,
      {height, borderRadius: height / 2, backgroundColor: trackOffColor}
    ];
  }

  get thumbStyle() {
    const {value} = this.state;
    return [
      styles.thumb,
      this.thumbBasicStyle,
      {[value ? 'right' : 'left']: this.thumbEdgeGap}
    ];
  }

  initStyles() {

    const {width, height, thumbRadius, thumbColor} = this.props;

    // initialize container style
    this.containerBasicStyle = {
      width,
      height: Math.max(height, thumbRadius * 2)
    };

    // initialize thumb style
    this.thumbAnimatedValue = new Animated.Value(0);
    this.thumbBasicStyle = {
      height: 2 * thumbRadius,
      borderRadius: thumbRadius,
      backgroundColor: thumbColor,
      width: this.thumbAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [2 * thumbRadius, 2 * thumbRadius + 3]
      })
    };
  }

  playThumbSizeAnimation(toValue) {
    this.animation && this.animation.stop();
    this.animation = Animated.timing(this.thumbAnimatedValue, {
      toValue,
      duration: 200
    });
    this.animation.start();
  }

  onPress = () => {
    const {value} = this.state;
    this.setState({value: !value});
    this.props.onValueChange(!value);
    LayoutAnimation.configureNext(ANIMATION_CONFIG);
  }

  onPressIn = () => this.playThumbSizeAnimation(1)

  onPressOut = () => this.playThumbSizeAnimation(0)

  render() {
    const {value} = this.state;
    const {style, disabled} = this.props;
    return (
      <View style={style}>
        <TouchableOpacity
          activeOpacity={1}
          disabled={disabled}
          style={this.containerStyle}
          onPress={this.onPress}
          onPressIn={this.onPressIn}
          onPressOut={this.onPressOut}
        >
          {value && <View style={this.trackOnStyle}/>}
          {!value && <View style={this.trackOffStyle}/>}
          <Animated.View style={this.thumbStyle}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  track: {
    zIndex: -1,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  thumb: {
    position: 'absolute',
    ...Platform.select({
      android: {
        elevation: 2
      },
      ios: {
        shadowColor: '#000',
        shadowOpacity: .2,
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 5
      },
      web: {
        shadowColor: '#000',
        shadowOpacity: .2,
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 5
      }
    })
  }
});
