import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Template from "../../templates/Template";
import EventList from "../../organisms/EventList";
import cuid from "cuid";

class EventDashboard extends Component {
  state = {
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
        </Grid>
      </Template>
    );
  }
}

export default EventDashboard;
