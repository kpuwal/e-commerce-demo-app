import React from 'react';
import styled from 'styled-components';
import { CartItemType } from '../../types';
import {ProductCounter, AttributesContainer} from '../';
import Gallery from '../../containers/gallery';

type PropsTypes = {
  item: CartItemType,
  idx: number,
  handleSelect: Function,
  handleCount: Function
}

export default class Item extends React.Component<PropsTypes> {
  render() {
    const { product, selectedAttributes, count } = this.props.item;
    return (
      <Container>
        <AttributesContainer
          isCart={true}
          item={product}
          productIndex={this.props.idx}
          selectedAttributes={selectedAttributes}
          handleSelect={this.props.handleSelect}
        />
        <GalleryPanel>
          <ProductCounter
            amount={count}
            handleCount={this.props.handleCount}
            productIndex={this.props.idx} />
          <Gallery images={product.gallery} isMini={true} />
        </GalleryPanel>
      </Container>
    )
  }
}

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