import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {Switch} from '../index';

export class Demo3 extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.grid}>
          <Switch width={60} height={30} thumbRadius={13} trackOnColor={'#245987'}/>
          <Text style={styles.titleText}>Cupertino</Text>
        </View>
        <View style={styles.grid}>
          <Switch width={60} height={20} thumbRadius={15} trackOnColor={'#245987'} type={'material'}/>
          <Text style={styles.titleText}>Material</Text>
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