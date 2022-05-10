import React, { Component } from 'react'
import styled from 'styled-components';

type PropsTypes = {
  items: any,
  name: string,
  handleSelect: any,
  selectedAttr: any
}

export default class SwatchRow extends Component<PropsTypes> {
  render() {
    return (
      <div >
        {this.props.items.map((item: any) => {
          const checked = Object.keys(this.props.selectedAttr).length !== 0 &&
          this.props.selectedAttr[this.props.name] === item.id;
          return (
            <Container key={item.id} onClick={() => this.props.handleSelect({name: this.props.name, value: item.id})} style={{

              backgroundColor: checked ? 'pink': 'white',
              color: checked ? 'white' : 'black',
            }}>{item.displayValue}</Container>
          )
        })}
      </div>
    )
  }
}


const Container = styled.div({
  width: '40px',
  height: '40px',
  margin: '5%',
  padding: '1%', 
  border: '1px solid black', 
  fontSize: '10px',
  
  // display: 'none'
  // backgroundColor: 'white'
})