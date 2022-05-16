import React from 'react';
import styled from 'styled-components';
import { ItemsType } from '../types';

type PropsTypes = {
  items: ItemsType[],
  selectedAttributes: { [key: string]: string},
  name: string,
  type: string,
  handleSelect: Function,
  productIndex?: number
}

export default class Swatch extends React.Component<PropsTypes> {
  render() {
    const {selectedAttributes, handleSelect, productIndex, name} = this.props;
    return (
      <SwatchRow>
        {this.props.items.map((item: ItemsType) => {
          const { id, value } = item;
          const isChecked = Object.keys(selectedAttributes).length !== 0 && selectedAttributes[name] === id;
          const values = {
            name: name,
            value: id,
            idx: productIndex
          };
          return (
            <React.Fragment key={item.id}>
              {this.props.type === 'swatch'
                ? <ColorSwatchContainer bg={value} {...{isChecked}}>
                    <Tooltip>{item.displayValue}</Tooltip>
                    <ColorSwatch
                      key={id}
                      onClick={() => handleSelect(values)}
                      bg={value}
                      {...{isChecked}} />
                  </ColorSwatchContainer>
                : <TextSwatch
                  key={id}
                  onClick={() => handleSelect(values)}
                  {...{isChecked}}>
                    {value}
                </TextSwatch>
              }
            </React.Fragment>
            )
          })
        }
      </SwatchRow>
    )
  }
}

type StyledProps = {isChecked: boolean, bg?: string };

const SwatchRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  // padding: 10px 0;
  height: 3rem;
`
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

const TextSwatch = styled.div`
  width:  60px;
  height:  40px;
  margin: 5px;
  border: 1px solid black;
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
  font-size: 200;
  background-color: ${(props: StyledProps) => props.isChecked ? 'black' : 'white'};
  color: ${(props: StyledProps) => props.isChecked ? 'white' : 'black'};
`