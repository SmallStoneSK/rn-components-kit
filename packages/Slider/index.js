import * as React from 'react';

import {
  View,
  Platform,
  StyleSheet,
  PanResponder
} from 'react-native';

import {Text} from '@rn-components-kit/text';

export class Slider extends React.PureComponent {

  static defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    multi: false,
    vertical: false,
    trackColor: '#DDD',
    selectedTrackColor: '#40A9FF',
    showTip: 'onTap',
    tipFormatter: val => val,
    onValueChange: () => {},
    onBeginSliding: () => {},
    onEndSliding: () => {}
  };

  thumbRadius = 0;
  sliderLength = 0;
  panResponder1 = {};
  panResponder2 = {};
  state = {
    ready: false,
    isDraggingThumb1: false,
    isDraggingThumb2: false,
    ...this.initSliderValues()
  };

  constructor(props) {
    super(props);
    const {min, max, step} = props;
    if(step <= 0 || (max - min) % step !== 0) {
      console.error('Slider error: step must be greater than 0, and be divided by (max - min)');
    }
  }

  componentWillMount() {
    this.initPanResponders();
  }

  initSliderValues() {
    
    const {multi, min, max, defaultValue} = this.props;

    // only one thumb
    if(!multi) {
      return {
        value1: typeof defaultValue === 'number' ? defaultValue : min,
        value2: Infinity
      };
    }

    // two thumbs
    if(Array.isArray(defaultValue)) {
      return {
        value1: defaultValue[0] || min,
        value2: defaultValue[1] || max
      };
    } else {
      return {value1: min, value2: max};
    }
  }

  initPanResponders() {
    // init panResponder for thumb1 and thumb2
    [1, 2].forEach(num => {
      this[`panResponder${num}`] = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onStartShouldSetPanResponderCapture: () => true,
        onMoveShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderTerminationRequest: () => false,
        onPanResponderGrant: () => this.onPanResponderGrant(num),
        onPanResponderMove: (evt, gestureState) => this.onPanResponderMove(num, gestureState),
        onPanResponderRelease: () => this.onPanResponderRelease(),
        onShouldBlockNativeResponder: () => true
      });
    });
  }

  val2Pos(value) {
    const {min, max} = this.props;
    return value / (max - min) * this.sliderLength;
  }

  onLayout = evt => {
    const {vertical} = this.props;
    this.setState({ready: true});
    this.sliderLength = evt.nativeEvent.layout[vertical ? 'height' : 'width'];
    this.thumbRadius = evt.nativeEvent.layout[vertical ? 'width' : 'height'] / 2;
  };

  onPanResponderGrant = num => {
    this.startValue1 = this.state.value1;
    this.startValue2 = this.state.value2;
    this.props.onBeginSliding();
    this.setState({[`isDraggingThumb${num}`]: true});
  }

  onPanResponderMove = (thumbNum, gestureState) => {

    const {multi, min, max, step, vertical, onValueChange} = this.props;
    const {value1, value2, isDraggingThumb1, isDraggingThumb2} = this.state;
    const interval = step / (max - min) * this.sliderLength;
    const deltaValue = (vertical ? -1 : 1) * Math.round(gestureState[vertical ? 'dy' : 'dx'] / interval) * step;
    const isForward = vertical ? (gestureState.vy < 0) : (gestureState.vx > 0);
 
    // according current position and calculate current value, then update values in state
    let changeValue = null;
    if(thumbNum === 1) {
      const curValue = Helper.clamp(this.startValue1 + deltaValue, min, max);
      if(curValue < this.startValue2 || (isForward && curValue === this.startValue2)) {
        changeValue = multi ? [curValue, value2] : curValue;
        this.setState({value1: curValue});
        !isDraggingThumb1 && this.setState({isDraggingThumb1: true, isDraggingThumb2: false});
      } else {
        changeValue = multi ? [value1, curValue] : curValue;
        this.setState({value2: curValue});
        !isDraggingThumb2 && this.setState({isDraggingThumb1: false, isDraggingThumb2: true});
      }
    } else {
      const curValue = Helper.clamp(this.startValue2 + deltaValue, min, max);
      if(curValue > this.startValue1 || (!isForward && curValue === this.startValue1)) {
        changeValue = multi ? [value1, curValue] : curValue;
        this.setState({value2: curValue});
        !isDraggingThumb2 && this.setState({isDraggingThumb1: false, isDraggingThumb2: true});
      } else {
        changeValue = multi ? [curValue, value2] : curValue;
        this.setState({value1: curValue});
        !isDraggingThumb1 && this.setState({isDraggingThumb1: true, isDraggingThumb2: false});
      }
    }

    // notify slider value changing
    changeValue && onValueChange(changeValue);
  }

  onPanResponderRelease = () => {
    this.props.onEndSliding();
    this.setState({isDraggingThumb1: false, isDraggingThumb2: false});
  }

  renderTracks() {
    const {ready, value1, value2} = this.state;
    const {multi, vertical, min, trackColor, selectedTrackColor} = this.props;
    const start = multi ? this.val2Pos(value1 - min) : 0;
    const length = this.val2Pos(multi ? (value2 - value1) : (value1 - min));
    return (
      <View style={styles.trackWrapper}>
        <View style={[
          {backgroundColor: trackColor},
          styles[`${vertical ? 'vertical' : 'horizontal'}Track`]
        ]}/>
        {ready && (
          <View style={[
            {
              backgroundColor: selectedTrackColor,
              [vertical ? 'bottom' : 'left']: start,
              [vertical ? 'height' : 'width']: length
            },
            styles[`selected${vertical ? 'Vertical' : 'Horizontal'}Track`]
          ]}/>
        )}
      </View>
    );
  }

  renderThumb(num) {
    const {value1, value2} = this.state;
    const {min, max, vertical, thumbStyle, renderThumb} = this.props;
    const diff = max - min;
    const style = customizedThumb ? [] : [styles.thumb, thumbStyle];
    const customizedThumb = typeof renderThumb === 'function';
    if(vertical) {
      if(num === 1) {
        style.push({bottom: this.thumbRadius, transform: [{translateY: -(value1 - min) / diff * this.sliderLength}]});
      } else {
        style.push({top: this.thumbRadius, transform: [{translateY: (max - value2) / diff * this.sliderLength}]});
      }
    } else {
      if(num === 1) {
        style.push({left: -this.thumbRadius, transform: [{translateX: (value1 - min) / diff * this.sliderLength}]});
      } else {
        style.push({right: -this.thumbRadius, transform: [{translateX: -(max - value2) / diff * this.sliderLength}]});
      }
    }
    return (
      <View style={style} {...this[`panResponder${num}`].panHandlers}>
        {customizedThumb && renderThumb()}
      </View>
    );
  }

  renderThumbs() {
    const {ready} = this.state;
    const {multi, vertical} = this.props;
    return (
      <View style={[
        styles.thumbWrapper,
        !ready && styles.hidden,
        vertical && {height: '100%'},
        {flexDirection: vertical ? 'column-reverse' : 'row'}
      ]}>
        {this.renderThumb(1)}
        {multi && this.renderThumb(2)}
      </View>
    );
  }

  renderTips() {

    const {isDraggingThumb1, isDraggingThumb2} = this.state;
    if(
      this.props.showTip === 'never' ||
      (this.props.showTip === 'onTap' && !isDraggingThumb1 && !isDraggingThumb2)
    ) {
      return null;
    }

    const {min, vertical, tipFormatter, tipContainerStyle, tipTextStyle} = this.props;
    return [1, 2].map(num => {
      const value = this.state[`value${num}`];
      return value !== Infinity && (
        <View key={num} style={[{position: 'absolute', bottom: 0}, vertical && {alignSelf: 'center'}]}>
          <View style={[
            styles.tipContainer,
            tipContainerStyle,
            vertical ? {
              flexWrap: 'nowrap',
              transform: [
                {translateY: -this.val2Pos(value - min) -this.thumbRadius - 5}
              ]
            } : {
              left: '-50%',
              transform: [
                {translateX: this.val2Pos(value - min)},
                {translateY: -this.thumbRadius * 2 - 5}
              ]
            }
          ]}>
            <Text style={[styles.tipText, tipTextStyle]}>{tipFormatter(value)}</Text>
          </View>
        </View>
      );
    });
  }

  render() {
    const {style} = this.props;
    return (
      <View style={[style, styles.container]} onLayout={this.onLayout}>
        {this.renderTracks()}
        {this.renderTips()}
        {this.renderThumbs()}
      </View>
    );
  }
}

const Helper = {
  clamp(val, min, max) {
    return min < max
      ? (val < min ? min : val > max ? max : val)
      : (val < max ? max : val > min ? min : val);
  }
};

const shadowStyle = Platform.select({
  android: {
    elevation: 2
  },
  ios: {
    shadowColor: '#000',
    shadowOpacity: .15,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5
  }
});

const styles = StyleSheet.create({
  container: {
    overflow: 'visible'
  },
  hidden: {
    opacity: 0
  },
  trackWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
    ...StyleSheet.absoluteFillObject
  },
  horizontalTrack: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 4,
    borderRadius: 2
  },
  selectedHorizontalTrack: {
    position: 'absolute',
    height: 4,
    borderRadius: 2
  },
  verticalTrack: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 4,
    borderRadius: 2
  },
  selectedVerticalTrack: {
    position: 'absolute',
    width: 4,
    borderRadius: 2
  },
  thumbWrapper: {
    justifyContent: 'space-between'
  },
  thumb: {
    alignItems: 'center',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFF',
    ...shadowStyle
  },
  tipContainer: {
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,.7)',
    ...shadowStyle
  },
  tipText: {
    fontSize: 13,
    color: '#FFF'
  }
});
