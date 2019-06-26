import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Button} from '../index';

export const Demo5 = () => (
  <View style={styles.container}>
    <Button style={styles.btn} type={'default'} text={'Default Button'} block/>
    <Button style={styles.btn} type={'primary'} text={'Primary Button'} block/>
    <Button style={styles.btn} type={'success'} text={'Success Button'} block/>
    <Button style={styles.btn} type={'warning'} text={'Warning Button'} block/>
    <Button style={styles.btn} type={'danger'} text={'Danger Button'} block/>
  </View> 
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 7.5
  },
  btn: {
    marginVertical: 7.5
  }
});
