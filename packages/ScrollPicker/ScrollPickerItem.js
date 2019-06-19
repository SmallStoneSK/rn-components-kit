import React from 'react';

import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export class ScrollPickerItem extends React.PureComponent {

  static defaultProps = {
    flex: 1,
    data: [],
    onValueChange: () => {}
  };

  curIndex = 0;
  adjustingScroll = false;

  constructor(props) {
    super(props);
    if(props.id === undefined) {
      console.error('ScrollPicker Error: ScrollPicker.Item\'s props must contain id.');
    }
  }

  componentDidMount() {
    const {data, defaultValue} = this.props;
    if(defaultValue !== undefined) {
      setTimeout(() => {
        const toIndex = data.indexOf(defaultValue);
        toIndex !== -1 && this.scrollToIndex(toIndex, false);
      }, 50);
    }
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.id, nextProps.data);
    if(
      !Helper.compareArray(nextProps.data, this.props.data) &&
      nextProps.data.indexOf(this.props.data[this.curIndex]) === -1
    ) {
      this.scrollToIndex(0, false);
      const {id, data, onValueChange} = nextProps;
      onValueChange({id, index: 0, value: data[0]});
    }
  }

  calcIndex(y) {
    const {data, itemHeight} = this.props;
    const index = Math.round(y / itemHeight);
    return Helper.clamp(index, 0, data.length - 1);
  }

  scrollToIndex(index, animated = true) {
    const {itemHeight} = this.props;
    const toY = index * itemHeight;
    this.svRef && this.svRef.scrollTo({y: toY, animated});
  }

  onScroll = () => {
    clearTimeout(this.adjustTimer);
  }

  onBeginDrag = () => {
    this.adjustingScroll = false;
    clearTimeout(this.adjustTimer);
  }

  onEndDrag = evt => {
    const toIndex = this.calcIndex(evt.nativeEvent.contentOffset.y);
    this.adjustTimer = setTimeout(() => {
      const {id, data, onValueChange} = this.props;
      this.curIndex = toIndex;
      this.adjustingScroll = true;
      this.scrollToIndex(toIndex);
      onValueChange({id, index: toIndex, value: data[toIndex]});
    }, 50);
  }

  onScrollEnd = evt => {
    const {id, data, itemHeight, onValueChange} = this.props;
    const curY = evt.nativeEvent.contentOffset.y;
    if(curY % itemHeight !== 0) {
      const toIndex = this.calcIndex(curY);
      this.curIndex = toIndex;
      this.adjustingScroll = true;
      this.scrollToIndex(toIndex);
      onValueChange({id, index: toIndex, value: data[toIndex]});
    } else if(!this.adjustingScroll) {
      const toIndex = curY / itemHeight;
      this.curIndex = toIndex;
      this.adjustingScroll = false;
      onValueChange({id, index: toIndex, value: data[toIndex]});
    }
  }

  onPressSubItem = index => {
    const {id, data, onValueChange} = this.props;
    this.curIndex = index;
    this.scrollToIndex(index);
    this.adjustingScroll = true;
    onValueChange({id, index, value: data[index]});
  }

  render() {
    const {flex, itemHeight, padding, data, renderItem} = this.props;
    return (
      <ScrollView
        style={{flex}}
        scrollEventThrottle={1}
        decelerationRate={0.993}
        ref={_ => this.svRef = _}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        onScroll={this.onScroll}
        onScrollEndDrag={this.onEndDrag}
        onScrollBeginDrag={this.onBeginDrag}
        onMomentumScrollEnd={this.onScrollEnd}
      >
        <View style={{height: padding}}/>
        {data.map((item, index) => (
          <SubItem
            key={index}
            item={item}
            index={index}
            height={itemHeight}
            render={renderItem}
            onPress={this.onPressSubItem}
          />
        ))}
        <View style={{height: padding}}/>
      </ScrollView>
    );
  }
}

class SubItem extends React.PureComponent {
  
  onPress = () => this.props.onPress(this.props.index)

  render() {
    const {item, index, height, render} = this.props;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.center, {height}]}
        onPress={this.onPress}
      >
        {render({item, index})}
      </TouchableOpacity>
    );
  }
}

const Helper = {
  clamp(val, min, max) {
    return min < max
      ? (val < min ? min : val > max ? max : val)
      : (val < max ? max : val > min ? min : val);
  },
  compareArray(arr1 = [], arr2 = []) {
    if(arr1.length !== arr2.length) {
      return false;
    } else {
      const hash = {};
      arr1.forEach(item => hash[item] = true);
      for(const item of arr2) {
        if(!hash[item]) {
          return false;
        }
      }
      return true;
    }
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
