import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import {Carousel} from '../index';

const IMGS = [
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1582690715,667583212&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1198472779,3653455204&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3141750006,3920177337&fm=26&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=432479983,1330634475&fm=26&gp=0.jpg'
];

export class Demo3 extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Carousel
          loop={true}
          height={200}
          vertical={true}
          itemHeight={200}
          style={styles.carousel}
        >
          {IMGS.map((url, idx) => (
            <View key={idx}>
              <Image style={styles.image} source={{uri: url}}/>
              <View style={styles.mask}>
                <Text style={styles.titleText}>Picture {idx + 1}</Text>
              </View>
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
    paddingVertical: 10
  },
  carousel: {
    width: 320,
    height: 200
  },
  image: {
    width: 320,
    height: 200
  },
  mask: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingVertical: 15,
    paddingLeft: 15,
    backgroundColor: 'rgba(0,0,0,.6)'
  },
  titleText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFF'
  }
});
