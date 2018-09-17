import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import SignedOutMenu from "../SignedOutMenu";
import SignedInMenu from "../SignedInMenu";

class NavBar extends React.Component {
  render() {
    const { handleOpenModal, auth, handleSignOut, profile } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
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
            <SignedInMenu handleSignOut={handleSignOut} profile={profile} />
          ) : (
            <SignedOutMenu handleOpenModal={handleOpenModal} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
