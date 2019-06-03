declare module '@rn-components-kit/spin' {

  import React from 'react';
  import {ViewStyle} from 'react-native'

  interface BaseSpinProps {

    /**
     * Allows you to customize style
     */
    style?: ViewStyle;

    /**
     * Zooming in/out scale of component
     * default: 1
     */
    scale?: number;

    /**
     * Duration of a looped animation
     */
    duration?: number;
  }

  interface CommonSpinProps extends BaseSpinProps {
    /**
     * Color of elements inside component
     * default: '#40A9FF'
     */
    color?: string;
  }

  interface RainbowProps extends BaseSpinProps {
    /**
     * Five colors passed to rainbow
     * default: ['#EA7671', '#81D2B4', '#A963B8', '#70ACF6', '#F4B860']
     */
    colors?: string[];
  }

  interface WaveProps extends CommonSpinProps {
    /**
     * Type of wave
     * default: 'rect'
     */
    type?: 'rect' | 'dot';
  }

  export class Ladder extends React.PureComponent<CommonSpinProps> {}
  export class Rainbow extends React.PureComponent<RainbowProps> {}
  export class Wave extends React.PureComponent<WaveProps> {}
  export class RollingCubes extends React.PureComponent<CommonSpinProps> {}
  export class ChasingCircles extends React.PureComponent<CommonSpinProps> {}
  export class Pulse extends React.PureComponent<CommonSpinProps> {}
  export class FlippingCard extends React.PureComponent<CommonSpinProps> {}
}