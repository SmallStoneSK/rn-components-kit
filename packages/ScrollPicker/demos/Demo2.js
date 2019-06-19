import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {ScrollPicker} from '../index';

const DATA = {
  '上海': {
    '上海': ['黄浦', '徐汇', '长宁', '静安', '普陀', '虹口', '杨浦', '闵行', '宝山', '嘉定', '浦东新区', '金山', '松江', '青浦', '奉贤', '崇明'],
  },
  '浙江': {
    '杭州': ['上城', '下城', '江干', '拱墅', '西湖', '滨江', '萧山', '余杭', '桐庐', '淳安', '建德', '富阳', '临安'],
    '温州': ['鹿城', '龙湾', '瓯海', '洞头', '永嘉', '平阳', '苍南', '文成', '泰顺', '瑞安', '乐清'],
    '金华': ['婺城', '金东', '武义', '浦江', '磐安', '兰溪', '义乌', '东阳', '永康'],
    '宁波': ['海曙', '江北', '北仑', '镇海', '鄞州', '象山', '宁海', '余姚', '慈溪', '奉化'],
    '绍兴': ['越城', '柯桥', '新昌', '诸暨', '上虞', '嵊州'],
    '嘉兴': ['南湖', '秀洲', '嘉善', '海盐', '海宁', '平湖', '桐乡']
  },
  '安徽': {
    '合肥': ['瑶海', '庐阳', '蜀山', '包河', '长丰', '肥东', '肥西', '庐江', '巢湖'],
    '安庆': ['迎江', '大观', '宜秀', '怀宁', '枞阳', '潜山', '太湖', '宿松', '望江', '岳西', '桐城'],
    '黄山': ['屯溪', '黄山', '徽州', '歙县', '休宁', '黟县', '祁门'],
    '阜阳': ['颍州', '颍东', '颍泉', '临泉', '太和', '阜南', '颖上', '界首']
  }
};

export class Demo2 extends React.PureComponent {

  state = {
    province: '浙江',
    city: '金华',
    area: '兰溪',
  };

  onValueChange = newValue => this.setState(newValue)

  render() {
    const {province, city, area} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>省</Text>
          <Text style={styles.titleText}>市</Text>
          <Text style={styles.titleText}>区</Text>
        </View>
        <ScrollPicker
          itemHeight={30}
          style={styles.picker}
          onValueChange={this.onValueChange}
        >
          <ScrollPicker.Item
            id={'province'}
            defaultValue={province}
            data={Object.keys(DATA)}
            renderItem={({item}) => <Text style={styles.optionText}>{item}</Text>}
          />
          <ScrollPicker.Item
            id={'city'}
            defaultValue={city}
            data={Object.keys(DATA[province])}
            renderItem={({item}) => <Text style={styles.optionText}>{item}</Text>}
          />
          <ScrollPicker.Item
            id={'area'}
            defaultValue={area}
            data={DATA[province][city]}
            renderItem={({item}) => <Text style={styles.optionText}>{item}</Text>}
          />
        </ScrollPicker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15
  },
  picker: {
    height: 100
  },
  titleWrapper: {
    flexDirection: 'row'
  },
  titleText: {
    flex: 1,
    paddingVertical: 5,
    textAlign: 'center',
    color: '#666'
  },
  optionText: {
    color: '#333'
  }
});
