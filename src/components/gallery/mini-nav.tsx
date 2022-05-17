import React from 'react';
import styled from 'styled-components';
import NextIcon from '../../assets/chevron-next.png';
import PrevIcon from '../../assets/chevron-prev.png';

type PropsTypes = {
  handleNext: Function,
  handlePrev: Function
}

export default class MiniNav extends React.Component<PropsTypes> {
  render() {
    return (
      <MiniNavContainer>
        <Nav onClick={() => this.props.handlePrev()}>
          <img src={PrevIcon} alt='prev icon' />
        </Nav>
        <Nav onClick={() => this.props.handleNext()}>
          <img src={NextIcon} alt='next icon' />
        </Nav>
      </MiniNavContainer> 
    )
  }
}

const MiniNavContainer = styled.div`
  right: 10%;
  top: 90%;
  position: absolute;
  display: flex;
  flex-direction: row;
  z-index: 2000;
`
const Nav = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  margin: .1rem;
  background-color: #1f1f1f;
  justify-content: center;
  align-items: center;
`