import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { AttributesContainer, CartSummary, ProductCounter } from '../components';
import { updateAttributes, updateCount } from '../redux/slices/cart-slice';
import { PriceType } from '../types';
import Gallery from '../containers/gallery';

type PropsTypes = {
  items: any,
  quantity: number,
  totalPrice: PriceType[],
  tax: PriceType[],
  updateAttributes: Function,
  updateCount: Function
}

type StateTypes = { isLoading: boolean };

class Cart extends React.Component<PropsTypes, StateTypes> {
  handleUpdateAttributes = (event: any) => {
    this.props.updateAttributes(event)
  }

  handleCount = (action: {}) => {
    this.props.updateCount(action)
  }

  render() {
    return (
      <div>
        {this.props.items.map((item: any, idx: number) => { 
          return (
            <Container key={idx}>
              <AttributesContainer
                isCart={true}
                item={item.product}
                productIndex={idx}
                selectedAttributes={item.selectedAttributes}
                handleSelect={this.handleUpdateAttributes} />
                <GalleryPanel>
                  <ProductCounter
                    amount={item.count}
                    handleCount={this.handleCount}
                    productIndex={idx} />
                  <Gallery images={item.product.gallery} isMini={true} />
                </GalleryPanel>
            </Container>
          )
        })}
        <SummaryLine />
        {this.props.items.length !== 0 && 
          <CartSummary
            tax={this.props.tax}
            totalPrice={this.props.totalPrice}
            quantity={this.props.quantity} />
        }
        {this.props.items.length === 0 && <Empty>the cart is empty</Empty>}
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
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f1f1f1;
`
const SummaryLine = styled.hr`
  border: 1px solid #f1f1f1;
`
const Empty = styled.div`
  display: flex;
  justify-content: center;
`
const GalleryPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`