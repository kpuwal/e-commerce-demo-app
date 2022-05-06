import React from 'react';
import styled from 'styled-components';
import { QueryGraphQL } from '../operations/queries';
import { widths } from '../styles';
import {CategoryLink, CustomLink} from '../utils/category-link';
import {Link} from 'react-router-dom';

interface StateTypes {
  categories: string[]
}

export default class Header extends React.Component<any, StateTypes> {
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
  render () {
    return (
      <HeaderBar>
        <Container>
          <ul>
            {/* <li>
              <CustomLink to="/">{this.state.categories[0]}</CustomLink>
            </li> */}
            {
              this.state.categories.map((name: string) => (
                <li key={name}>
                  <CategoryLink categoryName={name}>
                    {name}
                  </CategoryLink>
                </li>
                )
              )
            }
          </ul>
        </Container>
      </HeaderBar>
    );
  }
}

const HeaderBar = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: `solid 1px pink`,
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  padding: '5px 30px',
  minHeight: 80,
  backgroundColor: 'white',
});

const Container = styled.div({
  width: `${widths.regularPageWidth}px`,
});
