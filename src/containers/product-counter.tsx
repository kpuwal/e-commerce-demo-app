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
      <Container style={{
        flexDirection: isVertical ? 'column' : 'row', 
        height: isVertical ? '120px' : '5%'}}>
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

const Container = styled.div`
  display: flex;
  height: '5%',
  align-items: center;
  justify-content: space-around;
`

// const CounterButton = styled.button({
//   // display: 'flex',
//   width: '20px',
//   height: '20px',
//   border: '1px solid black',
//   textAlign: 'center',
//   verticalAlign: 'middle',
//   lineHeight: '20px'
// })

const CounterDisplay = styled.div({
  width: '140px',
  height: '20px',
  textAlign: 'center',
})