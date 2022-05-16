import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";

import { useParams } from "react-router-dom";
import { QueryGraphQL } from '../graphql/queries';
import { ProductType, SelectedAttributesType } from '../types';
import { Loader, Description, AttributesContainer } from '../components';
import Gallery from '../containers/gallery';
import { addToCart } from '../redux/slices/cart-slice';

type PropsTypes = { 
  match: string,
  addToCart: any
}

type StateTypes = {
  product: ProductType,
  selectedAttributes: SelectedAttributesType<string>,
  isLoading: boolean,
  isNotValidated: boolean
}

class Product extends React.Component<PropsTypes, StateTypes> {
  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      product: initialState,
      selectedAttributes: {},
      isLoading: true,
      isNotValidated: false
    }
  }

  componentDidMount() {
    this.fetchProductData();
  }

  handleAddToCart(product: ProductType) {
    if(this.isValidated()) {
      this.props.addToCart({
        product,
        selectedAttributes: this.state.selectedAttributes
      })
    } else {this.setState({isNotValidated: true})}
    
  }

  isValidated() {
    return (this.state.product.attributes.length === Object.keys(this.state.selectedAttributes).length)
  }

  handleChange = (event: any) => {
    const { name, value } = event;
     this.setState((prevState: any) => {
       const attributes = { ...prevState.selectedAttributes, [name]: value };
       return { selectedAttributes: attributes, isNotValidated: false };
     });
   }

  async fetchProductData() {
      const data = await (QueryGraphQL.getProduct(this.props.match))
      this.setState({product: data.product, isLoading: false});      
  }

  render() {
    const { gallery, description, inStock } = this.state.product;
    return (
      <ProductContainer>
        {this.state.isLoading
        ?  <Loader />
        :  <Container>
            <Gallery images={gallery} isMini={false} />
            <InfoContainer>
              <AttributesContainer
                isCart={false}
                item={this.state.product}
                selectedAttributes={this.state.selectedAttributes}
                handleSelect={this.handleChange}
              />
              <Message>
                {this.state.isNotValidated && <>Select attributes</>}
              </Message>
              <CartButton
                disabled={!inStock}
                onClick={() => this.handleAddToCart(this.state.product)}
              >Add To Cart</CartButton>
              <Description descr={description} />
            </InfoContainer>
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
const InfoContainer = styled.div` 
  display: flex;
  flex-direction: column;
  margin-right: 100px;
`
const CartButton = styled.button`
  position: relative;
  overflow: hidden;
  transition: background 400ms;
  color: #fff;
  padding: 1rem 2rem;
  // margin: 1rem 0 0 0;
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
const Message = styled.div`
  height: 3rem;
  padding-top: 1rem;
  font-size: 1.5rem;
  color: red;
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
