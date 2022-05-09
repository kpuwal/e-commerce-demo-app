import React from 'react';
import {useSearchParams, Link} from 'react-router-dom';
import { QueryGraphQL } from '../graphql/queries';

interface StateTypes {
  categories: string[]
}

interface PropsTypes {
  match: string;
}

class CategoriesLinks extends React.Component<PropsTypes, StateTypes> {
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
      <ul>
        {this.state.categories.map((name: string) => (
          <li key={name}>
            <Link to={`/?category=${name}`} style={{color: activeCategory === name ? "red" : "black"}}>
              {name}
            </Link>
          </li>
          ))
        }
      </ul>
    )
  }
}

const withRouterParams = (WrappedComponent: any) => (props: any) => {
  let [searchParams] = useSearchParams();
  let currentCategory = searchParams.get("category");
  return <WrappedComponent {...props} match={currentCategory} />
}

export default withRouterParams(CategoriesLinks);
