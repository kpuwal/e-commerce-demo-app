import React from 'react';
import styled from 'styled-components';
import { ItemsType, valuesTypes } from '../../types';
import { SwatchColor } from '..';

type PropsTypes = {
  items: ItemsType[],
  selectedAttributes: { [key: string]: string},
  name: string,
  type: string,
  styleType: any,
  handleSelect: Function,
  productIndex?: number
}

export default class SwatchRow extends React.Component<PropsTypes> {
  render() {
    const {selectedAttributes, handleSelect, productIndex, name} = this.props;
    return (
      <Container>
        {this.props.items.map((item: ItemsType) => {
          const {id, value} = item;
          const isChecked = Object.keys(selectedAttributes).length !== 0 && selectedAttributes[name] === id;
          const values = {
            name: name,
            value: id,
            idx: productIndex
          } as valuesTypes;
          
          return (
            <React.Fragment key={item.id}>
              {this.props.type === 'swatch'
                ? <SwatchColor
                  key={id}
                  handleSelect={this.props.handleSelect}
                  styleType={this.props.styleType}
                  {...{item, values, isChecked}}
                  />
                : <TextSwatch
                  key={id}
                  onClick={() => handleSelect(values)}
                  swatchStyle={this.props.styleType}
                  {...{isChecked}}>
                    {value}
                </TextSwatch>
              }
            </React.Fragment>
            )
          })
        }
      </Container>
    )
  }
}

type StyledProps = {isChecked: boolean, bg?: string, swatchStyle?: {textSizeW: string, textSizeH: string, textPad: string, textFont: string}};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`
const TextSwatch = styled.button`
  width:  ${(props: StyledProps) => props.swatchStyle?.textSizeW};
  height:  ${(props: StyledProps) => props.swatchStyle?.textSizeH};
  margin: 0 ${(props: StyledProps) => props.swatchStyle?.textPad} 12px 0;
  border: 1px solid black;
  text-align: center;
  vertical-align: middle;
  line-height: ${(props: StyledProps) => props.swatchStyle?.textFont};
  font-size:  ${(props: StyledProps) => props.swatchStyle?.textFont};
  background-color: ${(props: StyledProps) => props.isChecked ? 'black' : 'white'};
  color: ${(props: StyledProps) => props.isChecked ? 'white' : 'black'};
`