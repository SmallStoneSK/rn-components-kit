declare module '@rn-components-kit/rating' {

  import React from 'react';
  import {ViewStyle} from 'react-native';

  interface Props {

    /**
     * Allow you to customize style
     */
    style?: ViewStyle;

    /**
     * The granularity that Rating can step through values
     * default: 1
     */
    step?: 0.1 | 0.2 | 0.5 | 1;

    /**
     * Count of star
     * default: 5
     */
    total?: number;

    /**
     * Current count of active star
     * default: 0
     */
    value?: number;

    /**
     * Space between stars
     * default: 4
     */
    iconGap?: number;

    /**
     * Size of star icon
     * default: 20
     */
    iconSize?: number;

    /**
     * Determines whether value can be changed
     * default: false
     */
    disabled?: boolean;

    /**
     * Icon type when it is active
     * default: 'star-fill'
     */
    activeIconType?: string;

    /**
     * Icon color when it is active
     * default: '#FADB14'
     */
    activeIconColor?: string;

    /**
     * Icon type when it is inactive
     * default: 'star-fill'
     */
    inActiveIconType?: string;

    /**
     * Icon color when it is inactive
     * default: '#E8E8E8'
     */
    inActiveIconColor?: string;

    /**
     * A callback will be triggered when Rating's value changes
     * default: () => {}
     */
    onValueChange?: (value: number) => void;
  }

  export class Rating extends React.PureComponent<Props> {}
}