import React, { useState } from "react";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import AgencyList from "./AgencyList";
import DataProviderList from "./DataProviderList";
// import { NEBDataProvider } from "./NEBDataProvider";

function ManagementDashboard() {
  return (
    <>
    <LteContentHeader title="Data Provider & Product Management"/>
    <LteContent>
    <Tabs
      defaultActiveKey="agency"
      id="management-dashboard-tabs"
      className="mb-3"
    >
      <Tab eventKey="agency" title="Agency">
        <AgencyList/>
      </Tab>
      <Tab eventKey="dataProvider" title="Data Provider">
        <DataProviderList/>
        {/* <NEBDataProvider/> */}
      </Tab>
      <Tab eventKey="product" title="Product">
        Tab content for Product
      </Tab>
    </Tabs>
    </LteContent>
  </>  )
}

export default ManagementDashboard