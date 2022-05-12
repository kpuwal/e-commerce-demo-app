import React from 'react';
import styled from 'styled-components';

import { useSearchParams } from 'react-router-dom';
import { QueryGraphQL } from '../graphql/queries';
import { CategoryType, ProductType } from '../types';
import ProductList from '../containers/product-list';

interface PropsTypes {
  match: string;
}

interface StateTypes {
  products: ProductType[];
}

class Categories extends React.Component<PropsTypes, StateTypes> {
  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      products: []
  }}

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate (prevProps: any) {
    if (prevProps.match !== this.props.match) {
      this.fetchData()
    }
  }

  async fetchData() {
    let result: CategoryType;
    if (!this.props.match) {
      result = await QueryGraphQL.getCategory('all');
    } else {
      result = await (QueryGraphQL.getCategory(this.props.match));
    }
    this.setState({products: result.products});
  }

  render() {
    const products = this.state.products;
    return (
      <Container>
        {/* <p>{this.props.match !== null ? this.props.match : 'all'}</p> */}
          {products.map((product: ProductType) => 
            <ProductList key={product.id} product={product} />
          )}
      </Container>
    )
  }
}

const withRouterParams = (WrappedComponent: any) => (props: any) => {
  let [searchParams] = useSearchParams();
  let name = searchParams.get('category');
  return <WrappedComponent {...props} match={name} />
}

export default withRouterParams(Categories);

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center'
})

