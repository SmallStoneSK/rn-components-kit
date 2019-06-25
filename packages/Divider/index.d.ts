declare module '@rn-components-kit/divider' {

  import * as React from 'react';
  import {ViewStyle} from 'react-native'

  interface Props {

    /**
     * Allow you to customize style
     */
    style?: ViewStyle;

    /**
     * Determines the divider's color
     * default: '#DFDFDF'
     */
    color?: string;

    /**
     * Determines the divider's orientation
     * default: 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';

    /**
     * Space between two sides on cross axis
     * default: 0
     */
    margin?: number;

    /**
     * Space inside two sides on main axis
     * default: 0
     */
    padding?: number;
  }

  export const Divider: React.SFC<Props>;
}