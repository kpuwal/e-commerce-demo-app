import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { QueryGraphQL } from '../graphql/queries';
import { ProductType, SelectedAttributesType } from '../types';
import { Loader, ProductLayout } from '../components';
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

  async componentDidMount() {
    try {
      this.fetchProductData();
    } catch (err) { console.log(err)}
  }

  handleAddToCart = (product: ProductType) => {
    if(this.isValidated()) {
      this.props.addToCart({
        product,
        selectedAttributes: this.state.selectedAttributes
      })
    } else {
      this.setState({isNotValidated: true})
    } 
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

  isValidated() {
    return (this.state.product.attributes.length === Object.keys(this.state.selectedAttributes).length)
  }

  render() {
    return (
      <ProductContainer>
        {this.state.isLoading
        ?  <Loader />
        :  <ProductLayout
            product={this.state.product}
            selectedAttributes={this.state.selectedAttributes}
            handleSelect={this.handleChange}
            handleAddToCart={this.handleAddToCart}
            isNotValidated={this.state.isNotValidated}
           />
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

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
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
} as ProductType;
