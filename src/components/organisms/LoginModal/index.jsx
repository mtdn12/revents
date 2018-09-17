import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import LoginForm from "../LoginForm";

class LoginModal extends Component {
  render() {
    const {
      formItem,
      handleCloseModal,
      handleLogin,
      handleSocialLogin
    } = this.props;
    return (
      <Modal size="mini" open={true} onClose={handleCloseModal}>
        <Modal.Header>Login to Re-vents</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <LoginForm
              formItem={formItem}
              handleClose={handleCloseModal}
              handleLogin={handleLogin}
              handleSocialLogin={handleSocialLogin}
            />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default LoginModal;
