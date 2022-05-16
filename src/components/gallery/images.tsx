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
      <div>
        {images.map((image, idx) => {
          const opacity = stateIndex === idx ? stateOpacity : 0;
          return <Image key={idx} img={image} {...{opacity, isMini}} />})}
      </div>
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
  width: ${(props: StyledProps) => props.isMini ? '14rem' : '25rem'};
  height: ${(props: StyledProps) => props.isMini ? '14rem' : '388px'};
  position: absolute;
  margin-left: ${(props: StyledProps) => props.isMini ? 0 : '8em'};
  background-size: cover;
  background-repeat: no-repeat;
`