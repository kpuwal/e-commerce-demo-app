import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { addToCart } from '../redux/slices/cart-slice';
import { ProductType } from '../types';
import { PriceDisplay } from '../components';

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
    this.setState({inCart: true});
  }

  render() {
    const product = this.props.product;
    return (
      <ProductItemContainer
        onMouseEnter={() => this.showButton()}
        onMouseLeave={() => this.hideButton()}
      >
        <StyledLink to={`/${product.id}`}>
          <ImageContainer
            img={product.gallery[0]}
            hasOpacity={product.inStock}
          >
           {!product.inStock &&  <OutOfStock>OUT OF STOCK</OutOfStock>}
          </ImageContainer>
          
          <DescriptionContainer>
            <ProductName>{product.brand} {product.name}</ProductName>
            <PriceDisplay prices={product.prices} />
          </DescriptionContainer>
        </StyledLink>
        {product.inStock &&
          <AddToCartButton 
            display={this.state.display}
            onClick={() => this.handleAddToCart(product)}>
            <CartImage src={CartIcon} alt='cart icon' />
          </AddToCartButton>
        }
      </ProductItemContainer>
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
  width: 386px;
  height: 450px;
  margin: 0 40px 103px 0;
  overflow: hidden;
  text-decoration: none;
  &:hover {
    box-shadow: 0px 0px 22px -2px rgba(0,0,0,0.1);
  }
`
const ImageContainer = styled.div`
  background-image: ${(props: StyledProps) => `url(${props.img})`};
  opacity: ${(props: StyledProps) => props.hasOpacity ? 1 : 0.5};
  display: flex;
  margin: 16px 16px 21px 16px;
  width: 356px; 
  height: 338px;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;

`
const AddToCartButton = styled.div`
  display: ${(props: {display: string}) => props.display};
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
  margin-left: 299px;
  margin-top: 330px;
`
const OutOfStock = styled.p`
 position: absolute;
 margin-top: 160px;
 margin-left: 85px;
 font-weight: 400;
 font-size: 25px;
 color: black
`
const CartImage = styled.img`
  width: 25px;
  height: 25px;
`
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 356px;
  height: 58px;
  margin: 0 16px;
  font-size: 18px;
  color: #1D1F22;
`
const ProductName = styled.span`
  font-weight: 300;
  hight: 29px;
  padding: 5px 0;
  font-size: 18px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
`