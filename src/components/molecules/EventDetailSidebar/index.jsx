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
        {attendees && attendees.size} {attendees && attendees.size===1 ? 'Person': 'People'} Going
      </Segment>
      <Segment attached>
        <List relaxed divided>
          {attendees &&
            attendees.map(atten => (
              <Item style={{ position: "relative" }} key={atten.get("id")}>
                {isHost && (
                  <Label
                    style={{ position: "absolute" }}
                    color="orange"
                    ribbon="right"
                  >
                    Host
                  </Label>
                )}
                <Item.Image size="tiny" src={atten.get("photoURL")} />
                <Item.Content verticalAlign="middle">
                  <Item.Header as="h3">
                    <a>{atten.get("name")}</a>
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
