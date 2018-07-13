import React from 'react';

class BusinessShow extends React.Component {


  componentDidMount() {
    this.props.requestBusiness(this.props.match.params.businessId);
  }

  render() {
    const business = this.props.business
    debugger
    if (business === undefined) {
      return <p>...coming soon</p>
    }
    return (
      <div>
          <div>
              <h1>{business.name}</h1>
              <h1>{business.businessType}</h1>
          </div>
          <h1>{business.rating}</h1>
          <img src={business.photos[0].photoURL} />
          <img src={business.photos[1].photoURL} />
          <img src={business.photos[2].photoURL} />
          <div>
            <p>{business.address}</p>
            <p>{business.phone}</p>
            <p>{business.website}</p>
          </div>
      </div>
    );
  }

}

export default BusinessShow;
