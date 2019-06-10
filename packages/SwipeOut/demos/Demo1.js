import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {SwipeOut} from '../index';
import {Divider} from '@rn-components-kit/divider';

const leftOption = {
  title: 'Mark',
  color: '#C8C7CD',
  onPress: () => alert('Press mark button')
};
const rightOption = {
  title: 'Delete',
  onPress: () => alert('Press delete button')
};
const DATA = [
  {
    title: 'Dear Jim',
    subTitle: 'Shall we go hiking this weekend',
    image: 'https://img.52z.com/upload/news/image/20181108/20181108191108_65728.jpg'
  },
  {
    title: '~Sunny Girl~',
    subTitle: 'Good night~',
    image: 'https://img.52z.com/upload/news/image/20171120/20171120080334_44787.jpg'
  },
  {
    title: 'Bro',
    subTitle: 'Play basketball next time!',
    image: 'http://img0.pconline.com.cn/pconline/1508/27/6879418_1956_thumb.jpg'
  }
];
const Content = ({title, subTitle, image}) => (
  <TouchableOpacity activeOpacity={1} style={styles.contentContainer}>
    <Image style={styles.image} source={{uri: image}}/>
    <View style={styles.infoWrapper}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.subTitleText}>{subTitle}</Text>
    </View>
  </TouchableOpacity>
);

export const Demo1 = () => (
  <View>
    <SwipeOut right={rightOption}>
      <Content {...DATA[0]}/>
    </SwipeOut>
    <Divider/>
    <SwipeOut left={leftOption}>
      <Content {...DATA[1]}/>
    </SwipeOut>
    <Divider/>
    <SwipeOut left={leftOption} right={rightOption}>
      <Content {...DATA[2]}/>
    </SwipeOut>
  </View>
);

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 4
  },
  infoWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 15
  },
  titleText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    includeFontPadding: false
  },
  subTitleText: {
    fontSize: 13,
    color: '#999',
    includeFontPadding: false
  }
});
