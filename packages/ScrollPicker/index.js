import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {ScrollPickerItem} from './ScrollPickerItem';

class ScrollPicker extends React.PureComponent {

  static defaultProps = {
    itemHeight: 30,
    onValueChange: () => {}
  };

  height = 0;
  state = {ready: false};

  constructor(props) {
    super(props);
    const value = {};
    React.Children.forEach(props.children, child => {
      if(child.type !== ScrollPickerItem) {
        return console.error('ScrollPicker Error: ScrollPicker\'s child must be ScrollPicker.Item.');        
      }
      const {id, data = [], defaultValue} = child.props;
      if(defaultValue !== undefined && data.indexOf(defaultValue) !== -1) {
        value[id] = defaultValue;
      } else {
        value[id] = data[0];
      }
    });
    this.value = value;
  }

  get children() {
    const {ready} = this.state;
    const {itemHeight} = this.props;
    return ready && React.Children.map(this.props.children, child => {
      return child.type === ScrollPickerItem && React.cloneElement(child, {
        itemHeight: itemHeight,
        padding: (this.height - itemHeight) / 2,
        onValueChange: this.onItemValueChange
      });
    });
  }

  onLayout = evt => {
    this.height = evt.nativeEvent.layout.height;
    this.setState({ready: true});
  }

  onItemValueChange = ({id, value}) => {
    if(this.value[id] !== value) {
      this.value[id] = value;
      this.props.onValueChange(this.value);
    }
  }

  renderMask() {
    const {itemHeight} = this.props;
    return this.height > 0 && (
      <View style={styles.mask} pointerEvents={'none'}>
        <View style={{height: (this.height - itemHeight) / 2, borderBottomWidth: 1, borderColor: '#EFEFEF', backgroundColor: 'rgba(255,255,255,.6)'}}/>
        <View style={{height: (this.height - itemHeight) / 2, borderTopWidth: 1, borderColor: '#EFEFEF', backgroundColor: 'rgba(255,255,255,.6)'}}/>
      </View>
    );
  }

  render() {
    const {style} = this.props;
    return (
      <View style={[styles.container, style]} onLayout={this.onLayout}>
        {this.children}
        {this.renderMask()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: 150
  },
  mask: {
    zIndex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between'
  }
});

ScrollPicker.Item = ScrollPickerItem;
export {ScrollPicker};
