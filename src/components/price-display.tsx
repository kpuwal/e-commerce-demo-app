import React from 'react';
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
      <div style={{padding: '0px'}}>
        {(price.currency.symbol)} {(price.amount)}
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  activeCurrency: state.currency.activeCurrency
})

export default connect(mapStateToProps)(PriceDisplay);