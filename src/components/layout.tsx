import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {  Overlay } from '../components';
import { Outlet } from 'react-router-dom';
import Header from '../containers/header';

type PropsTypes = {
  isMiniCartOn: boolean
}

class Layout extends React.Component<PropsTypes> {
  
  render () {
    return (
      <React.Fragment>
        <Header />
        <PageContainer>
          {this.props.isMiniCartOn && <Overlay />}
          <Outlet />
        </PageContainer>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: any) => ({
  isMiniCartOn: state.cart.isMiniOn,
})

export default connect(mapStateToProps)(Layout)

const PageContainer = styled.div`
// width: 100%;
padding: 7%;
margin: 0;
`
