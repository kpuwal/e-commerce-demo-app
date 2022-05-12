import React from 'react';
import styled from 'styled-components';
import { Header } from '../components';
import {Outlet} from 'react-router-dom';

class Layout extends React.Component {
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

export default Layout;

const PageContainer = styled.div({
  // display: 'flex',
  // justifyContent: 'center',
  // flexDirection: 'row',
  // flexWrap: 'wrap',
  // alignSelf: 'center',
  // flexGrow: 1,
  // maxWidth: `${widths.regularPageWidth}px`,
  width: '100%',
  padding: 0,
  backgroundColor: 'yellow',
  // flexWrap: 'wrap'
  // paddingBottom: `${unit} * 5`,
});
