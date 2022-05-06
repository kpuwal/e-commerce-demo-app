// needs loader
import React from 'react';

interface PropsTypes {
  images: string[],
  descr: string
}

interface StateTypes {
  selectedImage: string,
  isLoading: boolean
}

export default class Gallery extends React.Component<PropsTypes, StateTypes> {
  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      selectedImage: this.props.images[0],
      isLoading: true
  }}

  handleSelect(image: string) {
    this.setState({ selectedImage: image});
  }

  render() {
    const images = this.props.images;
    return (
      <React.Fragment>
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <div>
          {images.map((image, idx) => 
            <div
              key={idx} 
              onMouseEnter={() => this.handleSelect(image)}
              style={{width: '100px', height: '100px'}}>
              <img
                src={image}
                alt={this.props.descr}
                style={{width: '100px', objectFit: 'fill'}} />
            </div>
          )}
        </div>
        <div>
          <img src={this.state.selectedImage} alt={this.props.descr} style={{width: '200px', objectFit: 'fill'}} />
        </div>
        </div>
      </React.Fragment>
    )
  }
}
