import React from 'react';

import {
  View,
  Modal,
  FlatList,
  ScrollView
} from 'react-native';

import {Demo} from './Demo';
import {Header} from './Header';

export class DemoModal extends React.PureComponent {

  static defaultProps = {
    visible: false,
    data: {title: '', demos: []},
    onClose: () => {}
  };

  getSvRef = () => this.svRef;

  renderItem = ({item}) => <Demo getSvRef={this.getSvRef} {...item}/>

  render() {
    const {visible, data, onClose} = this.props;
    return (
      <Modal
        visible={visible}
        animationType={'slide'}
        hardwareAccelerated={true}
        onRequestClose={onClose}
      >
        <Header title={`${data.title} Component`} closable={true} onClose={onClose}/>
        <ScrollView ref={_ => this.svRef = _}>
          <FlatList
            data={data.demos}
            scrollEnabled={false}
            keyExtractor={(_, idx) => idx.toString()}
            renderItem={this.renderItem}
          />
          <View style={{height: 100}}/>
        </ScrollView>
      </Modal>
    );
  }
}