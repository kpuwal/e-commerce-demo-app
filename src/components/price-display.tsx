import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { PriceType } from '../types';

interface PropsTypes {
  prices: PriceType[],
  activeCurrency: string
}

class PriceDisplay extends React.Component<PropsTypes> {
  render() {
    const { prices, activeCurrency } = this.props;
    const price = prices.filter((item: PriceType) => 
      item.currency.label === activeCurrency
    )[0];

    return (
      <Container>
        {(price.currency.symbol)} {(price.amount)}
      </Container>
    )
  }
}

const mapStateToProps = (state: any) => ({
  activeCurrency: state.currency.activeCurrency
})

export default connect(mapStateToProps)(PriceDisplay);

const Container = styled.div`
  font-weight: bold;
`