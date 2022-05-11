import React, { Component } from 'react'

type PropsTypes = {
  text: string
}

export default class Message extends Component<PropsTypes> {
  componentDidUpdate(){
    setTimeout(() => this.setState({message:''}), 3000);
  }
  render() {
    return (
      <div>Message</div>
    )
  }
}
