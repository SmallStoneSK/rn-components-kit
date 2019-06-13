import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {Progress} from '../index';

export class Demo4 extends React.PureComponent {

  state = {
    percent: 60
  };

  onAdd = () => this.setState({percent: this.state.percent + 10})

  onMinus = () => this.setState({percent: this.state.percent - 10})

  render() {
    const {percent} = this.state;
    return (
      <View style={styles.container}>
        <Progress
          type={'circle'}
          status={'active'}
          percent={percent}
          style={styles.circularProgress}
        />
        <Progress
          percent={percent}
          status={'active'}
          style={styles.lineProgress}
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity disabled={percent <= 0} style={styles.leftBtn} onPress={this.onMinus}>
            <Text style={styles.btnText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity disabled={percent >= 100} style={styles.rightBtn} onPress={this.onAdd}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  circularProgress: {
    alignSelf: 'center'
  },
  lineProgress: {
    marginTop: 15
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15
  },
  leftBtn: {
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    borderColor: '#40A9FF',
    borderWidth: 1,
    borderRightWidth: StyleSheet.hairlineWidth
  },
  rightBtn: {
    paddingHorizontal: 15,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderColor: '#40A9FF',
    borderWidth: 1,
    borderLeftWidth: StyleSheet.hairlineWidth
  },
  btnText: {
    fontSize: 20,
    color: '#40A9FF'
  }
});
