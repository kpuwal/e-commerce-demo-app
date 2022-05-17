import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import CategoryList from './category-list';
import CurrencyDropdown from './currency-dropdown';
import { Badge } from '../components'
import CartIcon from '../assets/cart-d.png';
import { showMiniCart } from '../redux/slices/cart-slice';

type PropsTypes = {
  showMiniCart: Function
};

class Header extends React.Component<PropsTypes> {
  handleMiniCart() {
    this.props.showMiniCart()
  }

  render () {
    console.log(this.props)
    return (
      <HeaderBar>
        <CategoryList />
        <div>logo</div>
        <Container>
          <CurrencyDropdown />
          {/* <div onClick={() => this.handleMiniCart()}> */}
          <Link to='/cart'>
            <CartImage src={CartIcon} alt='cart icon' />
          </Link>
          {/* </div> */}
          <Badge />
        </Container>
      </HeaderBar>
    );
  }
}

const mapDispatchToProps = { showMiniCart };
export default connect(null, mapDispatchToProps)(Header);

const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 7% 0 7%;
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
