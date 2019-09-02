declare module '@rn-components-kit/carousel' {

  import * as React from 'react';
  import {ViewStyle} from 'react-native';

  interface Props {

    /**
     * Allow you to customize style
     */
    style?: ViewStyle;

    data?: any;

    /**
     * Determines the position when carousel first show
     * default: 0
     */
    initialIndex?: number;

    /**
     * Determines whether carousel can be dragged to slide to prev/next one
     * default: true
     */
    draggable?: boolean;

    /**
     * Determines whether caousel is in horizontal or vertical direction
     * default: false
     */
    vertical?: boolean;

    /**
     * The width of carousel (when carousel is horizontal mode, width and itemWidth must be set)
     */
    width?: number;

    /**
     * The height of carousel (when carousel is vertical mode, height and itemHeight must be set)
     */
    height?: number;

    /**
     * The width of each item in carousel (when carousel is horizontal mode, width and itemWidth must be set)
     * default: 0
     */
    itemWidth?: number;

    /**
     * The height of each item in carousel (when carousel is vertical mode, height and itemHeight must be set)
     * default: 0
     */
    itemHeight?: number;

    /**
     * When item's length is smaller than container, gap can be used to separate items
     * default: 0
     */
    gap?: number;

    /**
     * Determines whether carousel's loop mode is enabled
     * default: false
     */
    loop?: boolean;

    /**
     * When loop mode is enabled, there will be `cloneCount` copied elements placed
     * at both sides of items
     * default: 3
     */
    cloneCount?: number;

    /**
     * When item's length is smaller than container, item would be adjusted to the center
     * of carousel if centerModeEnabled is true. In this case, prev/current/next elements will
     * be all in one screen
     * default: false
     */
    centerModeEnabled?: boolean;

    /**
     * Determines whether auto play mode is enabled
     * default: false
     */
    autoPlay?: boolean;

    /**
     * When auto play mode is enabled, it determines how long it takes between two scrolling animations (ms)
     * default: 3000
     */
    autoPlayDelay?: number;

    /**
     * Determines whether pagination module is shown in carousel
     * default: false
     */
    showPagination?: boolean;

    /**
     * Allow you to customize pagination's container style
     */
    paginationStyle?: ViewStyle;

    /**
     * Allow you to customize pagination's dot style
     */
    dotStyle?: ViewStyle;

    /**
     * Allow you to customize pagination's current dot style
     */
    curDotStyle?: ViewStyle;

    /**
     * Allow you to customize pagination module
     */
    renderPagination?: (info: {curIndex: number, total: number}) => React.ReactElement | null;

    /**
     * A callback will be triggered when carousel's scrollIndex changes
     * default: () => {}
     */
    onIndexChange?: (from: number, to: number) => void;
  }

  export class Carousel extends React.PureComponent<Props> {

    /**
     * Scrolls to prev element
     */
    scrollToPrev(): void;
    
    /**
     * Scrolls to next element
     */
    scrollToNext(): void;

    /**
     * Scrolls to the item at the specified index
     */
    scrollToIndex(param: {index: number, animated: boolean}): void;
  }
}
