import React from 'react';
import { Link } from 'react-router-dom';
import { ProductType } from '../types';
import { connect } from "react-redux";
import { addToCart } from '../redux/slices/cart-slice';

import PriceDisplay from '../components/price-display';

type PropsTypes = {
  product: ProductType,
  addToCart: any
}

type StateTypes = {
  display: string
}

class ProductButton extends React.Component<PropsTypes, StateTypes> {
  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      display: 'none'
  }}

  showButton(e: any) {
    // e.preventDefault();
    this.setState({display: 'flex'});
  }

  hideButton(e: any) {
    // e.preventDefault();
    this.setState({display: "none"});
  }

  handleAddToCart(product: ProductType) {
    console.log(product)
    this.props.addToCart(product)
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
                {!product.inStock && <p>OUT OF STOCK</p>}
            </Link>
              {product.inStock && <div style={{display: `${this.state.display}`,position: 'absolute', margin: 'auto', height: '50px', width: '50px', backgroundColor: 'lightgreen', borderRadius: 50, justifyContent: 'center', alignItems: 'center'}} onClick={e => this.handleAddToCart(product)}>+</div>}
          </div>
          <PriceDisplay prices={product.prices} />
        </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = { addToCart };
export default connect(null, mapDispatchToProps)(ProductButton);
