import React from 'react';
import styled from 'styled-components';
import { PriceDisplay, AttributeList } from '../'

type PropsTypes = {
  item: any,
  productIndex: number,
  handleSelect: Function
}

export default class AttributesPanel extends React.Component<PropsTypes> {
  render() {
    const productIndex = this.props.productIndex;
    const {selectedAttributes} = this.props.item;
    const {attributes, prices, name, brand} = this.props.item.product; 
    return (
      <Container>
        <h2>{name}</h2>
        <h4 style={{fontWeight: 200}}>{brand}</h4>
        <PriceDisplay {...{prices}} />
        <AttributeList
          handleSelect={this.props.handleSelect}
          {...{attributes, selectedAttributes, prices, productIndex}} />
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column; 
  width: 30%;
`