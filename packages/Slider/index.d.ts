declare module '@rn-components-kit/slider' {

  import React from 'react';
  import {ViewStyle, TextStyle} from 'react-native'

  interface Props {

    /**
     * Allows you to customize style
     */
    style?: ViewStyle;

    /**
     * The minimum value that thumb can slide to
     * default: 0
     */
    min?: number;

    /**
     * The maximum value that thumb can slide to
     * default: 100
     */
    max?: number;

    /**
     * The granularity the slider can step through values. (Must greater than 0, and be divided by (max - min))
     * default: 1
     */
    step?: number;

    /**
     * Determines whether one or two thumbs in slider
     * default: false
     */
    multi?: boolean;

    /**
     * Determines whether slider is horizontal or vertical
     * default: false
     */
    vertical?: boolean;

    /**
     * Determines whether tooltip is shown when dragging the thumb
     * default: true
     */
    showTip?: false;

    /**
     * Allows you to customize tip's container style (e.g. size, backgroundColor)
     */
    tipContainerStyle?: ViewStyle;

    /**
     * Allows you to customize tip's text style (e.g. fontSize, color)
     */
    tipTextStyle?: TextStyle;

    /**
     * Color of track
     * default: '#DDD'
     */
    trackColor?: string;

    /**
     * Color of track's selected part
     * default: '#40A9FF'
     */
    selectedTrackColor?: string;

    /**
     * Allows you to customize thumb's style (e.g. color, size, shadow)
     */
    thumbStyle?: ViewStyle;

    /**
     * Allows you to fully customize thumb module
     */
    renderThumb?: () => React.ReactElement;

    /**
     * Slider will pass value to tipFormatter, and display its return value in tooltip
     * default: value => value.toString();
     */
    tipFormatter?: (value: number) => string;

    /**
     * A callback will be triggered when slider's value changes
     * default: () => {}
     */
    onValueChange?: (value: number) => void;

    /**
     * A callback will be triggered when slider starts to slider
     * default: () => {}
     */
    onBeginSliding?: () => void;

    /**
     * A callback will be triggered when slider ends to slider
     * default: () => {}
     */
    onEndSliding?: () => void;
  }

  export class Slider extends React.PureComponent<Props> {}
}