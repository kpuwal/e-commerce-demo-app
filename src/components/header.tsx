import React from 'react';
import styled from 'styled-components';
import { widths } from '../styles';

function Header() {
  return (
    <HeaderBar>
      <Container>header</Container>
    </HeaderBar>
  );
}

export default Header;

const HeaderBar = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: `solid 1px pink`,
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  padding: '5px 30px',
  minHeight: 80,
  backgroundColor: 'white',
});

const Container = styled.div({
  width: `${widths.regularPageWidth}px`,
});
