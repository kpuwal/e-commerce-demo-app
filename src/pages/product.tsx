import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";

import { useParams } from "react-router-dom";
import { QueryGraphQL } from '../graphql/queries';
import { ProductType, SelectedAttributesType } from '../types';
import { InfoDisplay, PriceDisplay } from '../components';
import AttributeList from '../containers/attribute-list';
import Gallery from '../containers/gallery';
import { addToCart } from '../redux/slices/cart-slice';

interface PropsTypes { 
  match: string,
  addToCart: any
}

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
      this.setState({product: data, isLoading: false});
  }

  render() {
    const product = this.state.product;
    return (
      <React.Fragment>
        {!this.state.isLoading && 
        <Container>
          <Gallery images={product.gallery} isMini={false} />
          <AttributesContainer>
            <h3>{product.name}</h3>
            <h4>{product.brand}</h4>
            <AttributeList 
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
}

const withRouterParams = (WrappedComponent: any) => (props: any) => {
  let { id } = useParams<"id">();
  return <WrappedComponent {...props} match={id} />
}

const mapDispatchToProps = { addToCart };
const ProductWithRouterParams =  withRouterParams(Product);

export default connect(null, mapDispatchToProps)(ProductWithRouterParams);

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  // padding: '2em 6em',
  backgroundColor: 'pink'
})

const AttributesContainer = styled.div({
  // position: 'relative',
  // float: 'right',
  // display: 'flex',
  flexDirection: 'column',
  // flexWrap: 'wrap',
  // width: '300px'
})

const CartButton = styled.button({
  position: 'relative',
  overflow: 'hidden',
  transition: 'background 400ms',
  color: '#fff',
  padding: '1rem 2rem',
  fontSize: '1.5rem',
  outline: 0,
  border: 0,
  borderRadius: '0.25rem',
  boxShadow: '0 0 0.5rem rgba(0, 0, 0, 0.3)',
  cursor: 'pointer',
  backgroundColor: '#5ECE7B'
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
