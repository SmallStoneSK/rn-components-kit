import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Rainbow} from '../index';

export class Demo2 extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Rainbow/>
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
