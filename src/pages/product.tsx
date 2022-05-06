import React from 'react';
import {
  useParams,
} from "react-router-dom";

interface PropsTypes {
  match: string;
}

const withRouterParams = (WrappedComponent: any) => (props: any) => {
  let { id } = useParams<"id">();
  return <WrappedComponent {...props} match={id} />
}

class Product extends React.Component<PropsTypes> {
  render () {
    console.log(this.props.match)
    return <div>product</div>
  }
}

export default withRouterParams(Product);
