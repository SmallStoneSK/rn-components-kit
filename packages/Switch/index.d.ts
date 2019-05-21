declare module '@rn-components-kit/switch' {

  import React from 'react';
  import {ViewStyle} from 'react-native'

  interface Props {

    /**
     * Allows you to custom style
     */
    style?: ViewStyle;

    /**
     * Two types (cupertino for IOS and material for Android)
     * default: 'cupertino'
     */
    type?: 'cupertino' | 'material';

    /**
     * Determines whether switch is on when initial rendering
     * default: false
     */
    value?: boolean;

    /**
     * Determines whether switch is touchabled
     * default: false
     */
    disabled?: boolean;

    /**
     * Width of switch
     * default: 40
     */
    width?: number;

    /**
     * Height of switch's track
     * default: 20
     */
    height?: number;

    /**
     * Radius of thumb
     * default: 8
     */
    thumbRadius?: number;

    /**
     * Color of thumb
     * default: '#FFF'
     */
    thumbColor?: string;

    /**
     * Color of track when switch is "on" status
     * default: '#79D472'
     */
    trackOnColor?: string;

    /**
     * Color of track when switch is "off" status
     * default: '#CCC'
     */
    trackOffColor?: string;

    /**
     * A callback will be triggered when switch's status changes
     * default: () => {}
     */
    onValueChange?: (value: boolean) => void;
  }

  export class Switch extends React.PureComponent<Props> {}
}