import React from 'react';
import { connect } from "react-redux";
import { PriceType } from '../types';

interface PropsTypes {
  prices: PriceType[],
  activeCurrency: string
}

interface StateTypes {
  price: PriceType
}

class PriceDisplay extends React.Component<PropsTypes, StateTypes> {
  render() {
    const price = this.props.prices.filter((item: PriceType) => 
      item.currency.label === this.props.activeCurrency
    )[0];

    return (
      <>
      <h3>Price</h3>
      <div style={{padding: '10px'}}>{(price.currency.symbol)} {(price.amount)}</div>
      </>
    )
  }
}

const mapStateToProps = (state: any) => ({
  activeCurrency: state.currency.activeCurrency
})

export default connect(mapStateToProps)(PriceDisplay);