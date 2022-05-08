import React from 'react';
import { connect } from "react-redux";
import Attributes from '../containers/attributes';
import PriceDisplay from '../components/price-display';

interface PropsTypes {
  items: any,
  quantity: number,
  totalPrice: any,
  tax: any
}

class Cart extends React.Component<PropsTypes, PropsTypes> {
  render() {
    console.log("this is tax ", this.props.tax)
    return (
      <div>
        {this.props.items.map((item: any, idx: number) => {
          return (
            <div key={idx}>
              <h3>{item.product.name}</h3>
              <p>{item.product.brand}</p>
              <p>Count: {item.count}</p>
              <Attributes
                attributes={item.product.attributes}
                prices={item.product.prices} />
                <hr/>
            </div>
          )
        })}
        {this.props.items.length !== 0 && <>
          <div>Tax 21%: <PriceDisplay prices={this.props.tax} /></div>
          <p>Quantity: {this.props.quantity}</p>
          Total: <PriceDisplay prices={this.props.totalPrice} />
        </>}
        {this.props.items.length === 0 && <>nothing to see here, keep on shopping</>}
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  items: state.cart.items,
  quantity: state.cart.quantity,
  totalPrice: state.cart.totalPrice,
  tax: state.cart.tax
})

export default connect(mapStateToProps)(Cart);
