import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { updateAttributes, updateCount } from '../redux/slices/cart-slice';
import { CartSummary, Button } from '../components';
import { CartItems } from '../containers';
import { PriceType, CartItemType } from '../types';
import { styleType } from '../styles';

type PropsTypes = {
  items: CartItemType[],
  quantity: number,
  totalPrice: PriceType[],
  tax: PriceType[],
  updateAttributes: Function,
  updateCount: Function
}

class Cart extends React.Component<PropsTypes> {
  handleUpdateAttributes = (event: any) => {
    this.props.updateAttributes(event)
  }

  handleCount = (action: {}) => {
    this.props.updateCount(action)
  }

  render() {
    return (
      <Container>
        <Name>CART</Name>
        <CartItems type={styleType.cart} />
        {
          this.props.items.length !== 0
          ? <>
              <CartSummary
                tax={this.props.tax}
                totalPrice={this.props.totalPrice}
                type={styleType.cart}
                quantity={this.props.quantity} />
              <Button 
                label="Place order"
                onButtonClick={() => alert('order placed!')} />
            </>
          : <Empty>the cart is empty</Empty>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state: any) => ({
  items: state.cart.items,
  quantity: state.cart.quantity,
  totalPrice: state.cart.totalPrice,
  tax: state.cart.tax
})

const mapDispatchToProps = { updateAttributes, updateCount };
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // background-color: white;
`
const Empty = styled.div`
  display: flex;
  justify-content: center;
`
const Name = styled.div`
  padding-bottom: 32px;
  font-family: Raleway;
  font-weight: 700;
  font-size: 32px;
`