import React, { Component } from 'react';

interface PropsTypes {
  displayValue: string;
  color: string;
}

export default class Swatch extends Component<PropsTypes> {
  render() {
    return (
      <div style={{width: '40px', height: '40px', margin: '5%', padding: '1%', border: '1px solid black', fontSize: '10px', backgroundColor: `${this.props.color}`}}>{this.props.displayValue}</div>
    )
  }
}
