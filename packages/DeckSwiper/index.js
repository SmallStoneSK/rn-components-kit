import React from 'react';

import {
  View,
  Animated,
  Dimensions,
  StyleSheet,
  PanResponder
} from 'react-native';

const THRESHOLD = .2;
const DELTA_Y = 5;
const CARD2_SCALE = .975;
const CARD3_SCALE = .95;
const {width: WINDOW_WIDTH} = Dimensions.get('window');

export class DeckSwiper extends React.PureComponent {

  static defaultProps = {
    data: [],
    onSwipeLeft: () => {},
    onSwipeRight: () => {},
    onBeginDragging: () => {},
    onEndDragging: () => {}
  };

  isAnimating = false;
  state = {curIndex: 0};

  componentWillMount() {
    this.initCardStyles();
    this.initPanResponder();
  }

  interpolate(inputRange, outputRange) {
    return this.animatedValue.interpolate({inputRange, outputRange, extrapolate: 'clamp'});
  }

  initCardStyles() {
    const {cardWidth, cardHeight} = this.props;
    this.animatedValue = new Animated.Value(0);
    const deltaY1 = DELTA_Y + cardHeight * (1 - CARD2_SCALE) / 2;
    const deltaY2 = DELTA_Y * 2 + cardHeight * (1 - CARD3_SCALE) / 2;
    const commonStyle = {position: 'absolute', width: cardWidth, height: cardHeight};
    this.card1Style = {
      ...commonStyle,
      zIndex: 4,
      opacity: this.interpolate([-1, 0, 1], [.5, 1, .5]),
      transform: [
        {rotate: this.interpolate([-1, 0, 1], ['-60deg', '0deg', '60deg'])},
        {translateX: this.interpolate([-1, 0, 1], [-cardWidth * 2, 0, cardWidth * 2])},
        {translateY: this.interpolate([-1, 0, 1], [-cardHeight / 2, 0, -cardHeight / 2])},
      ]
    };
    this.card2Style = {
      ...commonStyle,
      zIndex: 3,
      transform: [
        {scale: this.interpolate([-1, 0, 1], [1, CARD2_SCALE, 1])},
        {translateY: this.interpolate([-1, 0, 1], [0, deltaY1, 0])},
      ]
    };
    this.card3Style = {
      ...commonStyle,
      zIndex: 2,
      transform: [
        {scale: this.interpolate([-1, 0, 1], [CARD2_SCALE, CARD3_SCALE, CARD2_SCALE])},
        {translateY: this.interpolate([-1, 0, 1], [deltaY1, deltaY2, deltaY1])},
      ]
    };
    this.card4Style = {
      ...commonStyle,
      zIndex: 1,
      transform: [
        {scale: CARD3_SCALE},
        {translateY: deltaY2}
      ]
    };
  }

  initPanResponder() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onStartShouldSetPanResponderCapture: () => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return !this.isAnimating && Math.abs(gestureState.dx) > 5;
      },
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        return !this.isAnimating && Math.abs(gestureState.dx) > 5;
      },
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: () => {
        this.props.onBeginDragging();
      },
      onPanResponderMove: (evt, gestureState) => {
        this.animatedValue.setValue(gestureState.dx / WINDOW_WIDTH);
      },
      onPanResponderRelease: () => {

        // trigger onEndDragging
        this.props.onEndDragging();

        // calculate this.animatedValue's toValue
        let toValue = 0;
        if(this.animatedValue._value <= -THRESHOLD) {
          toValue = -1;
        } else if(this.animatedValue._value >= THRESHOLD) {
          toValue = 1;
        }

        // trigger animation
        this.isAnimating = true;
        Animated.spring(this.animatedValue, {toValue}).start(() => {
          this.isAnimating = false;
          if(toValue !== 0) {
            this.animatedValue.setValue(0);
            const callback = toValue === -1 ? 'onSwipeLeft' : 'onSwipeRight';
            this.props[callback](this.state.curIndex, this.state.curIndex + 1);
            this.setState({curIndex: this.state.curIndex + 1});
          }
        });
      }
    });
  }

  prev() {
    const {curIndex} = this.state;
    if(!this.isAnimating && curIndex > 0) {
      this.isAnimating = true;
      this.setState({curIndex: curIndex - 1}, () => {
        this.animatedValue.setValue(-1);
        Animated.spring(this.animatedValue, {toValue: 0}).start(() => {
          this.isAnimating = false;
        });
      });
    }
  }

  next() {
    const {data} = this.props;
    const {curIndex} = this.state;
    if(!this.isAnimating && curIndex < data.length) {
      this.isAnimating = true;
      Animated.spring(this.animatedValue, {toValue: 1}).start(() => {
        this.isAnimating = false;
        this.animatedValue.setValue(0);
        this.setState({curIndex: curIndex + 1});
      });
    }
  }

  renderCards() {
    const {curIndex} = this.state;
    const {data, renderCard, renderBottom} = this.props;
    const styles = ['card1Style', 'card2Style', 'card3Style', 'card4Style'];
    const cards = data.slice(curIndex, curIndex + 4).map((item, index) => (
      <Animated.View
        key={data.indexOf(item)}
        style={this[styles[index]]}
        {...this.panResponder.panHandlers}
      >
        {renderCard({item, index: data.indexOf(item)})}
      </Animated.View>
    ));
    if(cards.length < 4) {
      const index = cards.length;
      cards.push((
        <Animated.View key={'bottom'} style={this[styles[index]]}>
          {renderBottom()}
        </Animated.View>
      ));
    }
    return cards;
  }

  render() {
    const {style, cardHeight} = this.props;
    return (
      <View style={[styles.container, {height: cardHeight}, style]}>
        {this.renderCards()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
