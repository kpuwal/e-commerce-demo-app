import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/slices/cart-slice';

type PropsTypes = {
  amount: number,
  productIndex: number,
  handleCount: Function,
  removeFromCart: Function
}

class ProductCounter extends React.Component<PropsTypes> {
  handleIncrement() {
    console.log('increment', this.props.productIndex)
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

const mapDispatchToProps = { removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(ProductCounter);

type StyledProps = { disabled?: boolean };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 5%;
  justify-content: center;
  position: relative;
  right: -14%;
  z-index: 4000;
`
const CounterDisplay = styled.div`
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  line-height: 12em;
`
const Button = styled.button`
  width: 50%; // 45px;
  height: 50%; // 45px;
  background-color: white;
  border: ${(props: StyledProps) => props.disabled ? '1px solid gray' : '1px solid black'}
`

