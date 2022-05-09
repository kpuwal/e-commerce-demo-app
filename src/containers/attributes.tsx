import React from 'react';
import {Swatch, PriceDisplay} from '../components';
import styled from 'styled-components';

interface PropsTypes {
  attributes: any,
  prices: any
}

export default class Attributes extends React.Component<PropsTypes> {
  render() {
    const attributes = this.props.attributes;
    return (
      <div>
        {
          attributes.map((attr: any, idx: number) => {
            if (attr.type === 'text') {
              return (
                <div key={idx}>
                  <h3>{attr.name}</h3>
                  <Container>
                    {attr.items.map((item: any) => (
                      <Swatch key={item.id} color={'white'} item={item} />
                    ))}
                  </Container>
                </div>
              )
            }
            if (attr.type === 'swatch') {
              return (
                <div key={idx}>
                  <h3>{attr.name}</h3>
                  <Container>
                    {attr.items.map((item: any) => (
                      <Swatch key={item.id} color={item.value} item={item} />
                    ))}
                  </Container>
                </div>
              )
            }
            return null;
          })
        }
        <PriceDisplay prices={this.props.prices} />
      </div>
    )
  }
}

const Container = styled.div({
  display: 'flex', 
  flexDirection: 'row',
})
