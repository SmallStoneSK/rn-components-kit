import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Wave} from '../index';
import {Divider} from '@rn-components-kit/divider';

export class Demo3 extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.half}>
          <Wave type={'rect'}/>
        </View>
        <Divider orientation={'vertical'} color={'#CCC'}/>
        <View style={styles.half}>
          <Wave type={'dot'} duration={1000}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150
  },
  half: {
    flex: 1,
    alignItems: 'center'
  }
});
