import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {CheckBox} from '../index';

export class Demo1 extends React.PureComponent {
  
  state = {checked: false};
  
  onPressCheckox = () => this.setState({checked: !this.state.checked})
  
  render() {
    return (
      <View style={styles.container}>
        <CheckBox
          title={'checkbox'}
          checked={this.state.checked}
          onPress={this.onPressCheckox}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 15
  }
});
