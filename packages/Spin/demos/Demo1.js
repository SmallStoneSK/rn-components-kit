import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Ladder} from '../index';

export class Demo1 extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Ladder color={'#EA4961'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150
  }
});
