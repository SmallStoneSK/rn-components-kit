import * as React from 'react';

import {
  View,
  Animated,
  StyleSheet
} from 'react-native';

import {withSkeleton} from './withSkeleton';

const BG_COLOR = '#EFEFEF';

class SkeletonBase extends React.PureComponent {

  static defaultProps = {
    title: true,
    avatar: true,
    paragraph: true
  };

  constructor(props) {
    super(props);
    if(!props.title && !props.avatar && !props.paragraph) {
      console.error('Skeleton error: title, avatar and paragraph cannot be all false');
    }
  }

  get avatarProps() {
    const {avatar} = this.props;
    return avatar === true ? {size: 25, shape: 'circle'} : avatar;
  }

  get avatarStyle() {
    const {opacity} = this.props;
    const {size = 25, shape = 'circle', style} = this.avatarProps;
    return {
      width: size,
      height: size,
      marginRight: 10,
      backgroundColor: BG_COLOR,
      borderRadius: shape === 'circle' ? (size / 2) : 4,
      style,
      opacity
    };
  }

  get titleProps() {
    const {title} = this.props;
    return title === true ? {width: 100, height: 15} : title;
  }

  get titleStyle() {
    const {opacity} = this.props;
    const {width = 100, height = 15, style} = this.titleProps;
    return {
      width,
      height,
      backgroundColor: BG_COLOR,
      style,
      opacity
    };
  }

  renderAvatar() {
    const {avatar} = this.props;
    return avatar && <Animated.View style={this.avatarStyle}/>;
  }

  renderTitle() {
    const {title} = this.props;
    return title && <Animated.View style={this.titleStyle}/>;
  }

  renderParagraph() {

    if(!this.props.paragraph) {
      return null;
    }

    const {opacity, paragraph} = this.props;
    const {style, rows = 3, widths = [], heights = []} = paragraph || {};

    return (
      <View style={style}>
        {new Array(rows).fill(1).map((item, index) => (
          <Animated.View key={index} style={[
            widths[index] && {width: widths[index]},
            {opacity, marginTop: 10, height: heights[index] || 15, backgroundColor: BG_COLOR}
          ]}/>
        ))}
      </View>
    );
  }

  render() {
    const {style} = this.props;
    return (
      <View style={[styles.container, style]}>
        <View style={styles.infoWrapper}>
          {this.renderAvatar()}
          {this.renderTitle()}
        </View>
        {this.renderParagraph()}
      </View>
    );
  }
}

export const Skeleton = withSkeleton({
  minOpacity: .2,
  maxOpacity: 1,
  duration: 1000
})(SkeletonBase);

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  infoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
