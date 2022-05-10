import React from 'react';
import styled from 'styled-components';
import { AttributesType, PriceType } from '../types';

interface PropsTypes {
  attributes: AttributesType[],
  prices: PriceType[],
  selectedAttributes: any,
  handleSelect: any,
  productIndex?: number,
}

export default class AttributeList extends React.Component<PropsTypes> {
  render() {
    const {attributes, selectedAttributes, handleSelect} = this.props;
    return (
      <div>
        {attributes.map((attr: any, idx: number) => {
          return (
          <div key={idx}>
            <h3>{attr.name}</h3>
            <SwatchRow>
              {attr.items.map((item: any) => {
                const checked = Object.keys(selectedAttributes).length !== 0 && selectedAttributes[attr.name] === item.id;
                const values = {
                  name: attr.name, 
                  value: item.id, 
                  idx: this.props.productIndex
                }
                return (
                  <Swatch
                    key={item.id}
                    onClick={() => handleSelect(values)} 
                    style={{backgroundColor: checked ? 'pink': 'white', color: checked ? 'white' : 'black'}}>
                      {item.displayValue}
                  </Swatch>
                )
              })}
            </SwatchRow>
          </div>
          )
        })}
      </div>
    )
  }
}


const SwatchRow = styled.div({
  display: 'flex',
  flexDirection: 'row'
})

const Swatch = styled.div({
  width: '40px',
  height: '40px',
  margin: '5%',
  padding: '1%', 
  border: '1px solid black', 
  fontSize: '10px',
})
