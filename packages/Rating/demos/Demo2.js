import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Rating} from '../index';

export const Demo2 = () => (
  <View style={styles.container}>
    <Rating
      value={2}
      style={styles.rating}
    />
    <Rating
      value={2}
      style={styles.rating}
      inActiveIconType={'star'}
      inActiveIconColor={'#FADB14'}
    />
    <Rating
      value={2}
      style={styles.rating}
      activeIconType={'heart-fill'}
      activeIconColor={'#FF4777'}
      inActiveIconType={'heart-fill'}
    />
    <Rating
      value={2}
      iconSize={30}
      iconGap={8}
      style={styles.rating}
      activeIconType={'heart-fill'}
      activeIconColor={'#FF4777'}
      inActiveIconType={'heart-fill'}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 7.5
  },
  rating: {
    marginVertical: 7.5
  }
});
