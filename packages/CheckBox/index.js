import * as React from 'react';

import {
  Image,
  UIManager,
  StyleSheet,
  LayoutAnimation,
  TouchableOpacity
} from 'react-native';

import {Icon} from '@rn-components-kit/icon';
import {Text} from '@rn-components-kit/text';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
const ANIMATION_CONFIG_SET = {
  opacity: LayoutAnimation.create(
    150,
    LayoutAnimation.Types.linear,
    LayoutAnimation.Properties.opacity
  ),
  size: LayoutAnimation.create(
    150,
    LayoutAnimation.Types.linear,
    LayoutAnimation.Properties.scaleXY
  )
};

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

  componentWillUpdate(nextProps) {
    if(nextProps.checked !== this.props.checked) {
      const animationConfig = ANIMATION_CONFIG_SET[nextProps.animationType];
      animationConfig && LayoutAnimation.configureNext(animationConfig);
    }
  }

  renderCheckedElement() {
    const {iconSize, checkedImage, checkedIconType, checkedIconColor} = this.props;
    if(checkedImage) {
      const imageSrc = typeof checkedImage === 'string' ? {uri: checkedImage} : checkedImage;
      return <Image source={imageSrc} style={{width: iconSize, height: iconSize}}/>;
    } else {
      return <Icon size={iconSize} type={checkedIconType} color={checkedIconColor}/>;
    }
  }

  renderUnCheckedElement() {
    const {iconSize, unCheckedImage, unCheckedIconType, unCheckedIconColor} = this.props;
    if(unCheckedImage) {
      const imageSrc = typeof checkedImage === 'string' ? {uri: unCheckedImage} : unCheckedImage;
      return <Image source={imageSrc} style={{width: iconSize, height: iconSize}}/>;
    } else {
      return <Icon size={iconSize} type={unCheckedIconType} color={unCheckedIconColor}/>;
    }
  }

  render() {
    const {style, title, titleStyle, checked, disabled, onPress} = this.props;
    return (
      <TouchableOpacity
        activeOpacity={1}
        disabled={disabled}
        style={[styles.container, style, disabled && {opacity: .5}]}
        onPress={onPress}
      >
        {checked && this.renderCheckedElement()}
        {!checked && this.renderUnCheckedElement()}
        <Text style={[styles.titleText, titleStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    color: '#333',
    marginLeft: 5,
    fontSize: 14
  }
});
