import * as React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

export const Divider = (props = {}) => {

  const {
    style,
    color = '#DFDFDF',
    orientation = 'horizontal',
    margin = 0,
    padding = 0
  } = props;

  // horizontal divider
  if(orientation === 'horizontal') {
    const usedStyle = [
      styles.horizontalDivider,
      {backgroundColor: color, marginVertical: margin, marginHorizontal: padding},
      style
    ];
    return <View style={usedStyle}/>;
  }
  
  // vertical divider
  if(orientation === 'vertical') {
    const usedStyle = [
      styles.verticalDivider,
      {backgroundColor: color, marginVertical: padding, flexGrow: 1},
      style
    ];
    return (
      <View style={[styles.verticalDividerWrapper, {marginHorizontal: margin}]}>
        <View style={usedStyle}/>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  horizontalDivider: {
    height: StyleSheet.hairlineWidth
  },
  verticalDividerWrapper: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    width: StyleSheet.hairlineWidth
  },
  verticalDivider: {
    width: StyleSheet.hairlineWidth
  }
});
