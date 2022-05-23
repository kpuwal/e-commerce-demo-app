import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { showMiniCart } from '../redux/slices/cart-slice';
import { styleType } from '../styles';
import { CartItemType, PriceType } from '../types';
import { PriceDisplay, Button } from '.';
import CartItems from '../containers/cart-items';

type PropsTypes = {
  items: CartItemType[],
  quantity: number,
  totalPrice: PriceType[],
  isMiniOn: boolean,
  showMiniCart: Function
}

type StateTypes = { isVisible: boolean }

class MiniCart extends React.Component<PropsTypes, StateTypes> {
  render() {
    const isSingular = (this.props.quantity === 1);
    return (
      <>
        <Container>
          <CartContainer>
            <div>
              <b>My Bag</b>, {this.props.quantity} {isSingular ? 'item' : 'items'}
            </div>
            <CartItems type={styleType.miniCart} />
            <SummaryLine />
            <PriceContainer>
              <b>Total:</b>
              <PriceDisplay prices={this.props.totalPrice} />
            </PriceContainer>
            <ButtonsContainer>
            <StyledLink to='/cart'>
              <Button
                isMini={true}
                white={true}
                label='view bag'
                onButtonClick={() => this.props.showMiniCart()}/>
            </StyledLink>
            <Button
             isMini={true}
             label='place order'
             onButtonClick={() => alert('order placed')}
            />
            </ButtonsContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);

const Container = styled.div`
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
const ButtonsContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
marginTop: 1em;
`
const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em .5em 1em 0;
`
const SummaryLine = styled.hr`
  border: 1px solid #f1f1f1;
  width: 100%;
  margin: 2em 0 1em 0;
`
const StyledLink = styled(Link)`
  text-decoration: none;
`