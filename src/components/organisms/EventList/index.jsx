import React from "react";
import EventListItem from "../../molecules/EventItem";

const EventList = ({ events, handleSelectEditEvent, handleDeleteEvent }) => {  
  return (
    <div>
      <h1>Event List</h1>
      {events && events.map((event, index) => (
        <EventListItem
          event={event}
          key={index}
          handleDeleteEvent={handleDeleteEvent}
          handleSelectEditEvent={handleSelectEditEvent}
        />
      ))}
    </div>
  );
};

export default EventList;
