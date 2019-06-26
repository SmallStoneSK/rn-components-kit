import React from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {Icon} from '@rn-components-kit/icon';
import {Text} from '@rn-components-kit/text';

const STYLE_PRESET = {
  theme: {
    default: '#EFEFEF',
    primary: '#40A9FF',
    warning: '#E6A23C',
    danger: '#D9534F',
    success: '#67C23A'
  },
  small: {
    fontSize: 12,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    iconTextSpacing: 5
  },
  default: {
    fontSize: 14,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    iconTextSpacing: 7
  },
  large: {
    fontSize: 18,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 10,
    iconTextSpacing: 9
  }
};

const Button = props => {
  const {block} = props;
  return (
    <View style={!block && styles.wrapContent}>
      <TouchableOpacity {...props} style={Helper.makeContainerStyle(props)}>
        {Helper.makeChildren(props)}
      </TouchableOpacity>
    </View>
  );
};

Button.defaultProps = {
  type: 'default',
  size: 'default',
  shape: 'default',
  link: false,
  block: false,
  outline: false,
  iconLeft: true
};

/**
 * Allow users re-define preset
 */
Button.updatePreset = config => {
  Object.keys(config).forEach(key => {
    const value = config[key];
    if(value instanceof Object) {
      Object.keys(value).forEach(k => {
        STYLE_PRESET[key][k] = value[k];
      });
    }
  });
};

const Helper = {
  makeContainerStyle(props) {
    const {style, disabled, type, size, shape, outline, link} = props;
    return [
      {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: disabled ? .6 : 1,
        paddingHorizontal: STYLE_PRESET[size].paddingHorizontal,
        paddingVertical: STYLE_PRESET[size].paddingVertical,
        borderWidth: outline ? StyleSheet.hairlineWidth : 0,
        borderColor: outline ? (type === 'default' ? '#999' : STYLE_PRESET.theme[type]) : 'transparent',
        borderRadius: shape === 'default' ? STYLE_PRESET[size].borderRadius : (shape === 'round' ? 100 : 0),
        backgroundColor: (link || outline) ? 'transparent' : STYLE_PRESET.theme[type],
      },
      style
    ];
  },
  makeTextStyle(props) {
    const {icon, iconLeft, type, size, outline, link} = props;
    return {
      fontSize: STYLE_PRESET[size].fontSize,
      marginLeft: (icon && iconLeft) ? STYLE_PRESET[size].iconTextSpacing : 0,
      marginRight: (icon && !iconLeft) ? STYLE_PRESET[size].iconTextSpacing : 0,
      color: type === 'default' ? '#333' : ((link || outline) ? STYLE_PRESET.theme[type] : '#FFF'),
    };
  },
  makeChildren(props) {
    const textStyle = Helper.makeTextStyle(props);
    const text = !!props.text && <Text key={'text'} style={textStyle}>{props.text}</Text>;
    const icon = !!props.icon && <Icon key={'icon'} type={props.icon} color={textStyle.color} size={textStyle.fontSize}/>;
    return props.iconLeft ? [icon, text] : [text, icon];
  }
};

const styles = StyleSheet.create({
  wrapContent: {
    alignItems: 'flex-start'
  }
});

export {
  Button
};
