import React from 'react';

import {
  View,
  Text,
  Image,
  Platform,
  StyleSheet
} from 'react-native';

import {Carousel} from '../index';

const IMGS = [
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1582690715,667583212&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1198472779,3653455204&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3141750006,3920177337&fm=26&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=432479983,1330634475&fm=26&gp=0.jpg'
];

export class Demo7 extends React.PureComponent {

  renderPagination = ({curIndex, total}) => (
    <View style={styles.pagination}>
      {new Array(total).fill(1).map((_, idx) => {
        const isCur = idx === curIndex;
        const style = [styles.dot, isCur && styles.curDot];
        return <View key={idx} style={style} />;
      })}
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          gap={20}
          loop={true}
          width={345}
          itemWidth={250}
          showPagination={true}
          centerModeEnabled={true}
          renderPagination={this.renderPagination}
        >
          {IMGS.map((url, idx) => (
            <View key={idx} style={styles.card}>
              <Image style={styles.image} source={{uri: url}}/>
              <Text style={styles.titleText}>
                Picture {idx + 1}
                <Text style={styles.subTitleText}>{'\t'}here is description.</Text>
              </Text>
            </View>
          ))}
        </Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5
  },
  card: {
    marginVertical: 10,
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
  image: {
    width: 250,
    height: 150
  },
  titleText: {
    marginLeft: 15,
    marginVertical: 15,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333'
  },
  subTitleText: {
    marginLeft: 10,
    fontSize: 13,
    fontWeight: 'normal',
    color: '#999'
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5
  },
  dot: {
    marginHorizontal: 3,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#666',
  },
  curDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  }
});
