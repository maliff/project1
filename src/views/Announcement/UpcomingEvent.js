import axios from "axios";
import React, { useEffect, useState } from "react";

function UpcomingEvent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/event")
      .then((res) => {
        const sortedEvents = res.data.sort((a, b) => {
            const dateA = new Date(a.eventStartDate + " " + a.eventStartTime);
            const dateB = new Date(b.eventStartDate + " " + b.eventStartTime);
            return dateA - dateB;
          });
          setEvents(sortedEvents);
      })
      .catch((err) => console.log(err));
  }, []);

  // Check if at least one event with eventName
  const hasEventWithName = events.some(event => event.eventName);

  return (
    <div>
      {hasEventWithName ? (
        events.map((event) => (
          <div key={event.id}>
            {event.eventName && (
              <div>
                {event.eventStartDate} - {event.eventEndDate}
                <li>{event.eventStartTime} - {event.eventEndTime}</li>
                <p className="font-weight-bold">{event.eventName}</p> <br />
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="font-weight-bold text-secondary">No upcoming event</p>
      )}
    </div>
  );
}

export default UpcomingEvent;
