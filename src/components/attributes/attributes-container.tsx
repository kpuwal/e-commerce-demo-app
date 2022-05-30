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
      <Container size={type.attrContainerSize}>
        <Header pad={type.attrHeaderPadding}>
          <Title font={type.attributeBrand}>{brand}</Title>
          <Title font={type.attributeName}>{name}</Title>
        </Header>
        {isCart && <PriceDisplay {...{prices, type}} />}
        <AttributesContent
          handleSelect={this.props.handleSelect}
          {...{attributes, selectedAttributes, prices, productIndex, type}} />
        {!this.props.isCart &&
          <>
            <PriceLabel>PRICE:</PriceLabel>
            <PriceDisplay {...{prices, type}} />
          </>
        }
      </Container>
    )
  }
}

type StyledTypes = { size?: string, font?: {fontSize: string, fontWeight: number}, pad?: string };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props: StyledTypes) => props.size};
`
const Header = styled.div`
  padding: ${(props: StyledTypes) => props.pad} 0;
`
const Title = styled.div`
  font-size: ${(props: StyledTypes) => props.font?.fontSize};
  font-weight: ${(props: StyledTypes) => props.font?.fontWeight};
  padding: 8px 0;
`
const PriceLabel = styled.div`
  font-family: Roboto Condensed;
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 8px;
`