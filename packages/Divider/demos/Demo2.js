import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {Divider} from '../index';

export const Demo2 = () => (
  <View style={styles.container}>
    <View style={{flexDirection: 'row'}}>
      <Text>colorful:{'\t\t'}</Text>
      <Text>apple</Text>
      <Divider orientation={'vertical'} color={'red'} margin={5}/>
      <Text>banana</Text>
      <Divider orientation={'vertical'} color={'blue'} margin={5}/>
      <Text>pear</Text>
      <Divider orientation={'vertical'} color={'purple'} margin={5}/>
      <Text>orange</Text>
    </View>
    <View style={{flexDirection: 'row', marginVertical: 15}}>
      <Text>different margin:{'\t\t'}</Text>
      <Text>peach</Text>
      <Divider orientation={'vertical'} color={'green'} margin={15}/>
      <Text>grape</Text>
    </View>
    <View style={{flexDirection: 'row'}}>
      <Text>different padding:{'\t'}</Text>
      <Text>cherry</Text>
      <Divider orientation={'vertical'} color={'gray'} margin={15} padding={3}/>
      <Text>mango</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 15
  }
});
