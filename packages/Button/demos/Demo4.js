import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Button} from '../index';

export const Demo4 = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Button icon={'left'} text={'Back'}/>
      <Button icon={'right'} iconLeft={false} text={'Next'}/>
      <Button icon={'up'}/>
      <Button icon={'down'}/>
    </View>
    <View style={styles.row}>
      <Button type={'primary'} icon={'search'} text={'Search'}/>
      <Button type={'primary'} icon={'home-fill'} iconLeft={false} text={'Home'} outline/>
      <Button type={'primary'} icon={'download'}/>
      <Button type={'primary'} icon={'tag-fill'} link/>
    </View>
    <View style={styles.row}>
      <Button type={'success'} icon={'rise'} text={'Rise'}/>
      <Button type={'success'} icon={'plus-circle-fill'} iconLeft={false} text={'Add'} outline/>
      <Button type={'success'} icon={'fullscreen'}/>
      <Button type={'success'} icon={'fullscreen-exit'} link/>
    </View>
    <View style={styles.row}>
      <Button type={'warning'} icon={'error'} text={'Warn'}/>
      <Button type={'warning'} icon={'bell'} iconLeft={false} text={'Bell'} outline/>
      <Button type={'warning'} icon={'error'}/>
      <Button type={'warning'} icon={'error-fill'} link/>
    </View>
    <View style={styles.row}>
      <Button type={'danger'} icon={'close'} text={'Error'}/>
      <Button type={'danger'} icon={'stop'} iconLeft={false} text={'Stop'} outline/>
      <Button type={'danger'} icon={'bug'}/>
      <Button type={'danger'} icon={'bug-fill'} link/>
    </View>
  </View> 
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 7.5
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 7.5
  }
});
