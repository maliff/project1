import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './meih.scss';
import './App.css';
import Dashboard from './views/Dashboard/Dashboard';
import NEBAccountManagement from './views/NEBAccountManagement/NEBAccountManagement'
import NEBVerificationModule from './views/NEBVerificationModule/NebVerificationModule';
import FuelBalanceReport from './views/NEBVerificationModule/FuelBalanceReport';
import EbtUploadFile from './views/EbtGenerationModule/EbtUploadFile';
import EbtGenerationModule from './views/EbtGenerationModule/EbtGenerationModule';
import Announcement from './views/Announcement/Announcement';
import SystemReport from './views/SystemReport/SystemReport';
import ProductListing from './views/SystemReport/ProductListing';
import TrainingModule from './views/TrainingModule/TrainingModule';
import ContentWrapper from './layout/ContentWrapper';
import Sidebar from './layout/Sidebar';
import Page404 from './views/Page404';
import Header from './layout/Header';
import CreateNewDataProvider from './views/NEBAccountManagement/CreateNewDataProvider';
import CreateNewDataProvider2 from './views/NEBAccountManagement/CreateNewDataProvider2';
import CreateNewDataProvider3 from './views/NEBAccountManagement/CreateNewDataProvider3';
import CreateNewDataProviderSummary from './views/NEBAccountManagement/CreateNewDataProviderSummary';
import CreateNewProduct from './views/NEBAccountManagement/CreateNewProduct';
import CreateNewProductSummary from './views/NEBAccountManagement/CreateNewProductSummary';
import ManualSubmission from './views/ManualSubmission/ManualSubmission';
import FAQ from './views/FAQ/FAQ';
import ReportSubmission from './views/ReportSubmission/ReportSubmission';

const getBasename = () => `/${process.env.PUBLIC_URL.split('/').pop()}`;

function App() {
  return (
    <BrowserRouter basename={getBasename()}>
      <Header />
      <Sidebar />
      <ContentWrapper>
        <Routes>
          <Route exact path='/' element={<Dashboard/>} />
          <Route exact path='/nebAccountManagement' element={<NEBAccountManagement/>} />
          <Route exact path='/createNewDataProvider' element={<CreateNewDataProvider/>} />
          <Route exact path='/createNewDataProvider2' element={<CreateNewDataProvider2/>} />
          <Route exact path='/createNewDataProvider3' element={<CreateNewDataProvider3/>} />
          <Route exact path='/createNewDataProviderSummary' element={<CreateNewDataProviderSummary/>} />
          <Route exact path='/createNewProduct' element={<CreateNewProduct/>} />
          <Route exact path='/CreateNewProductSummary' element={<CreateNewProductSummary/>} />
          <Route exact path='/nebVerificationModule' element={<NEBVerificationModule/>} />
          <Route exact path='/fuelBalanceReport/:id' element={<FuelBalanceReport/>} />
          <Route exact path='/ebtGenerationModule' element={<EbtGenerationModule/>} />
          <Route exact path='/ebtUploadFile' element={<EbtUploadFile/>} />
          <Route exact path='/reportSubmission' element={<ReportSubmission/>} />
          <Route exact path='/manualSubmission' element={<ManualSubmission/>} />
          <Route exact path='/announcement' element={<Announcement/>} />
          <Route exact path='/systemReport' element={<SystemReport/>} />
          <Route exact path='/productListing/:id' element={<ProductListing/>} />
          <Route exact path='/trainingModule' element={<TrainingModule/>} />
          <Route exact path='/faq' element={<FAQ/>} />
          <Route element={<Page404 />} />
        </Routes>
      </ContentWrapper>
    </BrowserRouter>
  );
}

export default App