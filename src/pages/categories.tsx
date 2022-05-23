import React from 'react';
import styled from 'styled-components';
import { Loader } from '../components';
import { useSearchParams } from 'react-router-dom';
import { QueryGraphQL } from '../graphql/queries';
import { CategoryType, ProductType } from '../types';
import ProductThumbnail from '../containers/product-thumbnail';

type PropsTypes = {
  match: string
};
type StateTypes = {
  products: ProductType[],
  isLoading: boolean
};

class Categories extends React.Component<PropsTypes, StateTypes> {
  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      products: [],
      isLoading: true
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
    this.setState({products: result.products, isLoading: false});
  }

  render() {
    const products = this.state.products;
    const match = this.props.match;
    return (
      <Container>
        {this.state.isLoading 
        ? <Loader />
        : <>
            <CategoryName>
              <Name>{match !== null ? match : 'all'}</Name>
            </CategoryName>
            <ProductList>
              {products.map((product: ProductType) =>
                <ProductThumbnail key={product.id} product={product} /> )}
            </ProductList>
          </>
        }
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CategoryName = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`
const Name = styled.h1`
  font-family: Raleway;
  font-weight: 100;
`
const ProductList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
`
