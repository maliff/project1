import React, { useEffect } from "react";
import Stepper from "bs-stepper";
import "bs-stepper/dist/css/bs-stepper.min.css";

import LteContentHeader from "../../components/LteContentHeader";
import LteContent from "../../components/LteContent";
import { Card } from "reactstrap";
import CreateNewAgencyForm from "./CreateNewAgencyForm";
import CreateNewAgency1 from "./CreateNewAgency1";
import CreateNewAgencyProductList from "./CreateNewAgencyProductList";

function CreateNewAgency() {
  useEffect(() => {
    new Stepper(document.querySelector("#stepper1"));
  }, []);

  return (
    <>
      <LteContentHeader title="Create New Agency" />
      <LteContent>
        <div id="stepper1" className="bs-stepper">
          <div className="bs-stepper-header">
            <div className="step" data-target="#test-l-1">
              <button className="step-trigger">
                <span className="bs-stepper-circle">1</span>
                <span className="bs-stepper-label">Create Agency</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#test-l-2">
              <button className="step-trigger">
                <span className="bs-stepper-circle">2</span>
                <span className="bs-stepper-label">Product List</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#test-l-2">
              <button className="step-trigger">
                <span className="bs-stepper-circle">3</span>
                <span className="bs-stepper-label">Form List</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#test-l-2">
              <button className="step-trigger">
                <span className="bs-stepper-circle">4</span>
                <span className="bs-stepper-label">Summary</span>
              </button>
            </div>
          </div>
          <div className="bs-stepper-content">
            <div id="test-l-1" className="content">
                <CreateNewAgencyProductList/>
            </div>
            <div id="test-l-2" className="content">
              <p>Content for Step 2</p>
            </div>
            <div id="test-l-3" className="content">
              <p>Content for Step 3</p>
            </div>
            <div id="test-l-4" className="content">
              <p>Content for Step 4</p>
            </div>
          </div>
        </div>
      </LteContent>
    </>
  );
}

export default CreateNewAgency;
