// needs loader
import React from 'react';

interface PropsTypes {
  images: string[],
  descr: string
}

interface StateTypes {
  selectedImage: string,
  isLoading: boolean,
  opacity: number
}

export default class Gallery extends React.Component<PropsTypes, StateTypes> {
  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      selectedImage: this.props.images[0],
      isLoading: true,
      opacity: 1,
  }}

  handleSelect(image: string) {
    this.setState({ selectedImage: image});
    this.setState({ opacity: 0});
  }

  render() {
    const images = this.props.images;
    return (
      <React.Fragment>
        <div style={{display: 'flex', flexDirection: 'row', width: '400px'}}>
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
        <div style={{position: 'relative'}}>
        <div style={{position: 'absolute'}}>
          <img src={this.props.images[0]} alt={this.props.descr} style={{width: '200px', objectFit: 'fill', position:  'absolute', opacity: `${this.state.opacity}`}} />
          <img src={this.state.selectedImage} alt={this.props.descr} style={{width: '200px', objectFit: 'fill', position:  'relative'}} />
        </div>
        </div>
        </div>
      </React.Fragment>
    )
  }
}
