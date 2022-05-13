import React from 'react'
import styled from 'styled-components';
import { connect } from "react-redux";

interface PropsTypes {
  isVertical: boolean,
  amount: number,
  productIndex: number,
  handleCount: Function
}

class ProductCounter extends React.Component<PropsTypes> {
  handleIncrement() {
    const idx = this.props.productIndex;
    this.props.handleCount({actionType: 'increment', idx})
  }

  handleDecrement() {
    const idx = this.props.productIndex;
    this.props.handleCount({actionType: 'decrement', idx})
  }

  render() {
    const {isVertical, amount} = this.props;
    return (
      <Container {...{isVertical}}>
        <button onClick={() => this.handleIncrement()}>+</button>
        <CounterDisplay>{amount}</CounterDisplay>
        <button onClick={() => this.handleDecrement()} disabled={amount === 0}>-</button>
      </Container>
    )
  }
}

const mapStateToProps = (state: any) => ({
  counter: state.cart.items,
})

export default connect(mapStateToProps)(ProductCounter);

type StyledProps = {isVertical: boolean}

const Container = styled.div`
  display: flex;
  flex-direction: ${(props: StyledProps) => props.isVertical ? 'column' : 'row'};
  height: ${(props: StyledProps) => props.isVertical ? '120px' : '5%'};
  align-items: center;
  justify-content: space-around;
`
const CounterDisplay = styled.div`
  width: 140px;
  height: 20px;
  text-align: center;
}`