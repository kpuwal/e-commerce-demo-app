import React from 'react';
import styled from 'styled-components';
import {ItemsType} from '../types';

type PropsTypes = {
  isChecked: boolean,
  item: ItemsType,
  name: string,
  productIndex?: number,
  handleSelect: Function
}

export default class SwatchColor extends React.Component<PropsTypes> {
  render() {
    const values = {
      name: this.props.name,
      value: this.props.item.id,
      idx: this.props.productIndex
    };
    return (
      <ColorSwatchContainer bg={this.props.item.value} isChecked={this.props.isChecked}>
        <Tooltip>{this.props.item.displayValue}</Tooltip>
        <ColorSwatch
          onClick={() => this.props.handleSelect(values)}
          bg={this.props.item.value}
          isChecked={this.props.isChecked} />
      </ColorSwatchContainer>
    )
  }
}

type StyledProps = {isChecked: boolean, bg?: string };

const Tooltip = styled.span`
  visibility: hidden;
  font-size: 14px;
  width: 60px;
  background-color: #1f1f1f;
  color: white;
  text-align: center;
  padding: 4px 0;
  border-radius: 3px;
  position: absolute;
  z-index: 1;
  bottom: 130%;
  left: 50%;
  margin-left: -30px;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  :: after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #1f1f1f transparent transparent transparent;
  }
`
const ColorSwatchContainer = styled.div`
  position: relative;
  width:  30px;
  height:  30px;
  justify-content: center;
  align-items: center;
  margin: 2px;
  border: ${(props: StyledProps) => props.isChecked ? (`${props.bg}` === '#FFFFFF' ? '1px solid black' : `1px solid ${props.bg}`) : '1px solid white'};
  &:hover ${Tooltip} {
    visibility: visible;
  }
`
const ColorSwatch = styled.div`
  width:  24px;
  height:  24px;
  margin: 2px;
  background-color: ${(props: StyledProps) => props.bg};
  border: ${(props: StyledProps) => props.bg === '#FFFFFF' ? `1px solid black` : `1px solid ${props.bg}`};
`