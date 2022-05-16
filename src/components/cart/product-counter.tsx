import React from 'react'
import styled from 'styled-components';
import { connect } from "react-redux";
import { removeFromCart } from '../../redux/slices/cart-slice';

type PropsTypes = {
  amount: number,
  productIndex: number,
  handleCount: Function,
  removeFromCart: Function
}

class ProductCounter extends React.Component<PropsTypes> {
  handleIncrement() {
    const idx = this.props.productIndex;
    this.props.handleCount({actionType: 'increment', idx})
  }

  handleDecrement(amount: number) {
    const idx = this.props.productIndex;
    this.props.handleCount({actionType: 'decrement', idx})
    if(amount - 1 === 0) {this.props.removeFromCart(idx)}
  }

  render() {
    return (
      <Container>
        <Button onClick={() => this.handleIncrement()}>+</Button>
        <CounterDisplay>{this.props.amount}</CounterDisplay>
        <Button
          onClick={() => this.handleDecrement(this.props.amount)}
          disabled={this.props.amount === 0}>-</Button>
      </Container>
    )
  }
}

const mapStateToProps = (state: any) => ({
  counter: state.cart.items,
})

const mapDispatchToProps = { removeFromCart }

export default connect(mapStateToProps, mapDispatchToProps)(ProductCounter);

type StyledProps = { disabled?: boolean };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 14rem;
  justify-content: flex-end;
`
const CounterDisplay = styled.div`
  height: 100%; // 198px;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  line-height: 10rem;
`
const Button = styled.button`
  width: 2rem; // 45px;
  height: 4rem; // 45px;
  background-color: white;
  border: ${(props: StyledProps) => props.disabled ? '1px solid gray' : '1px solid black'}
`

