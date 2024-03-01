import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function PastAnnouncement() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/comment")
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {comments.map((comment) => (
        <Card key={comment.commentId} className="card border-light mb-3">
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
                {comment.commentDate} {comment.commentTime}
                </p>
                <p>{comment.commentText}</p>
                {comment.commentImg && (
                  <img
                    src={comment.commentImg}
                    className="card-img"
                    alt="data-provider-image"
                  />
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
