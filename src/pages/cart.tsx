import React from 'react';
import { connect } from "react-redux";

interface PropsTypes {
  items: any,
}

class Cart extends React.Component<PropsTypes> {
  render() {
    console.log(this.props.items)
    return (
      <div>cart</div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  items: state.cart.items
})

export default connect(mapStateToProps)(Cart);
