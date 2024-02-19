import React from 'react';


const defaultProps = {
  href: '#',
  logo: '',
  name: '',
  alt: '',
};

const BrandLink = ({ href, logo, name, alt }) => {
  return (
    <a href={href} className='brand-link'>
      <img src={logo} alt={alt} className='brand-image img-circle elevation-3' style={{ opacity: 0.8 }} />
      <span className='brand-text font-weight-light'>{name}</span>
    </a>
  );
};

BrandLink.defaultProps = defaultProps;

export default BrandLink;
