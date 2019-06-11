import * as React from 'react';

import {
  View,
  Image,
  Animated,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {Icon} from '@rn-components-kit/icon';
import {Text} from '@rn-components-kit/text';

export class CheckBox extends React.PureComponent {

  static defaultProps = {
    iconSize: 20,
    disabled: false,
    checked: false,
    checkedIconType: 'check-square-fill',
    checkedIconColor: '#1890FF',
    unCheckedIconType: 'border',
    unCheckedIconColor: '#BFBFBF',
    animationType: 'opacity',
    onPress: () => {}
  };

  componentWillMount() {
    this.initAnimatedStyles();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.checked !== this.props.checked) {
      this.playAnimation(nextProps.checked);
    }
  }

  componentWillUnmount() {
    this.stopAnimation();
  }

  initAnimatedStyles() {
    const {checked, animationType} = this.props;
    const isSize = animationType === 'size';
    const isOpacity = animationType === 'opacity';
    this.opacityAnimatedValue = new Animated.Value(checked ? 1 : 0);
    this.sizeAnimatedValue = new Animated.Value(checked ? 1 : 0);
    this.checkedStyle = {
      ...StyleSheet.absoluteFillObject,
      opacity: this.opacityAnimatedValue.interpolate({inputRange: [0, 1], outputRange: [isSize ? 1 : 0, 1]}),
      transform: [{scale: this.sizeAnimatedValue.interpolate({inputRange: [0, 1], outputRange: [isOpacity ? 1 : 0, 1]})}]
    };
    this.unCheckedStyle = {
      ...StyleSheet.absoluteFillObject,
      opacity: this.opacityAnimatedValue.interpolate({inputRange: [0, 1], outputRange: [1, isSize ? 1 : 0]}),
      transform: [{scale: this.sizeAnimatedValue.interpolate({inputRange: [0, 1], outputRange: [1, isOpacity ? 1 : 0]})}]
    };
  }

  playAnimation(checked) {
    const toValue = checked ? 1 : 0;
    if(this.props.animationType === 'none') {
      this.sizeAnimatedValue.setValue(toValue);
      this.opacityAnimatedValue.setValue(toValue);
    } else {
      this.animation = Animated.parallel(
        [this.sizeAnimatedValue, this.opacityAnimatedValue].map(item => (
          Animated.spring(item, {
            toValue,
            duration: 200,
            isInteraction: false,
            useNativeDriver: true
          })
        ))
      );
      this.animation.start();
    }
  }

  stopAnimation() {
    this.animation && this.animation.stop();
  }

  renderCheckedElement() {
    let component = null;
    const {iconSize, checkedImage, checkedIconType, checkedIconColor} = this.props;
    if(checkedImage) {
      const imageSrc = typeof checkedImage === 'string' ? {uri: checkedImage} : checkedImage;
      component = <Image source={imageSrc} style={{width: iconSize, height: iconSize}}/>;
    } else {
      component = <Icon size={iconSize} type={checkedIconType} color={checkedIconColor}/>;
    }
    return (
      <Animated.View style={this.checkedStyle}>
        {component}
      </Animated.View>
    );
  }

  renderUnCheckedElement() {
    let component = null;
    const {iconSize, unCheckedImage, unCheckedIconType, unCheckedIconColor} = this.props;
    if(unCheckedImage) {
      const imageSrc = typeof checkedImage === 'string' ? {uri: unCheckedImage} : unCheckedImage;
      component = <Image source={imageSrc} style={{width: iconSize, height: iconSize}}/>;
    } else {
      component = <Icon size={iconSize} type={unCheckedIconType} color={unCheckedIconColor}/>;
    }
    return (
      <Animated.View style={this.unCheckedStyle}>
        {component}
      </Animated.View>
    );
  }

  render() {
    const {style, iconSize, title, titleStyle, disabled, onPress} = this.props;
    return (
      <TouchableOpacity
        activeOpacity={1}
        disabled={disabled}
        style={[styles.container, style, disabled && {opacity: .5}]}
        onPress={onPress}
      >
        <View style={[styles.center, {width: iconSize, height: iconSize}]}>
          {this.renderCheckedElement()}
          {this.renderUnCheckedElement()}
        </View>
        <Text style={[styles.titleText, titleStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    color: '#333',
    marginLeft: 5,
    fontSize: 14
  }
});
