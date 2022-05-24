import React from 'react';
import styled from 'styled-components';
import { AttributesType, PriceType, StyleItem } from '../../types';
import { SwatchRow } from '..';

type PropsTypes = {
  attributes: AttributesType[],
  prices: PriceType[],
  type: StyleItem,
  selectedAttributes: {},
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
      <div>
        {attributes.map((attribute: AttributesType, idx: number) => {
          return (
            <div key={idx}>
              <NameLabel>
                {type.useCaps ? (attribute.name).toLocaleUpperCase() : (attribute.name)}:
              </NameLabel>
              <SwatchRow
                items={attribute.items}
                name={attribute.name}
                type={attribute.type} 
                {...{selectedAttributes, handleSelect, productIndex}}
              />
           </div>)})
        }
      </div>
    )
  }
}

const NameLabel = styled.div`
  font-family: Roboto Condensed;
  font-size: 18px;
  font-weight: 700;
`
