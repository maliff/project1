import React from "react";
import {
    faAngleLeft,
    faBullhorn,
    faChartPie,
    faCopy,
    faEdit,
    faTable,
    faTachometerAlt,
    faTh,
    faTree,
    faUserPlus,
    faFolderPlus,
    faComment
} from '@fortawesome/free-solid-svg-icons';
import { faListAlt, faCircle as farCircle } from '@fortawesome/free-regular-svg-icons';
import { Badge, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainSidebar from '../components/sidebar/MainSidebar';
import NavSidebar from '../components/sidebar/NavSidebar';

export default function Sidebar() {
    return (
        <MainSidebar brandName='NEB Module'>
            <NavSidebar>
                <NavItem>
                    <NavLink tag={Link} to='/'>
                        <FontAwesomeIcon icon={faTachometerAlt} className='nav-icon' />
                        <p className="p-sidebar">Dashboard</p>
                    </NavLink>
                    <NavLink tag={Link} to='/nebAccountManagement'>
                        <FontAwesomeIcon icon={faUserPlus} className='nav-icon' />
                        <p className="p-sidebar">Account Management</p>
                    </NavLink>
                    <NavLink tag={Link} to='/nebVerificationModule'>
                        <FontAwesomeIcon icon={faListAlt} className='nav-icon' />
                        <p className="p-sidebar">NEB Verification Module</p>
                    </NavLink>
                    <NavLink tag={Link} to='/ebtGenerationModule'>
                        <FontAwesomeIcon icon={faFolderPlus} className='nav-icon' />
                        <p className="p-sidebar">EBT Generation Module</p>
                    </NavLink>
                    <NavLink tag={Link} to='/announcement'>
                        <FontAwesomeIcon icon={faBullhorn} className='nav-icon' />
                        <p className="p-sidebar">Announcement</p>
                    </NavLink>
                    <NavLink tag={Link} to='/systemReport'>
                        <FontAwesomeIcon icon={faComment} className='nav-icon' />
                        <p className="p-sidebar">System Report</p>
                    </NavLink>
                    <NavLink tag={Link} to='/trainingModule'>
                        <FontAwesomeIcon icon={faFolderPlus} className='nav-icon' />
                        <p className="p-sidebar">Training Module</p>
                    </NavLink>
                </NavItem>
            </NavSidebar>
        </MainSidebar>
    )
}