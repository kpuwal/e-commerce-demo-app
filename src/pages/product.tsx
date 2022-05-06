import React from 'react';
import {
  useParams,
} from "react-router-dom";
import { QueryGraphQL } from '../operations/queries';
import { ProductType } from '../types';
import parse from 'html-react-parser';


interface PropsTypes { match: string };
interface StateTypes { product: ProductType };

const withRouterParams = (WrappedComponent: any) => (props: any) => {
  let { id } = useParams<"id">();
  return <WrappedComponent {...props} match={id} />
}

class Product extends React.Component<PropsTypes, StateTypes> {
  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      product: initialState,
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  async fetchData() {
    const result = await (QueryGraphQL.getProduct(this.props.match)) as ProductType;
    this.setState({product: result});
  }

  render() {
    const product = this.state.product;
    return (
      <React.Fragment>
        <div>{parse(product.description)}</div>
        <div>{}</div>
      </React.Fragment>
  )}
}

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
    items: { displayValue: '', value: '', id: '' }}],
  prices: [{ 
    currency: { label: '', symbol: '' },
    amount: 0 }],
  brand: '',
}

export default withRouterParams(Product);
