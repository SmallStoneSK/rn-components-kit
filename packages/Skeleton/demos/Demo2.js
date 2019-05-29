import React from 'react';

import {
  View,
  Animated,
  StyleSheet
} from 'react-native';

import {withSkeleton} from '../index';
import {Divider} from '@rn-components-kit/divider';

@withSkeleton()
class Skeleton1 extends React.PureComponent {

  renderImage() {
    const {opacity} = this.props;
    return <Animated.View style={[skeleton1Styles.imageBlock, {opacity}]}/>;
  }

  renderParagraph() {
    const {opacity} = this.props;
    return (
      <View>
        <Animated.View style={[skeleton1Styles.paragraphBlock, {opacity, width: 120, backgroundColor: 'rgba(255,69,0,.2)'}]}/>
        <Animated.View style={[skeleton1Styles.paragraphBlock, {opacity}]}/>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.renderImage()}
        {this.renderParagraph()}
      </View>
    );
  }
}

@withSkeleton()
class Skeleton2 extends React.PureComponent {

  renderImage() {
    const {opacity} = this.props;
    return <Animated.View style={[skeleton2Styles.imageBlock, {opacity}]}/>;
  }

  renderParagraph() {
    const {opacity} = this.props;
    return (
      <View style={{flex: 1}}>
        <Animated.View style={[skeleton2Styles.paragraphBlock, {opacity, marginTop: 0}]}/>
        <Animated.View style={[skeleton2Styles.paragraphBlock, {opacity}]}/>
        <Animated.View style={[skeleton2Styles.paragraphBlock, {opacity, width: 150}]}/>
      </View>
    );
  }

  render() {
    return (
      <View style={skeleton2Styles.container}>
        {this.renderImage()}
        {this.renderParagraph()}
      </View>
    );
  }
}

@withSkeleton()
class Skeleton3 extends React.PureComponent {

  renderImage() {
    const {opacity} = this.props;
    return (
      <View style={skeleton3Styles.infoWrapper}>
        <Animated.View style={[skeleton3Styles.imageBlock, {opacity, backgroundColor: 'rgba(255,105,180,.2)'}]}/>
        <Animated.View style={[skeleton3Styles.imageBlock, {opacity, backgroundColor: 'rgba(0,255,255,.2)'}]}/>
      </View>
    );
  }

  renderParagraph() {
    const {opacity} = this.props;
    return (
      <View>
        <Animated.View style={[skeleton3Styles.paragraphBlock, {opacity}]}/>
        <Animated.View style={[skeleton3Styles.paragraphBlock, {opacity}]}/>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.renderImage()}
        {this.renderParagraph()}
      </View>
    );
  }
}

const Demo2 = () => (
  <View style={styles.container}>
    <Skeleton1/>
    <Divider margin={15} color={'#CCC'}/>
    <Skeleton2/>
    <Divider margin={15} color={'#CCC'}/>
    <Skeleton3/>
  </View>
);

export {
  Demo2
};

const styles = StyleSheet.create({
  container: {
    padding: 15
  }
});

const skeleton1Styles = StyleSheet.create({
  imageBlock: {
    height: 100,
    borderRadius: 4,
    backgroundColor: '#EFEFEF'
  },
  paragraphBlock: {
    marginTop: 15,
    height: 15,
    backgroundColor: '#EFEFEF'
  }
});

const skeleton2Styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  imageBlock: {
    marginRight: 15,
    width: 75,
    height: 75,
    backgroundColor: '#EFEFEF'
  },
  paragraphBlock: {
    marginTop: 15,
    height: 15,
    backgroundColor: '#EFEFEF'
  }
});

const skeleton3Styles = StyleSheet.create({
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imageBlock: {
    width: 150,
    height: 40,
  },
  paragraphBlock: {
    marginTop: 15,
    height: 15,
    backgroundColor: '#EFEFEF'
  }
});
