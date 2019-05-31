import React from 'react';

import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {Tooltip} from '../index';

export class Demo1 extends React.PureComponent {

  close = () => this.toolTipRef && this.toolTipRef.close();

  render() {
    return (
      <View style={styles.container}>
        <Tooltip
          style={styles.topLeft}
          popup={'This is a tip from bottom.'}
        >
          <Text>Tap me</Text>
        </Tooltip>
        <Tooltip
          placement={'top'}
          style={styles.topRight}
          popup={'This is a tip from top.'}
        >
          <Text>Tap me</Text>
        </Tooltip>
        <Tooltip
          backgroundColor={'#FFF'}
          popupTextStyle={styles.centerTooltipText}
          popupContainerStyle={styles.centerTooltip}
          popup={'You can customize popup container/text style.'}
        >
          <Text>Tap me</Text>
        </Tooltip>
        <Tooltip
          style={styles.bottomLeft}
          showCaret={false}
          popup={'Without caret is ok, too.\nYou can also customize backgroundColor for tooltip.'}
          backgroundColor={'#BE6D36'}
        >
          <Text>Tap me</Text>
        </Tooltip>
        <Tooltip
          ref={_ => this.toolTipRef = _}
          placement={'top'}
          backgroundColor={'#FFF'}
          style={styles.bottomRight}
          popup={(
            <View style={customStyles.container}>
              <Text style={customStyles.titleText}>Customized Popup Content</Text>
              {[1, 2, 3].map(row => (
                <View key={row} style={customStyles.row}>
                  {[1, 2, 3].map(col => (
                    <TouchableOpacity key={col} style={customStyles.btn} onPress={this.close}>
                      <Text style={customStyles.btnText}>row: {row} col: {col}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
            </View>
          )}
        >
          <Text>Tap me</Text>
        </Tooltip>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 500
  },
  topLeft: {
    position: 'absolute',
    top: 25,
    left: 25
  },
  topRight: {
    position: 'absolute',
    top: 25,
    right: 25
  },
  bottomLeft: {
    position: 'absolute',
    bottom: 25,
    left: 25
  },
  bottomRight: {
    position: 'absolute',
    bottom: 25,
    right: 25
  },
  centerTooltip: {
    padding: 8,
    width: 190,
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
  centerTooltipText: {
    color: '#333'
  }
});

const customStyles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  titleText: {
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  btn: {
    marginHorizontal: 5,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#5CA9F8'
  },
  btnText: {
    color: '#5CA9F8'
  }
});
