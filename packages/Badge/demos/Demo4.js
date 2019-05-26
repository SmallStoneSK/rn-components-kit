import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {Badge} from '../index';
import {Switch} from '@rn-components-kit/switch';

export class Demo4 extends React.PureComponent {

  state = {
    show: true,
    count: 1
  };

  toggleShowDot = (value) => this.setState({show: value})

  onMinus = () => this.setState({count: this.state.count - 1})

  onAdd = () => this.setState({count: this.state.count + 1})

  render() {
    const {show, count} = this.state;
    const minusDisabled = count <= 0;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Badge dot={show}>
            <View style={styles.square}/>
          </Badge>
          <Switch
            style={styles.switch}
            width={60}
            height={30}
            thumbRadius={13}
            value={show}
            onValueChange={this.toggleShowDot}
          />
        </View>
        <View style={styles.row}>
          <Badge dot={false} count={count}>
            <View style={styles.square}/>
          </Badge>
          <View style={styles.btnGroup}>
            <TouchableOpacity disabled={minusDisabled} style={[styles.minusBtn, minusDisabled && {opacity: .5}]} onPress={this.onMinus}>
              <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addBtn} onPress={this.onAdd}>
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 5
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  square: {
    width: 30,
    height: 30,
    backgroundColor: '#CCC',
    borderRadius: 4
  },
  switch: {
    marginLeft: 50
  },
  btnGroup: {
    flexDirection: 'row',
    marginLeft: 50
  },
  minusBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#5CA9F8',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  addBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: '#5CA9F8',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4
  },
  btnText: {
    fontSize: 13,
    color: '#5CA9F8'
  }
});
