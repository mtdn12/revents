import React from "react";
import { Segment, Image, Item, Header, Button } from "semantic-ui-react";
import {Link} from 'react-router-dom'

const eventImageStyle = {
    filter: 'brightness(30%)'
};

const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

const EventDetailHeader = ({event, handleSetManageForm}) => {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image src={`/assets/categoryImages/${event.get('category')}.jpg`} fluid  style={eventImageStyle}/>
        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={event.get('title')}
                  style={{ color: "white" }}
                />
                <p>{event.get('date')}</p>
                <p>
                  Hosted by <strong>{event.get('hostedBy')}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>
      <Segment attached="bottom">
        <Button>Cancel My Place</Button>
        <Button color="teal">JOIN THIS EVENT</Button>
        <Button color="orange" floated="right" onClick={() => handleSetManageForm(event.toJS())}>
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default EventDetailHeader;
