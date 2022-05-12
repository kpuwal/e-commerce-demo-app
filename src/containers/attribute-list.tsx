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

interface StyledProps {isChecked: boolean}

export default class AttributeList extends React.Component<PropsTypes> {
  render() {
    const {attributes, selectedAttributes, handleSelect, productIndex} = this.props;
    return (
      <div>
        {attributes.map((attr: any, idx: number) => {
          return (
          <div key={idx}>
            <h3>{attr.name}</h3>
            <SwatchRow>
              {attr.items.map((item: any) => {
                const isChecked = Object.keys(selectedAttributes).length !== 0 && selectedAttributes[attr.name] === item.id;
                const values = {
                  name: attr.name, 
                  value: item.id, 
                  idx: productIndex }
                return (
                  <Swatch
                    key={item.id}
                    onClick={() => handleSelect(values)}
                    {...{isChecked}}>
                      {item.displayValue}
                  </Swatch>)})
              }
            </SwatchRow>
          </div>)})
        }
      </div>
    )
  }
}

const SwatchRow = styled.div({
  display: 'flex',
  flexDirection: 'row'
})

const Swatch = styled.div((props: StyledProps) => ({
  width: '40px',
  height: '40px',
  // margin: '5%',
  // padding: '1%', 
  border: '1px solid black',
  alignText: 'center',
  justifyContent: 'center',
  fontSize: '10px',
  backgroundColor: props.isChecked ? 'black': 'white',
  color: props.isChecked ? 'white' : 'black'
}))
