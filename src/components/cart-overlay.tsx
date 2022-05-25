import React from 'react';
import styled from 'styled-components';
import { showMiniCart } from '../redux/slices/cart-slice';
import { connect } from "react-redux";

type PropsTypes = {
  show: boolean,
  showMiniCart: Function
}
// type StateProps = { isOpen: boolean }

class CartOverlay extends React.Component<PropsTypes> {
  private toggleContainer: React.RefObject<HTMLDivElement>;

  constructor(props: PropsTypes) {
    super(props);
    // this.state = { isOpen: false };
    this.toggleContainer = React.createRef();
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
   
        window.removeEventListener('click', this.onClickOutsideHandler)
 
  }

  onClickOutsideHandler(event: any) {
      if (this.props.show && this.toggleContainer.current?.contains(event.target)) {

        this.props.showMiniCart();
        console.log('closed!')
      }
  }

  render() {
    if (!this.props.show) { return null }
    return (
      <>
        <ModalBg ref={this.toggleContainer} />
        <Container>container</Container>
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
`
const Container = styled.div`
  width: 500px;
  height: 300px;
  background-color: white;
  position: absolute;
`