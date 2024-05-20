import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function InstalledCapacityDP() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://mydata-d89e.onrender.com/listOfSubmission/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h5 class="card-title">
        Installed Capacity Report - Q{data.id}  2023{" "}
        <span
          className={`badge ${
            data.status === "Approved"
              ? "bg-success"
              : data.status === "Pending for Approval"
              ? "bg-warning"
              : data.status === "Pending for Amendment"
              ? "bg-danger"
              : "bg-secondary"
          }`}
        >
          <small>{data.status}</small>
        </span>
      </h5>
      <br />
      <br />
      <Row className="mb-2">
        <Col className="fw-bold text-secondary">POWER STATION</Col>
        <Col className="fw-bold text-secondary">REGION</Col>
        <Col className="fw-bold text-secondary">PRIME MOVER</Col>
        <Col className="fw-bold text-secondary">ENERGY SOURCE</Col>
        <Col className="fw-bold text-secondary">QUARTER</Col>
        <Col className="fw-bold text-secondary">YEAR</Col>
      </Row>
      <Row className="mb-5">
        <Col>Kapar Energy Ventures Sdn. Bhd.</Col>
        <Col>Peninsular Malaysia</Col>
        <Col>Stream</Col>
        <Col>Oil</Col>
        <Col>Quarter 1</Col>
        <Col>2023</Col>
      </Row>
      <div className="card" style={{ borderRadius: "20px" }}>
        {/* /.card-header */}
        <div className="card-body p-0" style={{ overflowX: "auto" }}>
          <table className="table table-sm">
            <thead className="bg-secondary">
              <tr>
                <th>Item</th>
                <th>(MW)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Installed Capacity</td>
                <td>
                  {data.status === "Approved" || data.status === "Pending for Approval"  ? (
                    "2,500"
                  ) : data.status === "Pending for Amendment" ? (
                    <input
                      type="number"
                      value={2500}
                      style={{
                        width: "70%",
                        height: "30px",
                        marginRight: "5px",
                        borderRadius: "5px",
                      }}
                    />
                  ) : (
                    <input
                      type="number"
                      style={{
                        width: "70%",
                        height: "30px",
                        marginRight: "5px",
                        borderRadius: "5px",
                      }}
                    />
                  )}
                </td>
              </tr>
              <tr>
                <td>Available Capacity</td>
                <td>
                  {data.status === "Approved" || data.status === "Pending for Approval" ? (
                    "2,456"
                  ) : data.status === "Pending for Amendment" ? (
                    <input
                      type="number"
                      value={2456}
                      style={{
                        width: "70%",
                        height: "30px",
                        marginRight: "5px",
                        borderRadius: "5px",
                      }}
                    />
                  ) : (
                    <input
                      type="number"
                      style={{
                        width: "70%",
                        height: "30px",
                        marginRight: "5px",
                        borderRadius: "5px",
                      }}
                    />
                  )}
                </td>
              </tr>
              <tr>
                <td>Reserve</td>
                <td>
                  {data.status === "Approved" || data.status === "Pending for Approval"  ? (
                    "2,356"
                  ) : data.status === "Pending for Amendment" ? (
                    <input
                      type="number"
                      value={2356}
                      style={{
                        width: "70%",
                        height: "30px",
                        marginRight: "5px",
                        borderRadius: "5px",
                      }}
                    />
                  ) : (
                    <input
                      type="number"
                      style={{
                        width: "70%",
                        height: "30px",
                        marginRight: "5px",
                        borderRadius: "5px",
                      }}
                    />
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default InstalledCapacityDP;
