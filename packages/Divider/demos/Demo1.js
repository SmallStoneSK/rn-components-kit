import React from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

import {Divider} from '../index';

const DATA = [
  {
    avatarColor: '#FF4777',
    title: 'Brunch this weekend?',
    subTitle: 'I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  {
    avatarColor: '#725E82',
    title: 'Summer BBQ',
    subTitle: 'Wish I could come, but I\'m out of town this weekend.',
  },
  {
    avatarColor: '#FFA400',
    title: 'Qui Qui',
    subTitle: 'Do you have Paris recommendations? Have you ever been?'
  },
  {
    avatarColor: '#00BC12',
    title: 'Birthday Gift',
    subTitle: 'Have any ideas about what we should get Heidi for her birthday?'
  }
];

export const Demo1 = () => (
  <FlatList
    data={DATA}
    bounces={false}
    keyExtractor={(_, idx) => idx.toString()}
    ItemSeparatorComponent={() => <Divider/>}
    renderItem={({item: {avatarColor, title, subTitle}}) => (
      <View style={styles.listItemContainer}>
        <View style={[styles.avatarWrapper, {backgroundColor: avatarColor}]}>
          <Text style={styles.avatarText}>U</Text>
        </View>
        <View style={styles.infoWrapper}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.subTitleText} numberOfLines={2}>{subTitle}</Text>
        </View>
      </View>
    )}
  />
);

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    padding: 15
  },
  avatarWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20
  },
  avatarText: {
    fontSize: 13,
    color: '#FFF'
  },
  infoWrapper: {
    paddingLeft: 15,
    paddingRight: 40,
  },
  titleText: {
    fontSize: 15,
    color: '#333'
  },
  subTitleText: {
    marginTop: 3,
    fontSize: 13,
    color: '#999'
  }
});
