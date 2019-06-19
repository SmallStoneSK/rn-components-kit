import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {ScrollPicker} from '../index';

const FRUITS_ICONS = {
  apple: '🍎',
  orange: '🍊',
  lemon: '🍋',
  banana: '🍌',
  pineapple: '🍍',
  pear: '🍐',
  cherry: '🍒',
  watermelon: '🍉',
  peach: '🍑',
  grape: '🍇',
  strawberry: '🍓'
};
const FRUITS = Object.keys(FRUITS_ICONS);

export class Demo3 extends React.PureComponent {

  state = {
    fruit: 'pineapple'
  };

  onValueChange = newValue => this.setState(newValue)

  render() {
    const {fruit} = this.state;
    return (
      <View>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>
            Your favorite fruit: {FRUITS_ICONS[fruit]}
          </Text>
        </View>
        <ScrollPicker
          itemHeight={30}
          style={styles.picker}
          onValueChange={this.onValueChange}
        >
          <ScrollPicker.Item
            id={'fruit'}
            data={FRUITS}
            defaultValue={fruit}
            renderItem={({item}) => (
              <View style={styles.optionWrapper}>
                <Text style={styles.optionText}>{FRUITS_ICONS[item]}  {item}</Text>
              </View>
            )}
          />
        </ScrollPicker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  picker: {
    height: 120
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },
  titleText: {
    fontSize: 15,
    color: '#333'
  },
  optionWrapper: {
    flexDirection: 'row'
  },
  fruitIcon: {
    width: 16,
    height: 16
  },
  optionText: {
    color: '#333'
  }
});
