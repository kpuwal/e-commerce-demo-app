import React from 'react';
import styled from 'styled-components';
import { ItemsType, valuesTypes } from '../../types';

type PropsTypes = {
  isChecked: boolean,
  item: ItemsType,
  values: valuesTypes,
  styleType: any,
  handleSelect: Function
}

export default class SwatchColor extends React.Component<PropsTypes> {
  render() {
    const {handleSelect, values, item, styleType, isChecked} = this.props;
    return (
      <ColorSwatch
        disabled={this.props.styleType.isCart}
        onClick={() => handleSelect(values)}
        bg={item.value}
        swatchStyle={styleType}
        isChecked={isChecked} />
    )
  }
}

type StyledProps = {isChecked: boolean, disabled: boolean, bg?: string, swatchStyle?: {colorSizeBorder: string, isCart: boolean, colorPad: string} };

const ColorSwatch = styled.button`
  cursor: ${(props: StyledProps) => props.disabled ? 'default' : 'pointer'};
  width: ${(props: StyledProps) => props.swatchStyle?.colorSizeBorder};
  height: ${(props: StyledProps) => props.swatchStyle?.colorSizeBorder};
  margin: ${(props: StyledProps) => props.swatchStyle?.colorPad};
  background-color: ${(props: StyledProps) => props.bg};
  border: ${(props: StyledProps) => props.bg === '#FFFFFF' ? `1px solid black` : `1px solid ${props.bg}`};
  outline: ${(props: StyledProps) => props.isChecked ? (`${props.bg}` === '#FFFFFF' ? '1px solid black' : `1px solid ${props.bg}`) : '1px solid white'};
  outline-offset: 2px;
`