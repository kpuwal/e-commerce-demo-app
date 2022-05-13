import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CategoryList from '../containers/category-list';
import CurrencyList from '../containers/currency-list';
import { Badge } from './'
import CartIcon from '../assets/cart-d.png';

export default class Header extends React.Component {
  render () {
    return (
      <HeaderBar>
        <CategoryList />
        <div>logo</div>
        <CurrencyList />

        <Container>
          <Link to="/cart">
            <CartImage src={CartIcon} alt='cart icon' />
          </Link>
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
`
const CartImage = styled.img`
  width: 20px;
  height: 20px;
  padding: 10px;
  position: relative;

`

const Container = styled.div`
  display: flex;
  flex-direction: row;

`
