import React from 'react';
import { Link } from 'react-router-dom';
import { ProductType } from '../types';

type PropsTypes = {
  product: ProductType
}

type StateTypes = {
  display: string
}

export default class Product extends React.Component<PropsTypes, StateTypes> {
  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      display: 'none'
  }}

  showButton(e: any) {
    e.preventDefault();
    this.setState({display: 'flex'});
  }

  hideButton(e: any) {
    e.preventDefault();
    this.setState({display: "none"});
  }

  addToCart(product: ProductType) {
    console.log(product)
  }

  render() {
    const product = this.props.product;
    return (
      <React.Fragment>
        <div style={{flexDirection: 'column', margin: '5%'}}>
        <div
          style={{display: 'flex'}}
          onMouseEnter={e => this.showButton(e)}
          onMouseLeave={e => this.hideButton(e)}>
        <Link to={`/${product.id}`}>
          <img 
            src={product.gallery[0]}
            alt={product.name}
            style={{width: '150px'}}/>
        </Link>
          <div style={{display: `${this.state.display}`,position: 'absolute', margin: 'auto', height: '50px', width: '50px', backgroundColor: 'lightgreen', borderRadius: 50, justifyContent: 'center', alignItems: 'center'}} onClick={e => this.addToCart(product)}>+</div>
        </div>
        <p>
          <h3>{product.name}</h3>
          {product.prices[0].currency.symbol}
          {product.prices[0].amount}
        </p>
        </div>
      </React.Fragment>
    )
  }
}

