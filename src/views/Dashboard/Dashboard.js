import {
  faChartBar,
  faComment,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUp,
  faBars,
  faChartPie,
  faCloudDownloadAlt,
  faCog,
  faComments,
  faDownload,
  faMinus,
  faRedo,
  faShoppingBasket,
  faShoppingCart,
  faTag,
  faThumbsUp,
  faTimes,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import { Col, Container, Row } from "reactstrap";
import SubmittedFormByQuarter from "./SubmittedFormByQuarter";
import PostAnnouncement from "../Announcement/PostAnnouncement";
import PastAnnouncement from "../Announcement/PastAnnouncement";
import DataTrendAnalysis from "../NEBVerificationModule/DataTrendAnalysis";

export default function Dashboard() {
  return (
    <>
      <LteContentHeader title="Dashboard" />
      <LteContent>
        <Container fluid>
          <Row className="mb-2">
            <Col sm="6">
              <h5>
                <b>Form Status</b>
              </h5>
            </Col>
            <Col sm="6">
              <div className="main-search mb-3">
                <div>
                  <label htmlFor="year" className="mr-2">
                    Tahun{" "}
                  </label>
                  <select id="year">
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quarter" className="mr-2">
                    Region{" "}
                  </label>
                  <select id="quarter">
                    <option value="pm">Peninsular Malaysia</option>
                    <option value="sbh">Sabah</option>
                    <option value="srwk">Sarawak</option>
                  </select>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="row">
          <div className="col-lg-4 col-6">
            {/* small box */}
            <div className="small-box bg-info" style={{ borderRadius: "20px" }}>
              <div className="inner">
                <h3>50</h3>
                <p>Pending for Approval</p>
              </div>
              <div className="icon">
                <i className="ion ion-android-person-add" />
              </div>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-4 col-6">
            {/* small box */}
            <div
              className="small-box bg-danger"
              style={{ borderRadius: "20px" }}
            >
              <div className="inner">
                <h3>5</h3>
                <p>Pending for Amendment</p>
              </div>
              <div className="icon">
                <i className="ion ion-android-alert" />
              </div>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-4 col-6">
            {/* small box */}
            <div
              className="small-box bg-success"
              style={{ borderRadius: "20px" }}
            >
              <div className="inner">
                <h3>15</h3>
                <p>Approved </p>
              </div>
              <div className="icon">
                <i className="ion ion-android-checkmark-circle" />
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <SubmittedFormByQuarter />
              </div>
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>Post Announcement</b>
                    </h5>
                    <br />
                    <br />
                    <PostAnnouncement />
                    <PastAnnouncement />
                  </div>
                </div>
              </div>
              {/* /.col-md-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
            <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>Primary Energy Supply</b>
                    </h5>
                    <br />
                    <br />
                    <DataTrendAnalysis />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LteContent>
    </>
  );
}
