import React from 'react';
import styled from 'styled-components';
import Gallery from '../../containers/gallery';
import { ProductCounter } from '../';

type PropsTypes = {
  count: number,
  idx: number,
  gallery: string[],
  handleCount: Function
}

export default class GalleryPanel extends React.Component<PropsTypes> {
  render() {
    return (
      <RightPanel>
        <ProductCounter
          amount={this.props.count}
          handleCount={this.props.handleCount}
          productIndex={this.props.idx} />
        <Gallery images={this.props.gallery} isMini={true} />
      </RightPanel>
    )
  }
}

const RightPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
