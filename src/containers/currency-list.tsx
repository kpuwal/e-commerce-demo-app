import React from 'react';
import { QueryGraphQL } from '../operations/queries';
import { CurrencyType } from '../types';
import { connect } from "react-redux";
import { changeCurrency } from '../redux/slices/currency-slice';

interface StateTypes {
  currencies: CurrencyType[],
}

class CurrencyList extends React.Component<any, StateTypes> {
  constructor(props: any) {
    super(props);
    this.state = {
      currencies: [],
    }
  }
  componentDidMount() {
    this.fetchData();
  }

  handleCurrencyChange(current: string) {
    this.props.changeCurrency(current)
  }

  async fetchData() {
    const result = (await QueryGraphQL.getCurrencies()) as CurrencyType[];
    this.setState({currencies: result});
  }

  render() {
    const currencies = this.state.currencies;
    return (
      <div>
        <ul>
        {currencies.map((currency) => 
          <li key={currency.label}>
            <div onClick={() => this.handleCurrencyChange(currency.label)}>
              {currency.label}- {currency.symbol}
            </div>
          </li>)
        }
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = { changeCurrency };


export default connect(null, mapDispatchToProps)(CurrencyList);