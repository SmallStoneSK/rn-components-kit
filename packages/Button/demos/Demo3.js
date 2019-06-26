import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Button} from '../index';

export const Demo3 = () => (
  <View style={styles.container}>
    <Button type={'primary'} shape={'square'} text={'Square'}/>
    <Button type={'primary'} shape={'default'} text={'Default'}/>
    <Button type={'primary'} shape={'round'} text={'Round'}/>
  </View> 
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15
  }
});
