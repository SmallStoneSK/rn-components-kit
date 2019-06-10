declare module '@rn-components-kit/swipe-out' {

  import React from 'react';
  import {ViewStyle} from 'react-native';

  interface Option {

    /**
     * Text to display in button
     */
    title: string;

    /**
     * Background color of button
     */
    color?: string;

    /**
     * Callback will be triggered when pressing the button
     */
    onPress: () => void;
  }

  interface Props {

    /**
     * Allow you to customize style
     */
    style?: ViewStyle;

    /**
     * The config for left hidden part. It supports followings:
     * 1. function[() => React.ReactElement]: allows you to fully customize the hidden component
     * 2. object[Option]: a pre-setted style for button, you need to specify title, color and onPress
     * 3. array[Option[]]: multiple buttons
     */
    left?: () => React.ReactElement | Option | Option[] | null;

    /**
     * The config for right hidden part (same to left)
     */
    right?: () => React.ReactElement | Option | Option[] | null;

    /**
     * A callback will be triggered when you begin to drag SwipeOut
     * default: () => {}
     */
    onBeginDragging?: () => void;

    /**
     * A callback will be triggered when dragging operation ends
     * default: () => {}
     */
    onEndDragging?: () => void;
  }

  export class SwipeOut extends React.PureComponent<Props> {}
}