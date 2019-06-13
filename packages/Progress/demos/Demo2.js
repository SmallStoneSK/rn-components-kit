import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Progress} from '../index';

export const Demo2 = () => (
  <View style={styles.container}>
    <Progress
      percent={20}
      status={'active'}
      color={'#EA7671'}
      style={styles.progress}
    />
    <Progress
      percent={40}
      status={'active'}
      color={'#81D2B4'}
      style={styles.progress}
    />
    <Progress
      percent={60}
      status={'active'}
      color={'#A963B8'}
      style={styles.progress}
    />
    <Progress
      percent={80}
      status={'active'}
      color={'#70ACF6'}
      style={styles.progress}
    />
    <Progress
      percent={99}
      status={'active'}
      style={styles.progress}
      gradientColor={{0: '#EA7671', .33: '#81D2B4', .66: '#A963B8', 1: '#70ACF6'}}
    />
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
