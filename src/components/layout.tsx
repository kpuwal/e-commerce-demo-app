import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Header, Overlay } from '../components';
import { Outlet } from 'react-router-dom';

type PropsTypes = {
  isMiniOn: boolean
}

class Layout extends React.Component<PropsTypes> {
  
  render () {
    return (
      <React.Fragment>
        <Header />
        <PageContainer>
          {this.props.isMiniOn && <Overlay />}
          <Outlet />
        </PageContainer>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: any) => ({
  isMiniOn: state.cart.isMiniOn,
})

export default connect(mapStateToProps)(Layout)

const PageContainer = styled.div`
// width: 100%;
padding: 7%;
margin: 0;
`
