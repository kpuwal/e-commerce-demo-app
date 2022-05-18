import React from 'react'
import styled from 'styled-components';
import { PriceDisplay } from '..';
import { PriceType } from '../../types';

type PropsTypes = {
  tax: PriceType[],
  totalPrice: PriceType[]
  quantity: number
}

export default class SummaryPanel extends React.Component<PropsTypes> {
  render() {
    return (
      <>
        <SummaryLine />
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
      </>
    )
  }
}

const Inline = styled.div`
  margin-bottom: 1rem;
`
const Label = styled.div`
  margin-right: 1rem;
  display: inline-block
`
const SummaryLine = styled.hr`
  border: 1px solid #f1f1f1;
  width: 100%;
`
