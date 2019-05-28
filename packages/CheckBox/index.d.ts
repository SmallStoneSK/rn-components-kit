declare module '@rn-components-kit/checkbox' {

  import React from 'react';
  import {ViewStyle, TextStyle, ImageRequireSource} from 'react-native'

  interface Props {

    /**
     * Allows you to customize style
     */
    style?: ViewStyle;

    /**
     * Title of checkbox
     */
    title: string;

    /**
     * Allows you to customize title's style
     */
    titleStyle?: TextStyle;

    /**
     * Size of icon (or width and height for image, if you specify checkedImage/unCheckedImage)
     * default: 20
     */
    iconSize?: number;

    /**
     * Determines whether checkbox is available
     */
    disabled?: boolean;

    /**
     * Flag for checking the icon
     * default: false
     */
    checked: boolean;

    /**
     * Checked icon (Icon Preset: https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Icon)
     * default: 'check-square-fill'
     */
    checkedIconType?: string;

    /**
     * Color of checked icon
     * default: '#1890FF'
     */
    checkedIconColor?: string;

    /**
     * If you are not satisfied with icon preset, you can specify an image for checked icon
     */
    checkedImage?: string | ImageRequireSource;

    /**
     * UnChecked icon (Icon Preset: https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Icon)
     * default: 'border'
     */
    unCheckedIconType?: string;

    /**
     * Color of unChecked icon
     * default: '#BFBFBF'
     */
    unCheckedIconColor?: string;

    /**
     * If you are not satisfied with icon preset, you can specify an image for unChecked icon
     */
    unCheckedImage?: string | ImageRequireSource;

    /**
     * Determines which animation is adpoted when checked value changes
     * default: 'opacity'
     */
    animationType?: 'none' | 'opacity' | 'size'

    /**
     * A callback will be triggered when checkbox is pressed
     * default: () => {}
     */
    onPress?: () => void;
  }

  export class CheckBox extends React.PureComponent<Props> {}
}