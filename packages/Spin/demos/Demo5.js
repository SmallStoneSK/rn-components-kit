import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {ChasingCircles} from '../index';

export class Demo5 extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <ChasingCircles color={'#81D2B4'}/>
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
