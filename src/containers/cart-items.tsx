import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";

import { CartItemType, StyleItem } from '../types';
import { ProductCounter, AttributesContainer } from '../components';
import Gallery from './gallery';
import { updateAttributes, updateCount } from '../redux/slices/cart-slice';

type PropsTypes = {
  type: StyleItem,
  items: CartItemType[],
  updateAttributes: Function,
  updateCount: Function
}

class CartItems extends React.Component<PropsTypes> {
  handleUpdateAttributes = (event: any) => {
    this.props.updateAttributes(event)
  }

  handleCount = (action: {}) => {
    this.props.updateCount(action)
  }

  render() {
    return (
    <>
      {this.props.items.map((item: CartItemType, idx: number) => {
        const { product, selectedAttributes, count } = item;
        return (
          <Container key={idx}>
            <AttributesContainer
              isCart
              item={product}
              productIndex={idx}
              selectedAttributes={selectedAttributes}
              handleSelect={this.handleUpdateAttributes}
              type={this.props.type}
            />
            <GalleryPanel>
              <ProductCounter
                amount={count}
                handleCount={this.handleCount}
                productIndex={idx}
                type={this.props.type} />
              <Gallery
                images={product.gallery}
                hasMiniNav
                type={this.props.type} />
            </GalleryPanel>
            {this.props.items.length === 0 && <Empty>the cart is empty</Empty>}
          </Container>
        )})
      }
    </>
    )
  }
}

const mapStateToProps = (state: any) => ({
  items: state.cart.items
})

const mapDispatchToProps = { updateAttributes, updateCount };
export default connect(mapStateToProps, mapDispatchToProps)(CartItems);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 5px;
  padding-top: 5px;
  border-top: 1px solid #f1f1f1;
`
const GalleryPanel = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80%;
  justify-content: flex-end;
  align-self: center;
`
const Empty = styled.div`
  display: flex;
  justify-content: center;
`