import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {Radio} from '../index';

export class Demo1 extends React.PureComponent {

  state = {
    answer: 'B'
  };

  onValueChange = newValue => this.setState({answer: newValue});

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Choose your favorate fruit from the following options:</Text>
        <Radio.Group
          defaultValue={'B'}
          style={styles.radioGroup}
          onValueChange={this.onValueChange}
        >
          <Radio.Button
            value={'A'}
            title={'A. apple'}
            style={styles.radioButton}
          />
          <Radio.Button
            value={'B'}
            title={'B. orange'}
            style={styles.radioButton}
          />
          <Radio.Button
            value={'C'}
            title={'C. pear'}
            style={styles.radioButton}
          />
          <Radio.Button
            value={'D'}
            title={'D. banana'}
            style={styles.radioButton}
          />
        </Radio.Group>
        <Text style={styles.answerText}>Your option: {this.state.answer}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  titleText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333'
  },
  radioGroup: {
    marginTop: 5
  },
  radioButton: {
    marginVertical: 5
  },
  answerText: {
    alignSelf: 'flex-end',
    fontSize: 14,
    color: '#333'
  }
});
