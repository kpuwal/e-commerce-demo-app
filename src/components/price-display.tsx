import React from 'react';

interface PropsTypes {
  amount: number,
  symbol: string,
}

export default class PriceDisplay extends React.Component<PropsTypes> {
  render() {
    return (
      <>
      <h3>Price</h3>
      <div style={{padding: '10px'}}>{this.props.symbol}{this.props.amount}</div>
      </>
    )
  }
}
