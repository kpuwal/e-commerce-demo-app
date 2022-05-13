import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CategoryList from '../containers/category-list';
import CurrencyDropdown from '../containers/currency-dropdown';
import { Badge } from './'
import CartIcon from '../assets/cart-d.png';

export default class Header extends React.Component {
  render () {
    return (
      <HeaderBar>
        <CategoryList />
        <div>logo</div>
        <Container>
          <CurrencyDropdown />
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
  justify-content: space-between;
  padding: 0 100px 0 100px;
  height: 80px;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const CartImage = styled.img`
  width: 20px;
  height: 20px;
  padding: 10px;
  position: relative;
`
