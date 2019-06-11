import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Radio} from '../index';

export const Demo4 = () => (
  <View style={styles.container}>
    <Radio.Group defaultValue={'A'}>
      <Radio.Button
        value={'A'}
        animationType={'none'}
        title={'animation: none'}
        style={styles.radioButton}
      />
      <Radio.Button
        value={'B'}
        animationType={'opacity'}
        title={'animation: opacity'}
        style={styles.radioButton}
      />
      <Radio.Button
        value={'C'}
        animationType={'size'}
        title={'animation: size'}
        style={styles.radioButton}
      />
    </Radio.Group>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  radioButton: {
    marginVertical: 10
  }
});
