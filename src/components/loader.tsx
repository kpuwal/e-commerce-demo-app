import React from 'react';
import styled from 'styled-components';

export default class Loader extends React.Component {
  render() {
    return <LoaderContainer><p>Loading...</p></LoaderContainer>
  }
}

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
