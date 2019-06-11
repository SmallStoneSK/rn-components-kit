import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Radio} from '../index';

export const Demo3 = () => (
  <View style={styles.container}>
    <Radio.Group
      defaultValue={'B'}
      style={styles.radioGroup}
    >
      <Radio.Button
        value={'A'}
        title={'option 1'}
        style={styles.radioButton}
      />
      <Radio.Button
        value={'B'}
        title={'option 2'}
        checkedIconColor={'purple'}
        unCheckedIconColor={'purple'}
        style={styles.radioButton}
      />
      <Radio.Button
        value={'C'}
        title={'option 3'}
        iconSize={18}
        style={styles.radioButton}
        checkedImage={require('./img/checked-radio.png')}
        unCheckedImage={require('./img/unchecked-radio.png')}
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
    flex: 1,
    justifyContent: 'center',
    marginVertical: 7.5
  }
});
