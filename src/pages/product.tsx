import React from 'react';
import styled from 'styled-components';

import { useParams } from "react-router-dom";
import { QueryGraphQL } from '../graphql/queries';
import { ProductType } from '../types';
import { Gallery, InfoDisplay, PriceDisplay } from '../components';
import Attributes from '../containers/attributes';

type SelectedAttributesType<Attr extends string>= {
  [key in Attr]: string
}

interface PropsTypes { match: string }

interface StateTypes {
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
      isLoading: true,
    }
  }

  componentDidMount() {
    this.fetchProductData();
  }

  handleAddToCart(product: ProductType) {
    console.log("product from PDP ", product)
    console.log("selected attributes ", this.state.selectedAttributes)
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
      this.setState({product: data, isLoading: false});
  }

  render() {
    const product = this.state.product;
    console.log("selected ", this.state.selectedAttributes)
    return (
      <React.Fragment>
        {!this.state.isLoading && 
          <Container>
          <Gallery images={product.gallery} descr={product.name} />
          <AttributesContainer>
            <h3>{product.name}</h3>
            <h4>{product.brand}</h4>
            <Attributes 
              attributes={product.attributes}
              selectedAttributes={this.state.selectedAttributes}
              handleSelect={this.handleChange}
              prices={product.prices} 
            />
            <CartButton onClick={() => this.handleAddToCart(product)}>
              Add To Cart
            </CartButton>
            <PriceDisplay prices={product.prices} />
            <InfoDisplay descr={product.description} />
          </AttributesContainer>
        </Container>
        }
      </React.Fragment>
  )}

  // render() {
  //   return (
  //     <React.Fragment>
  //       {!this.state.isLoading && <ProductDescription product={this.state.product} />}
  //     </React.Fragment>
  // )}
}

const withRouterParams = (WrappedComponent: any) => (props: any) => {
  let { id } = useParams<"id">();
  return <WrappedComponent {...props} match={id} />
}

const ProductWithRouterParams =  withRouterParams(Product);
export default ProductWithRouterParams;

const Container = styled.div({
  display: 'flex', 
  flexDirection: 'row'
})

const AttributesContainer = styled.div({
  position: 'relative',
  float: 'right',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  width: '300px'
})

const CartButton = styled.div({
  padding: 20, margin: 10,color: 'white', backgroundColor: '#5ECE7B'
})

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
