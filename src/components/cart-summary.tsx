import React from 'react'
import styled from 'styled-components';
import { PriceDisplay } from '.';
import { PriceType } from '../types';

type PropsTypes = {
  tax: PriceType[],
  totalPrice: PriceType[]
  quantity: number
}

export default class SummaryPanel extends React.Component<PropsTypes> {
  render() {
    return (
      <>
        <Inline>
          <Label>Tax 21%:</Label>
          <PriceDisplay prices={this.props.tax} />
        </Inline>
        <Inline>
          <Label>Quantity:</Label>
          <b>{this.props.quantity}</b>
        </Inline>
        <Inline>
          <Label>Total:</Label>
          <PriceDisplay prices={this.props.totalPrice} />
        </Inline>
        <CartButton>Place Order</CartButton>
      </>
    )
  }
}

const Inline = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`
const Label = styled.div`
  margin-right: 1rem;
`
const CartButton = styled.button`
  position: relative;
  overflow: hidden;
  transition: background 400ms;
  color: #fff;
  padding: 1rem 2rem;
  margin: 3rem 0 0 0;
  font-size: 1.5rem;
  outline: 0;
  border: 0;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background-color: #5ECE7B;
  width: 300px;
  &:active {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
`
