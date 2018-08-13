import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Template from "../../templates/Template";
import EventList from '../../organisms/EventList'
class EventDashboard extends Component {
  render() {
    return (
      <Template>
        <Grid>
          <Grid.Column width={10}>
            <EventList />
          </Grid.Column>
          <Grid.Column width={6}>
            <h2>Right Column</h2>
          </Grid.Column>
        </Grid>
      </Template>
    );
  }
}

export default EventDashboard;
