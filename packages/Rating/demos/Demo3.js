import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {Rating} from '../index';

export class Demo3 extends React.PureComponent {

  state = {
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4
  };

  onValueChange1 = newValue => this.setState({value1: newValue});
  
  onValueChange2 = newValue => this.setState({value2: newValue});
  
  onValueChange3 = newValue => this.setState({value3: newValue});
  
  onValueChange4 = newValue => this.setState({value4: newValue});

  render() {
    const {value1, value2, value3, value4} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Rating
            step={0.1}
            value={value1}
            style={styles.rating}
            onValueChange={this.onValueChange1}
          />
          <Text style={styles.scoreText}>Score: {value1}</Text>
        </View>
        <View style={styles.row}>
          <Rating
            step={0.2}
            value={value2}
            style={styles.rating}
            onValueChange={this.onValueChange2}
          />
          <Text style={styles.scoreText}>Score: {value2}</Text>
        </View>
        <View style={styles.row}>
          <Rating
            step={0.5}
            value={value3}
            style={styles.rating}
            onValueChange={this.onValueChange3}
          />
          <Text style={styles.scoreText}>Score: {value3}</Text>
        </View>
        <View style={styles.row}>
          <Rating
            step={1}
            value={value4}
            style={styles.rating}
            onValueChange={this.onValueChange4}
          />
          <Text style={styles.scoreText}>Score: {value4}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 7.5
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 7.5
  },
  scoreText: {
    fontSize: 15,
    color: '#333'
  }
});
