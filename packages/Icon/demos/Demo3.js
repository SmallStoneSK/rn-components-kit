import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Icon} from '../index';

export class Demo3 extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Icon type={'alibaba'} size={32} color={'orange'}/>
        <Icon type={'wechat-fill'} size={32} color={'#AAE473'}/>
        <Icon type={'zhihu-circle-fill'} size={32} color={'#3486F7'}/>
        <Icon type={'html5-fill'} size={32} color={'#D35936'}/>
        <Icon type={'github-fill'} size={32}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    padding: 15
  }
});
