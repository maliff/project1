import React from "react";
import {
    faBullhorn,
    faTachometerAlt,
    faUserPlus,
    faFolderPlus,
    faPlus,
    faQuestionCircle,
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
        <MainSidebar brandName='NEB'>
            <NavSidebar>
                <NavItem>
                    <NavLink tag={Link} to='/neb-module'>
                        <FontAwesomeIcon icon={faTachometerAlt} className='nav-icon' />
                        <p>Dashboard</p>
                    </NavLink>
                    <NavLink tag={Link} to='/managementDashboard'>
                        <FontAwesomeIcon icon={faUserPlus} className='nav-icon' />
                        <p>Data Provider & Product Management</p>
                    </NavLink>
                    <NavLink tag={Link} to='/nebVerificationModule'>
                        <FontAwesomeIcon icon={faListAlt} className='nav-icon' />
                        <p>NEB Verification Module</p>
                    </NavLink>
                    <NavLink tag={Link} to='/ebtGenerationModule'>
                        <FontAwesomeIcon icon={faFolderPlus} className='nav-icon' />
                        <p>EBT Generation Module</p>
                    </NavLink>
                    <NavLink tag={Link} to='/reportSubmission'>
                        <FontAwesomeIcon icon={faPlus} className='nav-icon' />
                        <p>Report Submission</p>
                    </NavLink>
                    <NavLink tag={Link} to='/manualSubmission'>
                        <FontAwesomeIcon icon={faFolderPlus} className='nav-icon' />
                        <p>Manual Submission</p>
                    </NavLink>
                    <NavLink tag={Link} to='/announcement'>
                        <FontAwesomeIcon icon={faBullhorn} className='nav-icon' />
                        <p>Announcement</p>
                    </NavLink>
                    <NavLink tag={Link} to='/systemReport'>
                        <FontAwesomeIcon icon={faComment} className='nav-icon' />
                        <p>Report & Resolve Centre</p>
                    </NavLink>
                    <NavLink tag={Link} to='/ticketResolutionCentre'>
                        <FontAwesomeIcon icon={faComment} className='nav-icon' />
                        <p>Ticket Resolution Centre</p>
                    </NavLink>
                    <NavLink tag={Link} to='/trainingModule'>
                        <FontAwesomeIcon icon={faFolderPlus} className='nav-icon' />
                        <p>Training Module</p>
                    </NavLink>
                    <NavLink tag={Link} to='/faq'>
                        <FontAwesomeIcon icon={faQuestionCircle} className='nav-icon' />
                        <p>FAQ</p>
                    </NavLink>
                </NavItem>
            </NavSidebar>
        </MainSidebar>
    )
}