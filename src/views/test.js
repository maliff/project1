// PostAnnouncement.js

import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

function PostAnnouncement({ onBadgeClick }) {
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
            <div className="mb-3">
              <br />
              {/* Your other content */}
            </div>
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PostAnnouncement;
