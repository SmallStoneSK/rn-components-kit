import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Switch} from '../index';

export class Demo1 extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Switch/>
        <Switch width={60} height={30} thumbRadius={13}/>
        <Switch width={80} height={40} thumbRadius={18}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingVertical: 15,
  }
});
