import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Button} from '../index';

export const Demo6 = () => (
  <View style={styles.container}>
    <Button style={styles.btn} type={'default'} text={'Default'} link/>
    <Button style={styles.btn} type={'primary'} text={'Primary'} link/>
    <Button style={styles.btn} type={'success'} text={'Success'} link/>
    <Button style={styles.btn} type={'warning'} text={'Warning'} link/>
    <Button style={styles.btn} type={'danger'} text={'Danger'} link/>
  </View> 
);

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 7.5
  },
  btn: {
    marginRight: 15,
    marginVertical: 7.5
  }
});
