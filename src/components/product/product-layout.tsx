import React from 'react';
import styled from 'styled-components';
import Gallery from '../../containers/gallery';
import { AttributesContainer, Description, Button } from '../';
import { ProductType } from '../../types';
import { styleType } from '../../styles';

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

type StyledProps = {disabled: boolean};

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
const CartButton = styled.button`
  position: relative;
  overflow: hidden;
  transition: background 400ms;
  color: #fff;
  padding: 1rem 2rem;
  // margin: 1rem 0 0 0;
  font-size: 1.5rem;
  outline: 0;
  border: 0;
  border-radius: 0.25rem;
  box-shadow: ${(props: StyledProps) => props.disabled ? '0 0 0 rgba(0, 0, 0, 0)' : '0 0 0.5rem rgba(0, 0, 0, 0.2)'};
  cursor: pointer;
  background-color: ${(props: StyledProps) => props.disabled ? '#f1f1f1' : '#5ECE7B'};
  width: 300px;
  &:active {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
`