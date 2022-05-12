import React from 'react';
import styled from 'styled-components';

interface PropsTypes { images: string[], isMini: boolean };
interface StateTypes { opacity: number, idx: number };
type StyledProps = { opacity: number, isMini: boolean };

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
        {images.map((image, idx) => {
          const opacity = this.state.idx === idx ? this.state.opacity : 0;
          return (
            <ImagesContainer key={idx}>
              <StackOfImages 
                src={image}
                alt={'description'}
                {...{opacity, isMini}} />
            </ImagesContainer>)})
        }
        {isMini 
          ? <MiniNavContainer>
              <div onClick={() => this.handleNext()}>next</div>
              <div onClick={() => this.handlePrev()}>prev</div>
            </MiniNavContainer> 
          : <>
            {images.map((image, idx) => 
              <div
                key={idx}
                onMouseEnter={() => this.handleSelect(idx)}>
                <ImageNav src={image} alt={'description'} />
              </div>)}
            </>}
      </GalleryContainer>
    )
  }
}

const GalleryContainer = styled.div({
  width: '6em',
  backgroundColor: 'green'
})

const ImagesContainer = styled.div({
  position: 'absolute',
  marginLeft: '8em'
})

const StackOfImages = styled.img((props: StyledProps) => ({
  opacity: props.opacity,
  width: props.isMini ? '7em' : '16em'
}))

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
