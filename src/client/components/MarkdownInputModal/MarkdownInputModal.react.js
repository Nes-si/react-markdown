import React from 'react';
import Types from 'prop-types';
import PlainMarkdownInput from '../PlainMarkdownInput';
import DemoModal from './DemoModal.react';

class MarkdownInputModal extends React.Component {
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

  handleChangeValue = (value) => {
    this.props.onChange(value);
  };

  handleFullScreen = (fullScreen) => {
    this.props.onFullScreen(fullScreen);
  };

  // we save callback to have an opportunity to insert value in the right place from the modal
  handleButtonPress = ({ insertAtCursorPosition }) => {
    this.insertAtCursorPosition = insertAtCursorPosition;
    this.refs.demoModal.show();
  }

  insertionFromModal = value => this.insertAtCursorPosition(value);

  render() {
    const { value, extensions, additionalButtons, readOnly, showFullScreenButton, locale } = this.props;

    const modalButton = {
      iconElement: (<i className="fa fa-search"></i>),
      handleButtonPress: this.handleButtonPress,
      label: 'Modal insert'
    }

    const updatedButtons = additionalButtons.slice(0);
    updatedButtons.push(modalButton);

    return (
      <span>
        <DemoModal ref="demoModal" onSelect={this.insertionFromModal} />
        <PlainMarkdownInput
          value={value}
          onChange={this.handleChangeValue}
          onFullScreen={this.handleFullScreen}
          extensions={extensions}
          additionalButtons={updatedButtons}
          readOnly={readOnly}
          showFullScreenButton={showFullScreenButton}
          locale={locale}
        />
      </span>
    );
  }
}

export default MarkdownInputModal;
