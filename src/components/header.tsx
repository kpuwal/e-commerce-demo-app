import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { widths } from '../styles';
import CategoriesLinks from '../containers/categories-links';

export default class Header extends React.Component {
  render () {
    return (
      <HeaderBar>
        <Container>
         <CategoriesLinks />
        </Container>
        <Container>
          <div>logo</div>
        </Container>
        <Container>
          <div>change currency</div>
        </Container>
        <Container>
          <Link to="/cart">mini cart</Link>
        </Container>
      </HeaderBar>
    );
  }
}

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
