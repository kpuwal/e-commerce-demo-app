import React from 'react';
import styled from 'styled-components';
import { PriceDisplay, AttributesContent } from './'

type PropsTypes = {
  item: any,
  isCart: boolean,
  selectedAttributes: any,
  productIndex?: number,
  handleSelect: Function,
}

export default class AttributesContainer extends React.Component<PropsTypes> {
  render() {
    const productIndex = this.props.productIndex;
    const selectedAttributes = this.props.selectedAttributes;
    const {attributes, prices, name, brand} = this.props.item; 
    return (
      <Container>
        <h2>{name}</h2>
        <h4 style={{fontWeight: 200}}>{brand}</h4>
        {this.props.isCart && <PriceDisplay {...{prices}} />}
        <AttributesContent
          handleSelect={this.props.handleSelect}
          {...{attributes, selectedAttributes, prices, productIndex}} />
        {!this.props.isCart &&
          <>
            <h3 style={{fontFamily: 'Roboto'}}>PRICE</h3>
            <PriceDisplay prices={prices} />
          </>
        }
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column; 
  // width: 30%;
`