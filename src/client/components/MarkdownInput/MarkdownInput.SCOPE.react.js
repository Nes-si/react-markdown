/*
 What is a SCOPE file. See documentation here:
 https://github.com/OpusCapita/react-showroom-client/blob/master/docs/scope-component.md
 */

import React from 'react';
import { showroomScopeDecorator } from '@opuscapita/react-showroom-client';
import { Modal, Button } from 'react-bootstrap';

import text from './example.md';

@showroomScopeDecorator
export default
class MarkdownInputScope extends React.Component {
  state = {
    markdownExample: text,
    updatedMarkdown: '',
    show: true
  };

  handleValueChange = (value) => {
    this.setState({ updatedMarkdown: value });
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <Button bsStyle='primary' onClick={this.showModal}>
          Show
        </Button>
        <Modal show={this.state.show}
          onHide={this.hideModal}
        >
          <Modal.Header closeButton={true}>
            Modal Test
          </Modal.Header>
          <Modal.Body>
            {this._renderChildren()}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
