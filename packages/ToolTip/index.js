import * as React from 'react';

import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {PopupContent} from './PopupContent';

export class Tooltip extends React.PureComponent {

  static defaultProps = {
    placement: 'bottom',
    overlayColor: 'rgba(0,0,0,.1)',
    backgroundColor: 'rgba(0,0,0,.8)',
    onOpen: () => {},
    onClose: () => {}
  }

  layout = {};
  state = {showModal: false};

  get overlayStyle() {
    const {overlayColor} = this.props;
    return {
      zIndex: -1,
      backgroundColor: overlayColor,
      ...StyleSheet.absoluteFillObject
    };
  }

  open = () => this.onOpen();

  close = () => this.onClose();

  onOpen = () => {
    this.componentRef && this.componentRef.measure((x, y, width, height, pageX, pageY) => {
      this.layout = {x, y, width, height, pageX, pageY};
      this.props.onOpen();
      this.setState({showModal: true});
    });
  }

  onClose = () => {
    this.props.onClose();
    this.setState({showModal: false});
  }

  renderModal() {
    const {showModal} = this.state;
    const {popup, popupTextStyle, popupContainerStyle, showCaret, placement, backgroundColor} = this.props;
    return (
      <Modal
        transparent={true}
        visible={showModal}
        animationType={'fade'}
      >
        <View style={this.overlayStyle} onTouchEnd={this.onClose}/>
        <PopupContent
          content={popup}
          showCaret={showCaret}
          placement={placement}
          parentLayout={this.layout}
          textStyle={popupTextStyle}
          style={popupContainerStyle}
          backgroundColor={backgroundColor}
        />
      </Modal>
    );
  }

  render() {
    const {style, children} = this.props;
    return (
      <View style={style} collapsable={false} ref={_ => this.componentRef = _}>
        <TouchableOpacity onPress={this.onOpen}>
          {children}
        </TouchableOpacity>
        {this.renderModal()}
      </View>
    );
  }
}
