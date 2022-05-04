import React from 'react';
// import styled from 'styled-components'
import { Header } from '../components';
// import { unit } from '../styles';


const Layout = (InnerComponent: any) => class extends React.Component {
  render () {
    return (
    <React.Fragment>
      <Header />
      {/* <PageContainer> */}
        <InnerComponent />
      {/* </PageContainer> */}
    </React.Fragment>
    )
  }
}

export default Layout;

// const PageContainer = styled.div`
//   display: 'flex',
//   justifyContent: 'center,
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   alignSelf: 'center',
//   flexGrow: 1,
//   width: '100%',
//   padding: 0,
//   paddingBottom: ${unit} * 5,
// `
