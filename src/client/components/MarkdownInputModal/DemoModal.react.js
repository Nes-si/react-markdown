import { Modal, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

/**
 * TODO: For the demo purpose only! Delete with the branch as issue will be fixed
 */
export default class DemoModal extends Component {

  static propTypes = {
    show: Types.func,
    onSelect: Types.func,
  }

  state = {
    show: false,
  }

  show = () => {
    this.setState({ show: true });
  }

  pasteValue = (e) => {
    this.props.onSelect("BOOM!");
    this.setState({ show: false });
  }

  render() {
    return (
      <Modal
        className={classNames}
        show={this.state.show}
      >
        <Modal.Header>
          Another Modal
        </Modal.Header>
        <Modal.Body>
          <Button bsStyle='primary' onClick={this.pasteValue} >
            Paste Value and Close
          </Button>
        </Modal.Body>
      </Modal>
    )
  }

}
