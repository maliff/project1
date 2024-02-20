import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'; 
import {
  faUsers,
  faCalendar,
  faPaperclip,
  faImage,
  faRecordVinyl
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Announcement() {
  const [showDialog, setShowDialog] = useState(false); 

  const handleBadgeClick = () => {
    setShowDialog(true); 
  };

  const handleCloseDialog = () => {
    setShowDialog(false); 
  };

  return (
    <div className='p-3 bg-light'>
      <div className='container-fluid'>
        <h1 className='text-primary mb-4'>Announcement</h1>
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title mb-4 font-weight-bold">Post Announcement</h3>
                <br /><br />
                <Card className='mb-5'>
                  <Card.Body className='bg-light'>
                    <div>
                      <Card.Title>
                        <div className="d-flex align-items-center">
                          <img src="./images/profile-image-1.jpg" alt="Profile" className="rounded-circle mr-3" style={{ width: "50px", height: "50px" }} />
                          <div>
                            <h5 className='fw-bold mb-0 p-1'>M Amirul Ezekiel</h5>
                            <small className='p-1 badge bg-primary' onClick={handleBadgeClick}>
                              <FontAwesomeIcon icon={faUsers} /><span> All</span>
                            </small>
                          </div>
                        </div>
                      </Card.Title>
                      <Card.Text>
                        <div className="mb-3">
                          <br />
                          <textarea className="form-control mb-2" id="postAnnouncement" rows="3" placeholder='Type here...'></textarea>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <FontAwesomeIcon icon={faCalendar} className="mr-4" />
                              <FontAwesomeIcon icon={faPaperclip} className="mr-4" />
                              <FontAwesomeIcon icon={faImage} className="mr-4" />
                              <FontAwesomeIcon icon={faRecordVinyl} className="mr-4" />
                            </div>
                            <a href="#" className="btn btn-primary btn-lg">Post</a>
                          </div>
                        </div>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
                <h3 className="card-title mb-4 font-weight-bold">Past Announcement</h3>
                <br /><br />
                <Card className='card border-light mb-5'>
                  <Card.Body>
                    <div>
                      <Card.Title>
                        <div className="d-flex align-items-center">
                          <img src="./images/profile-image-1.jpg" alt="Profile" className="rounded-circle mr-3" style={{ width: "50px", height: "50px" }} />
                          <div>
                            <h5 className='fw-bold mb-0 p-1'>M Amirul Ezekiel</h5>
                            <small className='p-1 badge bg-primary'>
                              <FontAwesomeIcon icon={faUsers} /><span> All</span>
                            </small>
                          </div>
                        </div>
                      </Card.Title>
                      <Card.Text>
                        <p className='mt-4 fw-bold text-secondary mb-2'>1 February 2023 10:45am</p>
                        <p>Data Provider Convention 2023, seats are limited! Register now at <a href='#'>www.dpc2023.com/register</a></p>
                      </Card.Text>
                      <img src="./images/data-provider-image.png" className="card-img" alt="data-provider-image"></img>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title mb-4 font-weight-bold">Upcoming Event</h3>
                <br /><br />
                <p className="font-weight-bold text-secondary">No upcoming event</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for dialog */}
      <Modal show={showDialog} onHide={handleCloseDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Post Audience<br /><span><small className='text-secondary'>Only selected audience can view your post</small></span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>
              <input className="mr-2" type="radio" name="audience" value="all" checked />
              All
            </label>
          </div>
          <div>
          <label>
              <input className="mr-2" type="radio" name="audience" value="utilities-ipp" />
              Utilities & IPP
            </label>
          </div>
          <div>
          <label>
              <input className="mr-2" type="radio" name="audience" value="oil-gas" />
              Oil & Gas
            </label>
          </div>
          <div>
          <label>
              <input className="mr-2" type="radio" name="audience" value="governmetn" />
              Government
            </label>
          </div>
          <div>
          <label>
              <input className="mr-2" type="radio" name="audience" value="cement-steel" />
              Cement & Steel
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseDialog}>Cancel</button>
          <button className="btn btn-primary">Save</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Announcement;
