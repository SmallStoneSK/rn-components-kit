import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Button} from '../index';

export const Demo2 = () => (
  <View style={styles.container}>
    <Button type={'primary'} size={'small'} text={'Small'}/>
    <Button type={'primary'} size={'default'} text={'Default'}/>
    <Button type={'primary'} size={'large'} text={'Large'}/>
  </View> 
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    padding: 15
  }
});
