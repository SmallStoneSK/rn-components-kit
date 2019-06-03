export const withSpin = WrappedComponent => {
  return class extends WrappedComponent {
    componentWillMount() {
      this.initAnimatedStyles();
      super.componentWillMount && super.componentWillMount();
    }
  
    componentDidMount() {
      this.playAnimation();
      super.componentDidMount && super.componentDidMount();
    }
  
    componentWillUnmount() {
      this.stopAnimation();
      super.componentWillUnmount && super.componentWillUnmount();
    }

    stopAnimation() {
      this.animation && this.animation.stop();
      super.stopAnimation && super.stopAnimation();
    }
  };
};
