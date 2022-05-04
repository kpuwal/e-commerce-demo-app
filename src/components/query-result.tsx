import React from 'react';
import styled from 'styled-components'

interface QueryResultProps {
  loading: boolean;
  error: string;
  data: any;
  children: any;
}

class QueryResult extends React.Component<QueryResultProps> {
  render () {
    if (this.props.error) {
      return <p>ERROR: {this.props.error}</p>;
    }
    if (this.props.loading) {
      return (
        <SpinnerContainer>
          <p>Loading...</p>
        </SpinnerContainer>
      );
    }
    if (!this.props.data) {
      return <p>Nothing to show...</p>;
    }
    if (this.props.data) {
      return this.props.children;
    }
  }
}

export default QueryResult;

const SpinnerContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
});
