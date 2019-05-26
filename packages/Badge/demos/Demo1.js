import React from 'react';

import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

import {Badge} from '../index';
import {Icon} from '@rn-components-kit/icon';

export class Demo1 extends React.PureComponent {

  render() {
    return (
      <View style={styles.container}>
        <Badge>
          <View style={styles.square}/>
          <Text style={styles.titleText}>View</Text>
        </Badge>
        <Badge>
          <Icon size={30} type={'bell'}/>
          <Text style={styles.titleText}>Icon</Text>
        </Badge>
        <Badge>
          <Image style={styles.image} source={{uri: 'https://img2.woyaogexing.com/2019/05/19/24b679c6ffff4b119f846c1e87650e28!400x400.jpeg'}}/>
          <Text style={styles.titleText}>Image</Text>
        </Badge>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 18,
    paddingBottom: 15
  },
  square: {
    width: 30,
    height: 30,
    backgroundColor: '#CCC',
    borderRadius: 4
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  titleText: {
    marginTop: 5,
    fontSize: 11,
    color: '#333',
    textAlign: 'center'
  }
});
