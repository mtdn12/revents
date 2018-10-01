import React from "react";
import { Segment, List, Item, Label } from "semantic-ui-react";

const EventDetailSidebar = ({ attendees }) => {
  const isHost = false;
  return (
    <div>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        {attendees && attendees.length} {attendees && attendees.length===1 ? 'Person': 'People'} Going
      </Segment>
      <Segment attached>
        <List relaxed divided>
          {attendees &&
            Object.values(attendees).map((atten, index) => (
              <Item style={{ position: "relative" }} key={index}>
                {isHost && (
                  <Label
                    style={{ position: "absolute" }}
                    color="orange"
                    ribbon="right"
                  >
                    Host
                  </Label>
                )}
                <Item.Image size="tiny" src={atten.photoURL} />
                <Item.Content verticalAlign="middle">
                  <Item.Header as="h3">
                    <a>{atten.name}</a>
                  </Item.Header>
                </Item.Content>
              </Item>
            ))}
        </List>
      </Segment>
    </div>
  );
};

export default EventDetailSidebar;
