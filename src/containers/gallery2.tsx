// needs loader
import React from 'react';

interface PropsTypes {
  images: string[],
  isMini: boolean
}

interface StateTypes {
  selectedImage: string,
  isLoading: boolean,
  display: string,
  idx: number
}

export default class Gallery extends React.Component<PropsTypes, StateTypes> {
  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      selectedImage: this.props.images[0],
      isLoading: true,
      display: 'flex',
      idx: 0,
  }}

  handleSelect(idx: number) {
    console.group(idx)
    this.setState({ display: 'flex'});
  }

  handleNext(){
    this.setState({ display: 'flex', idx: (this.state.idx + 1)  % this.props.images.length });
  }

  handlePrev(){
    let index = this.state.idx;
    if(index <= 0) {index = this.props.images.length}
    this.setState({ display: 'flex', idx: index - 1});
  }
  render() {
    const images = this.props.images;
    return (
      <div>
        <div style={{display: 'flex', height: '300px', position: 'relative', marginLeft: 0}}>
          {images.map((image, idx) => 
            <div
              key={idx}
              onClick={() => this.handleSelect(idx)}
              style={{width: '100px', height: '100px', position: 'absolute'}}>
              <img
                src={image}
                alt={'description'}
                style={{position: 'absolute', width: '100px', objectFit: 'fill', display: this.state.idx === idx ? `${this.state.display}` : 'none'}} />
            </div>
            
          )}
          <div style={{position: 'absolute'}}>
          <div onClick={() => this.handleNext()}>next</div>
        <div onClick={() => this.handlePrev()}>prev</div>
        </div>
        </div>
        
      </div>
    )
  }
}
