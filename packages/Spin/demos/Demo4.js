import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {RollingCubes} from '../index';

export class Demo4 extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <RollingCubes color={'#A963B8'}/>
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
