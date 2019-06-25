import React from 'react';

import {
  View,
  Text,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {DeckSwiper} from '../index';
import {Icon} from '@rn-components-kit/icon';

const DATA = [
  {name: 'Arlene', image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1649087917,469906261&fm=26&gp=0.jpg'},
  {name: 'Eudora', image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4042109083,3827082100&fm=26&gp=0.jpg'},
  {name: 'Evangeline', image: 'http://img.go007.com/2016/12/20/62b42f5ce5b52b55_4.jpg'},
  {name: 'Gabrielle', image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2949460588,4136747882&fm=26&gp=0.jpg'},
  {name: 'Camille', image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3638813979,932054923&fm=26&gp=0.jpg'},
  {name: 'Irene', image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1981939567,1622609334&fm=26&gp=0.jpg'},
  {name: 'Faithe', image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4090007123,2214056585&fm=11&gp=0.jpg'},
  {name: 'Ivy', image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3117682890,2151754629&fm=26&gp=0.jpg'},
  {name: 'Hulda', image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2228150569,2059049277&fm=26&gp=0.jpg'},
  {name: 'Hannah', image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1272384252,1176490869&fm=26&gp=0.jpg'},
];
const NO_MORE_IMAGE = 'https://img.zcool.cn/community/031de2c56d3f8a10000014af516a652.jpg@520w_390h_1c_1e_1o_100sh.jpg';

export class Demo1 extends React.PureComponent {

  onBeginDragging = () => {
    const svRef = this.props.getSvRef();
    svRef && svRef.setNativeProps({scrollEnabled: false});
  }

  onEndDragging = () => {
    const svRef = this.props.getSvRef();
    svRef && svRef.setNativeProps({scrollEnabled: true});
  }

  onPressPrev = () => this.swiperRef && this.swiperRef.prev();

  onPressNext = () => this.swiperRef && this.swiperRef.next();

  renderCard = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={1} style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={{uri: item.image}}/>
        </View>
        <View style={styles.infoWrapper}>
          <Text style={styles.titleText}>Name: {item.name}</Text>
          <Icon type={'heart-fill'} size={25} color={'#FF4777'}/>
        </View>
      </TouchableOpacity>
    );
  }

  renderBottom = () => {
    return (
      <View style={[styles.card, styles.noMoreContainer]}>
        <Image style={styles.noMoreImage} source={{uri: NO_MORE_IMAGE}}/>
        <Text style={styles.noMoreTitleText}>~ NO MORE ~</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <DeckSwiper
          ref={_ => this.swiperRef = _}
          data={DATA}
          cardWidth={300}
          cardHeight={350}
          renderCard={this.renderCard}
          renderBottom={this.renderBottom}
          onBeginDragging={this.onBeginDragging}
          onEndDragging={this.onEndDragging}
        />
        <View style={styles.btnGroup}>
          <TouchableOpacity style={styles.btn} onPress={this.onPressPrev}>
            <Text style={styles.btnText}>PREV</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.onPressNext}>
            <Text style={styles.btnText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  card: {
    width: 300,
    height: 350,
    borderRadius: 8,
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
  imageWrapper: {
    overflow: 'hidden',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  image: {
    width: 300,
    height: 300
  },
  infoWrapper: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  titleText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333'
  },
  noMoreContainer: {
    justifyContent: 'center'
  },
  noMoreImage: {
    width: 300,
    height: 200
  },
  noMoreTitleText: {
    marginTop: 20,
    fontSize: 15,
    color: '#999',
    textAlign: 'center'
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 35,
    borderRadius: 4,
    backgroundColor: '#40A9FF'
  },
  btnText: {
    color: '#FFF'
  }
});
