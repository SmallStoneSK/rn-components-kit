import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Icon} from '../index';

export class Demo1 extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Icon type={'github-fill'} size={16}/>
        <Icon type={'github-fill'} size={24}/>
        <Icon type={'github-fill'} size={32}/>
        <Icon type={'github-fill'} size={40}/>
        <Icon type={'github-fill'} size={48}/>
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
