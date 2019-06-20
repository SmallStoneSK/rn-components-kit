import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {Rating} from '../index';

export class Demo1 extends React.PureComponent {

  state = {score: 2};

  onValueChange = newValue => this.setState({score: newValue})

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Score: {this.state.score}</Text>
        <Rating value={2} onValueChange={this.onValueChange}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  titleText: {
    marginBottom: 15,
    fontSize: 18,
    color: '#333',
    textAlign: 'center'
  }
});
