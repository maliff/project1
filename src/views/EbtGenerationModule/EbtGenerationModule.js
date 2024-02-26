import React from "react";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import { Navigate, Link } from "react-router-dom";
import { Button } from "reactstrap";
function EbtGenerationModule() {
  return (
    <>
      <LteContentHeader title="EBT Generation Module" />
      <LteContent>
        <div className="d-flex justify-content-end mt-3 mb-3">
          <Link to="/ebtUploadFile">
            <Button
              color="primary"
              onClick={() => console.log("Button clicked")}
            >
              + Upload File
            </Button>
          </Link>
        </div>

        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="card card-default">
              <div className="card-header">
                <div>
                <h2
                  className="card-title"
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                >
                  Energy Balance List
                </h2>
                <div className="main-search">
                  <div>
                    <label className=" mr-2"htmlFor="year">Year </label>
                    <select id="year">
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                    </select>
                  </div>
                </div>
                </div>
                <div style={{ clear: "both" }}></div>{" "}
                <h6>
                  The EBT Final will be made after all four quarters' forms are
                  uploaded*
                </h6>
              </div>
              {/* /.card-header */}

              {/* Form*/}
              <div className="card-body"></div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
      </LteContent>
    </>
  );
}

export default EbtGenerationModule;
