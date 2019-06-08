import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Slider} from '../index';

export class Demo2 extends React.PureComponent {

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

  render() {
    return (
      <View style={styles.container}>
        <Slider
          min={0}
          max={100}
          step={1}
          multi={false}
          vertical={true}
          defaultValue={30}
          style={styles.slider}
          tipContainerStyle={styles.tipContainer}
          onBeginSliding={this.onBeginSliding}
          onEndSliding={this.onEndSliding}
        />
        <Slider
          min={0}
          max={100}
          step={1}
          multi={true}
          vertical={true}
          style={styles.slider}
          defaultValue={[30, 65]}
          tipContainerStyle={styles.tipContainer}
          onBeginSliding={this.onBeginSliding}
          onEndSliding={this.onEndSliding}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  slider: {
    marginHorizontal: 40,
    height: 120
  },
  tipContainer: {
    width: 35
  }
});
