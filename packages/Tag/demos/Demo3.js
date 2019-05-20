import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Tag} from '../index';

export class Demo3 extends React.PureComponent {
  state = {tags: ['#ff5500', '#87d068', '#108ee9']};
  render() {
    const {tags} = this.state;
    return (
      <View style={styles.container}>
        {tags.map(tag => (
          <Tag
            key={tag}
            text={tag}
            color={tag}
            closable={true}
            style={styles.tag}
            animatedWhenDisappear={true}
            onClose={text => this.setState({tags: tags.filter(item => item !== text)})}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  tag: {
    marginHorizontal: 5
  }
});