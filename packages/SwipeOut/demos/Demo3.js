import React from 'react';

import {
  View,
  Text,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {SwipeOut} from '../index';
import {Icon} from '@rn-components-kit/icon';
import {Divider} from '@rn-components-kit/divider';

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

export class Demo3 extends React.PureComponent {

  renderRightPart = () => {
    return (
      <TouchableOpacity style={styles.hiddenBtn} onPress={() => alert('Press delete button')}>
        <Icon size={16} type={'delete'} color={'#EC4E3D'}/>
      </TouchableOpacity>
    );
  }

  renderLeftPart = () => {
    return (
      <TouchableOpacity style={styles.hiddenBtn} onPress={() => alert('Press like button')}>
        <Icon size={16} type={'heart-fill'} color={'#EC5779'}/>
      </TouchableOpacity>
    );
  }

  onBeginDragging = () => {
    const {getSvRef} = this.props;
    const svRef = getSvRef();
    svRef.setNativeProps({scrollEnabled: false});
  }

  onEndDragging = () => {
    const {getSvRef} = this.props;
    const svRef = getSvRef();
    svRef.setNativeProps({scrollEnabled: true});
  }

  render() {
    return (
      <View>
        <SwipeOut
          right={this.renderRightPart}
          onBeginDragging={this.onBeginDragging}
          onEndDragging={this.onEndDragging}
        >
          <Content {...DATA[0]}/>
        </SwipeOut>
        <Divider/>
        <SwipeOut
          left={this.renderLeftPart}
          onBeginDragging={this.onBeginDragging}
          onEndDragging={this.onEndDragging}
        >
          <Content {...DATA[1]}/>
        </SwipeOut>
        <Divider/>
        <SwipeOut
          left={this.renderLeftPart}
          right={this.renderRightPart}
          onBeginDragging={this.onBeginDragging}
          onEndDragging={this.onEndDragging}
        >
          <Content {...DATA[2]}/>
        </SwipeOut>
      </View>
    );
  }
}

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
  },
  hiddenBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    width: 30,
    height: 30,
    borderRadius: 15,
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
  }
});
