import React from 'react';
import styled from 'styled-components';
import Gallery from '../containers/gallery';
import { AttributesContainer, Description, Button } from '.';
import { ProductType } from '../types';
import { styleType } from '../styles';

type PropsTypes = {
  product: ProductType,
  selectedAttributes: {},
  isNotValidated: boolean,
  handleSelect: Function,
  handleAddToCart: Function
}

export default class ProductLayout extends React.Component<PropsTypes> {
  render() {
    const { gallery, description, inStock } = this.props.product;
    return (
      <Container>
        <Gallery 
          images={gallery}
          hasMiniNav={false}
          type={styleType.product}
        />
        <InfoContainer>
          <AttributesContainer
            type={styleType.product}
            isCart={false}
            item={this.props.product}
            selectedAttributes={this.props.selectedAttributes}
            handleSelect={this.props.handleSelect}
          />
          <Message>
            {this.props.isNotValidated && <>Select attributes</>}
          </Message>
          <Button
            disabled={!inStock}
            onButtonClick={() => this.props.handleAddToCart(this.props.product)}
            label="Add to Cart"
          />
          <Description descr={description} />
        </InfoContainer>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flexDirection: row;
  justify-content: space-between;
  align-self: center;
  width: 100%;
`
const InfoContainer = styled.div` 
  display: flex;
  flex-direction: column;
  margin-right: 100px;
`
const Message = styled.div`
  height: 3rem;
  padding-top: 1rem;
  font-size: 1.5rem;
  color: red;
`