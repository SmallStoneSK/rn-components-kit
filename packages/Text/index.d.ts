declare module '@rn-components-kit/text' {

  import {TextProps, Constructor, NativeMethodsMixin} from 'react-native'

  class TextComponent extends React.Component<TextProps> {}
  const TextBase: Constructor<NativeMethodsMixin> & typeof TextComponent;
  export class Text extends TextBase {}
}