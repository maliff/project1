import React, { useState } from "react";

function ModuleGuide() {
  const [visibleModuleGuide, setVisibleModuleGuide] = useState(false);
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">
          <b>Module Instruction/Guide on How to Use the NEB DMS</b>
        </h3>
        <div className="card-tools">
          <button
            type="button"
            onClick={() => setVisibleModuleGuide(!visibleModuleGuide)}
            className="btn btn-tool"
            title={visibleModuleGuide ? "Collapse" : "Expand"}
          >
            <i
              className={`fas ${visibleModuleGuide ? "fa-minus" : "fa-plus"}`}
            />
          </button>
        </div>
      </div>
      <div
        className="card-body"
        style={{ display: visibleModuleGuide ? "block" : "none" }}
      >
        <div className="row justify-content-center">
          <div className="col-md-8">
            <video width={400} controls className="mx-auto d-block">
              <source src="mov_bbb.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <br />
        <br />
        <p>
          <b>Accessing NEB DMS:</b>
          <br /> Open your website browser and type the URL for the MEIH Portal:{" "}
          <i>meih.st.gov.my</i>
          <br />
          Or visit the Suruhanjaya Tenaga website: <i>www.st.gov.my</i> and
          click the MEIH icon.
        </p>
        <p>
          <b>Login:</b>
          <br /> Enter your assigned User ID and Password.
          <br />
          Click Sign in
        </p>
        <p>
          <b>Main Dashboard:</b>
          <br /> Dashboard: View a summary of submitted reports and their
          status.
          <br /> Data Submission: Access the module for submitting quarterly
          reports.
          <br /> Change Password: Update your password.
          <br /> Helpdesk: Seek assistance or provide feedback.
          <br /> Data Trend Analysis: Analyze historical data (optional).
          <br /> Announcement: View important notices (optional).
        </p>
      </div>
    </div>
  );
}

export default ModuleGuide;
