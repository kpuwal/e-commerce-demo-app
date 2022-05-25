import React from 'react';
import styled from 'styled-components';

type PropsType = {
  white?: boolean,
  isMini?: boolean,
  value?: any,
  label: string,
  disabled?: boolean,
  onButtonClick: Function
}

export default class Button extends React.Component<PropsType> {
  handleClick = () => {
    this.props.onButtonClick(this.props.value)
  }

  render() {
    const {white, isMini, label, disabled} = this.props;
    return (
      <CartButton
        color={white ? '#FFFFFF' : '#5ECE7B'}
        white={white}
        mini={isMini}
        disabled={disabled || false}
        onClick={this.handleClick}
      >
        <Label
          color={white ? '#000000' : '#FFFFFF'}
          mini={isMini}>
          {(label).toUpperCase()}
        </Label>
      </CartButton>
    )
  }
}

type StyledProps = {
  color: string,
  disabled?: boolean,
  mini?: boolean,
  white?: boolean
}

const CartButton = styled.button`
  position: relative;
  overflow: hidden;
  transition: background 400ms;
  color: #FFFFFF;
  padding: 1rem 0rem;
  font-size: 1.5rem;
  outline: 0;
  border: ${(props: StyledProps) => props.white ? '1px solid black' : 0};
  box-shadow: ${(props: StyledProps) => props.disabled ? '0 0 0 rgba(0, 0, 0, 0)' : '0 0 0.5rem rgba(0, 0, 0, 0.15)'};
  cursor: pointer;
  background-color: ${(props: StyledProps) => props.disabled ? '#f1f1f1' : props.color};
  width: ${(props: StyledProps) => props.mini ? '150px' : '300px'};
  &:active {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
`
const Label = styled.div`
  color: ${(props: StyledProps) => props.color};
  padding: 0;
  margin: 0;
  font-size: ${(props: StyledProps) => props.mini ? '0.6em' : '0.9em'};
  width: 100%;
`