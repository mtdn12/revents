import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Template from "../../templates/Template";
import EventList from "../../organisms/EventList";

class EventDashboard extends Component {    
  render() {
    const {events} = this.props
    return (
      <Template>
        <Grid>
          <Grid.Column width={10}>
            <EventList
              events={events}
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
