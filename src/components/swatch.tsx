import React from 'react';
import styled from 'styled-components';
// import { connect } from "react-redux";
// import { selectAttributes } from '../redux/slices/attributes-slice';
// import { ItemsType } from '../types';

interface PropsTypes {
  items: any,
  name: string,
  selected: any
}

class Swatch extends React.Component<PropsTypes, any> {
  render() {
    const items = this.props.items;
    const name = this.props.name;
    return (
      <div style={{display: 'flex', flexDirection: 'row'}} >
        {items.map((item: any) => {
          const color = this.props.selected[name] === item.value ? '#5ECE7B' : 'white';
          return (
            <Container style={{backgroundColor: color}} key={item.id}>
              <input 
                type='radio' 
                value={item.value}
                name={name} />
                <label htmlFor={item.value}>{item.displayValue}</label>
                  
            </Container>
          )
        })}
      </div>
    )
  }
}

const Container = styled.div({
  width: '40px',
  height: '40px',
  margin: '5%',
  padding: '1%', 
  border: '1px solid black', 
  fontSize: '10px',
  
  // display: 'none'
  // backgroundColor: 'white'
})
// const Input = styled.input({
//   display: 'hide'
// })

export default (Swatch);
