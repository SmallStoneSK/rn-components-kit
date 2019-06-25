declare module '@rn-components-kit/tooltip' {

  import * as React from 'react';
  import {TextStyle, ViewStyle} from 'react-native'

  interface Props {

    /**
     * Allows you to customize style
     */
    style?: ViewStyle;

    /**
     * Content to show when tooltip pressed. If it is a string, it will be wrapped within Text component. You can also pass a customized ReactElement
     */
    popup: React.ReactElement | string;

    /**
     * Customized style for popup content's container
     */
    popupContainerStyle?: ViewStyle;

    /**
     * Customized style for popup text (works only when popup is a string)
     */
    popupTextStyle?: TextStyle;

    /**
     * Determines whether to show display pointer
     * default: true
     */
    showCaret?: boolean;

    /**
     * Background color of tooptip (also for caret if showCaret is true)
     * default: 'rgba(0,0,0,.8)'
     */
    backgroundColor?: string;

    /**
     * Background color of overlay (you can use rgba to control the opacity)
     * default: 'rgba(0,0,0,.1)'
     */
    overlayColor?: string;

    /**
     * Controls where to show tooltip
     * default: 'bottom'
     */
    placement?: 'top' | 'bottom';

    /**
     * A callback will be triggered when tooltip opens
     */
    onOpen?: () => void;

    /**
     * A callback will be triggered when tooltip closes
     */
    onClose?: () => void;
  }

  export class Tooltip extends React.PureComponent<Props> {

    /**
     * Normally, tooltip has taken over the work of opening/closing. But in some cases, you can also use this function to open tooltip
     */
    open: () => void;

    /**
     * Normally, tooltip has taken over the work of opening/closing. But in some cases, you can also use this function to close tooltip
     */
    close: () => void;
  }
}