import React, { useEffect, useRef } from "react";
import Stepper from "bs-stepper";
import "bs-stepper/dist/css/bs-stepper.min.css";

import LteContentHeader from "../../components/LteContentHeader";
import LteContent from "../../components/LteContent";
import CreateNewAgency1 from "./CreateNewAgency1";
import CreateNewAgencyProductList from "./CreateNewAgencyProductList";
import CreateNewAgencyForm from "./CreateNewAgencyForm";
import AgencyListSummary from "./AgencyListSummary";

function CreateNewAgency() {
  const stepperRef = useRef(null); // Create a reference for the Stepper instance

  useEffect(() => {
    const stepper = new Stepper(document.querySelector("#stepper1"));
    stepperRef.current = stepper; // Store the Stepper instance in the reference
  }, []);

  const handleSave = () => {
    stepperRef.current.next(); // Use the Stepper instance to move to the next step
  };

  const handleBack = () => {
    stepperRef.current.previous(); // Use the Stepper instance to move to the previous step
  };

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
            <div className="step" data-target="#test-l-3">
              <button className="step-trigger">
                <span className="bs-stepper-circle">3</span>
                <span className="bs-stepper-label">Form List</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#test-l-4">
              <button className="step-trigger">
                <span className="bs-stepper-circle">4</span>
                <span className="bs-stepper-label">Summary</span>
              </button>
            </div>
          </div>
          <div className="bs-stepper-content">
            <div id="test-l-1" className="content">
              <CreateNewAgency1 handleSave={handleSave} handleBack={handleBack}/>
            </div>
            <div id="test-l-2" className="content">
              <CreateNewAgencyProductList handleSave={handleSave} handleBack={handleBack}/>
            </div>
            <div id="test-l-3" className="content">
              <CreateNewAgencyForm handleSave={handleSave} handleBack={handleBack}/>
            </div>
            <div id="test-l-4" className="content">
              <AgencyListSummary />
            </div>
          </div>
        </div>
      </LteContent>
    </>
  );
}

export default CreateNewAgency;
