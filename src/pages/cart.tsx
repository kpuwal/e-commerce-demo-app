import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { CartSummary, Button } from '../components';
import CartItems from '../containers/cart-items';
import { PriceType, CartItemType } from '../types';
import { updateAttributes, updateCount } from '../redux/slices/cart-slice';
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
        <CartItems type={styleType.cart} />
        {
          this.props.items.length !== 0
          ? <>
              <CartSummary
                tax={this.props.tax}
                totalPrice={this.props.totalPrice}
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
  background-color: white;
`
const Empty = styled.div`
  display: flex;
  justify-content: center;
`