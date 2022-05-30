import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { MiniCart, Modal } from './components';
import { Header } from './containers';

type PropsTypes = {
  isMiniCartOpen: boolean
}

class MainLayout extends React.Component<PropsTypes> {
  render () {
    return (
      <React.Fragment>
        <Header />
        <PageContainer>
          <Modal show={this.props.isMiniCartOpen}>
            <MiniCart />
          </Modal>
          <Outlet />
        </PageContainer>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: any) => ({
  isMiniCartOpen: state.cart.isMiniCartOpen,
})

export default connect(mapStateToProps)(MainLayout);

const PageContainer = styled.div`
  padding: 7%;
  margin: 0;
`
