declare module '@rn-components-kit/progress' {

  import * as React from 'react';
  import {ViewStyle, TextStyle} from 'react-native'

  interface Props {

    /**
     * Allows you to customize style
     */
    style?: ViewStyle;

    /**
     * Determine progress bar's type
     * default: 'line'
     */
    type?: 'line' | 'circle';

    /**
     * Current completion percentage
     * default: 0
     */
    percent?: number;

    /**
     * Status of progress
     * default: 'normal'
     */
    status?: 'normal' | 'active' | 'success' | 'fail';

    /**
     * Line width of progress bar
     * default: 6
     */
    lineWidth?: number;

    /**
     * Highlight color of progress bar
     * default: '#40A9FF'
     */
    color?: string;

    /**
     * Color of progress track
     * default: '#EFEFEF'
     */
    trackColor?: string;

    /**
     * Radius of circle (only works when type is 'circle')
     * default: 50
     */
    radius?: number;

    /**
     * Determines whether to display info area (percent tip and icon)
     * default: true
     */
    showInfo?: boolean;

    /**
     * Allows you to customize percent tip's style (only works when type is 'line')
     */
    lineInfoTextStyle?: TextStyle;

    /**
     * Allows you to customize percent tip's style (only works when type is 'circle')
     */
    circleInfoTextStyle?: TextStyle;

    /**
     * Progress will pass value to percentFormatter, and display its return value in info area
     * default: value => `${value}%`
     */
    percentFormatter?: (value: number) => string;

    /**
     * Allow you to fully customize info area
     */
    renderInfo?: () => React.ReactElement;
  }

  export class Progress extends React.PureComponent<Props> {}
}