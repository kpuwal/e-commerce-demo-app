import React from 'react';
import styled from 'styled-components';

interface PropsTypes { images: string[], isMini: boolean };
interface StateTypes { opacity: number, idx: number };

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
    const imgLength = this.props.images.length;
    this.setState({ opacity: 1, idx: (this.state.idx + 1)  % imgLength });
  }

  handlePrev(){
    let index = this.state.idx;
    if(index <= 0) {index = this.props.images.length}
    this.setState({ opacity: 1, idx: index - 1});
  }

  render() {
    const {images, isMini} = this.props;
    const { idx: stateIndex, opacity: stateOpacity } = this.state;
    return (
      <GalleryContainer>
        {images.map((image, idx) => {
          const opacity = stateIndex === idx ? stateOpacity : 0;
          return <Image key={idx} img={image} {...{opacity, isMini}} />})
        }
        {isMini 
          ? <MiniNavContainer>
              <div onClick={() => this.handleNext()}>next</div>
              <div onClick={() => this.handlePrev()}>prev</div>
            </MiniNavContainer> 
          : <>
            {images.map((image, idx) => 
              <div key={idx} onMouseEnter={() => this.handleSelect(idx)}>
                <ImageNav image={image} />
              </div>)}
            </>}
      </GalleryContainer>
    )
  }
}

type StyledProps = {
  img: string,
  opacity: number,
  isMini: boolean
}

const GalleryContainer = styled.div`
  width: 6em;
  position: relative;
`
const Image = styled.div`
  background-image: ${(props: StyledProps) => `url(${props.img})`};
  opacity: ${(props: StyledProps) => props.opacity};
  width: ${(props: StyledProps) => props.isMini ? '7em' : '377px'};
  height: ${(props: StyledProps) => props.isMini ? '7em' : '388px'};
  position: absolute;
  margin-left: 8em;
  background-size: cover;
`
const MiniNavContainer = styled.div`
  right: -6em;
  top: 6em;
  background-color: pink;
  position: absolute;
  display: flex;
  flexDirection: row;
`
const ImageNav = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 0 7px 0;
  background-image: ${(props: {image: string}) => `url(${props.image})`};
  background-size: cover;
`
