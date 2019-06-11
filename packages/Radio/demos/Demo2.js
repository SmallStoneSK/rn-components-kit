import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Radio} from '../index';

export const Demo2 = () => (
  <View style={styles.container}>
    <Radio.Group
      defaultValue={'B'}
      style={styles.radioGroup}
    >
      <Radio.Button
        value={'A'}
        title={'A. apple'}
        style={styles.radioButton}
      />
      <Radio.Button
        value={'B'}
        title={'B. orange'}
        style={styles.radioButton}
      />
      <Radio.Button
        value={'C'}
        disabled={true}
        title={'C. pear'}
        style={styles.radioButton}
      />
      <Radio.Button
        value={'D'}
        title={'D. banana'}
        style={styles.radioButton}
      />
      <Radio.Button
        value={'E'}
        title={'E. watermelon'}
        style={styles.radioButton}
      />
      <Radio.Button
        value={'F'}
        disabled={true}
        title={'F. persimmon'}
        style={styles.radioButton}
      />
      <Radio.Button
        value={'G'}
        title={'G. strawberry'}
        style={styles.radioButton}
      />
    </Radio.Group>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 7.5,
    paddingHorizontal: 15
  },
  radioGroup: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  radioButton: {
    width: '50%',
    marginVertical: 7.5
  }
});
