import React from 'react';
import styled from 'styled-components';
import { showMiniCart } from '../redux/slices/cart-slice';
import { connect } from "react-redux";

type PropsTypes = {
  show: boolean,
  showMiniCart: Function
}

class CartOverlay extends React.Component<PropsTypes> {


  render() {
    if (!this.props.show) { return null }
    return (
      <>
        <ModalBg onClick={() => this.props.showMiniCart()} />
        <Container onClick={(e: any) => e.stopPropagation()}>
          container
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = { showMiniCart };

export default connect(null, mapDispatchToProps, null, {forwardRef: true})(CartOverlay);

const ModalBg = styled.div`
  display: flex;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 6000;
`
const Container = styled.div`
  width: 500px;
  height: 300px;
  background-color: white;
  position: absolute;
  z-index: 7000;
`