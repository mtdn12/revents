import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../SignedOutMenu";
import SignedInMenu from "../SignedInMenu";

class NavBar extends React.Component {  
  render() {
    const { authenticated, handleOpenModal } = this.props;
    return (
      <Menu inverted fixed="top" className="navbarMenu">
        <Container>
          <Menu.Item header as={Link} to="/">
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/people" name="People" />
          <Menu.Item>
            <Button
              as={Link}
              to="/create-event"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
          {authenticated ? (
            <SignedOutMenu handleOpenModal={handleOpenModal} />
          ) : (
            <SignedInMenu handleSignOut={this.handleSignOut} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
