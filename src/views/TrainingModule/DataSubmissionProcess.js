import React, { useState } from "react";

function DataSubmissionProcess() {
  const [visibleDataSubPro, setVisibleDataSubPro] = useState(false);
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">
          <b>Data Submission Process</b>
        </h3>
        <div className="card-tools">
          <button
            type="button"
            onClick={() => setVisibleDataSubPro(!visibleDataSubPro)}
            className="btn btn-tool"
            title={visibleDataSubPro ? "Collapse" : "Expand"}
          >
            <i
              className={`fas ${visibleDataSubPro ? "fa-minus" : "fa-plus"}`}
            />
          </button>
        </div>
      </div>
      <div
        className="card-body"
        style={{ display: visibleDataSubPro ? "block" : "none" }}
      >
        Check the Header part you can find Legacy version of style.
        <br />
        Start creating your amazing application!
      </div>
    </div>
  );
}

export default DataSubmissionProcess;
