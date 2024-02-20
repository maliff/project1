import React from 'react';
import { Container } from 'reactstrap';

const LteContent = ({ children }) => {
  return (
    <section className='content'>
      <Container fluid>{children}</Container>
    </section>
  );
};


export default LteContent;