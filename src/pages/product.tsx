import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";

import { useParams } from "react-router-dom";
import { QueryGraphQL } from '../graphql/queries';
import { ProductType, SelectedAttributesType } from '../types';
import { Loader, Description, PriceDisplay } from '../components';
import AttributeList from '../components/attribute-list';
import Gallery from '../containers/gallery';
import { addToCart } from '../redux/slices/cart-slice';

type PropsTypes = { 
  match: string,
  addToCart: any
}

type StateTypes = {
  product: ProductType,
  selectedAttributes: SelectedAttributesType<string>,
  isLoading: boolean
}

class Product extends React.Component<PropsTypes, StateTypes> {
  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      product: initialState,
      selectedAttributes: {},
      isLoading: true
    }
  }

  componentDidMount() {
    this.fetchProductData();
  }

  handleAddToCart(product: ProductType) {
    this.props.addToCart({
      product,
      selectedAttributes: this.state.selectedAttributes
    })
  }

  handleChange = (e: any) => {
    const { name, value } = e;
     this.setState((prevState: any) => {
       const attributes = { ...prevState.selectedAttributes, [name]: value };
       return { selectedAttributes: attributes };
     });
   }

  async fetchProductData() {
      const data = await (QueryGraphQL.getProduct(this.props.match))
      this.setState({product: data.product, isLoading: false});      
  }

  render() {
    const { gallery, name, brand, attributes, prices, description, inStock } = this.state.product;
    const { product, selectedAttributes } = this.state;
    return (
      <ProductContainer>
        {this.state.isLoading
        ?  <Loader />
        :  <Container>
            <Gallery images={gallery} isMini={false} />
            <AttributesContainer>
              <h2>{name}</h2>
              <h4 style={{fontWeight: 200}}>{brand}</h4>
              <AttributeList
                handleSelect={this.handleChange}
                {...{prices, selectedAttributes, attributes}}/>
              <h3 style={{fontFamily: 'Roboto'}}>PRICE</h3>
              <PriceDisplay prices={prices} />
              <CartButton
                disabled={!inStock}
                onClick={() => this.handleAddToCart(product)}
              >
                Add To Cart
              </CartButton>
              <Description descr={description} />
            </AttributesContainer>
          </Container>
        }
      </ProductContainer>
  )}
}

const withRouterParams = (WrappedComponent: any) => (props: any) => {
  let { id } = useParams<'id'>();
  return <WrappedComponent {...props} match={id} />
}

const mapDispatchToProps = { addToCart };
const ProductWithRouterParams =  withRouterParams(Product);

export default connect(null, mapDispatchToProps)(ProductWithRouterParams);

type StyledProps = {disabled: boolean};

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  display: flex;
  flexDirection: row;
  justify-content: space-between;
  align-self: center;
  width: 100%;
`
const AttributesContainer = styled.div` 
  flex-direction: column;
  width: 300px;
  margin-right: 100px;
`
const CartButton = styled.button`
  position: relative;
  overflow: hidden;
  transition: background 400ms;
  color: #fff;
  padding: 1rem 2rem;
  margin: 3rem 0 0 0;
  font-size: 1.5rem;
  outline: 0;
  border: 0;
  border-radius: 0.25rem;
  box-shadow: ${(props: StyledProps) => props.disabled ? '0 0 0 rgba(0, 0, 0, 0)' : '0 0 0.5rem rgba(0, 0, 0, 0.2)'};
  cursor: pointer;
  background-color: ${(props: StyledProps) => props.disabled ? '#f1f1f1' : '#5ECE7B'};
  width: 300px;
  &:active {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
`

const initialState = {
  id: '',
  name: '',
  inStock: false,
  gallery: [],
  description: '',
  category: '',
  attributes: [{
    id: '',
    name: '',
    type: '',
    items: [{ displayValue: '', value: '', id: '' }]}],
  prices: [{ 
    currency: { label: '', symbol: '' },
    amount: 0 }],
  brand: '',
}
