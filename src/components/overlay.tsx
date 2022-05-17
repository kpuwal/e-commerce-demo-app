import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { showMiniCart } from '../redux/slices/cart-slice';
import CartItems from '../containers/cart-items';
import {styleType} from '../styles';
import { CartItemType } from '../types';

type PropsTypes = {
  items: CartItemType[],
  quantity: number,
  totalPrice: number,
  isMiniOn: boolean,
  showMiniCart: Function
}

type StateTypes = { isVisible: boolean }

class Overlay extends React.Component<PropsTypes, StateTypes> {


  render() {
    const isSingular = this.props.quantity === 1
    return (
      <>
        <Container>
          <CartContainer>
            <div><b>My Bag</b>, {this.props.quantity} {isSingular ? 'item' : 'items'}</div>
            <CartItems type={styleType.miniCart} />
            <Link to='/cart/'>go to cart</Link>
          </CartContainer>
        </Container>
      </>
    )
  }
}

const mapStateToProps = (state: any) => ({
  items: state.cart.items,
  quantity: state.cart.quantity,
  totalPrice: state.cart.totalPrice,
  isMiniOn: state.cart.isMiniOn
})

const mapDispatchToProps = { showMiniCart };

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);

const Container = styled.div`
  // display: flex;
  width: 100%;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 5000;
  overflow-y: scroll;

`
const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  min-height: 100px;
  margin: 0 7% 7% 0;
  padding: 2%;
  float: right;
  background-color: white;
`