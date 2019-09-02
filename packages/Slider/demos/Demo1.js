import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Slider} from '../index';

export class Demo1 extends React.PureComponent {

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
          defaultValue={30}
          style={styles.slider}
          onBeginSliding={this.onBeginSliding}
          onEndSliding={this.onEndSliding}
        />
        <Slider
          min={0}
          max={100}
          multi={true}
          style={styles.slider}
          defaultValue={[30, 65]}
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
  }
});
