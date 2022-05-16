import React from 'react';
import styled from 'styled-components';
import { Images, MiniNav, ImageNav } from '../components'

type PropsTypes = { images: string[], isMini: boolean };
type StateTypes = { opacity: number, idx: number };

export default class Gallery extends React.Component<PropsTypes, StateTypes> {
  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      opacity: 1,
      idx: 0,
  }}

  handleSelect = (idx: number) => {
    this.setState({ opacity: 1, idx });
  }

  handleNext(){
    const imgLength = this.props.images.length;
    this.setState({ opacity: 1, idx: (this.state.idx + 1)  % imgLength });
  }

  handlePrev(){
    let index = this.state.idx;
    if(index <= 0) {index = this.props.images.length}
    this.setState({ opacity: 1, idx: index - 1});
  }

  render() {
    const { images, isMini } = this.props;
    const { idx: stateIndex, opacity: stateOpacity } = this.state;
    return (
      <GalleryContainer>
        {isMini 
          ? <MiniNav
              handleNext={() => this.handleNext()}
              handlePrev={() => this.handlePrev()} />
          : <ImageNav handleSelect={this.handleSelect} {...{images}} />
        }
        <Images {...{images, stateIndex, stateOpacity, isMini}} />
      </GalleryContainer>
    )
  }
}

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width:  35%;
  position: relative;
`
