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
  margin-bottom: 30px;
  padding: 10px 0;
`
const ColorSwatchContainer = styled.div`
  width: 30px;
  hight: 30px;
  justify-content: center;
  align-items: center;
  margin: 4px;
  border: ${(props: StyledProps) => props.isChecked ? `1px solid ${props.bg}` : '1px solid white'};
`
const ColorSwatch = styled.div`
  width: 26px;
  height: 26px;
  margin: 2px;
  background-color: ${(props: StyledProps) => props.bg};
`
const TextSwatch = styled.div`
  width: 60px;
  height: 40px;
  margin: 5px;
  border: 1px solid black;
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
  font-size: 200;
  background-color: ${(props: StyledProps) => props.isChecked ? 'black' : 'white'};
  color: ${(props: StyledProps) => props.isChecked ? 'white' : 'black'};
`