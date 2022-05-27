import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { PriceType } from '../types';

interface PropsTypes {
  prices: PriceType[],
  activeCurrency: string,
  isBold?: boolean
}

class PriceDisplay extends React.Component<PropsTypes> {
  render() {
    const { prices, activeCurrency, isBold } = this.props;
    const price = prices.filter((item: PriceType) => 
      item.currency.label === activeCurrency
    )[0];
    return (
      <Price {...{isBold}}>
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
  isBold?: boolean
}

const Price = styled.div`
  font-weight: ${(props: StyledProps) => props.isBold ? '700' : '500'};
  font-size: 18px;
`