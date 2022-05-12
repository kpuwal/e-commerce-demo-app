import React from 'react';
import styled from 'styled-components';
import { Header } from '../components';
import { Outlet } from 'react-router-dom';

export default class Layout extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <PageContainer>
          <Outlet />
        </PageContainer>
      </React.Fragment>
    )
  }
}

const PageContainer = styled.div`
width: 100%;
padding: 0;
`
