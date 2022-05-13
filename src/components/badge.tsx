import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

type PropsTypes = {
  quantity: number
}

class Badge extends React.Component<PropsTypes> {
  render() {
    return (
    <>
      {this.props.quantity !== 0 && <Container>{this.props.quantity}</Container>}
    </>
  )
  }
}

const mapStateToProps = (state: any) => ({
  quantity: state.cart.quantity
})

export default connect(mapStateToProps)(Badge);

const Container = styled.div`
  font-size: 15px;
  text-align: center;
  vertical-align: middle;
  line-height: 22px;
  width: 22px;
  height: 22px;
  border-radius: 22px;
  background-color: black;
  color: white;
  position: absolute;
  margin-left: 20px;
  margin-top: -5px;
`
