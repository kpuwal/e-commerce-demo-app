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
  items: CartItemType[],
  quantity: number,
  totalPrice: PriceType[],
  showMiniCart: Function
}

class CartOverlay extends React.Component<PropsTypes> {

  componentDidMount() {
    document.body.style.overflowY = 'hidden';
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
            <Header>
              <Title>My Bag</Title>, {this.props.quantity} {isSingularItem ? 'item' : 'items'}
            </Header>
            <Content>
              <CartItems type={styleType.miniCart} />
            </Content>
            <Footer>
              <PriceContainer>
                Total
                <PriceDisplay
                  type={styleType.miniCart}
                  prices={this.props.totalPrice} />
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
            </Footer>
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
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 6000;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  max-height: 80%;
  z-index: 7000;
  float: right;
  margin-right: 7%;
  padding: 32px 0 32px 16px;
  background-color: white;
`
const Header = styled.div`
  height: 5%;
  padding-bottom: 16px;
`
const Title = styled.span`
  font-size: 16px;
  font-family: Raleway;
  font-weight: 700;
`
const Content = styled.div`
  padding-right: 16px;
  overflow-y: scroll;
`
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 15%;
  padding-right: 16px;
`
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 32px 0;
  justify-content: space-between;
`
const StyledLink = styled(Link)`
  text-decoration: none;
`