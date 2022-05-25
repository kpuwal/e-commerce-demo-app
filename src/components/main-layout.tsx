import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {  MiniCart } from './';
import { Outlet } from 'react-router-dom';
import Header from '../containers/header';

import CartOverlay from '../components/cart-overlay';

type PropsTypes = {
  isMiniCartOpen: boolean
}

class MainLayout extends React.Component<PropsTypes> {
  render () {
    return (
      <React.Fragment>
        <Header />
        <PageContainer>
          {/* {this.props.isMiniCartOpen && <MiniCart />} */}
          <CartOverlay show={this.props.isMiniCartOpen}/>
          <Outlet />
        </PageContainer>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: any) => ({
  isMiniCartOpen: state.cart.isMiniCartOpen,
})

export default connect(mapStateToProps)(MainLayout)

const PageContainer = styled.div`
  padding: 7%;
  margin: 0;
`
