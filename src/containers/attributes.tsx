import React from 'react';
import { Swatch } from '../components';
import styled from 'styled-components';

interface PropsTypes {
  attributes: any,
  prices: any
}

export default class Attributes extends React.Component<PropsTypes> {

  handleSelect(item: any) {
    console.log(item)
  }
  render() {
    console.log('attributes all ', this.props.attributes)
    const attributes = this.props.attributes;
    return (
      <div>
        {
          attributes.map((attr: any, idx: number) => {
            if (attr.type === 'text') {
              // console.log("ATTR ", attr)
              return (
                <div key={idx}>
                  <h3>{attr.name}</h3>
                  <Container>
                    {attr.items.map((item: any) => (
                     
                      <Swatch 
                        key={item.id} 
                        color={item.isSelected ? 'black' : 'white'} 
                        {...{item, attr}}
                        handleSelect={this.handleSelect}
                      />
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
                      <Swatch
                        key={item.id}
                        color={item.value} 
                        {...{item, attr}} 
                        handleSelect={this.handleSelect}
                      />
                    ))}
                  </Container>
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

const Container = styled.div({
  display: 'flex', 
  flexDirection: 'row',
})
