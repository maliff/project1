import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './meih.scss';
import './App.css';
import Dashboard from './views/Dashboard';
import NEBVerificationModuel from './views/NEBVerificationModule/NebVerificationModule';
import FuelBalanceReport from './views/NEBVerificationModule/FuelBalanceReport';
import Announcement from './views/Announcement/Announcement';
import ContentWrapper from './layout/ContentWrapper';
import Sidebar from './layout/Sidebar';
import Page404 from './views/Page404';
import Header from './layout/Header';
import NEBAccountManagement from './views/NEBAccountManagement/NEBAccountManagement';

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
          <Route exact path='/nebVerificationModule' element={<NEBVerificationModuel/>} />
          <Route exact path='/fuelBalanceReport' element={<FuelBalanceReport/>} />
          <Route exact path='/announcement' element={<Announcement/>} />
          <Route element={<Page404 />} />
        </Routes>
      </ContentWrapper>
    </BrowserRouter>
  );
}

export default App