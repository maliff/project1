import React from 'react';
import { Container } from 'reactstrap';

const defaultProps = {
  children: null,
};

const LteContent = ({ children }) => {
  return (
    <section className='content'>
      <Container fluid>{children}</Container>
    </section>
  );
};

LteContent.defaultProps = defaultProps;

export default LteContent;
