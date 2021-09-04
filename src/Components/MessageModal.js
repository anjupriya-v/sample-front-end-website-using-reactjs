import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
class LoginConfirmationModal extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.open} onHide={this.props.closeFunction}>
          <Modal.Header style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Modal.Title >Hello User</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ textAlign: 'center', fontSize: '1.3em' }}>{this.props.modalBody}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.props.closeFunction}>
              Okay
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default LoginConfirmationModal;