import React from 'react';

import {
  View,
  Easing,
  Animated,
  StyleSheet,
} from 'react-native';

import {Text} from '@rn-components-kit/text';
import {Icon} from '@rn-components-kit/icon';
import LinearGradient from 'react-native-linear-gradient';

const COLORS = {
  success: '#52C41A',
  fail: '#F5222D'
};

import {Surface, Shape, Path} from '@react-native-community/art';

export class Progress extends React.PureComponent {

  static defaultProps = {
    type: 'line',
    percent: 0,
    status: 'normal',
    lineWidth: 6,
    color: '#40A9FF',
    trackColor: '#EFEFEF',
    radius: 50,
    showInfo: true,
    lineInfoTextStyle: null,
    circleInfoTextStyle: null,
    percentFormatter: value => `${value}%`
  };

  get percent() {
    const {status, percent} = this.props;
    return status === 'success' ? 100 : percent;
  }

  get status() {
    const {percent, status} = this.props;
    return percent === 100 ? 'success' : status;
  }

  get color() {
    return COLORS[this.status] || this.props.color;
  }

  componentWillMount() {
    this.initAnimatedStyles();
  }

  componentDidMount() {
    if(this.props.type === 'line' && this.status === 'active') {
      this.playActiveAnimation();
    } 
  }

  componentWillReceiveProps(nextProps) {

    // trigger percent changing animation
    if(nextProps.percent !== this.props.percent) {
      this.percentAnimation = Animated.timing(this.percentAnimatedValue, {
        duration: 100,
        isInteraction: false,
        toValue: nextProps.status === 'success' ? 100 : nextProps.percent
      });
      this.percentAnimation.start();
    }
 
    // toggle active animation
    if(nextProps.type === 'line' && nextProps.status !== this.props.status) {
      if(nextProps.status === 'active') {
        this.playActiveAnimation();
      } else {
        this.stopActiveAnimation();
      }
    }
  }

  componentWillUnmount() {
    this.stopActiveAnimation();
    this.percentAnimation && this.percentAnimation.stop();
    this.percentAnimatedValue && this.percentAnimatedValue.removeAllListeners();
  }

  initAnimatedStyles() {
 
    // interpolate line animated styles
    this.percentAnimatedValue = new Animated.Value(this.percent);
    this.lineWrapperStyle = {width: this.percentAnimatedValue.interpolate({inputRange: [0, 100], outputRange: ['0%', '100%']})};
    this.activeAnimatedValue = new Animated.Value(0);
    this.activeLineStyle = {
      backgroundColor: '#FFF',
      ...StyleSheet.absoluteFillObject,
      width: this.activeAnimatedValue.interpolate({inputRange: [0, .2, 1], outputRange: ['0%', '0%', '100%']}),
      opacity: this.activeAnimatedValue.interpolate({inputRange: [0, .2, 1], outputRange: [.1, .6, 0]})
    };

    // ART animation (when type is circle) cannot be interpolated using Animated,
    // so it should be maunally updating path to simulate animation
    if(this.props.type === 'circle') {
      const {radius, lineWidth} = this.props;
      this.setState({circlePath: Helper.getArcPath({radius, percent: this.percent, lineWidth})});
      this.percentAnimatedValue.addListener(({value}) => {
        this.setState({circlePath: Helper.getArcPath({radius, percent: value, lineWidth})});
      });
    }
  }

  playActiveAnimation() {
    this.activeAnimatedValue.setValue(0);
    this.activeAnimation = Animated.sequence([.2, 1].map(toValue => (
      Animated.timing(this.activeAnimatedValue, {
        toValue,
        duration: 2000,
        isInteraction: false,
        easing: Easing.bezier(.23, 1, .32, 1)
      })
    )));
    this.activeAnimation.start(() => this.playActiveAnimation());
  }

  stopActiveAnimation() {
    this.activeAnimation && this.activeAnimation.stop();
  }

  renderLineInfo() {
    const {percent, percentFormatter, lineInfoTextStyle, renderInfo} = this.props;
    const status = this.status;
    if(typeof renderInfo === 'function') {
      return renderInfo();
    } else {
      let component = null;
      if(['normal', 'active'].includes(status)) {
        component = <Text style={[styles.lineInfoText, lineInfoTextStyle]}>{percentFormatter(percent)}</Text>;
      } else if(status === 'fail') {
        component = <Icon size={16} type={'close-circle-fill'} color={COLORS.fail}/>;
      } else if(status === 'success') {
        component = <Icon size={16} type={'check-circle-fill'} color={COLORS.success}/>;
      }
      return (
        <View style={styles.lineInfoWrapper}>
          {component}
        </View>
      );
    }
  }

  renderLine() {
    const {trackColor, gradientColor, lineWidth, showInfo} = this.props;
    const useGradient = ['normal', 'active'].includes(this.status) && gradientColor;
    const commonStyle = {height: lineWidth, borderRadius: lineWidth / 2};
    return (
      <View style={styles.lineContainer}>
        <View style={[commonStyle, {flexGrow: 1, backgroundColor: trackColor}]}>
          <Animated.View style={this.lineWrapperStyle}>
            {useGradient ? (
              <LinearGradient
                end={{x: 1, y: 0}}
                style={commonStyle}
                start={{x: 0, y: 0}}
                colors={Object.values(gradientColor)}
                locations={Object.keys(gradientColor)}
              />
            ) : (
              <View style={[commonStyle, {backgroundColor: this.color}]}/>
            )}
            {this.status === 'active' && <Animated.View style={[commonStyle, this.activeLineStyle]}/>}
          </Animated.View>
        </View>
        {showInfo && this.renderLineInfo()}
      </View>
    );
  }

  renderCircleInfo() {
    let component = null;
    const {percent, percentFormatter, circleInfoTextStyle, renderInfo} = this.props;
    const status = this.status;
    if(typeof renderInfo === 'function') {
      component = renderInfo();
    } else {
      if(['normal', 'active'].includes(status)) {
        component = <Text style={[styles.circleInfoText, circleInfoTextStyle]}>{percentFormatter(percent)}</Text>;
      } else if(status === 'fail') {
        component = <Icon size={25} type={'close'} color={COLORS.fail}/>;
      } else if(status === 'success') {
        component = <Icon size={25} type={'check'} color={COLORS.success}/>;
      }
    }
    return (
      <View style={styles.circleInfoWrapper}>
        {component}
      </View>
    );
  }

  renderCircle() {
    const {circlePath} = this.state;
    const {radius, lineWidth, trackColor} = this.props;
    const size = 2 * radius;
    return (
      <View style={[styles.circleContainer, {width: size, height: size, borderRadius: radius, borderWidth: lineWidth, borderColor: trackColor}]}>
        <Surface width={size} height={size}>
          <Shape
            d={circlePath}
            stroke={this.color}
            strokeCap={'round'}
            strokeWidth={lineWidth}
          />
        </Surface>
        {this.renderCircleInfo()}
      </View>
    );
  }

  render() {
    let component = null;
    switch(this.props.type) {
    case 'line':
      component = this.renderLine();
      break;
    case 'circle':
      component = this.renderCircle();
      break;
    }
    return (
      <View style={this.props.style}>
        {component}
      </View>
    );
  }
}

const Helper = {
  getArcPath({radius, lineWidth, percent}) {
    const delta = lineWidth / 2;
    let rad = percent / 50 * Math.PI;
    const path = new Path().moveTo(radius, delta);
    radius -= delta;
    if(percent <= 25) {
      path.arc(radius * Math.sin(rad), radius * (1 - Math.cos(rad)), radius, radius, false, false);
    } else if(percent <= 50) {
      rad -= Math.PI / 2;
      path.arc(radius * Math.cos(rad), radius * (1 + Math.sin(rad)), radius, radius, false, false);
    } else if(percent <= 75) {
      rad -= Math.PI;
      path
        .arc(0, 2 * radius, radius, radius, false, false)
        .arc(-radius * Math.sin(rad), -radius * (1 - Math.cos(rad)), radius, radius, false, false);
    } else {
      rad -= Math.PI * 1.5;
      path
        .arc(0, 2 * radius, radius, radius, false, false)
        .arc(-radius * Math.cos(rad), -radius * (1 + Math.sin(rad)), radius, radius, false, false);
    }
    return path;
  }
};

const styles = StyleSheet.create({
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  lineInfoWrapper: {
    alignItems: 'center',
    marginLeft: 10,
    minWidth: 30
  },
  lineInfoText: {
    fontSize: 13,
    color: '#333'
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleInfoWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleInfoText: {
    fontSize: 16,
    color: '#333'
  }
});
