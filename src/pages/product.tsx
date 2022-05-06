import React from 'react';
import {
  useParams,
} from "react-router-dom";
import { QueryGraphQL } from '../operations/queries';
import { ProductType } from '../types';
import parse from 'html-react-parser';


interface PropsTypes {
  match: string;
}
interface StateTypes {
  product: ProductType;
}

const initialState = {
    id: '',
    name: '',
    inStock: false,
    gallery: [],
    description: '',
    category: '',
    attributes: {
      id: '',
      name: '',
      type: '',
      items: {
        displayValue: '',
        value: '',
        id: '',
      }}
    ,
    prices: [{
      currency: {
        label: '',
        symbol: '',
      },
      amount: 0,
    }],
    brand: '',
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
    }
  }

  componentDidMount() { this.fetchData() }


  async fetchData() {
    const result = await (QueryGraphQL.getProduct(this.props.match));
    this.setState({product: result});
  }

  render () {
    const product = this.state.product;
    console.log(product.description)
    return <div>{parse(product.description)}</div>
  }
}

export default withRouterParams(Product);
