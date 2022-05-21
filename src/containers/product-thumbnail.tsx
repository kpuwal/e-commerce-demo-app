import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { ProductType } from '../types';
import { addToCart } from '../redux/slices/cart-slice';
import PriceDisplay from '../components/price-display';
import CartIcon from '../assets/cart-w.png';

type PropsTypes = {
  product: ProductType,
  addToCart: Function
}

type StateTypes = {
  display: string,
  inCart: boolean
}

class ProductThumbnail extends React.Component<PropsTypes, StateTypes> {
  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      display: 'none',
      inCart: false
  }}

  showButton() { this.setState({display: 'flex'}) };
  hideButton() { this.setState({display: "none"}) };

  handleAddToCart(product: ProductType) {
    this.props.addToCart({product});
    this.setState({inCart: true})
  }

  render() {
    const product = this.props.product;
    return (
      <Link to={`/${product.id}`}>

      <ProductItemContainer
        onMouseEnter={() => this.showButton()}
        onMouseLeave={() => this.hideButton()}
      >
          <ImageContainer
            img={product.gallery[0]}
            hasOpacity={product.inStock}
          >
          {!product.inStock && <OutOfStock>OUT OF STOCK</OutOfStock>}
          </ImageContainer>
       
        {product.inStock && 
          <AddToCartButton 
            display={this.state.display}
            onClick={() => this.handleAddToCart(product)}>
            <CartImage src={CartIcon} alt='cart icon' />
          </AddToCartButton>
        }
        <DescriptionContainer>
          <ProductName>{product.name}</ProductName>
          <PriceDisplay prices={product.prices} />
        </DescriptionContainer>
      </ProductItemContainer>
      </Link>
    )
  }
}

type StyledProps = {
  img: string,
  hasOpacity: boolean
}

const mapDispatchToProps = { addToCart };
export default connect(null, mapDispatchToProps)(ProductThumbnail);

const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 386px; //28%
  height: 444px; // 43%
  padding: 16px 16px 40px 16px;
  margin: 1.5% 2% 1.5% 0;
  overflow: hidden;
  text-decoration: none;
  &:hover {
    -webkit-box-shadow: 0px 0px 22px -2px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 0px 22px -2px rgba(0,0,0,0.1);
    box-shadow: 0px 0px 22px -2px rgba(0,0,0,0.1);
  }
`
const ImageContainer = styled.div`
  background-image: ${(props: StyledProps) => `url(${props.img})`};
  opacity: ${(props: StyledProps) => props.hasOpacity ? 1 : 0.5};
  display: flex;
  width: 18rem;
  height: 17rem;
  background-size: cover;
  background-repeat: no-repeat;

`
const AddToCartButton = styled.div`
  display: ${(props: {display: string}) => props.display};
  margin: auto;
  height: 52px;
  width: 52px;
  background-color: #5ECE7B;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);
  &:active {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  margin-left: 13rem; // 15% 270px;
  margin-top: 15.5rem; // 310px;
`
const OutOfStock = styled.p`
 position: absolute;
 margin-top: 6rem; // 180px;
 margin-left: 3rem; // 85px;
 font-weight: 400;
 font-size: 25px;
 color: black
`
const CartImage = styled.img`
  width: 25px;
  height: 25px;
`
const DescriptionContainer = styled.div`
  left: 0;
  width: 18rem; // 356px;
  color: #1D1F22;
`
const ProductName = styled.h3`
  font-weight: 100;
`
