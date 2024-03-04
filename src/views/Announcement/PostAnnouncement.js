import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCalendar,
  faPaperclip,
  faImage,
  faRecordVinyl,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router";
import CreateEvent from "./CreateEvent";

function PostAnnouncement({ onBadgeClick }) {
  const [values, setValues] = useState({
    eventText: ""
  });
  const [showCalendarModal, setShowCalendarModal] = useState(false); 

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentDate = getCurrentDate();
    const currentTime = getCurrentTime();
    const eventData = {
      eventText: values.eventText,
      eventDate: currentDate,
      eventTime: currentTime
    };
    axios
      .post("http://localhost:3030/event", eventData)
      .then((res) => {
        console.log(res);
        navigate("/announcement");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const getCurrentDate = () => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date().toLocaleDateString("en-US", options);
  };

  const getCurrentTime = () => {
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    return new Date().toLocaleTimeString("en-US", options);
  };

  return (
    <Card className="mb-5">
      <Card.Body className="bg-light">
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
                <small className="p-1 badge bg-primary" onClick={onBadgeClick}>
                  <FontAwesomeIcon icon={faUsers} />
                  <span> All</span>
                </small>
              </div>
            </div>
          </Card.Title>
          <Card.Text>
            <form onSubmit={handleSubmit}>
              <br />
              <textarea
                className="form-control mb-2"
                id="postAnnouncement"
                rows="3"
                placeholder="Type here..."
                value={values.eventText}
                onChange={(e) => setValues({ ...values, eventText: e.target.value })}
              ></textarea>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="mr-4"
                    onClick={() => setShowCalendarModal(true)}
                  />
                  <FontAwesomeIcon icon={faPaperclip} className="mr-4" />
                  <FontAwesomeIcon icon={faImage} className="mr-4" />
                  <FontAwesomeIcon icon={faRecordVinyl} className="mr-4" />
                </div>
                <button type="submit" className="btn btn-primary btn-lg">
                  Post
                </button>
              </div>
            </form>
          </Card.Text>
        </div>
      </Card.Body>

      {/* Calendar Modal */}
      <CreateEvent show={showCalendarModal} onHide={() => setShowCalendarModal(false)} />
    </Card>
  );
}

export default PostAnnouncement;
