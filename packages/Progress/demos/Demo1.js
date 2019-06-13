import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Progress} from '../index';

export const Demo1 = () => (
  <View style={styles.container}>
    <Progress style={styles.progress} status={'normal'} percent={40}/>
    <Progress style={styles.progress} status={'active'} percent={60}/>
    <Progress style={styles.progress} status={'fail'} percent={80}/>
    <Progress style={styles.progress} status={'success'}/>
    <Progress style={styles.progress} status={'active'} percent={50} showInfo={false}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 7.5,
    paddingHorizontal: 15
  },
  progress: {
    marginVertical: 7.5
  }
});
