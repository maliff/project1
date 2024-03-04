import React, { useState } from "react";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import Modal from "react-bootstrap/Modal";
import PostAnnouncement from "./PostAnnouncement";
import PastAnnouncement from "./PastAnnouncement";
import UpcomingEvent from "./UpcomingEvent";

function Announcement() {
  const [showDialog, setShowDialog] = useState(false);

  const handleBadgeClick = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };
  return (
    <>
      <LteContentHeader title="Announcement" />
      <LteContent>
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title mb-4 font-weight-bold">
                  Post Announcement
                </h3>
                <br />
                <br />
                <PostAnnouncement onBadgeClick={handleBadgeClick}/>
                <h3 className="card-title mb-4 font-weight-bold">
                  Past Announcement
                </h3>
                <br />
                <br />
                <PastAnnouncement />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title mb-4 font-weight-bold">
                  Upcoming Event
                </h3>
                <br />
                <br />
                <UpcomingEvent />
              </div>
            </div>
          </div>
          <Modal show={showDialog} onHide={handleCloseDialog}>
            <Modal.Header closeButton>
              <Modal.Title>
                Post Audience
                <br />
                <span>
                  <small className="text-secondary">
                    Only selected audience can view your post
                  </small>
                </span>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <label>
                  <input
                    className="mr-2"
                    type="radio"
                    name="audience"
                    value="all"
                    checked
                  />
                  All
                </label>
              </div>
              <div>
                <label>
                  <input
                    className="mr-2"
                    type="radio"
                    name="audience"
                    value="utilities-ipp"
                  />
                  Utilities & IPP
                </label>
              </div>
              <div>
                <label>
                  <input
                    className="mr-2"
                    type="radio"
                    name="audience"
                    value="oil-gas"
                  />
                  Oil & Gas
                </label>
              </div>
              <div>
                <label>
                  <input
                    className="mr-2"
                    type="radio"
                    name="audience"
                    value="governmetn"
                  />
                  Government
                </label>
              </div>
              <div>
                <label>
                  <input
                    className="mr-2"
                    type="radio"
                    name="audience"
                    value="cement-steel"
                  />
                  Cement & Steel
                </label>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-secondary" onClick={handleCloseDialog}>
                Cancel
              </button>
              <button className="btn btn-primary">Save</button>
            </Modal.Footer>
          </Modal>
        </div>
      </LteContent>
    </>
  );
}

export default Announcement;
