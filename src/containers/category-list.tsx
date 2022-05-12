import React from 'react';
import styled from 'styled-components';
import {useSearchParams, Link} from 'react-router-dom';
import { QueryGraphQL } from '../graphql/queries';

interface StateTypes {
  categories: string[]
}

interface PropsTypes {
  match: string;
}

class CategoryList extends React.Component<PropsTypes, StateTypes> {
  constructor(props: any){
    super(props);
    this.state = {
      categories: []
    }
  }
  
  async componentDidMount() {
    const result = await QueryGraphQL.getCategories();
    const names = result.categories.map(item => item.name);
    this.setState({categories: names});
  }

  render() {
    const activeCategory = this.props.match !== null ? this.props.match : 'all';
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {this.state.categories.map((name: string) => (
          <NavContainer key={name} underline={activeCategory === name}>
            <Link to={`/?category=${name}`}
              style={{
                color: activeCategory === name ? '#5ECE7B' : '#1D1F22',
                fontFamily: 'Raleway',
                textDecoration: 'none'
                }}>
              {name.toUpperCase()}
            </Link>
          </NavContainer>
          ))
        }
      </div>
    )
  }
}

const withRouterParams = (WrappedComponent: any) => (props: any) => {
  let [searchParams] = useSearchParams();
  let currentCategory = searchParams.get("category");
  return <WrappedComponent {...props} match={currentCategory} />
}

export default withRouterParams(CategoryList);

interface StyledProps { underline: boolean };

const NavContainer = styled.div`
  flexDirection: row;
  padding: 15px;
  border-bottom: ${(props: StyledProps) => props.underline ? '1px solid #5ECE7B' : '0px solid #fff'};
`