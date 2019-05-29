declare module '@rn-components-kit/skeleton' {

  import React from 'react';
  import {ViewStyle} from 'react-native';

  interface AvatarProps {
    /**
     * Allow you to customize avatar module's style (e.g. margin, backgroundColor)
     */
    style?: ViewStyle;
    /**
     * The width and height of avatar
     * default: 20
     */
    size?: number;
    /**
     * The shape of avatar
     * default: 'circle'
     */
    shape?: 'circle' | 'square';
  }

  interface TitleProps {
    /**
     * Allow you to customize title block's style (e.g. margin, backgroundColor)
     */
    style?: ViewStyle;
    /**
     * The width of title block (if undefined or null, default 100%)
     */
    width?: number | string;
    /**
     * The height of title block
     * default: 15
     */
    height?: number;
  }

  interface ParagraphProps {
    /**
     * Allow you to customize paragraph module's style
     */
    style?: ViewStyle;
    /**
     * The count of paragraph block lines
     * default: 3
     */
    rows?: number;
    /**
     * An array of each block's width (if undefined or null, default 100%)
     * default: []
     */
    widths?: Array<number|string>;
    /**
     * An array of each block's height (if undefined or null, default 15)
     * default: []
     */
    heights?: number[];
  }

  interface Props {

    /**
     * Allow you to customize style
     */
    style?: ViewStyle;

    /**
     * Show avatar placeholder
     * default: true
     */
    avatar?: boolean | AvatarProps;

    /**
     * Show title placeholder
     * default: true
     */
    title?: boolean | TitleProps;

    /**
     * Show paragraph placeholder
     * default: true
     */
    paragraph?: boolean | ParagraphProps;
  }

  export class Skeleton extends React.PureComponent<Props> {}

  interface withSkeletonOptions {
    /**
     * How long a loop animation lasts
     * default: 1000
     */
    duraion: number;
    /**
     * The minimum opacity value during animation
     * default: 0.2
     */
    minOpacity: number;
    /**
     * The maximum opacity value during animation
     * default: 1
     */
    maxOpacity: number;
  }

  export function withSkeleton (
    options?: withSkeletonOptions
  ) : <P extends Object>(WrappedComponent: React.ComponentType<P>) => React.ComponentType<P & {opacity: number}>
}
