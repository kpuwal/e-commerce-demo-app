import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { showMiniCart } from '../redux/slices/cart-slice';
import { styleType } from '../styles';
import { CartItemType, PriceType } from '../types';
import { PriceDisplay, Button } from '.';
import CartItems from '../containers/cart-items';

type PropsTypes = {
  items: CartItemType[],
  quantity: number,
  totalPrice: PriceType[],
  isMiniCartOpen: boolean,
  showMiniCart: Function
}

// type StateTypes = {
//   isOpen: boolean,
// }

class MiniCart extends React.Component<PropsTypes> {
  private toggleContainer: React.RefObject<HTMLDivElement>;

  constructor(props: PropsTypes) {
    super(props);
    // this.state = { isOpen: false };
    this.toggleContainer = React.createRef();
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }

  // componentDidMount() {
  //   window.addEventListener('click', this.onClickOutsideHandler);
  // }

  componentWillUnmount() {
    // window.removeEventListener('click', this.onClickOutsideHandler);
    // setTimeout(() => {
      if(this.props.isMiniCartOpen){
        window.addEventListener('click', this.onClickOutsideHandler)
      }
      else{
        window.removeEventListener('click', this.onClickOutsideHandler)
      }
    // }, 0)
  }

  // onClickHandler() {
  //   this.setState(currentState => ({
  //     isOpen: !currentState.isOpen
  //   }));
  // }

  onClickOutsideHandler(event: any) {
    console.log('current ', this.toggleContainer.current?.contains(event.target))
      if (this.props.isMiniCartOpen && !this.toggleContainer.current?.contains(event.target)) {
    console.log('click', this.props.isMiniCartOpen)

        this.props.showMiniCart();
      }
  }

  render() {
    const isSingularItem = (this.props.quantity === 1);
    return (
      <>
        <Container ref={this.toggleContainer}>
          <CartContainer >
            <div>
              <b>My Bag</b>, {this.props.quantity} {isSingularItem ? 'item' : 'items'}
            </div>
            <CartItems type={styleType.miniCart} />
            <SummaryLine />
            <PriceContainer>
              <b>Total:</b>
              <PriceDisplay prices={this.props.totalPrice} />
            </PriceContainer>
            <ButtonsContainer>
            <StyledLink to='/cart'>
              <Button
                isMini
                white
                label='view bag'
                onButtonClick={() => this.props.showMiniCart()}/>
            </StyledLink>
            <Button
             isMini
             label='place order'
             onButtonClick={() => alert('order placed')}
            />
            </ButtonsContainer>
          </CartContainer>
        </Container>
      </>
    )
  }
}

const mapStateToProps = (state: any) => ({
  items: state.cart.items,
  quantity: state.cart.quantity,
  totalPrice: state.cart.totalPrice,
  isMiniCartOpen: state.cart.isMiniCartOpen
})

const mapDispatchToProps = { showMiniCart };

export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(MiniCart);

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 5000;
  overflow-y: scroll;
`
const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  min-height: 100px;
  margin: 0 7% 7% 0;
  padding: 2%;
  float: right;
  background-color: white;
`
const ButtonsContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
marginTop: 1em;
`
const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em .5em 1em 0;
`
const SummaryLine = styled.hr`
  border: 1px solid #f1f1f1;
  width: 100%;
  margin: 2em 0 1em 0;
`
const StyledLink = styled(Link)`
  text-decoration: none;
`


{/* <CartContainer >
                <div>
                  <b>My Bag</b>, {this.props.quantity} {isSingularItem ? 'item' : 'items'}
                </div>
                <CartItems type={styleType.miniCart} />
                
              </CartContainer>
              <SummaryLine />
                <PriceContainer>
                  <b>Total:</b>
                  <PriceDisplay prices={this.props.totalPrice} />
                </PriceContainer>
                <ButtonsContainer>
                <StyledLink to='/cart'>
                  <Button
                    isMini
                    white
                    label='view bag'
                    onButtonClick={() => this.props.showMiniCart()}/>
                </StyledLink>
                <Button
                isMini
                label='place order'
                onButtonClick={() => alert('order placed')}
                />
                </ButtonsContainer> */}