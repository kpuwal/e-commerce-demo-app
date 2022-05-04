import React from 'react';
import styled from 'styled-components';
import { widths, unit } from '../styles';
import { QueryGraphQL } from '../operations/queries';

interface CategoriesTypes {
  categories: string[]
}

class Categories extends React.Component {
  state: CategoriesTypes = {
    categories: []
  }
  
  async componentDidMount() {
    const result = await QueryGraphQL.getCategories();
    console.log(result.categories)
    this.setState({categories: result.categories});
  }

  render () {
    return (
    <React.Fragment>
      <PageContainer>
        {this.state.categories.map((item: any, idx: number) => <div key={idx}>{item.name}</div>)}
      </PageContainer>
    </React.Fragment>

    )
  }
}

export default Categories;

const PageContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignSelf: 'center',
  flexGrow: 1,
  maxWidth: `${widths.regularPageWidth}px`,
  width: '100%',
  padding: 0,
  paddingBottom: `${unit} * 5`,
});
