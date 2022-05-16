import React from 'react';
import styled from 'styled-components';
import { ItemsType } from '../types';
import { SwatchColor } from './';

type PropsTypes = {
  items: ItemsType[],
  selectedAttributes: { [key: string]: string},
  name: string,
  type: string,
  handleSelect: Function,
  productIndex?: number
}

export default class SwatchRow extends React.Component<PropsTypes> {
  render() {
    const {selectedAttributes, handleSelect, productIndex, name} = this.props;
    return (
      <Container>
        {this.props.items.map((item: ItemsType) => {
          const { id, value } = item;
          const isChecked = Object.keys(selectedAttributes).length !== 0 && selectedAttributes[name] === id;
          const values = {
            name: name,
            value: id,
            idx: productIndex
          };
          return (
            <React.Fragment key={item.id}>
              {this.props.type === 'swatch'
                ? <SwatchColor
                  key={id}
                  handleSelect={this.props.handleSelect}
                  {...{item, values, isChecked}}
                  />
                : <TextSwatch
                  key={id}
                  onClick={() => handleSelect(values)}
                  {...{isChecked}}>
                    {value}
                </TextSwatch>
              }
            </React.Fragment>
            )
          })
        }
      </Container>
    )
  }
}

type StyledProps = {isChecked: boolean, bg?: string };

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  // padding: 10px 0;
  height: 3rem;
`
const TextSwatch = styled.div`
  width:  60px;
  height:  40px;
  margin: 5px;
  border: 1px solid black;
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
  font-size: 200;
  background-color: ${(props: StyledProps) => props.isChecked ? 'black' : 'white'};
  color: ${(props: StyledProps) => props.isChecked ? 'white' : 'black'};
`