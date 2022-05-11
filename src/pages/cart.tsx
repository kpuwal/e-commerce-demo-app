import React from 'react';
import { connect } from "react-redux";
import AttributeList from '../containers/attribute-list';
import PriceDisplay from '../components/price-display';
import { updateAttributes, updateCount } from '../redux/slices/cart-slice';
import ProductCounter from '../containers/product-counter';
import { widths } from '../styles';
import Gallery from '../containers/gallery';

interface PropsTypes {
  items: any,
  quantity: number,
  totalPrice: any,
  tax: any,
  updateAttributes: Function,
  updateCount: Function
}

class Cart extends React.Component<PropsTypes> {
  handleUpdateAttributes = (e: any) => {
    this.props.updateAttributes(e)
  }

  handleCount = (action: {}) => {
    this.props.updateCount(action)
  }

  render() {
    return (
      <div>
        {this.props.items.map((item: any, idx: number) => {
          return (
            <div key={idx} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: `${widths.regularPageWidth}px`,}}>
              <div>
              <h3>{item.product.name}</h3>
              <p>{item.product.brand}</p>
              
              <AttributeList
                productIndex={idx}
                attributes={item.product.attributes}
                selectedAttributes={item.selectedAttributes}
                handleSelect={this.handleUpdateAttributes}
                prices={item.product.prices} />
              <PriceDisplay prices={item.product.prices} />
              </div>
              <div>
              <ProductCounter isVertical={true} amount={item.count} handleCount={this.handleCount} productIndex={idx} />
              <Gallery images={item.product.gallery} isMini={true} />
              </div>
              
            </div>
          )
        })}
        <hr/>
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

const mapDispatchToProps = { updateAttributes, updateCount };
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
