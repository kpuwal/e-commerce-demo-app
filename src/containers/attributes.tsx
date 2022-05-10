import React from 'react';
// import { Swatch } from '../components';
import SwatchRow from '../components/swatch-row';

import { AttributesType, PriceType } from '../types';

interface PropsTypes {
  attributes: AttributesType[],
  prices: PriceType[],
  selectedAttributes: any,
  handleSelect: any,
  productIndex?: number,
}

export default class Attributes extends React.Component<PropsTypes> {
  render() {
    const attributes = this.props.attributes;
    return (
      <div>
        {attributes.map((attr: any, idx: number) => {
          return (
          <div key={idx}>
            <h3>{attr.name}</h3>
            <SwatchRow 
              items={attr.items} 
              name={attr.name}
              selectedAttr={this.props.selectedAttributes}
              handleSelect={this.props.handleSelect}
              productIndex={this.props.productIndex} />
          </div>)
          })
        }
      </div>
    )
  }
}

// const Container = styled.div({
//   display: 'flex', 
//   flexDirection: 'row',
// })
