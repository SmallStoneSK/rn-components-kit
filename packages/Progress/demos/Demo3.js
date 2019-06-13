import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Progress} from '../index';

export const Demo3 = () => (
  <View style={styles.container}>
    <Progress
      radius={45}
      percent={60}
      type={'circle'}
    />
    <Progress
      radius={45}
      percent={75}
      type={'circle'}
      status={'fail'}
    />
    <Progress
      radius={45}
      type={'circle'}
      status={'success'}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  }
});
