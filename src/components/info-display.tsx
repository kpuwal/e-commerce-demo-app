import React, { Component } from 'react';
import parse from 'html-react-parser';

interface PropsTypes {
  descr: string
}

export default class InfoDisplay extends Component<PropsTypes> {
  render() {
    return (
      <div style={{width: '300px', fontSize: '15px', fontFamily: 'Roboto', paddingTop: '30px'}}>
        {parse(this.props.descr)}
      </div>
    )
  }
}
