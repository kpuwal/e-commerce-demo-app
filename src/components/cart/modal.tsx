import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

type PropsTypes = {
  show: boolean,
  children: React.ReactNode
}

export default class Modal extends React.Component<PropsTypes> {
  el: Element;
  constructor(props: PropsTypes) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    if (this.props.show) {
     return ReactDOM.createPortal(
      this.props.children,
      this.el
    )} else {
      return null;
    };
  }
}
