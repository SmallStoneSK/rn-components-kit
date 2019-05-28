import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {CheckBox} from '../index';

export class Demo3 extends React.PureComponent {
  
  state = {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
  };
  
  onPressCheckox = checkedKey => this.setState({[checkedKey]: !this.state[checkedKey]})

  render() {
    const {checked1, checked2, checked3, checked4, checked5, checked6} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <CheckBox
            title={'checkbox'}
            checked={checked1}
            onPress={() => this.onPressCheckox('checked1')}
          />
          <CheckBox
            title={'checkbox'}
            checked={checked2}
            checkedIconColor={'orange'}
            unCheckedIconType={'circle'}
            unCheckedIconColor={'orange'}
            checkedIconType={'check-circle-fill'}
            onPress={() => this.onPressCheckox('checked2')}
          />
          <CheckBox
            title={'checkbox'}
            checked={checked3}
            checkedIconColor={'purple'}
            unCheckedIconColor={'purple'}
            checkedIconType={'check-square'}
            onPress={() => this.onPressCheckox('checked3')}
          />
        </View>
        <View style={styles.row}>
          <CheckBox
            title={'checkbox'}
            checked={checked4}
            checkedIconColor={'#FF5500'}
            unCheckedIconType={'circle'}
            unCheckedIconColor={'#FF5500'}
            checkedIconType={'check-circle'}
            onPress={() => this.onPressCheckox('checked4')}
          />
          <CheckBox
            title={'checkbox'}
            checked={checked5}
            checkedIconType={'check'}
            checkedIconColor={'#BE5982'}
            unCheckedIconType={'circle'}
            unCheckedIconColor={'#BE5982'}
            onPress={() => this.onPressCheckox('checked5')}
          />
          <CheckBox
            title={'checkbox'}
            checked={checked6}
            unCheckedIconColor={'#6CA779'}
            checkedImage={'http://pic.51yuansu.com/pic3/cover/02/92/80/5abe0fa53eb9a_610.jpg'}
            onPress={() => this.onPressCheckox('checked6')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 15
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15
  }
});
