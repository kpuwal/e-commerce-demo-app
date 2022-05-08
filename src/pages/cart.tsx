import React from 'react';
import { connect } from "react-redux";
import Attributes from '../containers/attributes';

interface PropsTypes {
  items: any,
}

class Cart extends React.Component<PropsTypes> {
  render() {
    return (
      <div>
        {this.props.items.map((item: any, idx: number) => {
          return (
            <div key={idx}>
              <h3>{item.product.name}</h3>
              <p>{item.product.brand}</p>
              <Attributes
                attributes={item.product.attributes}
                prices={item.product.prices} />
                <hr/>
            </div>
          )
        })}
        {this.props.items.length === 0 && <>nothing to see here, keep on shopping</>}
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  items: state.cart.items
})

export default connect(mapStateToProps)(Cart);
