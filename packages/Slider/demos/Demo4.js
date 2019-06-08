import React from 'react';

import {
  View,
  Text,
  Platform,
  StyleSheet
} from 'react-native';

import {Slider} from '../index';

export class Demo4 extends React.PureComponent {

  onBeginSliding = () => {
    const {getSvRef} = this.props;
    const svRef = getSvRef();
    svRef && svRef.setNativeProps({scrollEnabled: false});
  }

  onEndSliding = () => {
    const {getSvRef} = this.props;
    const svRef = getSvRef();
    svRef && svRef.setNativeProps({scrollEnabled: true});
  }

  renderThumb = () => (
    <View style={styles.squareThumb}>
      <Text style={styles.verticalLine}>|||</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <Slider
          min={0}
          max={100}
          defaultValue={30}
          style={styles.slider}
          thumbStyle={styles.thumb}
          trackColor={'#F4D7D5'}
          selectedTrackColor={'#EA7671'}
          onBeginSliding={this.onBeginSliding}
          onEndSliding={this.onEndSliding}
        />
        <Slider
          min={0}
          max={100}
          defaultValue={70}
          style={styles.slider}
          renderThumb={this.renderThumb}
          onBeginSliding={this.onBeginSliding}
          onEndSliding={this.onEndSliding}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 30,
    height: 150
  },
  slider: {
    marginVertical: 15
  },
  thumb: {
    backgroundColor: '#EA7671'
  },
  squareThumb: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 20,
    borderRadius: 4,
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
  verticalLine: {
    fontSize: 10,
    color: '#CCC'
  }
});
