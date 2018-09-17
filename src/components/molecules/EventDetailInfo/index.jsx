import React from "react";
import { Segment, Grid, Icon, Button } from "semantic-ui-react";
import EventDetailMap from "../EventDetailMap";
import format from "date-fns/format";

class EventDetailInfo extends React.Component {
  state = {
    isShowMap: false
  };
  toggleShowMap = () => {
    this.setState(state => ({
      isShowMap: !state.isShowMap
    }));
  };
  render() {
    const { event } = this.props;    
    return (
      <Segment.Group>
        <Segment attached="top">
          <Grid>
            <Grid.Column width={1}>
              <Icon size="large" color="teal" name="info" />
            </Grid.Column>
            <Grid.Column width={15}>
              <p>{event.description}</p>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="calendar" size="large" color="teal" />
            </Grid.Column>
            <Grid.Column width={15}>
              <span>{format(event.date.toDate(), "dddd Do MMMM")}</span>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="marker" size="large" color="teal" />
            </Grid.Column>
            <Grid.Column width={11}>
              <span>{event.venue}</span>
            </Grid.Column>
            <Grid.Column width={4}>
              <Button
                color="teal"
                size="tiny"
                content={this.state.isShowMap ? "Hide map" : "Show map"}
                onClick={this.toggleShowMap}
              />
            </Grid.Column>
          </Grid>
        </Segment>
        {this.state.isShowMap && (
          <EventDetailMap
            lat={event.venueLatLng.lat}
            lng={event.venueLatLng.lng}
          />
        )}
      </Segment.Group>
    );
  }
}

export default EventDetailInfo;
