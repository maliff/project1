import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './meih.scss';
import './App.css';
import Dashboard from './views/Dashboard';
import ContentWrapper from './layout/ContentWrapper';
import Sidebar from './layout/Sidebar';
import Page404 from './views/Page404';

const getBasename = () => `/${process.env.PUBLIC_URL.split('/').pop()}`;

function App() {
  return (
    <BrowserRouter basename={getBasename()}>
      <Sidebar />
      <ContentWrapper>
        <Routes>
          <Route exact path='/' component={Dashboard} />
          <Route component={Page404} />
        </Routes>
      </ContentWrapper>
    </BrowserRouter>
  );
}

export default App