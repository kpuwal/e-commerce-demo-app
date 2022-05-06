import React, { Component } from 'react';
import {Swatch} from '../components';

interface PropsTypes {
  attributes: any
}

export default class Attributes extends Component<PropsTypes> {
  render() {
    const attributes = this.props.attributes;
    console.log(this.props.attributes)
    return (
      <div>
        {
          attributes.map((attr: any, idx: number) => {
            if (attr.type === 'text') {
              return (
                <div key={idx}>
                  <h3>{attr.name}</h3>
                  <div style={{display: 'flex', flexDirection: 'row'}}>
                    {attr.items.map((item: any, idx: number) => (
                      <Swatch key={idx} color={'white'} displayValue={item.value} />
                    ))}
                  </div>
                </div>
              )
            }
            if (attr.type === 'swatch') {
              return (
                <div key={idx}>
                  <h3>{attr.name}</h3>
                  <div style={{display: 'flex', flexDirection: 'row'}}>
                    {attr.items.map((item: any, idx: number) => (
                      <Swatch key={idx} color={item.value} displayValue={item.displayValue} />
                    ))}
                  </div>
                </div>
              )
            }
            return null;
          })
        }
      </div>
    )
  }
}