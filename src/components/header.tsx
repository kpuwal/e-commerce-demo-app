import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CategoryList from '../containers/category-list';
import CurrencyList from '../containers/currency-list';
import { Badge } from './'

export default class Header extends React.Component {
  render () {
    return (
      <HeaderBar>
        <Container>
         <CategoryList />
        </Container>
        <Container>
          <div>logo</div>
        </Container>
        <Container>
          <CurrencyList />
          <Link to="/cart">mini cart</Link>
          <Badge />
        </Container>
      </HeaderBar>
    );
  }
}

const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  // background-color: pink;
`

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
});
