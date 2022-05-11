import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from "react-redux";

interface PropsTypes {
  isVertical: boolean,
  amount: number,
  handleCount: Function
  // count: number
}

class ProductCounter extends React.Component<PropsTypes> {
  handleIncrement() {
    console.log('plus')
  }

  handleDecrement() {
    console.log('minus')
  }

  render() {
    const {isVertical, amount} = this.props;
    return (
      <Container style={{
        flexDirection: isVertical ? 'column' : 'row', 
        height: isVertical ? '120px' : '5%'}}>
        <button onClick={this.handleIncrement}>+</button>
        <CounterDisplay>{amount}</CounterDisplay>
        <button onClick={this.handleDecrement}>-</button>
      </Container>
    )
  }
}

const mapStateToProps = (state: any) => ({
  counter: state.cart.items,
})

export default connect(mapStateToProps)(ProductCounter);

const Container = styled.div({
  display: 'flex', 
  // flexDirection: 'row',
  height: '5%',
  alignItems: 'center',
  justifyContent: 'space-around'
})

const CounterButton = styled.button({
  // display: 'flex',
  width: '20px',
  height: '20px',
  border: '1px solid black',
  textAlign: 'center',
  verticalAlign: 'middle',
  lineHeight: '20px'
})

const CounterDisplay = styled.div({
  width: '140px',
  height: '20px',
  textAlign: 'center',
})