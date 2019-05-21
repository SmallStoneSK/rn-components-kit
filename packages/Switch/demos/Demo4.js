import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {Switch} from '../index';

export class Demo4 extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.grid}>
          <Switch value={true} width={60} height={30} thumbRadius={13} trackOnColor={'#ED6A5A'}/>
          <Text style={styles.titleText}>Enabled</Text>
        </View>
        <View style={styles.grid}>
          <Switch value={true} width={60} height={30} thumbRadius={13} trackOnColor={'#ED6A5A'} disabled={true}/>
          <Text style={styles.titleText}>Disabled</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 15
  },
  grid: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    marginTop: 10
  }
});