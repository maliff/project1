import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./meih.scss";
import "./App.css";
import Dashboard from "./views/Dashboard/Dashboard";
import NEBVerificationModule from "./views/NEBVerificationModule/NebVerificationModule";
import FuelBalanceReport from "./views/NEBVerificationModule/FuelBalanceReport";
import EbtUploadFile from "./views/EbtGenerationModule/EbtUploadFile";
import EbtGenerationModule from "./views/EbtGenerationModule/EbtGenerationModule";
import Announcement from "./views/Announcement/Announcement";
import SystemReport from "./views/SystemReport/SystemReport";
import ProductListing from "./views/SystemReport/ProductListing";
import TrainingModule from "./views/TrainingModule/TrainingModule";
import ContentWrapper from "./layout/ContentWrapper";
import Sidebar from "./layout/Sidebar";
import Page404 from "./views/Page404";
import Header from "./layout/Header";
import ManualSubmission from "./views/ManualSubmission/ManualSubmission";
import FAQ from "./views/FAQ/FAQ";
import ReportSubmission from "./views/ReportSubmission/ReportSubmission";
import FuelBalanceReportDP from "./views/ReportSubmission/FuelBalanceReportDP";
import SubmitNewReport from "./views/ReportSubmission/SubmitNewReport";
import SubmitNewTicket from "./views/SystemReport/SubmitNewTicket";
import ManagementDashboard from "./views/NEBAccountManagement/ManagementDashboard";
import { oauthConfig } from "./config/oauthconfig";
import Login from "./views/Login";
import Callback from "./views/Callback";
import { AuthProvider } from "react-oauth2-code-pkce";
import CreateNewAgency from "./views/NEBAccountManagement/CreateNewAgency";
import CreateNewDataProvider from "./views/NEBAccountManagement/CreateNewDataProvider";
import CreateProduct from "./views/NEBAccountManagement/CreateProduct";

const getBasename = () => `/${process.env.PUBLIC_URL.split("/").pop()}`;

function App() {
  console.log(oauthConfig);
  return (
    <AuthProvider authConfig={oauthConfig}>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <ContentWrapper>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/neb-module" element={<Dashboard />} />
            <Route
              exact
              path="/managementDashboard"
              element={<ManagementDashboard />}
            />
            <Route
              exact
              path="/createNewAgency"
              element={<CreateNewAgency />}
            />
            <Route
              exact
              path="/createNewDataProvider"
              element={<CreateNewDataProvider />}
            />
            <Route exact path="/createProduct" element={<CreateProduct />} />
            <Route
              exact
              path="/nebVerificationModule"
              element={<NEBVerificationModule />}
            />
            <Route
              exact
              path="/fuelBalanceReport/:id"
              element={<FuelBalanceReport />}
            />
            <Route
              exact
              path="/ebtGenerationModule"
              element={<EbtGenerationModule />}
            />
            <Route exact path="/ebtUploadFile" element={<EbtUploadFile />} />
            <Route
              exact
              path="/reportSubmission"
              element={<ReportSubmission />}
            />
            <Route
              exact
              path="/submitNewReport/:id"
              element={<SubmitNewReport />}
            />
            <Route
              exact
              path="/fuelBalanceReportDP/:id"
              element={<FuelBalanceReportDP />}
            />
            <Route
              exact
              path="/manualSubmission"
              element={<ManualSubmission />}
            />
            <Route exact path="/announcement" element={<Announcement />} />
            <Route exact path="/systemReport" element={<SystemReport />} />
            <Route
              exact
              path="/productListing/:id"
              element={<ProductListing />}
            />
            <Route
              exact
              path="/submitNewTicket"
              element={<SubmitNewTicket />}
            />
            <Route exact path="/trainingModule" element={<TrainingModule />} />
            <Route exact path="/faq" element={<FAQ />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/callback" element={<Callback />} />
            <Route element={<Page404 />} />
          </Routes>
        </ContentWrapper>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
