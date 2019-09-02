declare module '@rn-components-kit/button' {

  import * as React from 'react';
  import {ViewStyle, TouchableOpacityProps} from 'react-native';

  interface Props {

    /**
     * Allow you to customize style
     */
    style?: ViewStyle;

    /**
     * Text to display in button
     */
    text?: string;

    /**
     * Icon to display in button
     */
    icon?: string;

    /**
     * Determines icon's direction in button is left or right
     * default: true
     */
    iconLeft?: boolean;

    /**
     * Button type
     * default: 'default'
     */
    type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'link';

    /**
     * Button size
     * default: 'default'
     */
    size?: 'small' | 'default' | 'large';

    /**
     * Button Shape
     * default: 'default'
     */
    shape?: 'default' | 'round' | 'square';

    /**
     * Block level button
     * default: false
     */
    block?: boolean;

    /**
     * Applies outline button style
     * default: false
     */
    outline?: boolean;

    /**
     * Applies link button style
     * default: false
     */
    link?: boolean;
  }

  interface ThemeConfig {
    default?: string;
    primary?: string;
    warning?: string;
    danger?: string;
    success?: string;
  }

  interface SizeConfig {
    fontSize?: number;
    borderRadius?: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
    iconTextSpacing?: number;
  }

  interface Preset {
    theme?: ThemeConfig;
    small?: SizeConfig;
    default?: SizeConfig;
    large?: SizeConfig;
  }

  interface ButtonComponent<T> extends React.SFC<T> {
    updatePreset: (preset: Preset) => void;
  }

  export const Button: ButtonComponent<Props & TouchableOpacityProps>;
}
