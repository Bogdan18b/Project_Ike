import React from 'react';
import { Link } from 'react-router-dom';
import BusinessIndexItem from './business_index_item';
import BusinessTypeContainer from './business_type_container';
import GreetingContainer from '../greeting/greeting_business_container';

class BusinessIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllBusinesses();
  }

  render() {
    debugger
    if (this.props.businesses === undefined) {
      return <p>coming soon</p>;
    }
    const businesses = this.props.businesses.map(business =>
    <BusinessIndexItem key={business.id} business={business} />)
    return (
      <div>
        <div className="ike-business-show-header">
          <Link to="/"><img id="logo-pic-business-index" src="https://s3.amazonaws.com/project-zebra-dev/logo.png"/></Link>
          <input className="ike-business-div-search"type="text" placeholder="search coming soon..." />
          <GreetingContainer />
        </div>
        <div className="ike-business-show-header-nav">
          <BusinessTypeContainer />
        </div>

        <ul>
          {businesses}
        </ul>

        <div className="ike-business-index-map">
        </div>

      </div>
    )
  }
}

export default BusinessIndex;
