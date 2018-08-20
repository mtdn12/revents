import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import Template from "../../templates/Template";
import EventList from "../../organisms/EventList";
import EventForm from "../../organisms/EventForm";
import cuid from "cuid";

const events = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

class EventDashboard extends Component {
  state = {
    events,
    isOpen: false,
    selectedEvent: null
  };
  handleFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  };
  handleFormClose = () => {
    this.setState({
      isOpen: false
    });
  };
  handleCreateEvent = event => {
    const newEvent = { ...event };
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "./assets/user.png";
    this.setState(state => ({
      events: [...state.events, newEvent]
    }));
  };
  handleSelectEditEvent = event => () => {
    this.setState({
      selectedEvent: event,
      isOpen: true
    });
  };
  handleDeleteEvent = id => () => {
    const newEvents = this.state.events.filter(e => e.id !== id)
    this.setState({
      events: newEvents
    })
  }
  handleUpdateEvent = eventUpdate => {
    this.setState(state =>({
      events: state.events.map( event => {
        if(event.id === eventUpdate.id) return {...eventUpdate}
        return event
      }),
      isOpen: false,
      selectedEvent: null,
    }))
  }
  render() {
    return (
      <Template>
        <Grid>
          <Grid.Column width={10}>
            <EventList
              events={this.state.events}
              handleSelectEditEvent={this.handleSelectEditEvent}
              handleDeleteEvent={this.handleDeleteEvent}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <Button
              onClick={this.handleFormOpen}
              positive
              content="Create Event"
            />
            {this.state.isOpen && (
              <EventForm
                handleCreateEvent={this.handleCreateEvent}
                handleFormClose={this.handleFormClose}
                selectedEvent={this.state.selectedEvent}
                handleUpdateEvent={this.handleUpdateEvent}
              />
            )}
          </Grid.Column>
        </Grid>
      </Template>
    );
  }
}

export default EventDashboard;
