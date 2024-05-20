import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function PlantPerformanceDP() {
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
        Plant Performance Report - Q{data.id} 2023{" "}
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
        <Col className="fw-bold text-secondary">POWER PLANT</Col>
        <Col className="fw-bold text-secondary">REGION</Col>
        <Col className="fw-bold text-secondary">TYPE OF POWER PLANT</Col>
        <Col className="fw-bold text-secondary">FUEL</Col>
        <Col className="fw-bold text-secondary">QUARTER</Col>
        <Col className="fw-bold text-secondary">YEAR</Col>
      </Row>
      <Row className="mb-5">
        <Col>Kapar Energy Ventures Sdn. Bhd.</Col>
        <Col>Peninsular Malaysia</Col>
        <Col>Conventional Thermal</Col>
        <Col>Gas Asli</Col>
        <Col>Quarter 1</Col>
        <Col>2023</Col>
      </Row>
      <div className="card" style={{ borderRadius: "20px" }}>
        {/* /.card-header */}
        <div className="card-body p-0" style={{ overflowX: "auto" }}>
          <table className="table table-sm">
            <thead className="bg-secondary">
              <tr>
                <th>No.</th>
                <th>Product</th>
                <th>Percentage(%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Thermal Efficiency</td>
                <td>
                  {data.status === "Approved" ||
                  data.status === "Pending for Approval" ? (
                    41.5
                  ) : data.status === "Pending for Amendment" ? (
                    <input
                      type="number"
                      value={41.5}
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
                <td>2</td>
                <td>Equivalent Availability Factor (EAF)</td>
                <td>
                  {data.status === "Approved" ||
                  data.status === "Pending for Approval" ? (
                    40.1
                  ) : data.status === "Pending for Amendment" ? (
                    <input
                      type="number"
                      value={40.1}
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
                <td>3</td>
                <td>Equivalent Unplanned Outage Factor (EUOF)</td>
                <td>
                  {data.status === "Approved" ||
                  data.status === "Pending for Approval" ? (
                    42.3
                  ) : data.status === "Pending for Amendment" ? (
                    <input
                      type="number"
                      value={42.3}
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

export default PlantPerformanceDP;
