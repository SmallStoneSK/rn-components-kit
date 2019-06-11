import React from 'react';

import {
  View
} from 'react-native';

import {Button} from './Button';

export class Group extends React.PureComponent {

  static defaultProps = {
    onValueChange: () => {}
  };

  state = {
    value: this.props.defaultValue
  }

  onPressButton(newValue) {
    if(newValue !== this.state.value) {
      this.setState({value: newValue});
      this.props.onValueChange(newValue);
    }
  }

  render() {
    const {value} = this.state;
    const {style, children} = this.props;
    const buttons = React.Children.map(children, child => {
      Helper.checkRadioButton(child);
      return React.cloneElement(child, {
        checked: child.props.value === value,
        onPress: () => this.onPressButton(child.props.value)
      });
    });
    return (
      <View style={style}>
        {buttons}
      </View>
    );
  }
}

const Helper = {
  checkRadioButton(element) {
    if(element.type !== Button) {
      console.error('Radio Error: Radio.Group\'s children must be Radio.Button.');
    }
    if(element.props.value === undefined) {
      console.error('Radio Error: Radio.Button\'s value must not be undefined.');
    }
  }
};
