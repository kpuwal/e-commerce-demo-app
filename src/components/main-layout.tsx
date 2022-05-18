import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {  MiniCart } from './';
import { Outlet } from 'react-router-dom';
import Header from '../containers/header';

type PropsTypes = {
  isMiniCartOn: boolean
}

class MainLayout extends React.Component<PropsTypes> {
  render () {
    return (
      <React.Fragment>
        <Header />
        <PageContainer>
          {this.props.isMiniCartOn && <MiniCart />}
          <Outlet />
        </PageContainer>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: any) => ({
  isMiniCartOn: state.cart.isMiniOn,
})

export default connect(mapStateToProps)(MainLayout)

const PageContainer = styled.div`
  padding: 7%;
  margin: 0;
`
