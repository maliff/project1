import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './meih.scss';
import './App.css';
import Dashboard from './views/Dashboard/Dashboard';
import NEBAccountManagement from './views/NEBAccountManagement/NEBAccountManagement'
import NEBVerificationModule from './views/NEBVerificationModule/NebVerificationModule';
import FuelBalanceReport from './views/NEBVerificationModule/FuelBalanceReport';
import EbtGenerationModule from './views/EbtGenerationModule/EbtGenerationModule';
import Announcement from './views/Announcement/Announcement';
import SystemReport from './views/SystemReport/SystemReport';
import ProductListing from './views/SystemReport/ProductListing';
import TrainingModule from './views/TrainingModule/TrainingModule';
import ContentWrapper from './layout/ContentWrapper';
import Sidebar from './layout/Sidebar';
import Page404 from './views/Page404';
import Header from './layout/Header';

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
          <Route exact path='/nebVerificationModule' element={<NEBVerificationModule/>} />
          <Route exact path='/fuelBalanceReport' element={<FuelBalanceReport/>} />
          <Route exact path='/ebtGenerationModule' element={<EbtGenerationModule/>} />
          <Route exact path='/announcement' element={<Announcement/>} />
          <Route exact path='/systemReport' element={<SystemReport/>} />
          <Route exact path='/productListing' element={<ProductListing/>} />
          <Route exact path='/trainingModule' element={<TrainingModule/>} />
          <Route element={<Page404 />} />
        </Routes>
      </ContentWrapper>
    </BrowserRouter>
  );
}

export default App