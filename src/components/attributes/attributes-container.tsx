import React from 'react';
import styled from 'styled-components';
import { PriceDisplay, AttributesContent } from '..'
import { CartProductType, StyleItem, SelectedAttributesType } from '../../types';

type PropsTypes = {
  item: CartProductType,
  isCart: boolean,
  type: StyleItem,
  selectedAttributes: SelectedAttributesType<string>,
  productIndex?: number,
  handleSelect: Function,
}

export default class AttributesContainer extends React.Component<PropsTypes> {
  render() {
    const {productIndex, selectedAttributes, isCart, type} = this.props;
    const {attributes, prices, name, brand} = this.props.item;
    return (
      <Container size={type.attrSize}>
        <Name font={type.h3.fontSize}>{name}</Name>
        <Brand font={type.h4.fontSize}>{brand}</Brand>
        { isCart && <PriceDisplay isBold {...{prices}} /> }
        <AttributesContent
          handleSelect={this.props.handleSelect}
          {...{attributes, selectedAttributes, prices, productIndex, type}}
        />
        {!this.props.isCart &&
          <>
            <PriceLabel>PRICE:</PriceLabel>
            <PriceDisplay prices={prices} isBold />
          </>
        }
      </Container>
    )
  }
}

type StyledTypes = { size?: string, font?: string };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props: StyledTypes) => props.size}; //  35%;
`
const Name = styled.div`
  font-size: ${(props: StyledTypes) => props.font};
`
const Brand = styled.div`
  font-size: ${(props: StyledTypes) => props.font};
  font-weight: 200;
  padding: .7em 0 1.5em 0;
`
const PriceLabel = styled.div`
  font-family: Roboto Condensed;
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 1rem;
`