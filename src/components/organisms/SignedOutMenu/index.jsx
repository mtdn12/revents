import React from "react";
import PropTypes from "prop-types";
import { Menu, Button } from "semantic-ui-react";

const SignedOutMenu = ({ handleOpenModal }) => {
  return (
    <Menu.Item position="right">
      <Button basic inverted content="Login" onClick={() => handleOpenModal('LoginModal',{})} />
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: "0.5em" }}
        onClick={() => handleOpenModal('RegisterModal', {})}
      />
    </Menu.Item>
  );
};

SignedOutMenu.propTypes = {};

export default SignedOutMenu;
