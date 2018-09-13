import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import LoginForm from "../LoginForm";

class LoginModal extends Component {
  render() {
    console.log(this.props)
    const { formItem, handleCloseModal } = this.props;
    return (
      <Modal size="mini" open={true} onClose={handleCloseModal}>
        <Modal.Header>Login to Re-vents</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <LoginForm formItem={formItem} handleClose={handleCloseModal} />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default LoginModal;
