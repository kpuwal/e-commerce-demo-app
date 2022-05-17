import React from 'react';
import styled from 'styled-components';

type PropsTypes = {
  images: string[],
  stateIndex: number,
  stateOpacity: number,
  hasMiniNav: boolean
}

export default class Images extends React.Component<PropsTypes> {
  render() {
    const { images, stateIndex, stateOpacity, hasMiniNav } = this.props;
    return (
      <>
        {images.map((image, idx) => {
          const opacity = stateIndex === idx ? stateOpacity : 0;
          return (
              <Image key={idx} img={image} {...{opacity, hasMiniNav}} /> 
          )})
        }
      </>
    )
  }
}

type StyledProps = {
  img: string,
  opacity: number,
  hasMiniNav: boolean
}

const Image = styled.div`
  background-image: ${(props: StyledProps) => `url(${props.img})`};
  opacity: ${(props: StyledProps) => props.opacity};
  width: ${(props: StyledProps) => props.hasMiniNav ? '60%' : '90%'};
  height: 100%;
  margin-left: ${(props: StyledProps) => props.hasMiniNav ? '40%' : '30%'};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: ${(props: StyledProps) => props.hasMiniNav ? 'bottom right' : 'top'};
  position: absolute;
`