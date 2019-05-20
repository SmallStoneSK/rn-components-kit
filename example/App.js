import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  Platform,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {Header} from './Components/Header';
import {DemoModal} from './Components/DemoModal';
import {DividerDemo1, DividerDemo2} from '../packages/Divider/demos/index';
import {IconDemo1, IconDemo2, IconDemo3} from '../packages/Icon/demos/index';

const {width} = Dimensions.get('window');

const COLORS = ['#FF4777', '#725E82', '#FFA400', '#5D513C', '#00BC12', '#CA6924', '#CB3A56'];
const APP_DATA = [
  {
    title: 'Divider',
    demos: [
      {title: 'Horizontal Divider', component: DividerDemo1},
      {title: 'Vertical Divider', component: DividerDemo2}
    ]
  },
  {
    title: 'Icon',
    demos: [
      {title: 'Various Sizes', component: IconDemo1},
      {title: 'Various Types', component: IconDemo2},
      {title: 'Various Colors', component: IconDemo3},
    ]
  }
];

export default class App extends Component {

  state = {
    modalVisible: false,
    selectedComponentIndex: -1
  };

  onCloseModal = () => {
    this.setState({
      modalVisible: false,
      selectedComponentIndex: -1
    });
  }

  onPressCard = (index) => {
    this.setState({
      modalVisible: true,
      selectedComponentIndex: index
    });
  }

  renderItem = ({item, index}) => {
    const {title} = item;
    const firstLetter = title[0];
    return (
      <TouchableOpacity style={styles.card} onPress={() => this.onPressCard(index)}>
        <View style={[styles.badgeWrapper, {backgroundColor: Helper.getColor(firstLetter)}]}>
          <Text style={styles.badgeText}>{firstLetter}</Text>
        </View>
        <Text style={styles.cardTitle}>{title}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const {modalVisible, selectedComponentIndex} = this.state;
    return (
      <View>
        <Header title={'Example App'}/>
        <View style={styles.content}>
          <FlatList
            numColumns={2}
            data={APP_DATA}
            keyExtractor={(_, idx) => idx}
            renderItem={this.renderItem}
          />
        </View>
        <DemoModal
          visible={modalVisible}
          data={APP_DATA[selectedComponentIndex]}
          onClose={this.onCloseModal}
        />
      </View>
    );
  }
}

const Helper = {
  getColor(letter) {
    const num = letter.toUpperCase().charCodeAt() - 'A'.charCodeAt();
    return COLORS[num % COLORS.length];
  }
};

const styles = StyleSheet.create({
  content: {
    padding: 5
  },
  card: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: (width - 30) / 2,
    height: (width - 30) / 2,
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
  badgeWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30
  },
  badgeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF'
  },
  cardTitle: {
    marginTop: 15,
    fontSize: 15,
    color: '#333',
    textAlign: 'center'
  }
});
