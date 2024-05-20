import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import axios from "axios";

function CreateEvent({ show, onHide }) {
  const [values, setValues] = useState({
    eventText: "",
    eventName: "",
    eventStartDate: "",
    eventStartTime: "",
    eventEndDate: "",
    eventEndTime: "",
    eventLocation: "",
    eventLink: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentDate = getCurrentDate();
    const currentTime = getCurrentTime();
    const eventData = {
      eventText: values.eventText,
      eventName: values.eventName,
      eventStartDate: formatDate(values.eventStartDate),
      eventStartTime: formatTime(values.eventStartTime),
      eventEndDate: formatDate(values.eventEndDate),
      eventEndTime: formatTime(values.eventEndTime),
      eventLocation: values.eventLocation,
      eventLink: values.eventLink,
      eventDate: currentDate,
      eventTime: currentTime,
    };
    axios
      .post("https://mydata-d89e.onrender.com/event", eventData)
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

  const formatDate = (dateString) => {
    const options = {
      weekday: "short",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (timeString) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const time = new Date(`01/01/2000 ${timeString}`);
    return time.toLocaleTimeString("en-US", options);
  };
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Create Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Dialog content goes here */}

        <form onSubmit={handleSubmit}>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="createEventType"
                id="onlineEvent"
                defaultValue="optionOnline"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="onlineEvent">
                Online Event
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="createEventType"
                id="physicalEvent"
                defaultValue="optionPhysical"
              />
              <label className="form-check-label" htmlFor="physicalEvent">
                Physical Event
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="eventName">Event Name</label>
            <input
              type="text"
              className="form-control"
              id="eventName"
              placeholder="Type.."
              required
              value={values.eventName}
              onChange={(e) =>
                setValues({ ...values, eventName: e.target.value })
              }
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="startDateTime">Start Date</label>
              <input
                type="date"
                className="form-control"
                id="startDate"
                placeholder="Select"
                required
                value={values.eventStartDate}
                onChange={(e) =>
                  setValues({ ...values, eventStartDate: e.target.value })
                }
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="startTime">Start Time</label>
              <input
                type="time"
                className="form-control"
                id="startTime"
                placeholder="Select"
                value={values.eventStartTime}
                required
                onChange={(e) =>
                  setValues({ ...values, eventStartTime: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="endDateTime">End Date</label>
              <input
                type="date"
                className="form-control"
                id="endDate"
                placeholder="Select"
                required
                value={values.eventEndDate}
                onChange={(e) =>
                  setValues({ ...values, eventEndDate: e.target.value })
                }
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="endTime">End Time</label>
              <input
                type="time"
                className="form-control"
                id="endTime"
                placeholder="Select"
                required
                value={values.eventEndTime}
                onChange={(e) =>
                  setValues({ ...values, eventEndTime: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="eventLocation">Event Location</label>
            <input
              type="text"
              className="form-control"
              id="eventLocation"
              placeholder="Type.."
              value={values.eventLocation}
              onChange={(e) =>
                setValues({ ...values, eventLocation: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventLink">Event Link</label>
            <input
              type="text"
              className="form-control"
              id="eventLink"
              placeholder="Type.."
              value={values.eventLink}
              onChange={(e) =>
                setValues({ ...values, eventLink: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc">Description</label>
            <textarea
              type="textarea"
              className="form-control"
              id="desc"
              placeholder="Type.."
              required
              value={values.eventText}
              onChange={(e) =>
                setValues({ ...values, eventText: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="uploadFile">Upload File</label>
            <textarea
              type="textarea"
              className="form-control"
              id="uploadFile"
              placeholder="Type.."
            />
          </div>
          <div className="modal-footer">
            <div className="row justify-content-end">
              <div className="col-auto">
                <button
                  className="btn btn-outline-primary btn-md"
                  onClick={(e) => {
                    e.preventDefault();
                    onHide();
                  }}
                >
                  Cancel
                </button>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary btn-md">
                  Post
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default CreateEvent;
