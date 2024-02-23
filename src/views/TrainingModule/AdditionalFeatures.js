import React, { useState } from "react";

function AdditionalFeatures() {
  const [visibleAddFeatures, setVisibleAddFeatures] = useState(false);
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title"><b>Additional Features</b></h3>
        <div className="card-tools">
          <button
            type="button"
            onClick={() => setVisibleAddFeatures(!visibleAddFeatures)}
            className="btn btn-tool"
            title={visibleAddFeatures ? "Collapse" : "Expand"}
          >
            <i className={`fas ${visibleAddFeatures ? "fa-minus" : "fa-plus"}`} />
          </button>
        </div>
      </div>
      <div
        className="card-body"
        style={{ display: visibleAddFeatures ? "block" : "none" }}
      >
        Check the Header part you can find Legacy version of style.
        <br />
        Start creating your amazing application!
      </div>
    </div>
  );
}

export default AdditionalFeatures;
