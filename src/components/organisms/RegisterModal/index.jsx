import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import RegisterForm from "../RegisterForm";

class RegisterModal extends Component {
  render() {
    const { formItem, handleCloseModal, handleRegister } = this.props;
    return (
      <Modal size="mini" open={true} onClose={handleCloseModal}>
        <Modal.Header>Sign Up to Re-vents!</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <RegisterForm
              formItem={formItem}
              handleClose={handleCloseModal}
              handleRegister={handleRegister}
            />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default RegisterModal;
