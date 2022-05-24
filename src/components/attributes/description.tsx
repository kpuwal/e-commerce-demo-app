import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

interface PropsTypes {
  descr: string
}

export default class Description extends React.Component<PropsTypes> {
  render() {
    return <Container>{parse(this.props.descr)}</Container>
  }
}

const Container = styled.div`
  width: 300px;
  font-weight: 400;
  font-size: 16px;
  font-family: Roboto;
  padding-top: 30px;
`
