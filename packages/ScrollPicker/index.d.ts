declare module '@rn-components-kit/scroll-picker' {

  import * as React from 'react';
  import {ViewStyle} from 'react-native';

  interface ScrollPickerProps {

    /**
     * Allow you to customize style
     */
    style?: ViewStyle;

    /**
     * Height of each item in ScrollPicker.Item
     * default: 30
     */
    itemHeight?: number;

    /**
     * A callback will be triggered when ScrollPicker.Item's selected value changes
     * default: () => {}
     */
    onValueChange?: (value: {[key: string]: any}) => void;
  }

  interface ScrollPickItemProps<T> {

    /**
     * A unique identifier in ScrollPicker
     */
    id: string;

    /**
     * How much of the remaining space in the flex container
     * default: 1
     */
    flex?: number;

    /**
     * Data source of options
     */
    data: T[];

    /**
     * Default value to speficy which option is selected initially (must be one of data)
     * default: data[0]
     */
    defaultValue?: T;

    /**
     * Allows you to customize content style
     */
    renderItem: (params: {item: T, index: number}) => React.ReactElement;
  }

  class ScrollPickerItem<T> extends React.PureComponent<ScrollPickItemProps<T>> {}

  export class ScrollPicker extends React.PureComponent<ScrollPickerProps> {
    static Item: typeof ScrollPickerItem;
  }
}