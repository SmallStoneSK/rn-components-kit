import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Pulse} from '../index';

export class Demo6 extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Pulse color={'#F4B860'}/>
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
