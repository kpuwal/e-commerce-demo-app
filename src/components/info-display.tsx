import React, { Component } from 'react';
import parse from 'html-react-parser';

interface PropsTypes {
  descr: string
}

export default class InfoDisplay extends Component<PropsTypes> {
  render() {
    return (
      <div style={{width: '200px', fontSize: '11px', paddingTop: '30px'}}>
        {parse(this.props.descr)}
      </div>
    )
  }
}
