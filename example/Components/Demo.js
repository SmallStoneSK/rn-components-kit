import React from 'react';

import {
  View,
  Text,
  Platform,
  StyleSheet
} from 'react-native';

import {primaryColor} from '../Constants';
import {Divider} from '../../packages/Divider';

export class Demo extends React.PureComponent {
  render() {
    const {title, getSvRef, component: Component} = this.props
    return (
      <View style={styles.container}>
        <Component getSvRef={getSvRef}/>
        <Divider/>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 15,
    backgroundColor: '#FFF',
    ...Platform.select({
      android: {
        elevation: 2
      },
      ios: {
        shadowColor: '#000',
        shadowOpacity: .15,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 5
      }
    })
  },
  titleWrapper: {
    backgroundColor: primaryColor
  },
  titleText: {
    marginVertical: 15,
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  }
})