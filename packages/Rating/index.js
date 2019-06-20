import React from 'react';

import {
  View,
  Animated,
  StyleSheet,
  PanResponder
} from 'react-native';

import {Icon} from '@rn-components-kit/icon';

export class Rating extends React.PureComponent {

  static defaultProps = {
    step: 1,
    total: 5,
    value: 0,
    iconGap: 4,
    iconSize: 25,
    disabled: false,
    activeIconType: 'star-fill',
    activeIconColor: '#FADB14',
    inActiveIconType: 'star-fill',
    inActiveIconColor: '#E8E8E8',
    onValueChange: () => {}
  };

  eventSeq = 1;
  value = this.props.value;

  componentWillMount() {
    this.initPanResponder();
    this.initAnimatedStyle();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.value !== this.value) {
      this.value = nextProps.value;
      this.posValue.setValue(this.valToPos(nextProps.value));
    }
  }

  initPanResponder() {
    const {disabled} = this.props;
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => !disabled,
      onStartShouldSetPanResponderCapture: () => !disabled,
      onMoveShouldSetPanResponder: () => !disabled,
      onMoveShouldSetPanResponderCapture: () => !disabled,
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: this.onUpdate,
      onPanResponderMove: this.onUpdate
    });
  }

  initAnimatedStyle() {
    const {value, total, iconGap, iconSize} = this.props;
    const totalLength = total * iconSize + (total - 1) * iconGap;
    this.posValue = new Animated.Value(this.valToPos(value));
    this.activeContainerStyle = {
      zIndex: 1,
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      overflow: 'hidden',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      width: this.posValue.interpolate({
        inputRange: [0, totalLength],
        outputRange: [0, totalLength],
        extrapolate: 'clamp'
      })
    };
  }

  posToVal(pos) {
    const {step, total, iconGap, iconSize} = this.props;
    const base = Math.floor(pos / (iconSize + iconGap));
    const rest = Math.min(pos - base * (iconSize + iconGap), iconSize);
    const newValue = base + Math.ceil(rest / (iconSize * step)) * step;
    return Helper.clamp(+(newValue).toFixed(1), 0, total);  // #fix 0.1+0.2=0.300000004
  }

  valToPos(val) {
    const {iconGap, iconSize} = this.props;
    const base = Math.floor(val);
    const rest = val - base;
    return base * (iconGap + iconSize) + rest * iconSize;
  }

  onUpdate = evt => {
    const eventSeq = ++this.eventSeq;
    const currentPageX = evt.nativeEvent.pageX;
    this.containerRef && this.containerRef.measure((x, y, width, height, pageX) => {
      if(eventSeq !== this.eventSeq) return;
      const newPos = currentPageX - pageX;
      const newValue = this.posToVal(newPos);
      if(newValue !== this.value) {
        this.value = newValue;
        this.props.onValueChange(newValue);
        this.posValue.setValue(this.valToPos(newValue));
      }
    });
  }

  render() {
    const {style, total, iconGap, iconSize, activeIconType, activeIconColor, inActiveIconType, inActiveIconColor} = this.props;
    const starArray = new Array(total).fill(1);
    return (
      <View
        collapsable={false}
        style={[style, styles.container]}
        ref={_ => this.containerRef = _}
        {...this.panResponder.panHandlers}
      >
        {starArray.map((_, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <View style={{width: iconGap}}/>}
            <Icon size={iconSize} type={inActiveIconType} color={inActiveIconColor}/>
          </React.Fragment>
        ))}
        <Animated.View style={this.activeContainerStyle}>
          {starArray.map((_, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <View style={{width: iconGap}}/>}
              <Icon size={iconSize} type={activeIconType} color={activeIconColor}/>
            </React.Fragment>
          ))}
        </Animated.View>
      </View>
    );
  }
}

const Helper = {
  clamp(value, min, max) {
    return min < max
      ? (value < min ? min : value > max ? max : value)
      : (value < max ? max : value > min ? min : value);
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
});
