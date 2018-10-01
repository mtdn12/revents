import React from "react";
import { Grid } from "semantic-ui-react";
import EventDetailHeader from "../../molecules/EventDetailHeader";
import EventDetailChat from "../../molecules/EventDetailChat";
import EventDetailInfo from "../../molecules/EventDetailInfo";
import EventDetailSidebar from "../../molecules/EventDetailSidebar";
import Template from "../../templates/Template";

const EventDetail = ({ event }) => {
  return (
    <Template>
      {event.id && (
        <Grid>
          <Grid.Column width={10}>
            <EventDetailHeader
              event={event}              
            />
            <EventDetailInfo event={event} />
            <EventDetailChat />
          </Grid.Column>
          <Grid.Column width={6}>
            <EventDetailSidebar attendees={event.attendees} />
          </Grid.Column>
        </Grid>
      )}
    </Template>
  );
};

export default EventDetail;
