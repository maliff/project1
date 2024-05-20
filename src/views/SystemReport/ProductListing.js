import React, { useEffect, useState } from "react";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import axios from "axios";
import { useParams } from "react-router";

function ProductListing() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://mydata-d89e.onrender.com/tickets/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <LteContentHeader title={`${data.ticketId} ${data.category}`} />
      <LteContent>
        <div className="card">
          <div class="card-header">
            <h4 className="mb-4">
              <b>{`${data.ticketId} ${data.category}`} </b>
              <span
                className={`badge ${
                  data.status === "Resolved"
                    ? "bg-success"
                    : data.status === "Open"        
                    ? "bg-info"
                    : "bg-secondary"
                }`}
              >
                <small>{data.status}</small>
              </span>
            </h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-8 order-2 order-md-1">
                <div className="row">
                  <div className="col-12">
                    <div className="user-block mb-3">
                      <img
                        className="img-circle img-bordered-sm"
                        src="../images/profile-image-2.jpg"
                        alt="user image"
                      />
                      <span className="username">
                        <a href="#">Julian Cassablancas</a>
                      </span>
                      <span className="description">Data Provider</span>
                    </div>
                    <br />
                    <br />
                    <div className="mailbox-read-message">
                      <p>Dear Admin,</p>
                      <p>
                        I need help in adding my current product in the list.
                        <br /> Attached is the proof that the product is not in
                        the list.
                      </p>
                      <p>Here are the details;</p>
                      <p>
                        Product Category: Electricity <br /> Product Name:
                        Thermal
                      </p>
                      <p>
                        Thanks,
                        <br />
                        Julian C.
                      </p>
                    </div>
                    <ul className="mailbox-attachments d-flex align-items-stretch clearfix">
                      <li>
                        <span className="mailbox-attachment-icon has-img">
                          <img
                            src="../images/Screenshot_123.png"
                            alt="Attachment"
                          />
                        </span>
                        <div className="mailbox-attachment-info">
                          <a href="#" className="mailbox-attachment-name">
                            <i className="fas fa-camera" /> screenshot_124.png
                          </a>
                          <span className="mailbox-attachment-size clearfix mt-1">
                            <span>1.9 MB</span>
                            <a
                              href="#"
                              className="btn btn-default btn-sm float-right"
                            >
                              <i className="fas fa-cloud-download-alt" />
                            </a>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-md-12 col-lg-4 order-1 order-md-2 bg-light"
                style={{ borderRadius: "20px" }}
              >
                <h3 className="text-primary">Requester's Details</h3>
                <div className="text-muted">
                  <p className="text-sm">
                    REQUESTER
                    <b className="d-block">Julian Cassablancas</b>
                  </p>
                  <p className="text-sm">
                    EMAIL
                    <b className="d-block">julianassablancas@tnb.com</b>
                  </p>
                  <p className="text-sm">
                    DATE CREATED
                    <b className="d-block">12 Dec 2023 09:30</b>
                  </p>
                  <p className="text-sm">
                    DIVISION
                    <b className="d-block">Power Supply</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer bg-white mt-3">
            <h4 className="mb-4">
              <b>Comment &#40; 0 &#41;</b>
            </h4>
            <form className="form-horizontal">
              <div className="input-group input-group-lg mb-2">
                <input
                  className="form-control form-control-lg"
                  placeholder="Type here..."
                />
                <button type="submit" className="btn btn-primary ml-2">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </LteContent>
    </>
  );
}

export default ProductListing;
