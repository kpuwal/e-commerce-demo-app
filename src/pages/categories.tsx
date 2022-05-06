import React from 'react';
import styled from 'styled-components';
import { widths, unit } from '../styles';
import { QueryGraphQL } from '../operations/queries';
import { CategoryType } from '../types';
import { useParams } from 'react-router-dom';
import {Outlet} from 'react-router-dom';

// function withRouter(Children: any){
//   return(props: any)=>{
//      const match  = {params: useParams()};
//      return <Children {...props}  match = {match}/>
//  }
// }

const withRouter = (WrappedComponent: any) => (props: any) => {
  const params = useParams();

  return (
    <WrappedComponent
      {...props}
      params={params}
    />
  );
};

interface CategoryProps {
  categories: CategoryType[]
}

class Categories extends React.Component {
  // state: CategoryProps = {
  //   categories: []
  // }
  
  // async componentDidMount() {
    // const result = await QueryGraphQL.getCategories();
    // console.log(result.categories)
    // this.setState({categories: result.categories});
  // }

  render () {
    return (
      <React.Fragment>
        <PageContainer>
          <Outlet />
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
