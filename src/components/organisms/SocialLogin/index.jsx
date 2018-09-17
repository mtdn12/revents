import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

export class SocialLogin extends Component {
  render() {
    const { handleSocialLogin } = this.props;
    return (
      <div>
        <Button
          type="button"
          style={{ marginBottom: "10px" }}
          fluid
          color="facebook"
          onClick={() => handleSocialLogin("facebook")}
        >
          <Icon name="facebook" /> Login with Facebook
        </Button>
        <Button
          type="button"
          fluid
          color="google plus"
          onClick={() => handleSocialLogin("google")}
        >
          <Icon name="google plus" />
          Login with Google
        </Button>
      </div>
    );
  }
}

export default SocialLogin;
