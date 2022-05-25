import React from 'react';
import styled from 'styled-components';
import {useSearchParams, Link} from 'react-router-dom';
import { QueryGraphQL } from '../graphql/queries';

type StateTypes = {
  categories: string[]
}

type PropsTypes = {
  match: string
}

class CategoryList extends React.Component<PropsTypes, StateTypes> {
  constructor(props: any){
    super(props);
    this.state = {
      categories: []
    }
  }
  
  async componentDidMount() {
    console.log('category list')
    try {const result = await QueryGraphQL.getCategories();
    const names = result.categories.map(item => item.name);
    this.setState({categories: names});
  } catch (err) { console.log(err)}
  }

  render() {
    const activeCategory = this.props.match !== null ? this.props.match : 'all';
    return (
      <Container>
        {this.state.categories.map((name: string) => {
          return (
            <NavContainer key={name} underline={activeCategory === name}>
              <StyledLink
                to={`/?category=${name}`}
                color={activeCategory === name ? '#5ECE7B' : '#1D1F22'}>
                  {name.toUpperCase()}
              </StyledLink>
            </NavContainer>)}
          )
        }
      </Container>
    )
  }
}

const withRouterParams = (WrappedComponent: any) => (props: any) => {
  let [searchParams] = useSearchParams();
  let currentCategory = searchParams.get("category");
  return <WrappedComponent {...props} match={currentCategory} />
}

export default withRouterParams(CategoryList);

type StyledProps = { underline?: boolean, color?: string };

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const NavContainer = styled.div`
  flex-direction: row;
  padding: 15px;
  border-bottom: ${(props: StyledProps) => props.underline ? '1px solid #5ECE7B' : '0px solid #fff'};
`
const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: Raleway;
  color: ${(props: StyledProps) => props.color};
`