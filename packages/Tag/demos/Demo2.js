import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Tag} from '../index';

export class Demo2 extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Tag text={'#ff5500'} color={'#ff5500'} type={'solid'}/>
        <Tag text={'#87d068'} color={'#87d068'} type={'solid'}/>
        <Tag text={'#108ee9'} color={'#108ee9'} type={'solid'}/>
        <Tag text={'#722ed1'} color={'#722ed1'} type={'solid'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15
  }
});