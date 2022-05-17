import React from 'react';
import styled from 'styled-components';

type PropsTypes = {
  images: string[],
  stateIndex: number,
  stateOpacity: number,
  isMini: boolean
}

export default class Images extends React.Component<PropsTypes> {
  render() {
    const { images, stateIndex, stateOpacity, isMini } = this.props;
    return (
      <>
        {images.map((image, idx) => {
          const opacity = stateIndex === idx ? stateOpacity : 0;
          return (
              <Image key={idx} img={image} {...{opacity, isMini}} /> 
          )})
        }
      </>
    )
  }
}

type StyledProps = {
  img: string,
  opacity: number,
  isMini: boolean
}

const Image = styled.div`
  background-image: ${(props: StyledProps) => `url(${props.img})`};
  opacity: ${(props: StyledProps) => props.opacity};
  width: ${(props: StyledProps) => props.isMini ? '60%' : '90%'};
  height: 100%;
  margin-left: ${(props: StyledProps) => props.isMini ? '40%' : '30%'};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: ${(props: StyledProps) => props.isMini ? 'bottom right' : 'top'};
  position: absolute;
`