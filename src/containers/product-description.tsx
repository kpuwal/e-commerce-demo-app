import React from 'react';
import styled from 'styled-components';
import { ProductType } from '../types';

import { Gallery, InfoDisplay, PriceDisplay } from '../components';
import Attributes from '../containers/attributes';

interface PropsTypes {
  product: ProductType,
}

export default class ProductDescription extends React.Component<PropsTypes> {
  handleAddToCart(product: ProductType) {
    console.log("product from PDP ", product)
  }

  render() {
    const product = this.props.product;
    return (
      <Container>
        <Gallery 
          images={product.gallery} 
          descr={product.name}
        />
        <AttributesContainer>
          <h3>{product.name}</h3>
          <h4>{product.brand}</h4>
          <Attributes 
            attributes={product.attributes}
            prices={product.prices} 
          />
          <div style={{padding: 20, margin: 10, backgroundColor: 'lightgreen'}} onClick={() => this.handleAddToCart(product)}>Add To Cart</div>
          <PriceDisplay prices={product.prices} />
          <InfoDisplay descr={product.description} />
        </AttributesContainer>
      </Container>
    )
  }
}

const Container = styled.div({
  display: 'flex', 
  flexDirection: 'row'
})

const AttributesContainer = styled.div({
  position: 'relative',
  float: 'right',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  width: '300px'
})
