import React from 'react';
import { QueryGraphQL } from '../operations/queries';
import { CurrencyType } from '../types';

interface StateTypes {
  currencies: CurrencyType[],
}

export default class CurrencyList extends React.Component<any, StateTypes> {
  constructor(props: any) {
    super(props);
    this.state = {
      currencies: [],
    }
  }
  componentDidMount() {
    console.log('currency list?')
    this.fetchData();
  }

  async fetchData() {
    const result = (await QueryGraphQL.getCurrencies()) as CurrencyType[];
    console.log(result)
    this.setState({currencies: result});
  }

  render() {
    const currencies = this.state.currencies;
    return (
      <div>
        <ul>
        {currencies.map((currency) => 
          <li key={currency.label}>
            {currency.label}- {currency.symbol}
          </li>)
        }
        </ul>
      </div>
    )
  }
}
