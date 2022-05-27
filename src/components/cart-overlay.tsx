import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { showMiniCart } from '../redux/slices/cart-slice';
import { styleType } from '../styles';
import { CartItemType, PriceType } from '../types';
import { PriceDisplay, Button } from './';
import CartItems from '../containers/cart-items';

type PropsTypes = {
  show: boolean,
  items: CartItemType[],
  quantity: number,
  totalPrice: PriceType[],
  showMiniCart: Function
}

class CartOverlay extends React.Component<PropsTypes> {

  componentDidMount() {
    if(this.props.show) {
      document.body.style.overflowY = 'hidden';
    }    
  }
  
  componentWillUnmount() {
    document.body.style.overflowY = 'scroll';
  }

  render() {
    const isSingularItem = (this.props.quantity === 1);
    return (
      <>
        <ModalBg onClick={() => this.props.showMiniCart()}>
          <Container onClick={(e: any) => e.stopPropagation()}>
            <CartContainer >
                <div>
                  <b>My Bag</b>, {this.props.quantity} {isSingularItem ? 'item' : 'items'}
                </div>
                <CartItems type={styleType.miniCart} />
                
              </CartContainer>
              <SummaryLine />
                <PriceContainer>
                  <b>Total:</b>
                  <PriceDisplay prices={this.props.totalPrice} />
                </PriceContainer>
                <ButtonsContainer>
                <StyledLink to='/cart'>
                  <Button
                    isMini
                    white
                    label='view bag'
                    onButtonClick={() => this.props.showMiniCart()}/>
                </StyledLink>
                <Button
                isMini
                label='place order'
                onButtonClick={() => alert('order placed')}
                />
                </ButtonsContainer>
          </Container>
        </ModalBg>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  items: state.cart.items,
  quantity: state.cart.quantity,
  totalPrice: state.cart.totalPrice,
  isMiniCartOpen: state.cart.isMiniCartOpen
})

const mapDispatchToProps = { showMiniCart };

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay);

const ModalBg = styled.div`
overflow: hidden;
position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 6000;
`
const Container = styled.div`
  width: 375px;
  height: 67%;
  z-index: 7000;
  float: right;
  margin-right: 7%;
  background-color: white;
  overflow-y: scroll;

`
const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  // width: 100%;
  height: 100%;
  // min-height: 100px;
  margin: 0 7% 7% 0;
  padding: 2%;
  float: right;
  margin-bottom: 10%;
  // z-index: 7000;
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