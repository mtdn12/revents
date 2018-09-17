import React from "react";
import { Segment, Item, List, Button, Icon } from "semantic-ui-react";
import EventListAttendee from "../EventListAttendee";
import { Link } from "react-router-dom";
import format from "date-fns/format";

const EventListItem = ({ event, handleSelectEditEvent, handleDeleteEvent }) => {  
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header as="a">{event.title}</Item.Header>
              <Item.Description>{event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" />
          {format(event.date.toDate(), "dddd Do MMMM")} at {format(event.date.toDate(), "HH:mm")}{" "}
          |<Icon name="marker" /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees &&
            Object.keys(event.attendees).map(key => (
              <EventListAttendee key={key} attendee={event.attendees[key]} />
            ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>{event.description}</span>
        <Button
          as="a"
          color="red"
          floated="right"
          content="Delete"
          // onClick={handleDeleteEvent(event.id)}
        />
        <Button
          as={Link}
          to={`/event/${event.id}`}
          color="teal"
          floated="right"
          content="View"
          // onClick={handleSelectEditEvent(event)}
        />
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;
