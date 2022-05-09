import React from 'react';
import { useParams } from "react-router-dom";
import { QueryGraphQL } from '../graphql/queries';
import { ProductType } from '../types';
import ProductDescription from '../containers/product-description';

interface PropsTypes {
  match: string
}

interface StateTypes {
  product: ProductType,
  isLoading: boolean
}

const withRouterParams = (WrappedComponent: any) => (props: any) => {
  let { id } = useParams<"id">();
  return <WrappedComponent {...props} match={id} />
}

class Product extends React.Component<PropsTypes, StateTypes> {
  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      product: initialState,
      isLoading: true,
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const result = await (QueryGraphQL.getProduct(this.props.match)) as ProductType;
      this.setState({product: result, isLoading: false});
    } catch {
      console.log('error while loading data')
    }
  }

  render() {
    return (
      <React.Fragment>
        {!this.state.isLoading && <ProductDescription product={this.state.product} />}
      </React.Fragment>
  )}
}

export default withRouterParams(Product);

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
