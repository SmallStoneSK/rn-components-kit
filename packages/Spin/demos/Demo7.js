import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {FlippingCard} from '../index';

export class Demo7 extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <FlippingCard color={'#EA7671'}/>
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
