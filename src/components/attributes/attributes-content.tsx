import React from 'react';
import styled from 'styled-components';
import { AttributesType, PriceType, StyleItem, SelectedAttributesType } from '../../types';
import { SwatchRow } from '..';

type PropsTypes = {
  attributes: AttributesType[],
  prices: PriceType[],
  type: StyleItem,
  selectedAttributes: SelectedAttributesType<string>,
  handleSelect: Function,
  productIndex?: number
}

export default class AttributesContent extends React.Component<PropsTypes> {
  render() {
    const {
      attributes,
      selectedAttributes,
      handleSelect,
      productIndex,
      type
    } = this.props;
    return (
      <Container>
        {attributes.map((attribute: AttributesType, idx: number) => {
          return (
            <div key={idx}>
              <NameLabel font={type.attrLabel}>
                {attribute.name}:
              </NameLabel>
              <SwatchRow
                items={attribute.items}
                name={attribute.name}
                type={attribute.type}
                styleType={type.attrSwatch}
                {...{selectedAttributes, handleSelect, productIndex}}
              />
           </div>)})
        }
      </Container>
    )
  }
}

type StyledTypes = {font: {textTransform: string, fontSize: string, fontWeight: number}}

const Container = styled.div`
  padding: 30px 0 20px 0;
`
const NameLabel = styled.div`
  font-family: Roboto Condensed;
  font-size: ${(props: StyledTypes) => props.font.fontSize};
  font-weight: ${(props: StyledTypes) => props.font.fontWeight};
  text-transform: ${(props: StyledTypes) => props.font.textTransform};
  padding-bottom: 8px;
`
