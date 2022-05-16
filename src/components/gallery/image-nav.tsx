import React from 'react';
import styled from 'styled-components';

type PropsTypes = {
  images: string[],
  handleSelect: Function
}

export default class ImageNav extends React.Component<PropsTypes> {
  render() {
    const { images, handleSelect } = this.props;
    return (
      <ImageNavContainer>
        {images.map((image, idx) => 
          <div key={idx} onMouseEnter={() => handleSelect(idx)}>
            <Image image={image} />
          </div>) }
      </ImageNavContainer>
    )
  }
}

const ImageNavContainer = styled.div`
  height: 420px;
  align-items: center;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`
const Image = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 0 7px 0;
  background-image: ${(props: {image: string}) => `url(${props.image})`};
  background-size: cover;
`