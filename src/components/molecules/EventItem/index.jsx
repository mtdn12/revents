import React from "react";
import { Segment, Item, List, Button, Icon } from "semantic-ui-react";
import EventListAttendee from "../EventListAttendee";
import {Link} from 'react-router-dom'
const EventListItem = ({ event, handleSelectEditEvent, handleDeleteEvent }) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={event.get('hostPhotoURL')} />
            <Item.Content>
              <Item.Header as="a">{event.get('title')}</Item.Header>
              <Item.Description>{event.get('hostedBy')}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {event.get('date')} |<Icon name="marker" />{" "}
          {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.get('attendees') &&
            event.get('attendees').map(attendee => (
              <EventListAttendee key={attendee.get('id')} attendee={attendee} />
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
          to={`/event/${event.get('id')}`}
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
