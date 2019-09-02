declare module '@rn-components-kit/deck-swiper' {

  import * as React from 'react';
  import {ViewStyle} from 'react-native';

  interface Props<T> {

    /**
     * Allow you to customize style
     */
    style?: ViewStyle;

    /**
     * Data source of cards
     */
    data: T[];

    /**
     * Width of card (it is important to help calculate animation)
     */
    cardWidth: number;

    /**
     * Height of card (it is important to help calculate animation)
     */
    cardHeight: number;

    /**
     * Takes an item from data and renders it into the swiper
     */
    renderCard: (params: {item: T, index: number}) => React.ReactElement | null;

    /**
     * When all cards are swiped, it will be called and returns bottom layer component
     */
    renderBottom?: () => React.ReactElement | null;

    /**
     * A callback will be triggered when card is swiped left
     * default: () => {}
     */
    onSwipeLeft?: (from: number, to: number) => void;

    /**
     * A callback will be triggered when card is swiped right
     * default: () => {}
     */
    onSwipeRight?: (from: number, to: number) => void;

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

  export class DeckSwiper<T> extends React.PureComponent<Props<T>> {

    /**
     * Swipes to previous card
     */
    prev: () => void;

    /**
     * Swipes to next card
     */
    next: () => void;
  }
}
