import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faUsers,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function PastAnnouncement() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("https://mydata-d89e.onrender.com/event")
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

  // Function to toggle the visibility of the dropdown menu for a specific card
  const toggleMenu = (eventId) => {
    setEvents(
      events.map((event) =>
        event.id === eventId ? { ...event, showMenu: !event.showMenu } : event
      )
    );
  };

  const handleDelete = (eventId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this post?");
    
    if (isConfirmed) {
      axios
        .delete(`https://mydata-d89e.onrender.com/event/${eventId}`)
        .then((res) => {
          setEvents(events.filter((event) => event.id !== eventId));
          console.log("Post deleted successfully");
        })
        .catch((err) => {
          console.error("Error deleting post:", err);
        });
    }
  };

  const handleEdit = (event) => {
    // Handle edit action for the specific event
  };

  return (
    <div>
      {events.map((event) => (
        <Card key={event.id} className="card border-light mb-3">
          <div
            style={{ position: "absolute", top: 10, right: 10 }}
            onClick={() => toggleMenu(event.id)}
          >
            <span>
              <FontAwesomeIcon icon={faEllipsisH} size="lg" />
            </span>
            {event.showMenu && (
              <div className="col border" style={{ borderRadius: 10 }}>
                <div>
                  <button className="btn" onClick={() => handleEdit(event.id)}>
                    <FontAwesomeIcon icon={faEdit} /> Edit Post
                  </button>
                </div>
                <div>
                  <button
                    className="btn"
                    onClick={() => handleDelete(event.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} /> Delete Post
                  </button>
                </div>
              </div>
            )}
          </div>
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
                  <div
                    className="card bg-light p-2"
                    style={{ borderRadius: "20px" }}
                  >
                    <p className="text-info">
                      {event.eventStartDate}, {event.eventStartTime} -{" "}
                      {event.eventEndDate}, {event.eventEndTime}
                    </p>
                    <h4>{event.eventName}</h4>
                    <p>
                      <i className="fas fa-map-marker-alt mr-2"></i>{" "}
                      {event.eventLocation}
                    </p>
                  </div>
                )}
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default PastAnnouncement;
