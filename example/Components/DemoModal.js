import React from 'react';

import {
  Modal,
  FlatList
} from 'react-native';

import {Demo} from './Demo';
import {Header} from './Header';

export class DemoModal extends React.PureComponent {

  static defaultProps = {
    visible: false,
    data: {title: '', demos: []},
    onClose: () => {}
  };

  renderItem = ({item}) => <Demo {...item}/>

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
        <FlatList
          data={data.demos}
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={this.renderItem}
        />
      </Modal>
    );
  }
}