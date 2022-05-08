import React from 'react';
import { useParams } from "react-router-dom";
import { QueryGraphQL } from '../operations/queries';
import { ProductType } from '../types';
import { Gallery, InfoDisplay } from '../components';
import Attributes from '../containers/attributes';

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
    const product = this.state.product;
    return (
      <React.Fragment>
        {!this.state.isLoading && <div style={{display: 'flex', flexDirection: 'row'}}>
        <Gallery 
          images={product.gallery} 
          descr={product.name}
        />
        <div style={{position: 'relative',float: 'right', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', width: '300px'}}>
          <h3>{product.name}</h3>
          <p>{product.brand}</p>
          <Attributes attributes={product.attributes} prices={product.prices} />
          <InfoDisplay descr={product.description} />
        </div>
        </div>}
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
