import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {CheckBox} from '../index';

export class Demo4 extends React.PureComponent {
  
  state = {
    checked1: false,
    checked2: false,
    checked3: false,
  };
  
  onPressCheckBox = checkedKey => this.setState({[checkedKey]: !this.state[checkedKey]})

  render() {
    const {checked1, checked2, checked3} = this.state;
    return (
      <View style={styles.container}>
        <CheckBox
          checked={checked1}
          animationType={'none'}
          style={styles.checkBox}
          title={'animation: none'}
          onPress={() => this.onPressCheckBox('checked1')}
        />
        <CheckBox
          checked={checked2}
          animationType={'opacity'}
          style={styles.checkBox}
          title={'animation: opacity'}
          onPress={() => this.onPressCheckBox('checked2')}
        />
        <CheckBox
          checked={checked3}
          animationType={'size'}
          style={styles.checkBox}
          title={'animation: size'}
          onPress={() => this.onPressCheckBox('checked3')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingHorizontal: 15,
    paddingBottom: 15
  },
  checkBox: {
    marginTop: 15
  }
});
