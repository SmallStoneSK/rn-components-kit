import * as React from 'react';

import {
  View,
  Dimensions,
  StyleSheet
} from 'react-native';

import {Text} from '@rn-components-kit/text';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const STATUS_BAR_HEIGHT = getStatusBarHeight();
const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get('window');

export class PopupContent extends React.PureComponent {

  static defaultProps = {
    content: null,
    showCaret: true,
    parentLayout: {},
    placement: 'bottom'
  };

  state = {show: false};

  get bodyStyle() {
    const {show} = this.state;
    const {style, backgroundColor} = this.props;
    if(!show) {
      return [{alignSelf: 'baseline', padding: 5, opacity: 0}, style];
    } else {
      return [styles.container, style, {backgroundColor, ...this.bodyPos}];
    }
  }

  get caretStyle() {
    const {show} = this.state;
    const {backgroundColor} = this.props;
    if(!show) {
      return {opacity: 0};
    } else {
      return [styles.caret, {color: backgroundColor, ...this.caretPos}];
    }
  }

  onLayout = (evt) => {
    if(!this.state.show) {
      const {parentLayout, placement} = this.props;
      const childLayout = evt.nativeEvent.layout;
      const result = Helper.calcPos({placement, childLayout, parentLayout});
      this.bodyPos = result.bodyPos;
      this.caretPos = result.caretPos;
      this.placement = result.placement;
      this.setState({show: true});
    }
  }

  render() {

    const {content, showCaret, textStyle} = this.props;

    if(!content) {
      return null;
    }
    
    let component = content;
    if(typeof content === 'string') {
      component = <Text style={[styles.text, textStyle]}>{content}</Text>;
    }

    return (
      <React.Fragment>
        <View style={this.bodyStyle} onLayout={this.onLayout}>
          {component}
        </View>
        {showCaret && (
          <Text style={this.caretStyle}>
            {this.placement === 'top' ? '▼' : '▲'}
          </Text>
        )}
      </React.Fragment>
    );
  }
}

const Helper = {
  waitFor(millseconds) {
    return new Promise(resolve => {
      setTimeout(resolve, millseconds);
    });
  },
  calcPos({placement, childLayout, parentLayout}) {

    const caretHeight = 9;
    let finalPlacement = 'top';

    // calculate top value
    let top = parentLayout.pageY - childLayout.height - caretHeight;
    const topBackup = parentLayout.pageY + parentLayout.height + caretHeight;
    if(
      (placement === 'top' && top < STATUS_BAR_HEIGHT) ||
      (placement === 'bottom' && (topBackup + childLayout.height) <= WINDOW_HEIGHT)
    ) {
      top = topBackup;
      finalPlacement = 'bottom';
    }

    // calculate left value
    let left = Math.max(0, parentLayout.pageX + parentLayout.width / 2 - childLayout.width / 2);
    if(left + childLayout.width > WINDOW_WIDTH) {
      left = Math.max(0, WINDOW_WIDTH - childLayout.width);
    }

    return {
      bodyPos: {left, top},
      caretPos: {
        left: parentLayout.pageX + parentLayout.width / 2 - 4,
        top: finalPlacement === 'top'
          ? (parentLayout.pageY - caretHeight - 3)
          : (parentLayout.pageY + parentLayout.height)
      },
      placement: finalPlacement
    };
  }
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    padding: 5,
    borderRadius: 4
  },
  caret: {
    position: 'absolute',
    fontSize: 10
  },
  text: {
    color: '#FFF'
  }
});
