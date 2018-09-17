import React from "react";
import EventListItem from "../../molecules/EventItem";

const EventList = ({ events, handleSelectEditEvent, handleDeleteEvent }) => {  
  return (
    <div>
      <h1>Event List</h1>
      {events && events.map(event => (
        <EventListItem
          event={event}
          key={event.id}
          handleDeleteEvent={handleDeleteEvent}
          handleSelectEditEvent={handleSelectEditEvent}
        />
      ))}
    </div>
  );
};

export default EventList;
