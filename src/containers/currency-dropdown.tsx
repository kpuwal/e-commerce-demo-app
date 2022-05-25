import React from 'react';
import styled from 'styled-components';

import { QueryGraphQL } from '../graphql/queries';
import { CurrencyType } from '../types';
import { connect } from "react-redux";
import { changeCurrency } from '../redux/slices/currency-slice';
import ArrowUpIcon from '../assets/collapse-arrow.png';
import ArrowDownIcon from '../assets/expand-arrow.png';

type StateTypes = {
  currencies: CurrencyType[],
  isListOpen: boolean,
  isLoading: boolean,
  currentSymbol: string
}

class CurrencyDropdown extends React.Component<any, StateTypes> {
  constructor(props: any) {
    super(props);
    this.state = {
      currencies: [],
      isListOpen: false,
      isLoading: true,
      currentSymbol: ''
    }
  }

  async componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(){
    const { isListOpen } = this.state;
  
    setTimeout(() => {
      if(isListOpen){
        window.addEventListener('click', this.onClickOutsideHandler)
      }
      else{
        window.removeEventListener('click', this.onClickOutsideHandler)
      }
    }, 0)
  }

  onClickOutsideHandler = () => {
    this.setState({ isListOpen: false });
  }

  handleSelectCurrency(current: {label: string, symbol: string}) {
    this.props.changeCurrency(current.label);
    this.setState({currentSymbol: current.symbol, isLoading: false})
  }

  toggleList() {
    this.setState(prevState => ({
      isListOpen: !prevState.isListOpen
   }))
  }

  async fetchData() {
    try {const result = (await QueryGraphQL.getCurrencies()) as CurrencyType[];
    this.setState({currencies: result, currentSymbol: result[0].symbol});
  } catch (err) { console.log(err)}
  }

  render() {
    const currencies = this.state.currencies;
    return (
      <>
      {this.state.isLoading && <div>
        <Button onClick={() => this.toggleList()}>
          {this.state.currentSymbol}
          {this.state.isListOpen
            ? <CaretIcon src={ArrowUpIcon} alt="caret up" />
            : <CaretIcon src={ArrowDownIcon} alt="caret down" /> }
        </Button>
        {this.state.isListOpen && 
          <SelectorContainer>
            {currencies.map((currency) =>
              <SelectorButton
                key={currency.label}
                role="listitem"
                onClick={() => this.handleSelectCurrency(currency)}>
                {currency.symbol} {currency.label}
              </SelectorButton>)
            }
          </SelectorContainer>
        }
      </div>}
      </>
    )
  }
}

const mapDispatchToProps = { changeCurrency };
export default connect(null, mapDispatchToProps)(CurrencyDropdown);

const SelectorContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100px;
  z-index: 1000;
  margin: 5px 0 0 -20px;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
`
const CaretIcon = styled.img`
  width: 14px;
  height: 14px;
` 
const Button = styled.button`
  font-size: 16px;
  background: white;
  border: 0px solid white;
`
const SelectorButton = styled.button`
  border: 0px;
  width: 100px;
  height: 30px;
  padding: 5px;
  text-align: left;
  padding-left: 25px;
  background-Color: white;
  &:hover {
    background-color: #f1f1f1;
  }
`
