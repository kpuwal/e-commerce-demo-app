import React from 'react';
// import { Swatch } from '../components';
import SwatchRow from '../components/swatch-row';

import { AttributesType, PriceType } from '../types';

interface PropsTypes {
  attributes: AttributesType[],
  prices: PriceType[]
}
interface StateTypes {
  selectedAttributes: any
}

export default class Attributes extends React.Component<PropsTypes, StateTypes> {
  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      selectedAttributes: {}
    };
  }

  handleChange = (e: any) => {
   const { name, value } = e;
    this.setState((prevState: any) => {
			const attributes = { ...prevState.selectedAttributes, [name]: value };
			return { selectedAttributes: attributes };
		});
  }

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
              selectedAttr={this.state.selectedAttributes}
              handleSelect={this.handleChange}/>
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
