import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Slider} from '../index';

export class Demo3 extends React.PureComponent {

  tipFormatter1 = val => `${val}%`;

  tipFormatter2 = val => `$ ${val}`;

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
          tipFormatter={this.tipFormatter1}
          onBeginSliding={this.onBeginSliding}
          onEndSliding={this.onEndSliding}
        />
        <Slider
          min={0}
          max={100}
          defaultValue={70}
          style={styles.slider}
          tipFormatter={this.tipFormatter2}
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
