import React from 'react';
import Types from 'prop-types';
import PlainMarkdownInput from '../PlainMarkdownInput';

import { I18nManager } from '@opuscapita/i18n';

class MarkdownInput extends React.Component {
  static propTypes = {
    value: Types.string,
    onChange: Types.func,
    onFullScreen: Types.func,
    extensions: Types.array,
    additionalButtons: Types.array,
    readOnly: Types.bool,
    showFullScreenButton: Types.bool,
    locale: Types.string
  };

  static defaultProps = {
    value: '',
    onChange: () => {},
    onFullScreen: () => {},
    extensions: [],
    additionalButtons: [],
    readOnly: false,
    showFullScreenButton: false,
    locale: 'en'
  };

  // Testing i18n usage
  constructor(props) {
    super(props);
    let i18n = new I18nManager({ locale: 'en' })
    i18n.register('markdown_input', {
      'en': {
        'display.translation': 'BOOM!'
      },
      'de': {
        'display.translation': 'der BOOM!'
      }
    });
    let oldI18n = new I18nManager('en')
    oldI18n.register('markdown_input2', [
      {                                   // default message bundles (use 'register' method for adding bundles)
        locales: ['en'],
        messages: {
          display: {
            translation: 'BOOM!'
          }
        },
      }
    ])

    this.state = {
      editorState: '',
      fullScreen: false,
      i18n, oldI18n
    };
  }

  handleChangeValue = (value) => {
    this.props.onChange(value);
  };

  handleFullScreen = (fullScreen) => {
    this.props.onFullScreen(fullScreen);
  };

  render() {
    const { value, extensions, additionalButtons, readOnly, showFullScreenButton, locale } = this.props;

    const style = { fontSize: 'large', fontStyle: 'italic' };

    return (
      <span>
        <p>New fashion: <span style={style}>{this.state.i18n.getMessage('display.translation')}</span></p>
        <p>Old fashion: <span style={style}>{this.state.oldI18n.getMessage('display.translation')}</span></p>
        <PlainMarkdownInput
          value={value}
          onChange={this.handleChangeValue}
          onFullScreen={this.handleFullScreen}
          extensions={extensions}
          additionalButtons={additionalButtons}
          readOnly={readOnly}
          showFullScreenButton={showFullScreenButton}
          locale={locale}
        />
      </span>
    );
  }
}

export default MarkdownInput;
