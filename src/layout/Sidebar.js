import React from "react";
import {
    faAngleLeft,
    faChartPie,
    faCopy,
    faEdit,
    faTable,
    faTachometerAlt,
    faTh,
    faTree,
} from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons';
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
                    <NavLink tag={Link} to='/'>
                        <FontAwesomeIcon icon={faTachometerAlt} className='nav-icon' />
                        <p>Dashboard</p>
                    </NavLink>
                </NavItem>
            </NavSidebar>
        </MainSidebar>
    )
}