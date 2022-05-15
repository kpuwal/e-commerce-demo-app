import React from 'react';
import styled from 'styled-components';
import NextIcon from '../assets/chevron-next.png';
import PrevIcon from '../assets/chevron-prev.png';


type PropsTypes = { images: string[], isMini: boolean };
type StateTypes = { opacity: number, idx: number };

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
    const { images, isMini } = this.props;
    const { idx: stateIndex, opacity: stateOpacity } = this.state;
    return (
      <GalleryContainer>
        {images.map((image, idx) => {
          const opacity = stateIndex === idx ? stateOpacity : 0;
          return <Image key={idx} img={image} {...{opacity, isMini}} />})
        }
        {isMini 
          ? <MiniNavContainer>
              <MiniNav onClick={() => this.handlePrev()}>
                <img src={PrevIcon} alt='prev icon' />
              </MiniNav>
              <MiniNav onClick={() => this.handleNext()}>
                <img src={NextIcon} alt='next icon' />
              </MiniNav>
            </MiniNavContainer> 
          : <ImageNavContainer>
            {images.map((image, idx) => 
              <div key={idx} onMouseEnter={() => this.handleSelect(idx)}>
                <ImageNav image={image} />
              </div>)}
            </ImageNavContainer>}
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
  width:  14rem; // 250px;
  // height: 30%;
  position: relative;
  // z-index: -10;
`
const Image = styled.div`
  background-image: ${(props: StyledProps) => `url(${props.img})`};
  opacity: ${(props: StyledProps) => props.opacity};
  width: ${(props: StyledProps) => props.isMini ? '14rem' : '25rem'};
  height: ${(props: StyledProps) => props.isMini ? '14rem' : '388px'};
  position: absolute;
  margin-left: ${(props: StyledProps) => props.isMini ? 0 : '8em'};
  background-size: cover;
  background-repeat: no-repeat;
`
const MiniNavContainer = styled.div`
  right: 10%;
  top: 90%;
  position: absolute;
  display: flex;
  flex-direction: row;
`
const MiniNav = styled.div`
  display: flex;
  width: 1rem;
  height: 1rem;
  margin: .1rem;
  background-color: #1f1f1f;
  justify-content: center;
  align-items: center;
`
const ImageNavContainer = styled.div`
  height: 420px;
  // background-color: pink;
  align-items: center;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`
const ImageNav = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 0 7px 0;
  background-image: ${(props: {image: string}) => `url(${props.image})`};
  background-size: cover;
`
