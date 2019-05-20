import React from 'react';

import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {primaryColor} from '../Constants';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const statusBarHeight = getStatusBarHeight();

export class Header extends React.PureComponent {

  static defaultProps = {
    title: '',
    closable: false,
    onClose: () => {}
  };

  render() {
    const {title, closable, onClose} = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'}/>
        <View style={styles.contentWrapper}>
          <Text style={styles.titleText}>{title}</Text>
          {closable && (
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColor
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: statusBarHeight + 15,
    paddingBottom: 15,
    paddingHorizontal: 15
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF'
  },
  closeText: {
    fontSize: 15,
    color: '#FFF'
  }
});