import React from 'react'
import { connect } from 'react-redux';

interface PropsTypes {
  quantity: number
}

class Badge extends React.Component<PropsTypes> {
  render() {
    return (
      <div>{this.props.quantity}</div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  quantity: state.cart.quantity
})

export default connect(mapStateToProps)(Badge);
