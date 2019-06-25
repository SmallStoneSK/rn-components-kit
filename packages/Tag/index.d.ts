declare module '@rn-components-kit/tag' {

  import * as React from 'react';
  import {ViewStyle} from 'react-native'

  interface Props {

    /**
     * Allow you to customize style
     */
    style?: ViewStyle;

    /**
     * Text inside tag to display
     */
    text: string;

    /**
     * Determines the tag's type (outline or solid)
     * default: 'outline'
     */
    type?: 'outline' | 'solid';

    /**
     * Determines the tag's color
     * default: '#333'
     */
    color?: string;

    /**
     * Determines the fontSize of tag's text
     * default: 14
     */
    fontSize?: number;

    /**
     * Padding value in the horizontal orientation
     * default: 4
     */
    paddingHorizontal?: number;

    /**
     * Padding value in the vertical orientation
     * default: 1
     */
    paddingVertical?: number;

    /**
     * Determines the border radius value of tag
     * default: 3
     */
    borderRadius?: number;

    /**
     * Color of tag's border. If it is not set, the default is the same as color
     */
    borderColor?: string;

    /**
     * Determines whether an animation enabled when the tag is closed
     * default: false
     */
    animatedWhenDisappear?: boolean;

    /**
     * Determines how long the disappearing animation will take when tag is closed. (ms)
     * default: 300
     */
    animationDuration?: number;

    /**
     * Determines whether a tag can be closed
     * default: false
     */
    closable?: boolean;

    /**
     * A callback will be triggered when the tag is closed
     */
    onClose?: (text: string) => void;
  }

  export class Tag extends React.PureComponent<Props> {}
}