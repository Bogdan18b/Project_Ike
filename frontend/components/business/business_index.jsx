import React from 'react';
import BusinessIndexItem from './business_index_item';

class BusinessIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllBusinesses();
  }

  render() {
    if (this.props.businesses === undefined) {
      return <p>coming soon</p>;
    }
    return (
      this.props.businesses.map(business =>
      <BusinessIndexItem key={business.id} business={business} />)
    )
  }
}

export default BusinessIndex;
