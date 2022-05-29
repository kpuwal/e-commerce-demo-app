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
      <Container
        swatchStyle={styleType}
        bg={item.value}
        isChecked={isChecked}
      >
        {/* <Tooltip>{this.props.item.displayValue}</Tooltip> */}
        <ColorSwatch
          onClick={() => handleSelect(values)}
          bg={item.value}
          isChecked={isChecked} />
      </Container>
    )
  }
}

type StyledProps = {isChecked: boolean, bg?: string, swatchStyle?: {colorSizeBorder: string, isCart: boolean, colorPad: string} };

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
const Container = styled.div`
  // position: relative;
  display: flex;
  width: ${(props: StyledProps) => props.swatchStyle?.colorSizeBorder};
  height: ${(props: StyledProps) => props.swatchStyle?.colorSizeBorder};
  padding: 0;
  justify-content: center;
  // align-items: center;
  margin-right: ${(props: StyledProps) => props.swatchStyle?.colorPad};
  border: ${(props: StyledProps) => props.isChecked ? (`${props.bg}` === '#FFFFFF' ? '1px solid black' : `1px solid ${props.bg}`) : '1px solid white'};
  background-color:  white;
  // &:hover ${Tooltip} {
  //   visibility: visible;
  // }
`
const ColorSwatch = styled.div`
  width: ${(props: StyledProps) => props.swatchStyle?.isCart ? '0px' : '26px'};
  height: ${(props: StyledProps) => props.swatchStyle?.isCart ? '0px' : '26px'};
  margin: 0;
  cursor: pointer;
  background-color: ${(props: StyledProps) => props.bg};
  border: ${(props: StyledProps) => props.bg === '#FFFFFF' ? `1px solid black` : `1px solid ${props.bg}`};
`