import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { PriceType, StyleItem } from '../types';

interface PropsTypes {
  prices: PriceType[],
  activeCurrency: string,
  type?: StyleItem,
  isBold?: boolean
}

class PriceDisplay extends React.Component<PropsTypes> {
  render() {
    const {prices, activeCurrency, type, isBold} = this.props;
    const price = prices.filter((item: PriceType) => 
      item.currency.label === activeCurrency
    )[0];
    return (
      <Price isBold={isBold} font={type?.priceFont}>
        {(price.currency.symbol)} {(price.amount)}
      </Price>
    )
  }
}

const mapStateToProps = (state: any) => ({
  activeCurrency: state.currency.activeCurrency
})

export default connect(mapStateToProps)(PriceDisplay);

type StyledProps = {
  isBold?: boolean,
  font?: {
    fontSize: string,
    fontWeight: number,
  }
}

const Price = styled.div`
  font-weight: ${(props: StyledProps) => props.isBold ? 700 : props.font?.fontWeight || 500};
  font-size: ${(props: StyledProps) => props.font?.fontSize};
`