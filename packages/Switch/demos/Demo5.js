import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {Switch} from '../index';

export class Demo5 extends React.PureComponent {

  state = {status: 'off'}

  onStatusChange = value => this.setState({status: value ? 'on' : 'off'})

  render() {
    return (
      <View style={styles.container}>
        <Switch
          width={60}
          height={30}
          thumbRadius={13}
          trackOnColor={'#108EE9'}
          onValueChange={this.onStatusChange}
        />
        <Text style={styles.statusText}>Status: {this.state.status}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15
  },
  statusText: {
    marginLeft: 30,
    fontSize: 15,
    color: '#333'
  }
});
