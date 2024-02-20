import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LteToggler from '../../src/components/navbar/LteToggler';

export default function Header() {
    return (
        <Navbar className='main-header navbar-white navbar-light' expand>
            <Nav navbar>
                <LteToggler />
            </Nav>
        </Navbar>
    )
}