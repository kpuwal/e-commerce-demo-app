import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { PriceType, StyleItem } from '../types';

interface PropsTypes {
  prices: PriceType[],
  activeCurrency: string,
  type?: StyleItem
}

class PriceDisplay extends React.Component<PropsTypes> {
  render() {
    const {prices, activeCurrency, type} = this.props;
    const price = prices.filter((item: PriceType) => 
      item.currency.label === activeCurrency
    )[0];
    return (
      <Price font={type?.priceFont}>
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
  font?: {
    fontSize: string,
    fontWeight: number
  }
}

const Price = styled.div`
  font-weight: ${(props: StyledProps) => props.font?.fontWeight || 700};
  font-size: ${(props: StyledProps) => props.font?.fontSize};
`