import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {CheckBox} from '../index';

import {Switch} from '@rn-components-kit/switch';

export class Demo2 extends React.PureComponent {
  
  state = {checked: false, disabled: false};
  
  onPressCheckox = () => this.setState({checked: !this.state.checked})

  onChangeDisabled = value => this.setState({disabled: !value})
  
  render() {
    const {checked, disabled} = this.state;
    return (
      <View style={styles.container}>
        <CheckBox
          title={'checkbox'}
          checked={checked}
          disabled={disabled}
          onPress={this.onPressCheckox}
        />
        <Switch
          value={!disabled}
          style={styles.switch}
          onValueChange={this.onChangeDisabled}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15
  },
  switch: {
    marginLeft: 30
  }
});
