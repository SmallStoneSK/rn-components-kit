import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Progress} from '../index';

export const Demo5 = () => (
  <View style={styles.container}>
    <Progress
      radius={45}
      percent={60}
      type={'circle'}
      percentFormatter={val => `${val} Days`}
    />
    <View style={styles.lineProgressWrapper}>
      <Progress percent={40} percentFormatter={val => `${val}% done`}/>
      <Progress percent={80}/>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15
  },
  lineProgressWrapper: {
    flex: 1,
    justifyContent: 'space-around',
    paddingLeft: 15
  }
});
