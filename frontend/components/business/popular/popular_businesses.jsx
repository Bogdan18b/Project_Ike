import React, { Component, Fragment } from 'react';
import PopularBusiness from './business';

class PopularBusinesses extends Component {
  render() {
    return (
      <Fragment>
        <h1 id="ike-popular-businesses">Hot and New Businesses</h1>
        <div className="ike-popular-businesses">
          {this.props.businesses && this.props.businesses.map(bus => (
            <PopularBusiness key={bus.id} business={bus} />
          ))}
        </div>
      </Fragment>
    )
  }
}

export default PopularBusinesses;
