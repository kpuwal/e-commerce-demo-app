import React, { Component } from 'react';
// import styled from 'styled-components';

interface PropsTypes {
  item: any;
  attr: any,
  color: string;
  handleSelect: any
}

export default class Swatch extends Component<PropsTypes> {

  render() {
    const item = this.props.item;
    console.log("from swatch ", this.props.item.isSelected)
    return (
      <div>
      <div style={{width: '40px', height: '40px', margin: '5%', padding: '1%', border: '1px solid black', fontSize: '10px', backgroundColor: `${this.props.color}`}} onClick={() => this.props.handleSelect(item.id)}>
        {item.displayValue}
      </div>
      </div>
    )
  }
}

// const Container = styled.div({
//   width: '40px',
//   height: '40px',
//   margin: '5%',
//   padding: '1%', 
//   border: '1px solid black', 
//   fontSize: '10px', 
//   // backgroundColor: (props) => `${props.color}`
// })
