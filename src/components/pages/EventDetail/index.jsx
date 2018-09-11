import React from "react";
import { Grid } from "semantic-ui-react";
import EventDetailHeader from "../../molecules/EventDetailHeader";
import EventDetailChat from "../../molecules/EventDetailChat";
import EventDetailInfo from "../../molecules/EventDetailInfo";
import EventDetailSidebar from "../../molecules/EventDetailSidebar";
import Template from "../../templates/Template";

const EventDetail = ({event, handleSetManageForm}) => {
  console.log(event.toJS())
  return (
    <Template>
      <Grid>
        <Grid.Column width={10}>
          <EventDetailHeader event={event} handleSetManageForm={handleSetManageForm} />
          <EventDetailInfo event={event} />
          <EventDetailChat />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventDetailSidebar attendees={event.get('attendees')} />
        </Grid.Column>
      </Grid>
    </Template>
  );
};

export default EventDetail;
