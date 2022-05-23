import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import CategoryList from './category-list';
import CurrencyDropdown from './currency-dropdown';
import { Badge } from '../components'
import CartIcon from '../assets/cart-d.png';
import BagIcon from '../assets/bag.png';
import { showMiniCart } from '../redux/slices/cart-slice';

type PropsTypes = {
  showMiniCart: Function
};

class Header extends React.Component<PropsTypes> {
  handleMiniCart() {
    this.props.showMiniCart()
  }

  render () {
    return (
      <HeaderBar>
        <CategoryList />
          <Link to='/'>
            <Logo src={BagIcon} alt='logo' />
          </Link>
        <Container>
          <CurrencyDropdown />
          <CartImage 
            onClick={() => this.handleMiniCart()}
            src={CartIcon}
            alt='cart icon'
          />
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
const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin-left: -90%;
`
