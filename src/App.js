import React from 'react'
import Sidebar from './views/Sidebar';
import Navbar from './views/Navbar';
import Dashboard from './views/Dashboard';
import AccountManagment from './views/AccountManagment';
import NebVerificationModule from './views/NebVerificationModule';
import EbtGenerationModule from './views/EbtGenerationModule';
import Announcement from './views/Announcement';
import SystemReport from './views/SystemReport';
import TrainingModule from './views/TrainingModule';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className='d-flex'>
      <div className='w-auto'>
        <Sidebar />
      </div>
      <div className='col overflow-auto'>
          <Routes>
              <Route path='/' element={<Dashboard />}></Route>
              <Route path='/accountManagment' element={<AccountManagment />}></Route>
              <Route path='/nebVerificationModule' element={<NebVerificationModule />}></Route>
              <Route path='/ebtGenerationModule' element={<EbtGenerationModule />}></Route>
              <Route path='/announcement' element={<Announcement />}></Route>
              <Route path='/systemReport' element={<SystemReport />}></Route>
              <Route path='/trainingModule' element={<TrainingModule />}></Route>
          </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App