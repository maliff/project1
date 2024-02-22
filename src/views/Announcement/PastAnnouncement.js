import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

function PastAnnouncement() {
  return (
    <Card className="card border-light mb-5">
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
              1 February 2023 10:45am
            </p>
            <p>
              Data Provider Convention 2023, seats are limited! Register now at{" "}
              <a href="#">www.dpc2023.com/register</a>
            </p>
          </Card.Text>
          <img
            src="./images/data-provider-image.png"
            className="card-img"
            alt="data-provider-image"
          ></img>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PastAnnouncement;
