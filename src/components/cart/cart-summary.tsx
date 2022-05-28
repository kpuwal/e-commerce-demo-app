import React from 'react'
import styled from 'styled-components';
import { PriceDisplay } from '../';
import { PriceType, StyleItem } from '../../types';

type PropsTypes = {
  tax: PriceType[],
  totalPrice: PriceType[],
  type: StyleItem,
  quantity: number
}

export default class SummaryPanel extends React.Component<PropsTypes> {
  render() {
    const {type, tax, quantity, totalPrice} = this.props;
    return (
      <Container>
        <Ul>
          <Label>Tax 21%:</Label>
          <Label>Quantity:</Label>
          <Label>Total:</Label>
        </Ul>
        <Ul>
          <Li><PriceDisplay prices={tax} {...{type}} /></Li>
          <Li><Quantity>{quantity}</Quantity></Li>
          <Li><PriceDisplay prices={totalPrice} {...{type}} /></Li>
        </Ul>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4px;
  border-top: 1px solid #f1f1f1;
  width: 100%;
`
const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 32px 0;
`
const Li = styled.li`
  padding: 4px 16px;
`
const Label = styled.li`
  font-size: 24px;
  font-weight: 500;
  padding: 4px 0;
`
const Quantity = styled.div`
  font-size: 24px;
  font-weight: 700;
`
