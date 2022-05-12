import React from 'react';
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
      <>
        {this.state.categories.map((name: string) => (
          <div key={name} style={{flexDirection: 'row', padding: '10px', borderBottom: activeCategory === name ? '1px solid #5ECE7B' : '0px solid #fff'}}>
            <Link to={`/?category=${name}`}
              style={{
                color: activeCategory === name ? "#5ECE7B" : "black",
                fontFamily: 'Raleway',
                textDecoration: 'none'
                }}>
              {name.toUpperCase()}
            </Link>
          </div>
          ))
        }
      </>
    )
  }
}

const withRouterParams = (WrappedComponent: any) => (props: any) => {
  let [searchParams] = useSearchParams();
  let currentCategory = searchParams.get("category");
  return <WrappedComponent {...props} match={currentCategory} />
}

export default withRouterParams(CategoryList);
