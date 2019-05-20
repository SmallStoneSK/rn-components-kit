import * as React from 'react';

import {
  UIManager,
  StyleSheet,
  LayoutAnimation,
  TouchableOpacity
} from 'react-native';

import {Text} from '@rn-components-kit/text';
import {Icon} from '@rn-components-kit/icon';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export class Tag extends React.PureComponent {

  static defaultProps = {
    text: '',
    type: 'outline',
    color: '#333',
    fontSize: 14,
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 3,
    animatedWhenDisappear: false,
    animationDuration: 300,
    closable: false,
    onClose: () => {}
  };

  get containerStyle() {
    const {style, type, color, borderRadius, paddingHorizontal, paddingVertical} = this.props;
    return [
      Object.assign({
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal,
        paddingVertical,
        borderRadius,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: color
      }, type === 'solid' ? {backgroundColor: color} : {}),
      style
    ];
  }

  get textStyle() {
    const {type, color, fontSize} = this.props;
    return {
      fontSize,
      color: type === 'solid' ? '#FFF' : color
    };
  }

  componentWillUnmount() {
    const {animationDuration, animatedWhenDisappear} = this.props;
    animatedWhenDisappear && LayoutAnimation.configureNext(LayoutAnimation.create(
      animationDuration,
      LayoutAnimation.Types.easeInEaseOut,
      LayoutAnimation.Properties.opacity
    ));
  }

  onClose = () => {
    const {text, onClose} = this.props;
    onClose(text);
  }

  render() {
    const {text, closable, type, color, fontSize} = this.props;
    return (
      <TouchableOpacity
        disabled={!closable}
        style={this.containerStyle}
        onPress={this.onClose}
      >
        <Text style={this.textStyle}>{text}</Text>
        {closable && (
          <Icon
            type={'close'}
            size={fontSize}
            style={styles.close}
            color={type === 'solid' ? '#FFF' : color}
          />
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  close: {
    marginLeft: 2
  }
});