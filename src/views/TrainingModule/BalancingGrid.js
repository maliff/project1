import React, { useState } from "react";

function BalancingGrid() {
  const [visibleBalGrid, setVisibleBalGrid] = useState(false);
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title"><b>Balancing Grid</b></h3>
        <div className="card-tools">
          <button
            type="button"
            onClick={() => setVisibleBalGrid(!visibleBalGrid)}
            className="btn btn-tool"
            title={visibleBalGrid ? "Collapse" : "Expand"}
          >
            <i className={`fas ${visibleBalGrid ? "fa-minus" : "fa-plus"}`} />
          </button>
        </div>
      </div>
      <div
        className="card-body"
        style={{ display: visibleBalGrid ? "block" : "none" }}
      >
        Check the Header part you can find Legacy version of style.
        <br />
        Start creating your amazing application!
      </div>
    </div>
  );
}

export default BalancingGrid;
