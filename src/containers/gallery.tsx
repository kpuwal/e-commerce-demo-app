import React from 'react';
import styled from 'styled-components';

interface PropsTypes {
  images: string[],
  isMini: boolean
}

interface StateTypes {
  opacity: number,
  idx: number
}

export default class Gallery extends React.Component<PropsTypes, StateTypes> {
  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      opacity: 1,
      idx: 0,
  }}

  handleSelect(idx: number) {
    this.setState({ opacity: 1, idx });
  }

  handleNext(){
    this.setState({ opacity: 1, idx: (this.state.idx + 1)  % this.props.images.length });
  }

  handlePrev(){
    let index = this.state.idx;
    if(index <= 0) {index = this.props.images.length}
    this.setState({ opacity: 1, idx: index - 1});
  }

  render() {
    const {images, isMini} = this.props;
    return (
      <GalleryContainer style={{position: 'relative'}}>
        {images.map((image, idx) => 
          <ImagesContainer key={idx}>
            <img
              src={image}
              alt={'description'}
              style={{
                opacity: this.state.idx === idx ? `${this.state.opacity}` : 0,
                width: isMini ? '7em' : '12em'}} />
          </ImagesContainer>
        )}
        {isMini 
          ? <MiniNavContainer>
              <div onClick={() => this.handleNext()}>next</div>
              <div onClick={() => this.handlePrev()}>prev</div>
            </MiniNavContainer> 
          : <>
            {images.map((image, idx) => 
              <div key={idx} onMouseEnter={() => this.handleSelect(idx)}>
                <ImageNav src={image} alt={'description'} />
              </div>)}
            </>}
      </GalleryContainer>
    )
  }
}

const GalleryContainer = styled.div({
  width: '6em',
})

const ImagesContainer = styled.div({
  position: 'absolute',
  marginLeft: '4em'
})

const MiniNavContainer = styled.div({
  right: '-6em',
  top: '6em',
  backgroundColor: 'pink',
  position: 'absolute', 
  display: 'flex',
  flexDirection: 'row'
})

const ImageNav = styled.img({
  width: '3em',
  padding: '.1em 0 0 0',
})
