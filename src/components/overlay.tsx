import React from 'react';
import styled from 'styled-components';
import Cart from '../pages/cart';

export default class Overlay extends React.Component {
  render() {
    return (
      <Container>
        <CartContainer>
          <Cart />
        </CartContainer>
      </Container>
    )
  }
}

const Container = styled.div`
  width: 100%;
  height: 93%;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 1000;
`
const CartContainer = styled.div`
// position: absolute;
  width: 50%;
  margin-top: 0;
  // height: 100%;
  background-color: white;
`