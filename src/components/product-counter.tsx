import React from 'react'
import styled from 'styled-components';
import { connect } from "react-redux";
import { removeFromCart } from '../redux/slices/cart-slice';

type PropsTypes = {
  isVertical: boolean,
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
    const {isVertical, amount} = this.props;
    return (
      <Container {...{isVertical}}>
        <Button onClick={() => this.handleIncrement()}>+</Button>
        <CounterDisplay {...{isVertical}}>{amount}</CounterDisplay>
        <Button onClick={() => this.handleDecrement(amount)} disabled={amount === 0}>-</Button>
      </Container>
    )
  }
}

const mapStateToProps = (state: any) => ({
  counter: state.cart.items,
})

const mapDispatchToProps = { removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(ProductCounter);

type StyledProps = {isVertical: boolean}
type StyledProps2 = { disabled?: boolean}


const Container = styled.div`
  display: flex;
  flex-direction: ${(props: StyledProps) => props.isVertical ? 'column' : 'row'};
  height: ${(props: StyledProps) => props.isVertical ? '14rem' : '47px'};
  // width: 47px;
  // align-items: center;
  justify-content: flex-end;
  // background-color: yellow;
`
const CounterDisplay = styled.div`
  // width: ${(props: StyledProps) => props.isVertical ? '100%' : '10%'};
  height: 100%; // 198px;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  line-height: 10rem;
`
const Button = styled.button`
  // display: block;
  width: 2rem; // 45px;
  height: 4rem; // 45px;
  background-color: white;
  border: ${(props: StyledProps2) => props.disabled ? '1px solid gray' : '1px solid black'}
`

