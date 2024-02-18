import React, { useState } from 'react'
import '../style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';


function Sidebar() {
    const [active, setactive] = useState(1);
  return (
    <div className='sidebar d-flex justify-content-between flex-column bg-light text-white py-3 ps-3 pe-5 vh-100'>
        <div>
            <span className='p-3 text-decoration-none text-primary'>
                <span className='fs-3'>NEB Module</span>
            </span>
            <hr className='text-white mt-2'/>
            <ul className='nav nav-pills flex-column mt-4'>
                <li className={active === 1 ? 'active nav-item p-2 bg-info' : "nav-item p-2"} 
                    onClick={e => setactive(1)}>    
                    <Link to="/" className='p-1 text-decoration-none text-primary'>
                        <i className='bi bi-grid-fill me-3 fs-5'></i>
                        <span className='fs-4'>Dashboard</span>
                    </Link>
                </li>
                <li className={active === 2 ? 'active nav-item p-2 bg-info' : "nav-item p-2"} 
                    onClick={e => setactive(2)}>
                    <Link to="/accountManagment" className='p-1 text-decoration-none text-primary'>
                        <i className='bi bi-person-plus me-3 fs-4'></i>
                        <span className='fs-4'>Account Managment</span>
                    </Link>
                </li>
                <li className={active === 3 ? 'active nav-item p-2 bg-info' : "nav-item p-2"} 
                    onClick={e => setactive(3)}>
                    <Link to="/nebVerificationModule" className='p-1 text-decoration-none text-primary'>
                        <i className='bi bi-card-checklist me-3 fs-4'></i>
                        <span className='fs-4'>NEB Verification Module</span>
                    </Link>
                </li>
                <li className={active === 4 ? 'active nav-item p-2 bg-info' : "nav-item p-2"} 
                    onClick={e => setactive(4)}>
                    <Link to="/ebtGenerationModule" className='p-1 text-decoration-none text-primary'>
                        <i className='bi bi-file-earmark-plus me-3 fs-4'></i>
                        <span className='fs-4'>EBT Generation Module</span>
                    </Link>
                </li>
                <li className={active === 5 ? 'active nav-item p-2 bg-info' : "nav-item p-2"} 
                    onClick={e => setactive(5)}>
                    <Link to="/announcement" className='p-1 text-decoration-none text-primary'>
                        <i className='bi bi-headset me-3 fs-4'></i>
                        <span className='fs-4'>Announcement</span>
                    </Link>
                </li>
                <li className={active === 6 ? 'active nav-item p-2 bg-info' : "nav-item p-2"} 
                    onClick={e => setactive(6)}>
                    <Link to="/systemReport" className='p-1 text-decoration-none text-primary'>
                        <i className='bi bi-menu-up me-3 fs-4'></i>
                        <span className='fs-4'>System Report</span>
                    </Link>
                </li>
                <li className={active === 7 ? 'active nav-item p-2' : "nav-item p-2"} 
                    onClick={e => setactive(7)}>
                    <Link to="/trainingModule" className='p-1 text-decoration-none text-primary'>
                        <i className='bi bi-files me-3 fs-4'></i>
                        <span className='fs-4'>Training Module</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar