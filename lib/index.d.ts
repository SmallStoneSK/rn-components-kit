declare module 'rn-components-kit' {

  import * as React from 'react';
  import {
    ViewStyle,
    TextStyle,
    TextProps,
    Constructor,
    ImageRequireSource,
    NativeMethodsMixin,
    TouchableOpacityProps,
  } from 'react-native'

  interface BadgeProps {

    /**
     * Allow you to customize style
     */
    style?: ViewStyle;

    /**
     * Determines whether it is rendered as a dot without number in it
     * default: true
     */
    dot?: boolean;

    /**
     * Determines the dot's color
     * default: '#F5222D'
     */
    color?: string;

    /**
     * If you specify the count prop, you should set dot prop `false` as well (they are two exclusive modes).
     * And in this case, this number would be rendered at the center of dot
     * default: 0
     */
    count?: number;

    /**
     * Max count to show. If count is greater than overflowCount, it will be displayed as `${overflowCount}+`
     * default: 99
     */
    overflowCount?: number;

    /**
     * Determines whether it should be shown when count is 0
     * default: false
     */
    showZero?: boolean;

    /**
     * If you are not satisfied with the dot's position (upper-right corner), you can adjust it through offsetX/offsetY
     * default: 0
     */
    offsetX?: number;

    /**
     * If you are not satisfied with the dot's position (upper-right corner), you can adjust it through offsetX/offsetY
     * default: 0
     */
    offsetY?: number;
  }

  export const Badge: React.SFC<BadgeProps>;

  interface ButtonProps {

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

  export const Button: ButtonComponent<ButtonProps & TouchableOpacityProps>;

  interface CarouselProps {

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

  export class Carousel extends React.PureComponent<CarouselProps> {

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

  interface CheckBoxProps {

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

  export class CheckBox extends React.PureComponent<CheckBoxProps> {}

  interface DeckSwiperProps<T> {

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

  export class DeckSwiper<T> extends React.PureComponent<DeckSwiperProps<T>> {

    /**
     * Swipes to previous card
     */
    prev: () => void;

    /**
     * Swipes to next card
     */
    next: () => void;
  }

  interface DividerProps {

    /**
     * Allow you to customize style
     */
    style?: ViewStyle;

    /**
     * Determines the divider's color
     * default: '#DFDFDF'
     */
    color?: string;

    /**
     * Determines the divider's orientation
     * default: 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';

    /**
     * Space between two sides on cross axis
     * default: 0
     */
    margin?: number;

    /**
     * Space inside two sides on main axis
     * default: 0
     */
    padding?: number;
  }

  export const Divider: React.SFC<DividerProps>;

  interface IconProps {

    /**
     * Allow you to customize style
     */
    style?: ViewStyle;

    /**
     * Determines the icon's color
     * default: '#333'
     */
    color?: string;

    /**
     * Determines the icon's size
     * default: 15
     */
    size?: number;

    /**
     * Icon type, integrated in Ant-Design Preset(https://ant.design/components/icon/)
     */
    type: (
      'check-circle' |
      'ci' |
      'dollar' |
      'compass' |
      'close-circle' |
      'frown' |
      'info-circle' |
      'left-circle' |
      'down-circle' |
      'euro' |
      'copyright' |
      'minus-circle' |
      'meh' |
      'plus-circle' |
      'play-circle' |
      'question-circle' |
      'pound' |
      'right-circle' |
      'smile' |
      'trademark' |
      'time-circle' |
      'time-out' |
      'earth' |
      'yuan' |
      'up-circle' |
      'warning-circle' |
      'sync' |
      'transaction' |
      'undo' |
      'redo' |
      'reload' |
      'reload-time' |
      'message' |
      'dashboard' |
      'issues-close' |
      'poweroff' |
      'logout' |
      'pie-chart' |
      'setting' |
      'eye' |
      'location' |
      'edit-square' |
      'export' |
      'save' |
      'import' |
      'app-store' |
      'close-square' |
      'down-square' |
      'layout' |
      'left-square' |
      'play-square' |
      'control' |
      'code-library' |
      'detail' |
      'minus-square' |
      'plus-square' |
      'right-square' |
      'project' |
      'wallet' |
      'up-square' |
      'calculator' |
      'interation' |
      'check-square' |
      'border' |
      'border-outer' |
      'border-top' |
      'border-bottom' |
      'border-left' |
      'border-right' |
      'border-inner' |
      'border-verticle' |
      'border-horizontal' |
      'radius-bottomleft' |
      'radius-bottomright' |
      'radius-upleft' |
      'radius-upright' |
      'radius-setting' |
      'add-user' |
      'delete-team' |
      'delete-user' |
      'addteam' |
      'user' |
      'team' |
      'area-chart' |
      'line-chart' |
      'bar-chart' |
      'point-map' |
      'container' |
      'database' |
      'sever' |
      'mobile' |
      'tablet' |
      'red-envelope' |
      'book' |
      'file-done' |
      'reconciliation' |
      'file--exception' |
      'file-sync' |
      'file-search' |
      'solution' |
      'file-protect' |
      'file-add' |
      'file-excel' |
      'file-exclamation' |
      'file-pdf' |
      'file-image' |
      'file-markdown' |
      'file-unknown' |
      'file-ppt' |
      'file-word' |
      'file' |
      'file-zip' |
      'file-text' |
      'file-copy' |
      'snippets' |
      'audit' |
      'diff' |
      'batch-folding' |
      'security-scan' |
      'property-safety' |
      'safety-certificate' |
      'insurance' |
      'alert' |
      'delete' |
      'hourglass' |
      'bulb' |
      'experiment' |
      'bell' |
      'trophy' |
      'rest' |
      'usb' |
      'skin' |
      'home' |
      'bank' |
      'filter' |
      'funnel-plot' |
      'like' |
      'unlike' |
      'unlock' |
      'lock' |
      'customer-service' |
      'flag' |
      'money-collect' |
      'medicinebox' |
      'shop' |
      'rocket' |
      'shopping' |
      'folder' |
      'folder-open' |
      'folder-add' |
      'deployment-unit' |
      'account-book' |
      'contacts' |
      'carry-out' |
      'calendar-check' |
      'calendar' |
      'scan' |
      'select' |
      'box-plot' |
      'build' |
      'sliders' |
      'laptop' |
      'barcode' |
      'camera' |
      'cluster' |
      'gateway' |
      'car' |
      'printer' |
      'read' |
      'cloud-server' |
      'cloud-upload' |
      'cloud' |
      'cloud-download' |
      'cloud-sync' |
      'video' |
      'notification' |
      'sound' |
      'radar-chart' |
      'qrcode' |
      'fund' |
      'image' |
      'mail' |
      'table' |
      'id-card' |
      'credit-card' |
      'heart' |
      'block' |
      'error' |
      'star' |
      'gold' |
      'heat-map' |
      'wifi' |
      'attachment' |
      'edit' |
      'key' |
      'api' |
      'disconnect' |
      'highlight' |
      'monitor' |
      'link' |
      'man' |
      'percentage' |
      'pushpin' |
      'phone' |
      'shake' |
      'tag' |
      'wrench' |
      'tags' |
      'scissor' |
      'mr' |
      'share' |
      'branches' |
      'fork' |
      'shrink' |
      'arrawsalt' |
      'vertical-right' |
      'vertical-left' |
      'right' |
      'left' |
      'up' |
      'down' |
      'fullscreen' |
      'fullscreen-exit' |
      'doubleleft' |
      'double-right' |
      'arrowright' |
      'arrowup' |
      'arrowleft' |
      'arrowdown' |
      'upload' |
      'colum-height' |
      'vertical-align-botto' |
      'vertical-align-middl' |
      'totop' |
      'vertical-align-top' |
      'download' |
      'sort-descending' |
      'sort-ascending' |
      'fall' |
      'swap' |
      'stock' |
      'rise' |
      'indent' |
      'outdent' |
      'menu' |
      'unordered-list' |
      'ordered-list' |
      'align-right' |
      'align-center' |
      'align-left' |
      'pic-center' |
      'pic-right' |
      'pic-left' |
      'bold' |
      'font-colors' |
      'exclaimination' |
      'font-size' |
      'infomation' |
      'line-height' |
      'strikethrough' |
      'underline' |
      'number' |
      'italic' |
      'code' |
      'column-width' |
      'check' |
      'ellipsis' |
      'dash' |
      'close' |
      'enter' |
      'line' |
      'minus' |
      'question' |
      'rollback' |
      'small-dash' |
      'pause' |
      'bg-colors' |
      'crown' |
      'drag' |
      'desktop' |
      'gift' |
      'stop' |
      'fire' |
      'thunderbolt' |
      'check-circle-fill' |
      'left-circle-fill' |
      'down-circle-fill' |
      'minus-circle-fill' |
      'close-circle-fill' |
      'info-circle-fill' |
      'up-circle-fill' |
      'right-circle-fill' |
      'plus-circle-fill' |
      'question-circle-fill' |
      'euro-circle-fill' |
      'frown-fill' |
      'copyright-circle-fil' |
      'ci-circle-fill' |
      'compass-fill' |
      'dollar-circle-fill' |
      'poweroff-circle-fill' |
      'meh-fill' |
      'play-circle-fill' |
      'pound-circle-fill' |
      'smile-fill' |
      'stop-fill' |
      'warning-circle-fill' |
      'time-circle-fill' |
      'trademark-circle-fil' |
      'yuan-circle-fill' |
      'heart-fill' |
      'pie-chart-circle-fil' |
      'dashboard-fill' |
      'message-fill' |
      'check-square-fill' |
      'down-square-fill' |
      'minus-square-fill' |
      'close-square-fill' |
      'code-library-fill' |
      'left-square-fill' |
      'play-square-fill' |
      'up-square-fill' |
      'right-square-fill' |
      'plus-square-fill' |
      'account-book-fill' |
      'carry-out-fill' |
      'calendar-fill' |
      'calculator-fill' |
      'interation-fill' |
      'project-fill' |
      'detail-fill' |
      'save-fill' |
      'wallet-fill' |
      'control-fill' |
      'layout-fill' |
      'app-store-fill' |
      'mobile-fill' |
      'tablet-fill' |
      'book-fill' |
      'red-envelope-fill' |
      'safety-certificate-fill' |
      'property-safety-fill' |
      'insurance-fill' |
      'security-scan-fill' |
      'file-exclamation-fil' |
      'file-add-fill' |
      'file-fill' |
      'file-excel-fill' |
      'file-markdown-fill' |
      'file-text-fill' |
      'file-ppt-fill' |
      'file-unknown-fill' |
      'file-word-fill' |
      'file-zip-fill' |
      'file-pdf-fill' |
      'file-image-fill' |
      'diff-fill' |
      'file-copy-fill' |
      'snippets-fill' |
      'batch-folding-fill' |
      'reconciliation-fill' |
      'folder-add-fill' |
      'folder-fill' |
      'folder-open-fill' |
      'database-fill' |
      'container-fill' |
      'sever-fill' |
      'calendar-check-fill' |
      'image-fill' |
      'id-card-fill' |
      'credit-card-fill' |
      'fund-fill' |
      'read-fill' |
      'contacts-fill' |
      'delete-fill' |
      'notification-fill' |
      'flag-fill' |
      'money-collect-fill' |
      'medicine-box-fill' |
      'rest-fill' |
      'shopping-fill' |
      'skin-fill' |
      'video-fill' |
      'sound-fill' |
      'bulb-fill' |
      'bell-fill' |
      'filter-fill' |
      'fire-fill' |
      'funnel-plot-fill' |
      'gift-fill' |
      'hourglass-fill' |
      'home-fill' |
      'trophy-fill' |
      'location-fill' |
      'cloud-fill' |
      'customer-service-fill' |
      'experiment-fill' |
      'eye-fill' |
      'like-fill' |
      'lock-fill' |
      'unlike-fill' |
      'star-fill' |
      'unlock-fill' |
      'alert-fill' |
      'api-fill' |
      'highlight-fill' |
      'phone-fill' |
      'edit-fill' |
      'pushpin-fill' |
      'rocket-fill' |
      'thunderbolt-fill' |
      'tag-fill' |
      'wrench-fill' |
      'tags-fill' |
      'bank-fill' |
      'camera-fill' |
      'error-fill' |
      'crown-fill' |
      'mail-fill' |
      'car-fill' |
      'printer-fill' |
      'shop-fill' |
      'setting-fill' |
      'usb-fill' |
      'golden-fill' |
      'build-fill' |
      'box-plot-fill' |
      'sliders-fill' |
      'alibaba' |
      'alibabacloud' |
      'ant-design' |
      'ant-cloud' |
      'behance' |
      'google-plus' |
      'medium' |
      'google' |
      'ie' |
      'amazon' |
      'slack' |
      'alipay' |
      'taobao' |
      'zhihu' |
      'html5' |
      'linkedin' |
      'yahoo' |
      'facebook' |
      'skype' |
      'codesandbox' |
      'chrome' |
      'codepen' |
      'aliwangwang' |
      'apple' |
      'android' |
      'sketch' |
      'gitlab' |
      'dribbble' |
      'instagram' |
      'reddit' |
      'windows' |
      'yuque' |
      'youtube' |
      'gitlab-fill' |
      'dropbox' |
      'dingtalk' |
      'android-fill' |
      'apple-fill' |
      'html5-fill' |
      'windows-fill' |
      'qq' |
      'twitter' |
      'skype-fill' |
      'weibo' |
      'yuque-fill' |
      'youtube-fill' |
      'yahoo-fill' |
      'wechat-fill' |
      'chrome-fill' |
      'alipay-circle-fill' |
      'aliwangwang-fill' |
      'behance-circle-fill' |
      'amazon-circle-fill' |
      'codepen-circle-fill' |
      'codesandbox-circle-fill' |
      'dropbox-circle-fill' |
      'github-fill' |
      'dribbble-circle-fill' |
      'google-plus-circle-fill' |
      'medium-circle-fill' |
      'qq-circle-fill' |
      'ie-circle-fill' |
      'google-circle-fill' |
      'dingtalk-circle-fill' |
      'sketch-circle-fill' |
      'slack-circle-fill' |
      'twitter-circle-fill' |
      'taobao-circle-fill' |
      'weibo-circle-fill' |
      'zhihu-circle-fill' |
      'reddit-circle-fill' |
      'alipay-square-fill' |
      'dingtalk-square-fill' |
      'codesandbox-square-fill' |
      'behance-square-fill' |
      'amazon-square-fill' |
      'codepen-square-fill' |
      'dribbble-square-fill' |
      'dropbox-square-fill' |
      'facebook-fill' |
      'google-plus-square-fill' |
      'google-square-fill' |
      'instagram-fill' |
      'ie-square-fill' |
      'medium-square-fill' |
      'linkedin-fill' |
      'qq-square-fill' |
      'reddit-square-fill' |
      'twitter-square-fill' |
      'sketch-square-fill' |
      'slack-square-fill' |
      'taobao-square-fill' |
      'weibo-square-fill' |
      'zhihu-square-fill' |
      'zoom-out' |
      'apartment' |
      'audio' |
      'audio-fill' |
      'robot' |
      'zoom-in' |
      'robot-fill' |
      'bug-fill' |
      'bug' |
      'audio-static' |
      'comment' |
      'signal-fill' |
      'verified' |
      'shortcut-fill' |
      'videocamera-add' |
      'switch-user' |
      'whatsapp' |
      'appstore-add' |
      'caret-down' |
      'backward' |
      'caret-up' |
      'caret-right' |
      'caret-left' |
      'fast-backward' |
      'forward' |
      'fast-forward' |
      'search' |
      'retweet' |
      'login' |
      'step-backward' |
      'step-forward' |
      'swap-right' |
      'swap-left' |
      'woman' |
      'plus' |
      'eye-close-fill' |
      'eye-close' |
      'clear' |
      'collapse' |
      'expand' |
      'delete-column' |
      'merge-cells' |
      'subnode' |
      'rotate-left' |
      'rotate-right' |
      'insert-row-below' |
      'insert-row-above' |
      'solit-cells' |
      'format-painter' |
      'insert-row-right' |
      'format-painter-fill' |
      'insert-row-left' |
      'translate' |
      'delete-row' |
      'sister-node'
    );
  }

  export const Icon: React.SFC<IconProps>;

  interface ProgressProps {

    /**
     * Allows you to customize style
     */
    style?: ViewStyle;

    /**
     * Determine progress bar's type
     * default: 'line'
     */
    type?: 'line' | 'circle';

    /**
     * Current completion percentage
     * default: 0
     */
    percent?: number;

    /**
     * Status of progress
     * default: 'normal'
     */
    status?: 'normal' | 'active' | 'success' | 'fail';

    /**
     * Line width of progress bar
     * default: 6
     */
    lineWidth?: number;

    /**
     * Highlight color of progress bar
     * default: '#40A9FF'
     */
    color?: string;

    /**
     * Color of progress track
     * default: '#EFEFEF'
     */
    trackColor?: string;

    /**
     * Radius of circle (only works when type is 'circle')
     * default: 50
     */
    radius?: number;

    /**
     * Determines whether to display info area (percent tip and icon)
     * default: true
     */
    showInfo?: boolean;

    /**
     * Allows you to customize percent tip's style (only works when type is 'line')
     */
    lineInfoTextStyle?: TextStyle;

    /**
     * Allows you to customize percent tip's style (only works when type is 'circle')
     */
    circleInfoTextStyle?: TextStyle;

    /**
     * Progress will pass value to percentFormatter, and display its return value in info area
     * default: value => `${value}%`
     */
    percentFormatter?: (value: number) => string;

    /**
     * Allow you to fully customize info area
     */
    renderInfo?: () => React.ReactElement;
  }

  export class Progress extends React.PureComponent<ProgressProps> {}

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

  interface RatingProps {

    /**
     * Allow you to customize style
     */
    style?: ViewStyle;

    /**
     * The granularity that Rating can step through values
     * default: 1
     */
    step?: 0.1 | 0.2 | 0.5 | 1;

    /**
     * Count of star
     * default: 5
     */
    total?: number;

    /**
     * Current count of active star
     * default: 0
     */
    value?: number;

    /**
     * Space between stars
     * default: 4
     */
    iconGap?: number;

    /**
     * Size of star icon
     * default: 20
     */
    iconSize?: number;

    /**
     * Determines whether value can be changed
     * default: false
     */
    disabled?: boolean;

    /**
     * Icon type when it is active
     * default: 'star-fill'
     */
    activeIconType?: string;

    /**
     * Icon color when it is active
     * default: '#FADB14'
     */
    activeIconColor?: string;

    /**
     * Icon type when it is inactive
     * default: 'star-fill'
     */
    inActiveIconType?: string;

    /**
     * Icon color when it is inactive
     * default: '#E8E8E8'
     */
    inActiveIconColor?: string;

    /**
     * A callback will be triggered when Rating's value changes
     * default: () => {}
     */
    onValueChange?: (value: number) => void;
  }

  export class Rating extends React.PureComponent<RatingProps> {}

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

  interface SkeletonProps {

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

  export class Skeleton extends React.PureComponent<SkeletonProps> {}

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

  interface SliderProps {

    /**
     * Allows you to customize style
     */
    style?: ViewStyle;

    /**
     * The minimum value that thumb can slide to
     * default: 0
     */
    min?: number;

    /**
     * The maximum value that thumb can slide to
     * default: 100
     */
    max?: number;

    /**
     * The granularity the slider can step through values. (Must greater than 0, and be divided by (max - min))
     * default: 1
     */
    step?: number;

    /**
     * The initial value when first render slider
     */
    defaultValue: number | number[];

    /**
     * Determines whether one or two thumbs in slider
     * default: false
     */
    multi?: boolean;

    /**
     * Determines whether slider is horizontal or vertical
     * default: false
     */
    vertical?: boolean;

    /**
     * Determines whether tooltip is shown
     * default: true
     */
    showTip?: 'never' | 'onTap' | 'always';

    /**
     * Allows you to customize tip's container style (e.g. size, backgroundColor)
     */
    tipContainerStyle?: ViewStyle;

    /**
     * Allows you to customize tip's text style (e.g. fontSize, color)
     */
    tipTextStyle?: TextStyle;

    /**
     * Color of track
     * default: '#DDD'
     */
    trackColor?: string;

    /**
     * Color of track's selected part
     * default: '#40A9FF'
     */
    selectedTrackColor?: string;

    /**
     * Allows you to customize thumb's style (e.g. color, size, shadow)
     */
    thumbStyle?: ViewStyle;

    /**
     * Allows you to fully customize thumb module
     */
    renderThumb?: () => React.ReactElement;

    /**
     * Slider will pass value to tipFormatter, and display its return value in tooltip
     * default: value => value.toString();
     */
    tipFormatter?: (value: number) => string;

    /**
     * A callback will be triggered when slider's value changes
     * default: () => {}
     */
    onValueChange?: (value: number) => void;

    /**
     * A callback will be triggered when slider starts to slider
     * default: () => {}
     */
    onBeginSliding?: () => void;

    /**
     * A callback will be triggered when slider ends to slider
     * default: () => {}
     */
    onEndSliding?: () => void;
  }

  export class Slider extends React.PureComponent<SliderProps> {}

  interface BaseSpinProps {

    /**
     * Allows you to customize style
     */
    style?: ViewStyle;

    /**
     * Zooming in/out scale of component
     * default: 1
     */
    scale?: number;

    /**
     * Duration of a looped animation
     */
    duration?: number;
  }

  interface CommonSpinProps extends BaseSpinProps {
    /**
     * Color of elements inside component
     * default: '#40A9FF'
     */
    color?: string;
  }

  interface RainbowProps extends BaseSpinProps {
    /**
     * Five colors passed to rainbow
     * default: ['#EA7671', '#81D2B4', '#A963B8', '#70ACF6', '#F4B860']
     */
    colors?: string[];
  }

  interface WaveProps extends CommonSpinProps {
    /**
     * Type of wave
     * default: 'rect'
     */
    type?: 'rect' | 'dot';
  }

  export class Ladder extends React.PureComponent<CommonSpinProps> {}
  export class Rainbow extends React.PureComponent<RainbowProps> {}
  export class Wave extends React.PureComponent<WaveProps> {}
  export class RollingCubes extends React.PureComponent<CommonSpinProps> {}
  export class ChasingCircles extends React.PureComponent<CommonSpinProps> {}
  export class Pulse extends React.PureComponent<CommonSpinProps> {}
  export class FlippingCard extends React.PureComponent<CommonSpinProps> {}

  interface SwipeOutOption {

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

  interface SwipeOutProps {

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
    left?: () => React.ReactElement | SwipeOutOption | SwipeOutOption[] | null;

    /**
     * The config for right hidden part (same to left)
     */
    right?: () => React.ReactElement | SwipeOutOption | SwipeOutOption[] | null;

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

  export class SwipeOut extends React.PureComponent<SwipeOutProps> {}

  interface SwitchProps {

    /**
     * Allows you to customize style
     */
    style?: ViewStyle;

    /**
     * Two types (cupertino for IOS and material for Android)
     * default: 'cupertino'
     */
    type?: 'cupertino' | 'material';

    /**
     * Determines whether switch is on when initial rendering
     * default: false
     */
    value?: boolean;

    /**
     * Determines whether switch is touchabled
     * default: false
     */
    disabled?: boolean;

    /**
     * Width of switch
     * default: 40
     */
    width?: number;

    /**
     * Height of switch's track
     * default: 20
     */
    height?: number;

    /**
     * Radius of thumb
     * default: 8
     */
    thumbRadius?: number;

    /**
     * Color of thumb
     * default: '#FFF'
     */
    thumbColor?: string;

    /**
     * Color of track when switch is "on" status
     * default: '#79D472'
     */
    trackOnColor?: string;

    /**
     * Color of track when switch is "off" status
     * default: '#CCC'
     */
    trackOffColor?: string;

    /**
     * A callback will be triggered when switch's status changes
     * default: () => {}
     */
    onValueChange?: (value: boolean) => void;
  }

  export class Switch extends React.PureComponent<SwitchProps> {}

  interface TagProps {

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

  export class Tag extends React.PureComponent<TagProps> {}

  class TextComponent extends React.Component<TextProps> {}
  const TextBase: Constructor<NativeMethodsMixin> & typeof TextComponent;
  export class Text extends TextBase {}

  interface TooltipProps {

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

  export class Tooltip extends React.PureComponent<TooltipProps> {

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
