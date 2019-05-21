import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Switch} from '../index';

export class Demo2 extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Switch width={60} height={30} thumbRadius={13} trackOnColor={'orange'}/>
        <Switch width={60} height={30} thumbRadius={13} trackOnColor={'#6550D2'}/>
        <Switch width={60} height={30} thumbRadius={13} trackOnColor={'#DF78D7'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  }
});