import React from 'react';

const defaultProps = {
  children: null,
};

const NavSidebar = ({ children }) => {
  return (
    <nav className='mt-2'>
      <ul className='nav nav-pills nav-sidebar flex-column' data-widget='treeview' role='menu' data-accordion='false'>
        {children}
      </ul>
    </nav>
  );
};

NavSidebar.defaultProps = defaultProps;

export default NavSidebar;
