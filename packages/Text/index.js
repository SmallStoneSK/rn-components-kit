import * as React from 'react';

import {
  Platform,
  StyleSheet,
  Text as NativeText
} from 'react-native';

const IS_ANDROID = Platform.OS === 'android';

export const Text = (props = {}) => {
  const {style, ...rest} = props;
  const usedStyle = [style, styles.text, IS_ANDROID && styles.androidFontFamily];
  return (
    <NativeText style={usedStyle} {...rest}>
      {props.children}&#8203;
    </NativeText>
  );
};

const styles = StyleSheet.create({
  text: {
    includeFontPadding: false
  },
  androidFontFamily: {
    fontFamily: 'sans-serif'
  }
});