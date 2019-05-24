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

export class Demo6 extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Carousel
          gap={20}
          loop={true}
          width={345}
          itemWidth={250}
          autoPlay={true}
          autoPlayDelay={2000}
          centerModeEnabled={true}
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
    justifyContent: 'center',
    alignItems: 'center',
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
  }
});
