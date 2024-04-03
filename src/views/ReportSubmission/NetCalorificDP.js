import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function NetCalorificDP() {
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
        Net Calorific Report - Q{data.id}  2023{" "}
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
        <Col className="fw-bold text-secondary">QUARTER</Col>
        <Col className="fw-bold text-secondary">YEAR</Col>
      </Row>
      <Row className="mb-5">
        <Col>Kapar Energy Ventures Sdn. Bhd.</Col>
        <Col>Peninsular Malaysia</Col>
        <Col>Quarter 1</Col>
        <Col>2023</Col>
      </Row>
      <div className="card" style={{ borderRadius: "20px" }}>
        {/* /.card-header */}
        <div className="card-body p-0" style={{ overflowX: "auto" }}>
          <table className="table table-sm">
            <thead className="bg-secondary">
              <tr>
                <th>Fuel</th>
                <th>Product</th>
                <th>value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gas</td>
                <td>Natural Gas</td>
                <td>
                  {data.status === "Approved" || data.status === "Pending for Approval"  ? (
                    "0000 kcal/m3"
                  ) : data.status === "Pending for Amendment" ? (
                    <input
                      type="text"
                      value={"0000 kcal/m3"}
                      style={{
                        width: "70%",
                        height: "30px",
                        marginRight: "5px",
                        borderRadius: "5px",
                      }}
                    />
                  ) : (
                    <input
                      type="text"
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
                <td>Oil</td>
                <td>Diesel</td>
                <td>
                  {data.status === "Approved" || data.status === "Pending for Approval"  ? (
                    "0000 kcal/g"
                  ) : data.status === "Pending for Amendment" ? (
                    <input
                      type="text"
                      value={"0000 kcal/g"}
                      style={{
                        width: "70%",
                        height: "30px",
                        marginRight: "5px",
                        borderRadius: "5px",
                      }}
                    />
                  ) : (
                    <input
                      type="text"
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

export default NetCalorificDP;
