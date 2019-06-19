import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {ScrollPicker} from '../index';

const SIZES = [16, 18, 20, 22, 24, 26, 28];
const WEIGHTS = ['100', '200', '300', '400', '500', '600', '700'];
const COLORS = ['red', 'blue', 'green', 'black', 'purple', 'pink', 'orange'];

export class Demo1 extends React.PureComponent {

  state = {
    fontWeight: '300',
    fontSize: 20,
    color: 'purple',
  };

  onValueChange = newValue => this.setState(newValue)

  render() {
    const {fontSize, fontWeight, color} = this.state;
    return (
      <View>
        <View style={styles.sampleWrapper}>
          <Text style={this.state}>Sample Text</Text>
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>fontWeight</Text>
          <Text style={styles.titleText}>fontSize</Text>
          <Text style={styles.titleText}>color</Text>
        </View>
        <ScrollPicker
          itemHeight={30}
          onValueChange={this.onValueChange}
        >
          <ScrollPicker.Item
            data={WEIGHTS}
            id={'fontWeight'}
            defaultValue={fontWeight}
            renderItem={({item}) => <Text style={styles.optionText}>{item}</Text>}
          />
          <ScrollPicker.Item
            data={SIZES}
            id={'fontSize'}
            defaultValue={fontSize}
            renderItem={({item}) => <Text style={styles.optionText}>{item}</Text>}
          />
          <ScrollPicker.Item
            id={'color'}
            data={COLORS}
            defaultValue={color}
            renderItem={({item}) => <Text style={styles.optionText}>{item}</Text>}
          />
        </ScrollPicker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sampleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  titleWrapper: {
    flexDirection: 'row'
  },
  titleText: {
    flex: 1,
    paddingVertical: 5,
    textAlign: 'center',
    color: '#666'
  },
  optionText: {
    color: '#333'
  }
});
