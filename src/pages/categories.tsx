import React from 'react';
import styled from 'styled-components';
import { widths, unit } from '../styles';

class Categories extends React.Component {
  render () {
    return (
    <React.Fragment>
      <PageContainer>
        <div>categories</div>
        <div>categories</div>
        <div>categories</div>
      </PageContainer>
    </React.Fragment>

    )
  }
}

export default Categories;

const PageContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignSelf: 'center',
  flexGrow: 1,
  maxWidth: `${widths.regularPageWidth}px`,
  width: '100%',
  padding: 0,
  paddingBottom: `${unit} * 5`,
})