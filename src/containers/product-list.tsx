import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductType } from '../types';
import { connect } from "react-redux";
import { addToCart } from '../redux/slices/cart-slice';

import PriceDisplay from '../components/price-display';

type PropsTypes = {
  product: ProductType,
  addToCart: Function
}

type StateTypes = {
  display: string
}

class ProductList extends React.Component<PropsTypes, StateTypes> {
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

  handleAddToCart(product: ProductType) {
    this.props.addToCart({product});
  }

  render() {
    const product = this.props.product;
    return (
      <div style={{}}>
        <div
          style={{display: 'flex'}}
          onMouseEnter={e => this.showButton(e)}
          onMouseLeave={e => this.hideButton(e)}>
          <Link to={`/${product.id}`}>
            <ImageContainer img={product.gallery[0]} style={{position: 'relative'}}>
              {!product.inStock && <p style={{position: 'absolute'}}>OUT OF STOCK</p>}
            </ImageContainer>
          </Link>
            {product.inStock && 
            <AddToCartButton display={this.state.display} style={{position: 'absolute'}} onClick={e => this.handleAddToCart(product)}>+</AddToCartButton>}
        </div>
        <PriceDisplay prices={product.prices} />
        
      </div>
    )
  }
}

interface StyledProps { display: string }
interface StyledProps2 { img: string }


const mapDispatchToProps = { addToCart };
export default connect(null, mapDispatchToProps)(ProductList);

const ImageContainer = styled.div((props: StyledProps2) => ({
  backgroundImage: `url(${props.img})`,
  width: '356px',
  height: '338px',
  backgroundSize: "cover",
  margin: '5px',
}))

// const Butt = styled.div`
//   width: 20px;
//   height: 20px;
//   background-color: red;
//   &:hover { background-color: green; }
// `

const AddToCartButton = styled.div((props: StyledProps) =>({
  display: props.display,
  margin: 'auto',
  height: '50px',
  width: '50px',
  backgroundColor: 'lightgreen',
  borderRadius: 50,
  justifyContent: 'center',
  alignItems: 'center'
}))
