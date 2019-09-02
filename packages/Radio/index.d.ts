declare module '@rn-components-kit/radio' {

  import * as React from 'react';
  import {ViewStyle, TextStyle, ImageRequireSource} from 'react-native';

  interface RadiosGroupProps {

    /**
     * Allow you to customize style
     */
    style?: ViewStyle;

    /**
     * Default value to speficy which radio button is selected initially
     */
    defaultValue?: any;

    /**
     * A callback will be triggered when selected value changes
     */
    onValueChange?: (value: any) => void;
  }

  interface RadioButtonProps {

    /**
     * Allows you to customize style
     */
    style?: ViewStyle;

    /**
     * According to value for comparison, to determine whether the selected
     */
    value: any;

    /**
     * Title of radio button
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
     * Determines whether radio button is available
     */
    disabled?: boolean;

    /**
     * Flag for checking the icon
     * default: false
     */
    checked?: boolean;

    /**
     * Checked icon (Icon Preset: https://github.com/SmallStoneSK/rn-components-kit/tree/master/packages/Icon)
     * default: 'check-radio'
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
     * default: 'circle'
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
     * default: 'size'
     */
    animationType?: 'none' | 'opacity' | 'size'

    /**
     * A callback will be triggered when radio button is pressed
     * default: () => {}
     */
    onPress?: () => void;
  }

  export const Radio: {
    Group: React.ComponentClass<RadiosGroupProps>,
    Button: React.SFC<RadioButtonProps>
  }
}
