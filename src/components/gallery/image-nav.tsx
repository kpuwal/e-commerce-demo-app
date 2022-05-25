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
          <Wrapper key={idx} onClick={() => handleSelect(idx)}>
            <Image image={image} />
          </Wrapper>) }
      </ImageNavContainer>
    )
  }
}

const ImageNavContainer = styled.div`
  height: 450px;
  align-items: center;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 16px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0,0,0,.3);
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
    border: solid 6px white;
  }
`
const Wrapper = styled.a`
  cursor: pointer;
`
const Image = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 0 7px 0;
  background-image: ${(props: {image: string}) => `url(${props.image})`};
  background-size: cover;
`