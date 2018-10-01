import React from "react";
import { Segment, Item, Header, Grid, List, Icon } from "semantic-ui-react";
import moment from "moment";

const UserDetailInfo = ({ profile }) => {
  return (
    <Segment>
      <Grid columns={2}>
        <Grid.Column width={10}>
          {profile.displayName && (
            <Header icon="smile" content={"About " + profile.displayName} />
          )}
          <p>
            I am a:{" "}
            <strong>{profile.occupation ? profile.occupation : "Tbn"}</strong>
          </p>
          <p>
            Originally from{" "}
            <strong>{profile.country ? profile.country : "Tbn"}</strong>
          </p>
          {profile.createdAt && (
            <p>
              Member Since:{" "}
              <strong>
                {moment(profile.createdAt.toDate()).format("DD MMM YYYY")}
              </strong>
            </p>
          )}
          {profile.description && <p>{profile.description}</p>}
        </Grid.Column>
        <Grid.Column width={6}>
          <Header icon="heart outline" content="Interests" />
          <List>
            {profile.interests ? (
              profile.interests.map((interest, index) => (
                <Item key={index}>
                  <Icon name="heart" />
                  <Item.Content>{interest}</Item.Content>
                </Item>
              ))
            ) : (
              <Item>
                <Item.Content>No interests</Item.Content>
              </Item>
            )}
          </List>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default UserDetailInfo;
