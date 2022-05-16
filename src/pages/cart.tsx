import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { Loader, PriceDisplay, ProductCounter } from '../components';
import { updateAttributes, updateCount } from '../redux/slices/cart-slice';
import Gallery from '../containers/gallery';
import AttributeList from '../components/attribute-list';


type PropsTypes = {
  items: any,
  quantity: number,
  totalPrice: any,
  tax: any,
  updateAttributes: Function,
  updateCount: Function
}

type StateTypes = { isLoading: boolean };

class Cart extends React.Component<PropsTypes, StateTypes> {
  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  handleUpdateAttributes = (e: any) => {
    this.props.updateAttributes(e)
  }

  handleCount = (action: {}) => {
    this.props.updateCount(action)
  }

  render() {
    return (
      <div>
        {this.props.items.map((item: any, idx: number) => {
          const {selectedAttributes,  count} = item;
          const {attributes, prices, gallery, name, brand} = item.product;      
          return (
            <Container key={idx}>
              <LeftPanel>
                <h2>{name}</h2>
                <h4 style={{fontWeight: 200}}>{brand}</h4>
                <PriceDisplay {...{prices}} />
                <AttributeList
                  productIndex={idx}
                  handleSelect={this.handleUpdateAttributes}
                  {...{attributes, selectedAttributes, prices}} />
              </LeftPanel>
              <RightPanel>
                <ProductCounter
                  amount={count}
                  handleCount={this.handleCount}
                  productIndex={idx} />
                <Gallery images={gallery} isMini={true} />
              </RightPanel>
            </Container>
          )
        })}
        <hr style={{border: '1px solid #f1f1f1'}}/>
        {this.props.items.length !== 0 && 
          <>
            <Inline>
              <Label>Tax 21%:</Label>
              <PriceDisplay prices={this.props.tax} />
            </Inline>
            <Inline>
              <Label>Quantity:</Label>
              <b>{this.props.quantity}</b>
            </Inline>
            <Inline>
              <Label>Total:</Label>
              <PriceDisplay prices={this.props.totalPrice} />
            </Inline>
            <CartButton >Place Order</CartButton>
          </>
        }
        {this.props.items.length === 0 && <>nothing to see here, keep on shopping</>}
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  items: state.cart.items,
  quantity: state.cart.quantity,
  totalPrice: state.cart.totalPrice,
  tax: state.cart.tax
})

const mapDispatchToProps = { updateAttributes, updateCount };
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f1f1f1;
`
const LeftPanel = styled.div`
  display: flex;
  flex-direction: column; 
  width: 30%;
`
const RightPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
const Inline = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`
const Label = styled.div`
  margin-right: 1rem;
`
const CartButton = styled.button`
  position: relative;
  overflow: hidden;
  transition: background 400ms;
  color: #fff;
  padding: 1rem 2rem;
  margin: 3rem 0 0 0;
  font-size: 1.5rem;
  outline: 0;
  border: 0;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
  background-color: #5ECE7B;
  width: 300px;
  &:active {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
`
