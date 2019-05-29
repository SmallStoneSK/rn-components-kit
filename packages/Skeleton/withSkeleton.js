import * as React from 'react';

import {
  Easing,
  Animated,
} from 'react-native';

export const withSkeleton = params => WrappedComponent => {

  const {duration = 1000, minOpacity = .2, maxOpacity = 1} = params || {};

  if(minOpacity < 0) {
    console.error('Skeleton error: minOpacity cannot be less than 0');
    return null;
  } else if(maxOpacity > 1) {
    console.error('Skeleton error: maxOpacity cannot be greater than 1');
    return null;
  }

  return class extends React.PureComponent {

    animatedOpacity = new Animated.Value(minOpacity);

    componentDidMount() {
      this.playAnimation();
    }

    componentWillUnmount() {
      this.stopAnimation();
    }

    playAnimation() {
      this.animation = Animated.timing(this.animatedOpacity, {
        easing: Easing.in,
        isInteraction: false,
        duration: duration / 2,
        toValue: this.animatedOpacity._value === maxOpacity ? minOpacity : maxOpacity
      });
      this.animation.start(() => this.playAnimation());
    }

    stopAnimation() {
      this.animation && this.animation.stop();
    }

    render() {
      return <WrappedComponent {...this.props} opacity={this.animatedOpacity}/>;
    }
  };
};
