import React from 'react';
import {
  useParams,
} from "react-router-dom";
import { QueryGraphQL } from '../operations/queries';


interface PropsTypes {
  match: string;
}
interface StateTypes {
  product: string[];
}

const withRouterParams = (WrappedComponent: any) => (props: any) => {
  let { id } = useParams<"id">();
  return <WrappedComponent {...props} match={id} />
}

class Product extends React.Component<PropsTypes, StateTypes> {
  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      product: []
    }
  }

  componentDidMount() { this.fetchData() }


  async fetchData() {
    const result = await (QueryGraphQL.getProduct(this.props.match));
    console.log("result ", result)
    // this.setState({products: result.category.product});
  }

  render () {
    console.log(this.props.match)
    return <div>product</div>
  }
}

export default withRouterParams(Product);
