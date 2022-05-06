import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { widths, unit } from '../styles';
import { QueryGraphQL } from '../operations/queries';

const withRouterParams = (WrappedComponent: any) => (props: any) => {
  let [searchParams] = useSearchParams();
  let name = searchParams.get('category');
  return <WrappedComponent {...props} match={name} />
}

interface PropsTypes {
  match: string;
}

interface StateTypes {
  products: any
}

class CategoriesGrid extends React.Component<PropsTypes, StateTypes> {
  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      products: []
  }}

  componentDidMount() { this.fetchData() }

  componentDidUpdate (prevProps: any) {
    if (prevProps.match !== this.props.match) {
      this.fetchData()}
    }

  async fetchData() {
    let result;
    if (!this.props.match) {
      result = await (QueryGraphQL.getCategory('all'))
    } else {
      result = await (QueryGraphQL.getCategory(this.props.match));
    }
    this.setState({products: result.products});
  }

  render() {
    const products = this.state.products;
    return (
      <React.Fragment>
        <div>CategoriesGrid</div>
        <p>{!this.props.match ? 'all' : this.props.match}</p>
        <ul>
          {products.map((product: any) => {
            return (
              <li key={product.id}>
                <Link to={`/product/${product.id}`}>{product.id}</Link>
              </li>
            )
          })}
        </ul>
      </React.Fragment>
    )
  }
}

export default withRouterParams(CategoriesGrid);

// const PageContainer = styled.div({
//   display: 'flex',
//   justifyContent: 'center',
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   alignSelf: 'center',
//   flexGrow: 1,
//   maxWidth: `${widths.regularPageWidth}px`,
//   width: '100%',
//   padding: 0,
//   paddingBottom: `${unit} * 5`,
// });