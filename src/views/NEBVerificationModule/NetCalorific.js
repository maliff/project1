import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function NetCalorific() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://mydata-d89e.onrender.com/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h5 class="card-title mb-4 mt-4">
        Net Calorific Report - Q1 2023{" "}
        <span
          className={`badge ${
            data.Status === "Approved"
              ? "bg-success"
              : data.Status === "Pending for Approval"
              ? "bg-warning"
              : data.Status === "Pending for Amendment"
              ? "bg-danger"
              : "bg-secondary"
          }`}
        >
          <small>{data.Status}</small>
        </span>
      </h5>
      <br />
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
                <td>0000 kcal/m3</td>
              </tr>
              <tr>
                <td>Oil</td>
                <td>Diesel</td>
                <td>0000 kcal/g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default NetCalorific;
