import React from 'react';
import PropTypes from 'prop-types';
import BrandLink from './BrandLink';

const defaultProps = {
  logo: '',
  brandName: '',
  children: null,
};

const MainSidebar = ({ logo, brandName, children }) => {
  return (
    <aside className='main-sidebar sidebar-dark-primary elevation-4 side-bar '>
      <BrandLink logo={logo} name={brandName} />
      <section className='sidebar'>{children}</section>
    </aside>
  );
};

MainSidebar.defaultProps = defaultProps;

export default MainSidebar;
