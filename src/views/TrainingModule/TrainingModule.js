import React, { useState } from "react";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import ModuleGuide from "./ModuleGuide";
import DataSubmissionProcess from "./DataSubmissionProcess";
import BalancingGrid from "./BalancingGrid";
import AdditionalFeatures from "./AdditionalFeatures";

function TrainingModule() {
  return (
    <>
      <LteContentHeader title="Training Module" />
      <LteContent>
        <ModuleGuide />
        <DataSubmissionProcess />
        <BalancingGrid />
        <AdditionalFeatures />
      </LteContent>
    </>
  );
}

export default TrainingModule;
