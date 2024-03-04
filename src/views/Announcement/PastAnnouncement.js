import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function PastAnnouncement() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/event")
      .then((res) => {
        // Sort events in descending order based on event date and time
        const sortedEvents = res.data.sort((a, b) => {
          const dateA = new Date(a.eventDate + " " + a.eventTime);
          const dateB = new Date(b.eventDate + " " + b.eventTime);
          return dateB - dateA;
        });
        setEvents(sortedEvents);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {events.map((event) => (
        <Card key={event.id} className="card border-light mb-3">
          <Card.Body>
            <div>
              <Card.Title>
                <div className="d-flex align-items-center">
                  <img
                    src="./images/profile-image-1.jpg"
                    alt="Profile"
                    className="rounded-circle mr-3"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div>
                    <h5 className="fw-bold mb-0 p-1">M Amirul Ezekiel</h5>
                    <small className="p-1 badge bg-primary">
                      <FontAwesomeIcon icon={faUsers} />
                      <span> All</span>
                    </small>
                  </div>
                </div>
              </Card.Title>
              <Card.Text>
                <p className="mt-4 fw-bold text-secondary mb-2">
                  {event.eventDate} {event.eventTime}
                </p>
                <p>{event.eventText}</p>
                {event.eventImg && (
                  <img
                    src={event.eventImg}
                    className="card-img"
                    alt="data-provider-image"
                  />
                )}
                {event.eventName && (
                <div className="card bg-light p-2" style={{ borderRadius: '20px' }}>
                <p className="text-info">{event.eventStartDate}, {event.eventStartTime}   - {event.eventEndDate}, {event.eventEndTime}</p>
                <h4>{event.eventName}</h4>
                <p><i className="fas fa-map-marker-alt mr-2"></i> {event.eventLocation}</p>  
                </div>)}
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default PastAnnouncement;
