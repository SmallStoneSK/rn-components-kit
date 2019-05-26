declare module '@rn-components-kit/badge' {

  import {SFC} from 'react';
  import React, {ViewStyle} from 'react-native'

  interface Props {

    /**
     * Allow you to customize style
     */
    style?: ViewStyle;

    /**
     * Determines whether it is rendered as a dot without number in it
     * default: true
     */
    dot?: boolean;

    /**
     * Determines the dot's color
     * default: '#F5222D'
     */
    color?: string;

    /**
     * If you specify the count prop, you should set dot prop `false` as well (they are two exclusive modes).
     * And in this case, this number would be rendered at the center of dot
     * default: 0
     */
    count?: number;

    /**
     * Max count to show. If count is greater than overflowCount, it will be displayed as `${overflowCount}+`
     * default: 99
     */
    overflowCount?: number;

    /**
     * Determines whether it should be shown when count is 0
     * default: false
     */
    showZero?: boolean;

    /**
     * If you are not satisfied with the dot's position (upper-right corner), you can adjust it through offsetX/offsetY
     * default: 0
     */
    offsetX?: number;

    /**
     * If you are not satisfied with the dot's position (upper-right corner), you can adjust it through offsetX/offsetY
     * default: 0
     */
    offsetY?: number;
  }

  export const Badge: SFC<Props>;
}