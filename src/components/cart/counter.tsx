import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/slices/cart-slice';

type PropsTypes = {
  type: any,
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
    const { counterWidth, counterHeight } = this.props.type;
    return (
      <Container width={counterWidth}>
        <Button onClick={() => this.handleIncrement()}>+</Button>
        <CounterDisplay height={counterHeight}>
          {this.props.amount}
        </CounterDisplay>
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

type StyledProps = {
  disabled?: boolean,
  width?: string,
  height?: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 2rem;
  justify-content: center;
  position: relative;
  right: ${(props: StyledProps) => props.width};
  z-index: 4000;
`
const CounterDisplay = styled.div`
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  line-height: ${(props: StyledProps) => props.height};
`
const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: white;
  border: ${(props: StyledProps) => props.disabled ? '1px solid gray' : '1px solid black'}
`

