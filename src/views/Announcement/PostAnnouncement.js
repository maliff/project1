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
import "../../App.css";

function PostAnnouncement() {
  const [showDialog, setShowDialog] = useState(false);

  const handleBadgeClick = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
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
                <h6 className="fw-bold mb-0 p-1">M Amirul Ezekiel</h6>
                <small
                  className="p-1 badge bg-primary"
                  onClick={handleBadgeClick}
                >
                  <FontAwesomeIcon icon={faUsers} />
                  <span> All</span>
                </small>
              </div>
            </div>
          </Card.Title>
          <Card.Text>
            <div className="mb-3">
              <br />
              <textarea
                className="form-control mb-2"
                id="postAnnouncement"
                rows="3"
                placeholder="Type here..."
              ></textarea>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <FontAwesomeIcon icon={faCalendar} className="mr-4" />
                  <FontAwesomeIcon icon={faPaperclip} className="mr-4" />
                  <FontAwesomeIcon icon={faImage} className="mr-4" />
                  <FontAwesomeIcon icon={faRecordVinyl} className="mr-4" />
                </div>
                <a href="#" className="btn btn-primary btn-lg">
                  Post
                </a>
              </div>
            </div>
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PostAnnouncement;
