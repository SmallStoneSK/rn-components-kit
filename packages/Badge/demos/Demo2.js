import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Badge} from '../index';

export class Demo2 extends React.PureComponent {

  render() {
    return (
      <View style={styles.container}>
        <Badge dot={false} count={9}>
          <View style={styles.square}/>
        </Badge>
        <Badge dot={false} count={99}>
          <View style={styles.square}/>
        </Badge>
        <Badge dot={false} count={100}>
          <View style={styles.square}/>
        </Badge>
        <Badge dot={false} count={1000} overflowCount={999}>
          <View style={styles.square}/>
        </Badge>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 18,
    paddingBottom: 15
  },
  square: {
    width: 30,
    height: 30,
    backgroundColor: '#CCC',
    borderRadius: 4
  }
});
