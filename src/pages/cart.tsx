import React from 'react';
import { connect } from "react-redux";
import AttributeList from '../containers/attribute-list';
import PriceDisplay from '../components/price-display';
import { updateAttributes } from '../redux/slices/cart-slice';
import ProductCounter from '../containers/product-counter';

interface PropsTypes {
  items: any,
  quantity: number,
  totalPrice: any,
  tax: any,
  updateAttributes: any
}

interface StateTypes {
  selectedAttributes: any,
}

class Cart extends React.Component<PropsTypes, StateTypes> {
  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      selectedAttributes: {}
    }
  }

  handleUpdateAttributes = (e: any) => {
    this.props.updateAttributes(e)
  }

  handleCount() {

  }

  render() {
    return (
      <div>
        {this.props.items.map((item: any, idx: number) => {
          return (
            <div key={idx}>
              <h3>{item.product.name}</h3>
              <p>{item.product.brand}</p>
              <AttributeList
                productIndex={idx}
                attributes={item.product.attributes}
                selectedAttributes={item.selectedAttributes}
                handleSelect={this.handleUpdateAttributes}
                prices={item.product.prices} />
              <PriceDisplay prices={item.product.prices} />
              <ProductCounter isVertical={false} amount={item.count} handleCount={this.handleCount} />
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

const mapDispatchToProps = { updateAttributes };
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
