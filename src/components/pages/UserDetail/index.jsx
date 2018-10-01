import React, { Component } from "react";
import {
  Button,
  Card,
  Grid,
  Header,
  Image,  
  Menu,
  Segment
} from "semantic-ui-react";
import {Link} from 'react-router-dom'
import Template from "../../templates/Template";
import UserDetailHeader from '../../molecules/UserDetailHeader'
import UserDetailInfo from '../../molecules/UserDetailInfo'
import UserDetailPhoto from '../../molecules/UserDetailPhoto'
class UserDetailedPage extends Component {
  render() {
    const { profile, photos } = this.props
    return (
      <Template>
        <Grid>
          <Grid.Column width={16}>
            <UserDetailHeader profile={profile}/>     
          </Grid.Column>
          <Grid.Column width={12}>
            <UserDetailInfo profile={profile}/>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment>
              <Button color="teal" fluid basic content="Edit Profile"  as={Link} to="/settings"/>
            </Segment>
          </Grid.Column>
          <Grid.Column width={12}>
            {photos && <UserDetailPhoto photos={photos}/>}
          </Grid.Column>
          <Grid.Column width={12}>
            <Segment attached>
              <Header icon="calendar" content="Events" />
              <Menu secondary pointing>
                <Menu.Item name="All Events" active />
                <Menu.Item name="Past Events" />
                <Menu.Item name="Future Events" />
                <Menu.Item name="Events Hosted" />
              </Menu>
              <Card.Group itemsPerRow={5}>
                <Card>
                  <Image src={"/assets/categoryImages/drinks.jpg"} />
                  <Card.Content>
                    <Card.Header textAlign="center">Event Title</Card.Header>
                    <Card.Meta textAlign="center">
                      28th March 2018 at 10:00 PM
                    </Card.Meta>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src={"/assets/categoryImages/drinks.jpg"} />
                  <Card.Content>
                    <Card.Header textAlign="center">Event Title</Card.Header>
                    <Card.Meta textAlign="center">
                      28th March 2018 at 10:00 PM
                    </Card.Meta>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Segment>
          </Grid.Column>
        </Grid>
      </Template>
    );
  }
}

export default UserDetailedPage;
