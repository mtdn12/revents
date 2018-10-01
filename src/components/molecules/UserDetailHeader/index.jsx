import React from "react";
import { Segment, Item, Header } from "semantic-ui-react";
import moment from "moment";

const UserDetailHeader = ({ profile }) => { 
  return (
    <Segment>
      <Item.Group>
        <Item>
          <Item.Image
            avatar
            size="small"
            src={profile.photoURL || "/assets/user.png"}
          />
          <Item.Content verticalAlign="bottom">
            <Header as="h1">{profile.displayName}</Header>
            <br />
            {profile.occupation && (
              <Header as="h3">{profile.occupation}</Header>
            )}
            <br />
            {profile && (
              <Header as="h3">
                {profile.birthDay
                  ? moment().diff(profile.birthDay.toDate(), "years")
                  : "Unknow age"}
                , Lives in {profile.homeTown ? profile.homeTown : "Unknow city"}
              </Header>
            )}
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};

export default UserDetailHeader;
