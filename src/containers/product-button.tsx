import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryType, ProductType } from '../types';

type PropsTypes = {
  product: ProductType
}

export default class Product extends React.Component<PropsTypes> {
  state = {
    display: 'none'
  }

  showButton = (e: any) => {
    e.preventDefault();
    this.setState({display: 'flex'});
  }

  hideButton = (e: any) => {
    e.preventDefault();
    this.setState({display: "none"});
  }

  render() {
    const product = this.props.product;
    return (
      <React.Fragment>
        <div
        style={{display: 'flex'}}
        onMouseEnter={e => this.showButton(e)}
        onMouseLeave={e => this.hideButton(e)}>
        
        <Link to={`/${product.id}`}>
          <img 
            src={product.gallery[0]}
            alt={product.name}
            style={{width: '200px'}}/>
        </Link>
          <div style={{display: `${this.state.display}`,position: 'absolute', margin: 'auto', height: '80px', width: '80px', backgroundColor: 'lightgreen', borderRadius: 50}} onClick={e => console.log('click')}>add</div>
        </div>
          {product.name}
        <p>
          {product.prices[0].currency.symbol}
          {product.prices[0].amount}
        </p>
      </React.Fragment>
    )
  }
}

