import React, { Component } from 'react'
import styled from 'styled-components';

interface PropsTypes {
  isVertical: boolean
}


export default class ProductCounter extends Component<PropsTypes> {
  handleIncrement() {
    console.log('plus')
  }

  handleDecrement() {
    console.log('minus')
  }

  render() {
    const {isVertical} = this.props;
    return (
      <Container style={{
        flexDirection: isVertical ? 'column' : 'row', 
        height: isVertical ? '120px' : '5%'}}>
        <button onClick={this.handleIncrement}>+</button>
        <CounterDisplay>12</CounterDisplay>
        <button onClick={this.handleDecrement}>-</button>
      </Container>
    )
  }
}

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